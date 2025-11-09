import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GUI } from 'lil-gui';

gsap.registerPlugin(ScrollTrigger);

import { CONFIG } from './config.js';
import {
    CurveManager,
    LightingManager,
    LogoManager,
    AssetLoader
} from './modules/index.js';

// --- Global-like variables ---
let curveManager;
let fallingCube; // Will be assigned once the asset loader is complete

// --- Raycaster for Mouse Hover ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const mousePosition = new THREE.Vector2();
let intersectedObject = null;
const tooltip = document.getElementById('tooltip');

// --- Scene Setup --- 
const scene = new THREE.Scene();
const logoManager = new LogoManager(scene);

// --- Pop-up --- 
const popupContainer = document.getElementById('popup-container');
const popupButton = document.getElementById('popup-button');

const loadingManager = new THREE.LoadingManager();
loadingManager.onLoad = function() {
    console.log('All models loaded via LoadingManager');
    popupButton.disabled = false;
};
popupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

// --- Reference Point Marker ---
const markerGeometry = new THREE.SphereGeometry(0.3, 16, 16);
const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, visible: false });
const referenceMarker = new THREE.Mesh(markerGeometry, markerMaterial);
referenceMarker.position.set(-10, 1.75, 5);
scene.add(referenceMarker);

// --- Camera and initial setup ---
const cameraOffset = CONFIG.CAMERA_OFFSET;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// --- Platform Setup ---
const platformGeometry = new THREE.PlaneGeometry(2, 2);
const platformMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
const platform = new THREE.Mesh(platformGeometry, platformMaterial);
platform.rotation.x = -Math.PI / 2;
platform.position.set(-16.2, 36.9, 5);
platform.receiveShadow = true;
scene.add(platform);

// --- GSAP Timeline ---
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    }
});

// --- Renderer Setup ---
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, logarithmicDepthBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);
renderer.outputColorSpace = THREE.SRGBColorSpace;

// --- Controls ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;

// --- GUI & Managers ---
const gui = new GUI();
const lightingManager = new LightingManager(scene, renderer, camera, gui);

// --- Collision Detection variables ---
let collisionDetected = false;
const cubeBoundingBox = new THREE.Box3();
const planeBoundingBox = new THREE.Box3();

// --- DOM Elements for Navigation ---
const navigationArrows = document.querySelector('.navigation-arrows');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// --- Event Listeners ---
rightArrow.addEventListener('click', () => {
    if (curveManager) curveManager.move('forward');
});
leftArrow.addEventListener('click', () => {
    if (curveManager) curveManager.move('backward');
});
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        if (curveManager) curveManager.move('backward');
    } else if (event.key === 'ArrowRight') {
        if (curveManager) curveManager.move('forward');
    }
});
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
});

// =================================================================
// NEW: ASSET LOADER AND APP START
// =================================================================

const assetLoader = new AssetLoader(scene, loadingManager, logoManager);

assetLoader.loadAll().then(assets => {
    console.log('All assets loaded via AssetLoader!', assets);
    fallingCube = assets.fallingCube; // Assign to the global-like variable

    // 1. Setup initial camera position
    const modelWorldPosition = new THREE.Vector3();
    assets.fallingCube.getWorldPosition(modelWorldPosition);
    camera.position.copy(modelWorldPosition.clone().add(cameraOffset));
    camera.lookAt(modelWorldPosition);

    // 2. Setup GSAP animation for the falling cube
    tl.to(assets.fallingCube.position, { x: `+=${CONFIG.CUBE_SLIDE_DISTANCE}`, ease: "power1.in", duration: CONFIG.CUBE_SLIDE_DURATION });
    tl.to(assets.fallingCube.position, { x: `+=${CONFIG.CUBE_FALL_X_OFFSET}`, ease: "none" }, ">");
    tl.to(assets.fallingCube.position, { y: `-=${CONFIG.CUBE_FALL_DISTANCE}`, ease: "power1.in" }, "<");
    tl.to(assets.fallingCube.rotation, { x: CONFIG.CUBE_ROTATION_X, z: CONFIG.CUBE_ROTATION_Z, ease: "power1.inOut" }, "<");

    // 3. Start the main animation loop
    startAnimation(assets);
});

// --- Animation Loop ---
function startAnimation(assets) {
    const clock = new THREE.Clock();
    const landingPlane = assets.landingPlane;

    function animate() {
        requestAnimationFrame(animate);

        // --- Raycasting for Tooltip ---
        if (assets.model) {
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(assets.model, true);
            if (intersects.length > 0) {
                let objectToShow = intersects[0].object;
                let objectName = '';
                while (objectToShow && !objectName) {
                    if (objectToShow.name && objectToShow.name.trim() !== '' && objectToShow.name.trim() !== 'Scene') {
                        objectName = objectToShow.name;
                    }
                    objectToShow = objectToShow.parent;
                }
                if (objectName) {
                    intersectedObject = intersects[0].object;
                    tooltip.style.display = 'block';
                    tooltip.textContent = objectName;
                    tooltip.style.left = (mousePosition.x + 10) + 'px';
                    tooltip.style.top = (mousePosition.y + 10) + 'px';
                } else {
                    tooltip.style.display = 'none';
                    intersectedObject = null;
                }
            } else {
                if (intersectedObject) {
                    tooltip.style.display = 'none';
                }
                intersectedObject = null;
            }
        }

        if (curveManager) { curveManager.updateVisualsInLoop(); }

        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        // Update animations from assets
        if (assets.mixer) assets.mixer.update(delta);
        if (assets.islandMixer) assets.islandMixer.update(delta);
        if (assets.ferrisWheelAction && assets.ferrisWheelMixer) {
            assets.ferrisWheelAction.time = elapsedTime % assets.ferrisWheelAction.getClip().duration;
            assets.ferrisWheelMixer.update(0);
        }

        if (logoManager) {
            logoManager.update(camera);
        }

        // Water and boat logic from assets
        if (assets.water) {
            assets.water.update(elapsedTime);
            if (assets.boat) {
                const boatPosition = new THREE.Vector3();
                assets.boat.getWorldPosition(boatPosition);
                const waterHeight = assets.water.getHeightAt(boatPosition.x, boatPosition.z);
                const targetBoatY = waterHeight + 0.1;
                assets.boat.position.y = THREE.MathUtils.lerp(assets.boat.position.y, targetBoatY, 0.1);
            }
        }

        // Collision logic from assets
        if (landingPlane && fallingCube && !collisionDetected) {
            cubeBoundingBox.setFromObject(fallingCube);
            planeBoundingBox.setFromObject(landingPlane);

            if (cubeBoundingBox.intersectsBox(planeBoundingBox)) {
                console.log('>>> Куб торкнувся Plane005! Керування стрілками активовано.');
                collisionDetected = true;
                tl.kill();

                if (navigationArrows) navigationArrows.style.display = 'flex';
                
                curveManager = new CurveManager(scene, gui, camera, controls, fallingCube);
                const hardcodedStartPoint = curveManager.config.segments[0].p0;
                fallingCube.position.copy(hardcodedStartPoint);

                const firstCurve = new THREE.CubicBezierCurve3(
                    curveManager.config.segments[0].p0,
                    curveManager.config.segments[0].h0,
                    curveManager.config.segments[0].h1,
                    curveManager.config.segments[0].p1
                );
                const tangent = firstCurve.getTangentAt(0);
                const lookAtPosition = new THREE.Vector3().addVectors(hardcodedStartPoint, tangent);
                
                fallingCube.rotation.set(0, 0, 0);
                fallingCube.lookAt(lookAtPosition);
                fallingCube.rotation.y += Math.PI / 2;

                curveManager.createVisuals();
                curveManager.setupGUI();

                const targetCameraPosition = fallingCube.position.clone().add(cameraOffset);
                camera.position.copy(targetCameraPosition);
                camera.lookAt(fallingCube.position);
            }
        }

        if (!collisionDetected && fallingCube) {
            const cubeWorldPosition = new THREE.Vector3();
            fallingCube.getWorldPosition(cubeWorldPosition);
            const targetCameraPosition = cubeWorldPosition.clone().add(cameraOffset);
            camera.position.lerp(targetCameraPosition, CONFIG.CAMERA_FOLLOW_SPEED);
            camera.lookAt(cubeWorldPosition);
        }

        renderer.render(scene, camera);
    }

    animate(); // Start the loop
}
