import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import modelUrl from '../UnityCode_Island.glb';
import { setupModelCameraGUI } from './GUI.js';
import { createFallingCubeScene } from './FallingCube.js';

gsap.registerPlugin(ScrollTrigger);

import { CONFIG } from './config.js';

// --- Scene Setup --- 
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Sky blue background

// Визначаємо, на якій відстані від куба буде камера
const cameraOffset = CONFIG.CAMERA_OFFSET;

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
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const renderer = new THREE.WebGLRenderer({ antialias: !isMobile });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true; // Enable shadows
document.body.appendChild(renderer.domElement);


// --- Lighting ---
// Ambient light to softly illuminate all objects in the scene equally
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Increased intensity
scene.add(ambientLight);

// Hemisphere light for more natural ambient lighting (sky and ground colors)
const hemisphereLight = new THREE.HemisphereLight(0xb1e1ff, 0xb97a20, 0.7); // Sky color, ground color, intensity
scene.add(hemisphereLight);

// Directional light to simulate sunlight
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Increased intensity
directionalLight.position.set(5, 10, 7.5);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 50;
scene.add(directionalLight);

// Point light for localized illumination (e.g., a lamp)
const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Color, intensity, distance
pointLight.position.set(0, 5, 0); // Position the point light
scene.add(pointLight);

// --- Load Model ---
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./libs/draco/gltf/');
loader.setDRACOLoader(dracoLoader);
loader.load(modelUrl, function(gltf) {
    const model = gltf.scene;
    window.model = model; // Expose for testing

    // --- Налаштування моделі (поворот, масштаб, позиція) ---
    model.rotation.y = 2;

    // Traverse the model to enable shadows
    model.traverse(function(node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    scene.add(model);

    // --- GUI Setup ---
    setupModelCameraGUI(model, camera);

}, undefined, function(error) {
    console.error('An error happened while loading the model:', error);
});

// --- GSAP Animation Setup ---
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    }
});

// --- Анімація куба в кілька етапів ---

// ЕТАП 1: Ковзання до краю платформи
tl.to(fallingCube.position, {
    x: `+=${CONFIG.CUBE_SLIDE_DISTANCE}`,
    ease: "power1.in",
    duration: CONFIG.CUBE_SLIDE_DURATION
});

// ЕТАП 2: Падіння з краю (починається після ковзання)
// Горизонтальний рух під час падіння
tl.to(fallingCube.position, {
    x: `+=${CONFIG.CUBE_FALL_X_OFFSET}`,
    ease: "none"
}, ">");

// Вертикальний рух під час падіння (починається одночасно з горизонтальним)
tl.to(fallingCube.position, {
    y: `-=${CONFIG.CUBE_FALL_DISTANCE}`,
    ease: "power1.in"
}, "<");

// Обертання починається ТІЛЬКИ коли починається падіння
tl.to(fallingCube.rotation, {
    x: CONFIG.CUBE_ROTATION_X,
    z: CONFIG.CUBE_ROTATION_Z,
    ease: "power1.inOut"
}, "<");

// --- Animation Loop ---
function animate() {
    requestAnimationFrame(animate);

    // Плавне слідування камери за кубом
    const cubeWorldPosition = new THREE.Vector3();
    fallingCube.getWorldPosition(cubeWorldPosition);

    const targetCameraPosition = cubeWorldPosition.clone().add(cameraOffset);
    camera.position.lerp(targetCameraPosition, CONFIG.CAMERA_FOLLOW_SPEED);

    camera.lookAt(cubeWorldPosition);
    renderer.render(scene, camera);
}

animate();

// --- Handle Window Resize ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});