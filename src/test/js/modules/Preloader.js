import gsap from 'gsap';

const SVG_FRAME_PATHS = [
    'textures/preloader/Union.svg',
    'textures/preloader/Union (1).svg',
    'textures/preloader/Union (2).svg',
    'textures/preloader/Union (3).svg',
    'textures/preloader/Union (4).svg',
    'textures/preloader/Union (5).svg',
];

export class Preloader {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.error(`Preloader container not found: ${containerSelector}`);
            return;
        }
        this.frames = [];
        this.timeline = null;
    }

    async loadFrames() {
        const fetchPromises = SVG_FRAME_PATHS.map(path => 
            fetch(path).then(res => res.text())
        );
        this.frames = await Promise.all(fetchPromises);
    }

    initAnimation() {
        if (!this.container || this.frames.length === 0) return;

        this.container.innerHTML = ''; 
        this.container.style.position = 'relative'; 
        this.container.style.width = '158px';
        this.container.style.height = '131px';
        this.container.style.margin = '20px auto';

        const elements = this.frames.map((svgContent, index) => {
            const el = document.createElement('div');
            el.innerHTML = svgContent;
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.left = '0';
            // Scale down by 30% and promote to own rendering layer
            el.style.transform = 'scale(0.7) translateZ(0)';
            // Set opacity via style attribute for immediate effect
            el.style.opacity = index === 0 ? '1' : '0'; 
            this.container.appendChild(el);
            return el;
        });

        const frame = { current: 0 };
        const numFrames = elements.length;
        const frameDuration = 0.1;

        // Use a single tween on a dummy object, which is a robust way to handle sprite animations
        this.timeline = gsap.to(frame, {
            current: numFrames, // Animate to the number of frames
            duration: numFrames * frameDuration,
            ease: `steps(${numFrames})`, // Use steps to jump between frames
            repeat: -1,
            onUpdate: () => {
                const frameIndex = Math.floor(frame.current) % numFrames;
                elements.forEach((el, index) => {
                    // Directly manipulate style for performance and reliability
                    el.style.opacity = (index === frameIndex) ? '1' : '0';
                });
            }
        });
    }

    async start() {
        await this.loadFrames();
        this.initAnimation();
    }

    hide() {
        if (this.timeline) {
            this.timeline.kill(); // Stop the GSAP animation
        }
        if (this.container) {
            gsap.to(this.container, { 
                opacity: 0, 
                duration: 0.5, 
                onComplete: () => {
                    this.container.style.display = 'none';
                }
            });
        }
    }
}

export default Preloader;
