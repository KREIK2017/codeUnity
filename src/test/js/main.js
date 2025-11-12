// --- Core Three.js and Third-Party Libraries ---
import * as THREE from 'three'; // Core Three.js library for 3D graphics
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Camera controls for orbiting around a target
import gsap from 'gsap'; // Animation library for JavaScript
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // GSAP plugin for scroll-based animations
import { GUI } from 'lil-gui'; // Lightweight GUI for debugging and development

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- Project-Specific Configuration and Modules ---
import { CONFIG } from './config.js'; // Global configuration settings for the application
import {
    CurveManager, // Manages Bezier curves and cube movement along them
    LightingManager, // Handles scene lighting, shadows, and environment
    LogoManager, // Manages the display and interaction of 3D logos
    AssetLoader, // Loads 3D models, textures, and other assets
    AnimationManager, // Manages all Three.js mixers and GSAP timelines
    Logger, // Custom logging utility for debug messages
    PopupManager
} from './modules/index.js';

// --- Global-like variables ---
// These variables are defined at a high level to be accessible throughout the script.
let curveManager; // Manages the animation path of the cube after it lands.
let fallingCube; // The main cube object that the user interacts with. It's assigned after assets are loaded.
let isInteractionEnabled = true; // Flag to control user interaction (e.g., movement).

// --- Raycaster for Mouse Hover ---
// This section sets up the logic for detecting when the mouse hovers over 3D objects.
const raycaster = new THREE.Raycaster(); // Used to cast rays from the camera to the mouse position.
const mouse = new THREE.Vector2(); // Stores normalized mouse coordinates (from -1 to +1).
const mousePosition = new THREE.Vector2(); // Stores the mouse position in pixels.
let intersectedObject = null; // Holds the object currently being hovered over.
const tooltip = document.getElementById('tooltip'); // The HTML element used to display tooltips.

// --- Scene Setup --- 
// The scene is the container for all 3D objects, lights, and cameras.
const scene = new THREE.Scene();
const logoManager = new LogoManager(scene); // Initializes the manager for 3D logos.

// --- Pop-up --- 
// This handles the initial loading screen that appears when the application starts.
const popupContainer = document.getElementById('popup-container');
const popupButton = document.getElementById('popup-button');

// The LoadingManager tracks the progress of all loaded assets.
const loadingManager = new THREE.LoadingManager();
loadingManager.onLoad = function() {
    Logger.assetLoad('All models loaded via LoadingManager');
    popupButton.disabled = false; // Enable the button once everything is loaded.
};
popupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none'; // Hide the pop-up when the button is clicked.
});

// --- Reference Point Marker ---
// A helper object for debugging. It's a visible sphere that can be placed in the scene to mark a specific point.
const markerGeometry = new THREE.SphereGeometry(0.3, 16, 16);
const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, visible: false }); // It's invisible by default.
const referenceMarker = new THREE.Mesh(markerGeometry, markerMaterial);
referenceMarker.position.set(-10, 1.75, 5);
scene.add(referenceMarker);

// --- Camera and initial setup ---
// The camera is the user's viewpoint into the 3D world.
const cameraOffset = CONFIG.CAMERA_OFFSET; // Defines the camera's position relative to the target object.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// --- Platform Setup ---
// This is the platform where the falling cube will land.
const platformGeometry = new THREE.PlaneGeometry(2, 2);
const platformMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
const platform = new THREE.Mesh(platformGeometry, platformMaterial);
platform.rotation.x = -Math.PI / 2; // Rotate it to be flat.
platform.position.set(-16.2, 36.9, 5);
platform.receiveShadow = true; // Allows the platform to have shadows cast on it.
scene.add(platform);

// --- GSAP Timeline ---
// The GSAP timeline is now managed by AnimationManager

// --- Renderer Setup ---
// The renderer is responsible for drawing the scene onto the screen.
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // Check if the user is on a mobile device.
const renderer = new THREE.WebGLRenderer({
    antialias: !isMobile,
    logarithmicDepthBuffer: false,
    powerPreference: 'high-performance'
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = isMobile ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; // Use filmic tone mapping for better color and lighting.
document.body.appendChild(renderer.domElement); // Add the renderer's canvas to the HTML body.
renderer.outputColorSpace = THREE.SRGBColorSpace; // Set the output color space.

// --- Controls ---
// OrbitControls allow the camera to be controlled by the user (e.g., orbiting, panning, zooming).
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false; // Initially disabled; enabled after the cube lands.

// --- GUI & Managers ---
// This section initializes the debugging GUI and the main managers for different functionalities.
const gui = new GUI(); // The main GUI panel for debugging.
const lightingManager = new LightingManager(scene, renderer, camera, gui, isMobile); // Manages all lights and shadows in the scene.
const animationManager = new AnimationManager(scene, camera, renderer); // Manages all animations (GSAP and Three.js mixers).
const popupManager = new PopupManager(); // Manages the pop-ups that appear at curve points.

// --- Collision Detection variables ---
// Variables used to detect when the falling cube hits the landing platform.
let collisionDetected = false; // A flag to track if the collision has already happened.
const cubeBoundingBox = new THREE.Box3(); // A bounding box for the cube.
const planeBoundingBox = new THREE.Box3(); // A bounding box for the platform.

// --- DOM Elements for Navigation ---
// HTML elements for controlling the cube's movement after it lands.
const navigationArrows = document.querySelector('.navigation-arrows');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// --- Event Listeners ---
// This section handles user input and window events.

// Listen for pop-up events to disable/enable interaction.
document.addEventListener('popup-opened', () => {
    isInteractionEnabled = false;
    controls.enabled = false; // Disable camera controls
});
document.addEventListener('popup-closed', () => {
    isInteractionEnabled = true;
    controls.enabled = true; // Enable camera controls
});

// Listen for clicks on the navigation arrows to move the cube.
rightArrow.addEventListener('click', () => {
    if (isInteractionEnabled && curveManager) curveManager.move('forward');
});
leftArrow.addEventListener('click', () => {
    if (isInteractionEnabled && curveManager) curveManager.move('backward');
});

// Listen for keyboard arrow keys to move the cube.
window.addEventListener('keydown', (event) => {
    if (!isInteractionEnabled) return; // Block input if interaction is disabled.
    if (event.key === 'ArrowLeft') {
        if (curveManager) curveManager.move('backward');
    } else if (event.key === 'ArrowRight') {
        if (curveManager) curveManager.move('forward');
    }
});

// Handle window resizing to keep the scene proportional.
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// =================================================================
// ASSET LOADER AND APP START
// This is the main entry point of the application.
// =================================================================

// Initialize the asset loader with the scene, loading manager, and logo manager.
const assetLoader = new AssetLoader(scene, loadingManager, logoManager);

// Start loading all assets. The .then() block executes after everything is loaded.
assetLoader.loadAll().then(assets => {
    Logger.assetLoad('All assets loaded via AssetLoader!', assets);
    fallingCube = assets.fallingCube; // Assign the loaded cube to the global variable.

    // 1. Setup initial camera position.
    // The camera is positioned to look at the falling cube.
    const modelWorldPosition = new THREE.Vector3();
    assets.fallingCube.getWorldPosition(modelWorldPosition);
    camera.position.copy(modelWorldPosition.clone().add(cameraOffset));
    camera.lookAt(modelWorldPosition);

    // 2. Setup the initial GSAP animation for the falling cube.
    // This animation is managed by the AnimationManager.
    animationManager.setupInitialCubeAnimation(assets.fallingCube, CONFIG);

    // 3. Start the main animation loop.
    // This function contains the code that runs on every frame.
    startAnimation(assets);

    // 4. Add throttled mousemove listener for raycasting after assets are loaded
    let throttleTimeout = null;
    const throttleDelay = 100; // milliseconds

    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;

        if (!throttleTimeout) {
            throttleTimeout = setTimeout(() => {
                throttleTimeout = null; // Reset timeout
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
            }, throttleDelay);
        }
    });
});

// --- Animation Loop ---
// This function is called once all assets are loaded and starts the continuous rendering loop.
function startAnimation(assets) {
    const landingPlane = assets.landingPlane; // Reference to the landing platform mesh.

    // Add the animation mixers from the loaded assets to the AnimationManager.
    if (assets.mixer) animationManager.addMixer(assets.mixer);
    if (assets.islandMixer) animationManager.addMixer(assets.islandMixer);
    if (assets.ferrisWheelMixer) animationManager.addMixer(assets.ferrisWheelMixer);

    // The animate function is the core of the rendering loop, called on every frame.
    function animate() {
        requestAnimationFrame(animate); // Schedule the next frame.

        // Update managers and other animated elements on each frame.
        if (curveManager) { curveManager.updateVisualsInLoop(); } // Update the curve visuals if they exist.
        animationManager.update(); // Update all animations (mixers and GSAP).
        if (logoManager) { logoManager.update(camera); } // Update logos to face the camera.

        // --- Water and Boat Logic ---
        // This section handles the animation of the water and the boat on its surface.
        if (assets.water) {
            assets.water.update(animationManager.clock.getElapsedTime()); // Animate the water shader.
            if (assets.boat) {
                // Make the boat bob on the water's surface.
                const boatPosition = new THREE.Vector3();
                assets.boat.getWorldPosition(boatPosition);
                const waterHeight = assets.water.getHeightAt(boatPosition.x, boatPosition.z);
                const targetBoatY = waterHeight + 0.1;
                assets.boat.position.y = THREE.MathUtils.lerp(assets.boat.position.y, targetBoatY, 0.1);
            }
        }

        // --- Collision Logic ---
        // This block runs until the initial collision between the cube and the platform occurs.
        if (landingPlane && fallingCube && !collisionDetected) {
            cubeBoundingBox.setFromObject(fallingCube); // Update the cube's bounding box.
            planeBoundingBox.setFromObject(landingPlane); // Update the platform's bounding box.

            // Check for intersection between the two bounding boxes.
            if (cubeBoundingBox.intersectsBox(planeBoundingBox)) {
                Logger.collision('Куб торкнувся Plane005! Керування стрілками активовано.');
                collisionDetected = true; // Set the flag to prevent this block from running again.
                animationManager.killAllGSAPTimelines(); // Stop the initial falling animation.

                if (navigationArrows) navigationArrows.style.display = 'flex'; // Show navigation controls.

                // Initialize the CurveManager to handle movement along the path.
                curveManager = new CurveManager(scene, gui, camera, controls, fallingCube, popupManager);
                const hardcodedStartPoint = curveManager.config.segments[0].p0;
                fallingCube.position.copy(hardcodedStartPoint); // Snap the cube to the start of the path.

                // Orient the cube to face the direction of the path.
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
                fallingCube.rotation.y += Math.PI / 2; // Apply rotation correction.

                curveManager.createVisuals(); // Create visual helpers for the curve.
                curveManager.setupGUI(); // Set up GUI controls for the curve.

                // Snap the camera to the cube's new position.
                const targetCameraPosition = fallingCube.position.clone().add(cameraOffset);
                camera.position.copy(targetCameraPosition);
                camera.lookAt(fallingCube.position);
            }
        }

        // --- Camera Follow Logic ---
        // Before the collision, the camera smoothly follows the falling cube.
        if (!collisionDetected && fallingCube) {
            const cubeWorldPosition = new THREE.Vector3();
            fallingCube.getWorldPosition(cubeWorldPosition);
            const targetCameraPosition = cubeWorldPosition.clone().add(cameraOffset);
            camera.position.lerp(targetCameraPosition, CONFIG.CAMERA_FOLLOW_SPEED); // Smoothly interpolate camera position.
            camera.lookAt(cubeWorldPosition);
        }

        // Finally, render the scene from the camera's perspective.
        renderer.render(scene, camera);
    }

    animate(); // Start the loop.
}