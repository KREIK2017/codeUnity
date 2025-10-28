import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
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

// --- Reference Point Marker ---
const markerGeometry = new THREE.SphereGeometry(0.3, 16, 16);
const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green
const referenceMarker = new THREE.Mesh(markerGeometry, markerMaterial);
referenceMarker.position.set(-10, 1.75, 5);
scene.add(referenceMarker);
// -----------------------------

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
const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, logarithmicDepthBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true; // Enable shadows
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Додаємо для м'яких тіней
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// --- Controls ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false; // Disabled until the cube lands

const effectController = {
    turbidity: 10,
    rayleigh: 0.165,
    mieCoefficient: 0.009,
    mieDirectionalG: 1,
    elevation: 60,
    azimuth: 60,
    exposure: 1
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
    if (directionalLight) {
        directionalLight.position.copy(sun).multiplyScalar(50);
    }

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

// --- Interactive Curve Editor ---
const curveEditor = {
    points: {
        p0: new THREE.Vector3(-10, 1.75, 5), // Anchor A
        h0: new THREE.Vector3(-3.5, 3.9, 6), // Handle for A
        h1: new THREE.Vector3(-4.6, 3, 11.64), // Handle for B
        p1: new THREE.Vector3(1, 4, 11.5) // Anchor B
    },
    visuals: {},
    curve: null,
    curveLine: null
};

function createCurveEditor() {
    const sphereGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const handleGeo = new THREE.SphereGeometry(0.15, 16, 16);

    // Create visual meshes
    curveEditor.visuals.p0 = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    curveEditor.visuals.p1 = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    curveEditor.visuals.h0 = new THREE.Mesh(handleGeo, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    curveEditor.visuals.h1 = new THREE.Mesh(handleGeo, new THREE.MeshBasicMaterial({ color: 0xff0000 }));

    // Position them
    curveEditor.visuals.p0.position.copy(curveEditor.points.p0);
    curveEditor.visuals.p1.position.copy(curveEditor.points.p1);
    curveEditor.visuals.h0.position.copy(curveEditor.points.h0);
    curveEditor.visuals.h1.position.copy(curveEditor.points.h1);

    // Add to scene
    Object.values(curveEditor.visuals).forEach(v => scene.add(v));

    // Create the curve and its line
    updateCurve();
}

function updateCurve() {
    // 1. Update the curve object
    if (!curveEditor.curve) {
        curveEditor.curve = new THREE.CubicBezierCurve3(
            curveEditor.points.p0,
            curveEditor.points.h0,
            curveEditor.points.h1,
            curveEditor.points.p1
        );
    } else {
        curveEditor.curve.v0.copy(curveEditor.points.p0);
        curveEditor.curve.v1.copy(curveEditor.points.h0);
        curveEditor.curve.v2.copy(curveEditor.points.h1);
        curveEditor.curve.v3.copy(curveEditor.points.p1);
    }

    // 2. Update the visual line
    const points = curveEditor.curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    if (!curveEditor.curveLine) {
        const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
        curveEditor.curveLine = new THREE.Line(geometry, material);
        scene.add(curveEditor.curveLine);
    } else {
        curveEditor.curveLine.geometry.dispose();
        curveEditor.curveLine.geometry = geometry;
    }
}

function setupCurveGUI() {
    const editorFolder = gui.addFolder('Curve Editor');

    const p0 = editorFolder.addFolder('Start Point (Green)');
    p0.add(curveEditor.points.p0, 'x', -20, 20).onChange(updateCurve);
    p0.add(curveEditor.points.p0, 'y', -10, 10).onChange(updateCurve);
    p0.add(curveEditor.points.p0, 'z', -20, 20).onChange(updateCurve);

    const h0 = editorFolder.addFolder('Handle 1 (Red)');
    h0.add(curveEditor.points.h0, 'x', -20, 20).onChange(updateCurve);
    h0.add(curveEditor.points.h0, 'y', -10, 10).onChange(updateCurve);
    h0.add(curveEditor.points.h0, 'z', -20, 20).onChange(updateCurve);

    const h1 = editorFolder.addFolder('Handle 2 (Red)');
    h1.add(curveEditor.points.h1, 'x', -20, 20).onChange(updateCurve);
    h1.add(curveEditor.points.h1, 'y', -10, 10).onChange(updateCurve);
    h1.add(curveEditor.points.h1, 'z', -20, 20).onChange(updateCurve);

    const p1 = editorFolder.addFolder('End Point (Green)');
    p1.add(curveEditor.points.p1, 'x', -20, 20).onChange(updateCurve);
    p1.add(curveEditor.points.p1, 'y', -10, 10).onChange(updateCurve);
    p1.add(curveEditor.points.p1, 'z', -20, 20).onChange(updateCurve);

    editorFolder.open();
}

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

let water;
let landingPlane;
let collisionDetected = false;
const cubeBoundingBox = new THREE.Box3();
const planeBoundingBox = new THREE.Box3();

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

    // Traverse the model to enable shadows and find the target planes
    model.traverse(function(node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
        if (node.name === 'Plane005') {
            landingPlane = node;
        }
        if (node.name === 'Plane004') {
            // pathPlane = node; // Removed as path logic is replaced
        }
    });
    scene.add(model);



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

    // Update visuals from data
    if (curveEditor.visuals.p0) {
        curveEditor.visuals.p0.position.copy(curveEditor.points.p0);
        curveEditor.visuals.p1.position.copy(curveEditor.points.p1);
        curveEditor.visuals.h0.position.copy(curveEditor.points.h0);
        curveEditor.visuals.h1.position.copy(curveEditor.points.h1);
    }

    const elapsedTime = clock.getElapsedTime();

    if (water) {
        water.update(elapsedTime);
    }

    if (landingPlane && fallingCube && !collisionDetected) {
        cubeBoundingBox.setFromObject(fallingCube);
        planeBoundingBox.setFromObject(landingPlane);

        if (cubeBoundingBox.intersectsBox(planeBoundingBox)) {
            console.log('>>> Куб торкнувся Plane005! Редактор кривої активовано.');
            collisionDetected = true;
            tl.kill();
            controls.enabled = true; // Enable controls on landing
            console.log('OrbitControls enabled!');

            // Set the editor's starting point to the landing position
            const landingPos = new THREE.Vector3();
            fallingCube.getWorldPosition(landingPos);
            curveEditor.points.p0.copy(landingPos);

            // Create the editor visuals and GUI
            createCurveEditor();
            setupCurveGUI();
        }
    }

    if (!collisionDetected) {
        // Camera follows cube BEFORE landing
        const cubeWorldPosition = new THREE.Vector3();
        fallingCube.getWorldPosition(cubeWorldPosition);
        const targetCameraPosition = cubeWorldPosition.clone().add(cameraOffset);
        camera.position.lerp(targetCameraPosition, CONFIG.CAMERA_FOLLOW_SPEED);
        camera.lookAt(cubeWorldPosition);
    } else {
        // OrbitControls are active AFTER landing
        controls.update();
        console.log('Controls updating...');
    }
    renderer.render(scene, camera);
}

animate();

// --- Handle Window Resize ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});