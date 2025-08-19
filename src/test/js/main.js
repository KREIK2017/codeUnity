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

// --- Load Model ---
const loader = new GLTFLoader();
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath('./libs/draco/gltf/');
// loader.setDRACOLoader(dracoLoader);
loader.load(modelUrl, function (gltf) {
    const model = gltf.scene;
    window.model = model; // Expose for testing

    // --- Налаштування моделі (поворот, масштаб, позиція) ---
    model.rotation.y = 2;

    // Traverse the model to enable shadows
    model.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    scene.add(model);

    // --- GUI Setup ---
    // setupModelCameraGUI(model, camera);

}, undefined, function (error) {
    console.error('An error happened while loading the model:', error);
});

// --- GSAP Animation Setup ---
const tl = gsap.timeline({
    paused: true
});

// --- Анімація куба, камери та цілі контролів ---
// Тепер GSAP керує всіма об'єктами, забезпечуючи ідеальну синхронізацію.

// ЕТАП 1: Ковзання до краю платформи
tl.to([fallingCube.position, camera.position, controls.target], {
    x: `+=${CONFIG.CUBE_SLIDE_DISTANCE}`,
    ease: "power1.in",
    duration: CONFIG.CUBE_SLIDE_DURATION
});

// ЕТАП 2: Падіння з краю (починається після ковзання)

// Горизонтальний рух під час падіння
tl.to([fallingCube.position, camera.position, controls.target], {
    x: `+=${CONFIG.CUBE_FALL_X_OFFSET}`,
    ease: "none"
}, ">");

// Вертикальний рух під час падіння (починається одночасно з горизонтальним)
tl.to([fallingCube.position, camera.position, controls.target], {
    y: `-=${CONFIG.CUBE_FALL_DISTANCE}`,
    ease: "power1.in"
}, "<");

// Обертання куба починається ТІЛЬКИ коли починається падіння
tl.to(fallingCube.rotation, {
    x: CONFIG.CUBE_ROTATION_X,
    z: CONFIG.CUBE_ROTATION_Z,
    ease: "power1.inOut"
}, "<");


// Створюємо ScrollTrigger окремо, щоб ним можна було керувати
const st = ScrollTrigger.create({
    animation: tl,
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    fastScrollEnd: true,
});

// --- Toggle Logic ---
const controlsCheckbox = document.getElementById('controls-checkbox');

controlsCheckbox.addEventListener('change', () => {
    if (controlsCheckbox.checked) {
        // Вмикаємо "Режим контролера"
        st.disable();
        controls.enabled = true;
        controls.enableZoom = true;
        renderer.domElement.style.zIndex = 1; // Move canvas to the front
        renderer.domElement.style.pointerEvents = 'auto';
    } else {
        // Вмикаємо "Режим прокрутки"
        st.enable();
        controls.enabled = false;
        controls.enableZoom = false;
        renderer.domElement.style.zIndex = -1; // Move canvas to the back
        renderer.domElement.style.pointerEvents = 'none';
    }
});



// --- Animation Loop ---
function animate() {
    requestAnimationFrame(animate);

    // GSAP тепер повністю керує камерою під час скролу.
    // Ми просто оновлюємо контролери та рендеримо сцену.
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

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});