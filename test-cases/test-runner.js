const { chromium, firefox, webkit, devices } = require('playwright');

(async () => {
  const results = [];

  const testTargets = [
    { name: 'Desktop Chrome', browserType: chromium, device: null },
    { name: 'Desktop Firefox', browserType: firefox, device: null },
    { name: 'Desktop Safari', browserType: webkit, device: null },
    { name: 'Pixel 5', browserType: chromium, device: devices['Pixel 5'] },
    { name: 'Galaxy S9+', browserType: chromium, device: devices['Galaxy S9+'] },
    { name: 'iPhone 11', browserType: webkit, device: devices['iPhone 11'] },
    { name: 'iPhone 13', browserType: webkit, device: devices['iPhone 13'] },
    { name: 'iPad Pro 11', browserType: webkit, device: devices['iPad Pro 11'] },
  ];

  for (const target of testTargets) {
    let browser;
    let status = 'Success';
    let error = null;
    let modelLoadTime = 0;
    let averageFps = 0;

    console.log(`--- Testing on ${target.name} ---`);

    try {
        browser = await target.browserType.launch({ headless: false });
        const context = await browser.newContext(target.device ? { ...target.device } : {});
        const page = await context.newPage();

        // --- Measure Load Time ---
        let startTime;
        page.on('request', request => {
            if (request.url().endsWith('TEST2-optimized.glb')) {
                startTime = Date.now();
            }
        });
        const responsePromise = page.waitForResponse(response => response.url().endsWith('TEST2-optimized.glb'));
        await page.goto('http://localhost:3000/test/index.html');
        await responsePromise;
        modelLoadTime = Date.now() - startTime;
        console.log(`Model loaded in ${modelLoadTime} ms`);

        // --- Measure FPS during scroll ---
        console.log('Scrolling down and measuring FPS...');
        const fpsPromise = page.evaluate(() => {
            return new Promise((resolve) => {
                const frameTimes = [];
                let frameCount = 0;
                const duration = 2000; // Measure over 2 seconds
                const startTime = performance.now();

                function countFrames(now) {
                    frameCount++;
                    if (performance.now() - startTime < duration) {
                        requestAnimationFrame(countFrames);
                    } else {
                        const averageFps = frameCount / (duration / 1000);
                        resolve(Math.round(averageFps));
                    }
                }
                requestAnimationFrame(countFrames);
            });
        });

        // Scroll while FPS is being measured
        await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
        
        // Wait for FPS measurement to complete and get the result
        averageFps = await fpsPromise;
        console.log(`Average FPS during scroll: ${averageFps}`);

        // Wait for scroll to actually finish
        await page.waitForTimeout(2000);

        console.log('Scrolling up...');
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
        await page.waitForTimeout(2000);

    } catch (e) {
        status = 'Failure';
        error = e.message;
        console.error(`Test failed on ${target.name}:`, e);
    } finally {
        if (browser) {
            await browser.close();
        }
    }

    results.push({
        target: target.name, 
        loadTime: `${modelLoadTime} ms`,
        fps: averageFps,
        status: status,
        error: error
    });

    console.log(`--- Finished testing on ${target.name} ---`);
  }

  // --- Final Report ---
  console.log('\n\n--- Test Execution Summary ---');
  console.table(results.map(r => ({
      Target: r.target, 
      'Model Load Time': r.loadTime, 
      'Average FPS': r.fps,
      Status: r.status, 
      Error: r.error || 'None' 
    }))
  );

})();
