import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import modelUrl from '../UnityCode_Island.glb';
// import { setupModelCameraGUI } from './GUI.js';
import { createFallingCubeScene } from './FallingCube.js';
import { GUI } from 'lil-gui';

gsap.registerPlugin(ScrollTrigger);

import { LowPolyWater } from './LowPolyWater.js';
import { CONFIG } from './config.js';

let directionalLight; // Declare directionalLight here

// --- Scene Setup --- 
const scene = new THREE.Scene();

// Skybox
const sky = new Sky();
sky.scale.setScalar(450000);
scene.add(sky);

const sun = new THREE.Vector3();

// Визначаємо, на якій відстані від куба буде камера
const cameraOffset = CONFIG.CAMERA_OFFSET;

// --- Camera Setup ---
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// --- Falling Cube Setup ---
const { group: fallingCubeGroup, cube: fallingCube } = createFallingCubeScene(-16.2, 5);
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
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Додаємо для м'яких тіней
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

const effectController = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 50,
    azimuth: 45,
    exposure: 0.5
};

function guiChanged() {

    const uniforms = sky.material.uniforms;
    uniforms['turbidity'].value = effectController.turbidity;
    uniforms['rayleigh'].value = effectController.rayleigh;
    uniforms['mieCoefficient'].value = effectController.mieCoefficient;
    uniforms['mieDirectionalG'].value = effectController.mieDirectionalG;

    const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
    const theta = THREE.MathUtils.degToRad(effectController.azimuth);

    sun.setFromSphericalCoords(1, phi, theta);

    uniforms['sunPosition'].value.copy(sun);



    // Update directional light position based on sun

    directionalLight.position.copy(sun).multiplyScalar(50);



    renderer.toneMappingExposure = effectController.exposure;

    renderer.render(scene, camera);

}



// --- GUI ---
const gui = new GUI();
const skyFolder = gui.addFolder('Sky');
skyFolder.add(effectController, 'turbidity', 0.0, 20.0, 0.1).onChange(guiChanged);
skyFolder.add(effectController, 'rayleigh', 0.0, 4.0, 0.001).onChange(guiChanged);
skyFolder.add(effectController, 'mieCoefficient', 0.0, 0.1, 0.001).onChange(guiChanged);
skyFolder.add(effectController, 'mieDirectionalG', 0.0, 1.0, 0.001).onChange(guiChanged);
skyFolder.add(effectController, 'elevation', 0, 90, 0.1).onChange(guiChanged);
skyFolder.add(effectController, 'azimuth', 0, 360, 0.1).onChange(guiChanged);
skyFolder.add(effectController, 'exposure', 0.0, 1.0, 0.0001).onChange(guiChanged);
skyFolder.open();

// --- Lighting ---
// Ambient light to softly illuminate all objects in the scene equally
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Increased intensity
scene.add(ambientLight);

// Hemisphere light for more natural ambient lighting (sky and ground colors)
const hemisphereLight = new THREE.HemisphereLight(0xb1e1ff, 0xb97a20, 0.7); // Sky color, ground color, intensity
scene.add(hemisphereLight);

directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.copy(sun).multiplyScalar(50);
directionalLight.target.position.set(0, 0, 0);
scene.add(directionalLight.target);

directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(4096, 4096);
directionalLight.shadow.camera.left = -50;
directionalLight.shadow.camera.right = 50;
directionalLight.shadow.camera.top = 50;
directionalLight.shadow.camera.bottom = -50;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 200;

directionalLight.shadow.bias = -0.002;
directionalLight.shadow.normalBias = 0.05;

scene.add(directionalLight);

guiChanged(); // Call guiChanged() after directionalLight is initialized

// --- Для перевірки ---
// const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(helper);

// Point light for localized illumination (e.g., a lamp)
const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Color, intensity, distance
pointLight.position.set(0, 5, 0); // Position the point light
scene.add(pointLight);

// Declare water variable, it will be initialized after the model loads
let water;

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

    const modelFolder = gui.addFolder('Island Model');
    modelFolder.add(model.position, 'x', -50, 50, 0.1).name('Model X');
    modelFolder.add(model.position, 'y', -50, 50, 0.1).name('Model Y');
    modelFolder.add(model.position, 'z', -50, 50, 0.1).name('Model Z');
    modelFolder.open();

    // --- Low Poly Water ---
    // Now that the model is loaded, we can create the water
    // and pass the model to it for intersection checks.
    water = new LowPolyWater(model);
    water.mesh.position.y = 0.7; // Adjust this value to set the water level
    scene.add(water.mesh);

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
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Update water only if it has been initialized
    if (water) {
        water.update(elapsedTime);
    }

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