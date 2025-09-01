history.scrollRestoration = "manual";
window.scrollTo(0, 0);
import * as THREE from 'three';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import modelUrl from '../TEST2.glb';
import { setupModelCameraGUI } from './GUI.js';
import { createFallingCubeScene } from './FallingCube.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

gsap.registerPlugin(ScrollTrigger);

import { CONFIG } from './config.js';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

// --- Data-Driven Interaction Setup ---
const interactiveGroups = [
    {
        id: 'factory1',
        name: 'Front-End Factory',
        parts: [
            'Front-Factory',
            'Front-Factory-2',
            'Text-Front-Factory'
        ],
        description: 'This factory produces all the user interface components and handles client-side logic.',
        foundObjects: [] // To store the actual THREE.Object3D objects
    },
    {
        id: 'factory2',
        name: 'Data Factory',
        parts: [
            'Data-Factory',
            'Text-Data-Factory'
        ],
        description: 'This factory manages data storage, APIs, and backend logic.',
        foundObjects: []
    }
    // To add a new group, just add a new object here.
];

const allInteractiveParts = interactiveGroups.flatMap(g => g.parts);

// --- UI & Raycasting Setup ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const infoIcon = document.getElementById('info-icon');
const infoPanel = document.getElementById('info-panel');
const infoTitle = document.getElementById('info-title');
const infoText = document.getElementById('info-text');
const closePanel = document.getElementById('close-panel');
let hoveredGroupId = null;
const combinedBox = new THREE.Box3();

// --- Scene Setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Sky blue background

// Визначаємо, на якій відстані від куба буде камера
let cameraOffset = CONFIG.CAMERA_OFFSET.clone(); // Use let and clone to allow modification

// On mobile, zoom out to show more of the island
if (isMobile) {
    cameraOffset.y = 10; // Increase height
    cameraOffset.z = 40; // Increase distance (zoom out)
}

// --- Camera Setup ---
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// --- Falling Cube Setup ---
const { group: fallingCubeGroup, cube: fallingCube } = createFallingCubeScene();
window.fallingCube = fallingCube; // Expose for testing
scene.add(fallingCubeGroup);

// Встановлюємо початкову позицію камери відносно куба
const cubeWorldPosition = new THREE.Vector3();
fallingCube.getWorldPosition(cubeWorldPosition);
camera.position.copy(cubeWorldPosition.clone().add(cameraOffset));
camera.lookAt(cubeWorldPosition);

// --- Renderer Setup ---
let renderer;
if (WebGL.isWebGL2Available()) {
    renderer = new THREE.WebGLRenderer({ antialias: !isMobile });
} else {
    try {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('webgl');
        renderer = new THREE.WebGLRenderer({ canvas: canvas, context: context, antialias: !isMobile });
    } catch (e) {
        const warning = document.createElement('div');
        warning.id = 'webglmessage';
        warning.style.fontFamily = 'monospace';
        warning.style.fontSize = '13px';
        warning.style.fontWeight = 'normal';
        warning.style.textAlign = 'center';
        warning.style.background = '#fff';
        warning.style.color = '#000';
        warning.style.padding = '1.5em';
        warning.style.width = '400px';
        warning.style.margin = '5em auto 0';
        warning.innerHTML = 'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>';
        document.body.appendChild(warning);
        throw e;
    }
}
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.shadowMap.enabled = true; // Enable shadows
renderer.domElement.style.zIndex = -1; // Set initial z-index for scrolling
renderer.domElement.style.pointerEvents = 'auto';
document.body.appendChild(renderer.domElement);

// --- Controls ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 5;
controls.maxDistance = 100;
controls.target.copy(cubeWorldPosition);

// Вимикаємо контролери та зум за замовчуванням
controls.enabled = false;
controls.enableZoom = false;

// --- Lighting ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 50;
scene.add(directionalLight);

// --- Pulsing Animation ---
const groupPulseAnimations = {};

function stopGroupPulse(groupId) {
    if (groupPulseAnimations[groupId]) {
        groupPulseAnimations[groupId].kill();
        delete groupPulseAnimations[groupId];

        const group = interactiveGroups.find(g => g.id === groupId);
        if (group) {
            const materials = group.foundObjects.map(obj => obj.material).filter(Boolean);
            materials.forEach(material => {
                if (material.originalEmissive) {
                    material.emissive.copy(material.originalEmissive);
                }
            });
        }
    }
}

function startGroupPulse(group) {
    if (!group || groupPulseAnimations[group.id] || group.foundObjects.length === 0) return;

    const materials = group.foundObjects.map(obj => obj.material).filter(Boolean);
    if (materials.length === 0) return;

    materials.forEach(material => {
        if (!material.originalEmissive) {
            if (!material.emissive) {
                material.emissive = new THREE.Color(0x000000);
            }
            material.originalEmissive = material.emissive.clone();
        }
    });

    const pulseColor = new THREE.Color(0.5, 0.5, 0.5);

    groupPulseAnimations[group.id] = gsap.to(materials.map(m => m.emissive), {
        r: pulseColor.r,
        g: pulseColor.g,
        b: pulseColor.b,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
    });
}

function startAllPulsing() {
    interactiveGroups.forEach(startGroupPulse);
}


// --- Load Model ---
const loader = new GLTFLoader();
loader.load(modelUrl, function (gltf) {
    const model = gltf.scene;
    window.model = model; // Expose for testing

    model.rotation.y = 2;

    model.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;

            if (allInteractiveParts.includes(node.name)) {
                // This is an interactive object.
                // Clone its material to ensure the pulsing animation doesn't affect other objects (like trees).
                if (node.material) {
                    node.material = node.material.clone();
                }

                const group = interactiveGroups.find(g => g.parts.includes(node.name));
                if (group) {
                    group.foundObjects.push(node);
                    console.log(`Found object '${node.name}' for group '${group.name}'`);
                }
            }
        }
    });
    scene.add(model);

    // Start the pulsing animation after the model is loaded
    startAllPulsing();

}, undefined, function (error) {
    console.error('An error happened while loading the model:', error);
});

// --- GSAP Animation Setup ---
const tl = gsap.timeline({ paused: true });
tl.to([fallingCube.position, camera.position, controls.target], { x: `+=${CONFIG.CUBE_SLIDE_DISTANCE}`, ease: "power1.in", duration: CONFIG.CUBE_SLIDE_DURATION });
tl.to([fallingCube.position, camera.position, controls.target], { x: `+=${CONFIG.CUBE_FALL_X_OFFSET}`, ease: "none" }, ">");
tl.to([fallingCube.position, camera.position, controls.target], { y: `-=${CONFIG.CUBE_FALL_DISTANCE}`, ease: "power1.in" }, "<");
tl.to(fallingCube.rotation, { x: CONFIG.CUBE_ROTATION_X, z: CONFIG.CUBE_ROTATION_Z, ease: "power1.inOut" }, "<");

const st = ScrollTrigger.create({ animation: tl, trigger: document.body, start: "top top", end: "bottom bottom", scrub: true, fastScrollEnd: true });

// --- Toggle Logic ---
const controlsCheckbox = document.getElementById('controls-checkbox');
controlsCheckbox.addEventListener('change', () => {
    if (controlsCheckbox.checked) {
        st.disable();
        controls.enabled = true;
        controls.enableZoom = true;
        renderer.domElement.style.zIndex = 1;
    } else {
        st.enable();
        controls.enabled = false;
        controls.enableZoom = false;
        renderer.domElement.style.zIndex = -1;
    }
});

// --- Interaction Logic ---
function handleIntersections() {
    const allFoundObjects = interactiveGroups.flatMap(g => g.foundObjects);
    if (allFoundObjects.length === 0) return;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(allFoundObjects);

    if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        const group = interactiveGroups.find(g => g.parts.includes(intersectedObject.name));

        if (group) {
            hoveredGroupId = group.id;
            combinedBox.makeEmpty();
            group.foundObjects.forEach(obj => {
                combinedBox.expandByObject(obj);
            });

            const center = combinedBox.getCenter(new THREE.Vector3());
            const screenPosition = center.project(camera);
            const x = (screenPosition.x + 1) / 2 * window.innerWidth;
            const y = -(screenPosition.y - 1) / 2 * window.innerHeight;
            
            infoIcon.style.left = `${x}px`;
            infoIcon.style.top = `${y}px`;
            infoIcon.style.display = 'block';
        } else {
            hoveredGroupId = null;
            infoIcon.style.display = 'none';
        }
    } else {
        hoveredGroupId = null;
        infoIcon.style.display = 'none';
    }
}

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

infoIcon.addEventListener('click', () => {
    if (!hoveredGroupId) return;

    const group = interactiveGroups.find(g => g.id === hoveredGroupId);
    if (group) {
        // Stop the pulsing for the clicked group
        stopGroupPulse(group.id);

        infoTitle.textContent = group.name;
        infoText.textContent = group.description;
        infoPanel.style.display = 'block';
    }
});

closePanel.addEventListener('click', () => {
    infoPanel.style.display = 'none';
});

// --- Animation Loop ---
function animate() {
    requestAnimationFrame(animate);
    handleIntersections();
    controls.update();
    renderer.render(scene, camera);
}
animate();

// --- Handle Window Resize ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});