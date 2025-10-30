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

// --- Interactive Curve Editor (Multi-Segment) ---
const curveEditor = {
    segments: [ // Array to hold multiple curve segments
        {
            p0: new THREE.Vector3(-10, 1.75, 5), // Anchor A (will be updated to landing spot)
            h0: new THREE.Vector3(-3.5, 3.9, 6), // Handle for A
            h1: new THREE.Vector3(-4.6, 3, 11.64), // Handle for B
            p1: new THREE.Vector3(1, 4, 11.5) // Anchor B
        },
        {
            // Placeholder for the second segment
            p0: new THREE.Vector3(1, 4, 11.5), // Anchor B (from previous segment)
            h0: new THREE.Vector3(12, 4.5, 12.5), // Handle for B
            h1: new THREE.Vector3(5.5, 3.5, 10.12), // Handle for C
            p1: new THREE.Vector3(7, 3.6, 3) // Anchor C
        },
        {
            // START of W-shape path (Segment 3)
            p0: new THREE.Vector3(7, 3.6, 3), // Anchor C (Point 3)
            h0: new THREE.Vector3(6.8, 3.5, 1.96),
            h1: new THREE.Vector3(5.8, 3.5, -0.36),
            p1: new THREE.Vector3(5.44, 3.6, -0.96) // Anchor W1
        },
        {
            // W-shape path (Segment 4)
            p0: new THREE.Vector3(5.44, 3.6, -0.96), // Anchor W1
            h0: new THREE.Vector3(5.2, 3.3, -4),
            h1: new THREE.Vector3(4.7, 3.2, -5),
            p1: new THREE.Vector3(3.5, 3.5, -7) // Anchor W2
        },
        {
            // END of W-shape path (Segment 5)
            p0: new THREE.Vector3(3.5, 3.5, -7), // Anchor W2
            h0: new THREE.Vector3(1, 3.3, -8.7),
            h1: new THREE.Vector3(-1.5, 3.8, -6.7),
            p1: new THREE.Vector3(-4, 4.3, -9) // Anchor D (Point 4)
        },
        {
            // Segment 6
            p0: new THREE.Vector3(-4, 4.3, -9),
            h0: new THREE.Vector3(-10.8, 5.5, -9.5),
            h1: new THREE.Vector3(-10, 2.58, 1.9),
            p1: new THREE.Vector3(-10, 1.75, 5)
        }

    ],
    visuals: [], // Array to hold visuals for each segment
    curvePath: null, // Now a CurvePath
    curveLine: null
};

function createCurveEditor() {
    const sphereGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const handleGeo = new THREE.SphereGeometry(0.15, 16, 16);

    // Clear existing visuals if any
    curveEditor.visuals.forEach(segmentVisuals => {
        Object.values(segmentVisuals).forEach(v => scene.remove(v));
    });
    curveEditor.visuals = [];

    curveEditor.segments.forEach((segment, segIndex) => {
        const segmentVisuals = {};
        segmentVisuals.p0 = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
        segmentVisuals.p1 = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
        segmentVisuals.h0 = new THREE.Mesh(handleGeo, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        segmentVisuals.h1 = new THREE.Mesh(handleGeo, new THREE.MeshBasicMaterial({ color: 0xff0000 }));

        segmentVisuals.p0.position.copy(segment.p0);
        segmentVisuals.p1.position.copy(segment.p1);
        segmentVisuals.h0.position.copy(segment.h0);
        segmentVisuals.h1.position.copy(segment.h1);

        Object.values(segmentVisuals).forEach(v => scene.add(v));
        curveEditor.visuals.push(segmentVisuals);
    });
    console.log('curveEditor.visuals after population:', curveEditor.visuals);

    updateCurve();
}

function updateCurve() {
    // 1. Update the curve path object
    if (!curveEditor.curvePath) {
        curveEditor.curvePath = new THREE.CurvePath();
    } else {
        // Clear existing curves from the path
        curveEditor.curvePath.curves = [];
    }

    curveEditor.segments.forEach(segment => {
        const curve = new THREE.CubicBezierCurve3(segment.p0, segment.h0, segment.h1, segment.p1);
        curveEditor.curvePath.add(curve);
    });

    // 2. Update the visual line
    const points = curveEditor.curvePath.getPoints(50 * curveEditor.segments.length); // More points for longer path
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

    curveEditor.segments.forEach((segment, segIndex) => {
        const segmentFolder = editorFolder.addFolder(`Segment ${segIndex + 1}`);

        const p0 = segmentFolder.addFolder('Start Point (Green)');
        p0.add(segment.p0, 'x', -20, 20).onChange(updateCurve);
        p0.add(segment.p0, 'y', -10, 10).onChange(updateCurve);
        p0.add(segment.p0, 'z', -20, 20).onChange(updateCurve);

        const h0 = segmentFolder.addFolder('Handle 1 (Red)');
        h0.add(segment.h0, 'x', -20, 20).onChange(updateCurve);
        h0.add(segment.h0, 'y', -10, 10).onChange(updateCurve);
        h0.add(segment.h0, 'z', -20, 20).onChange(updateCurve);

        const h1 = segmentFolder.addFolder('Handle 2 (Red)');
        h1.add(segment.h1, 'x', -20, 20).onChange(updateCurve);
        h1.add(segment.h1, 'y', -10, 10).onChange(updateCurve);
        h1.add(segment.h1, 'z', -20, 20).onChange(updateCurve);

        const p1 = segmentFolder.addFolder('End Point (Green)');
        p1.add(segment.p1, 'x', -20, 20).onChange(updateCurve);
        p1.add(segment.p1, 'y', -10, 10).onChange(updateCurve);
        p1.add(segment.p1, 'z', -20, 20).onChange(updateCurve);
    });

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

// --- DOM Elements for Navigation ---
const navigationArrows = document.querySelector('.navigation-arrows');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// --- Curve Movement State ---
let currentPointIndex = 0;
let isMoving = false; // To prevent multiple clicks while animating

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

// --- Function to move cube along the curve ---
function moveCubeToPoint(direction) {
    if (!curveEditor.curvePath || isMoving) return;
    isMoving = true;
    controls.enabled = false; // Disable mouse control during animation

    const numPoints = curveEditor.segments.length;
    const previousPointIndex = currentPointIndex;

    // 1. Determine target index
    if (direction === 'forward') {
        currentPointIndex = (currentPointIndex + 1) % numPoints;
    } else {
        currentPointIndex = (currentPointIndex - 1 + numPoints) % numPoints;
    }

    // 2. Get the specific curve segment to travel along
    // If moving forward, we use the curve starting at the previous index.
    // If moving backward, we use the curve starting at the new (target) index.
    const curveIndex = (direction === 'forward') ? previousPointIndex : currentPointIndex;
    const curve = curveEditor.curvePath.curves[curveIndex];

    // 3. Animate progress along the curve
    const animation = {
        progress: (direction === 'forward') ? 0 : 1
    };
    const targetProgress = (direction === 'forward') ? 1 : 0;

    gsap.to(animation, {
        progress: targetProgress,
        duration: 2.0, // Duration for moving between two points
        ease: 'power1.inOut',
        onUpdate: function() {
            // Get position and tangent from the curve based on progress
            const newPosition = curve.getPointAt(animation.progress);
            const tangent = curve.getTangentAt(animation.progress);
            const lookAtPosition = new THREE.Vector3().addVectors(newPosition, tangent);

            // Update cube position and orientation
            fallingCube.position.copy(newPosition);
            if (direction === 'forward') {
                fallingCube.lookAt(lookAtPosition);
            } else {
                // When going backward, we need to invert the lookAt direction
                const backwardLookAt = new THREE.Vector3().subVectors(newPosition, tangent);
                fallingCube.lookAt(backwardLookAt);
            }

            // Update camera to follow the cube
            const targetCameraPosition = newPosition.clone().add(cameraOffset);
            camera.position.lerp(targetCameraPosition, 0.1); // Use lerp for smoother, continuous following
            camera.lookAt(fallingCube.position);
        },
        onComplete: function() {
            isMoving = false; // Allow next move
            controls.enabled = true; // Re-enable mouse control
        }
    });
}


// --- Arrow Event Listeners ---
rightArrow.addEventListener('click', () => moveCubeToPoint('forward'));
leftArrow.addEventListener('click', () => moveCubeToPoint('backward'));


// --- Animation Loop ---
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    // Update visuals from data
    if (curveEditor.visuals.length > 0) { // Check if visuals have been created
        curveEditor.segments.forEach((segment, segIndex) => {
            const segmentVisuals = curveEditor.visuals[segIndex];
            // console.log('segmentVisuals in animate loop:', segmentVisuals); // This is too noisy
            if (segmentVisuals) {
                segmentVisuals.p0.position.copy(segment.p0);
                segmentVisuals.p1.position.copy(segment.p1);
                segmentVisuals.h0.position.copy(segment.h0);
                segmentVisuals.h1.position.copy(segment.h1);
            }
        });
    }

    const elapsedTime = clock.getElapsedTime();

    if (water) {
        water.update(elapsedTime);
    }

    if (landingPlane && fallingCube && !collisionDetected) {
        cubeBoundingBox.setFromObject(fallingCube);
        planeBoundingBox.setFromObject(landingPlane);

        if (cubeBoundingBox.intersectsBox(planeBoundingBox)) {
            console.log('>>> Куб торкнувся Plane005! Керування стрілками активовано.');
            collisionDetected = true;
            tl.kill(); // Stop the falling animation

            // Show navigation arrows
            if (navigationArrows) {
                navigationArrows.style.display = 'flex';
            }

            // Remove the cube from the falling group so it's not affected by group's position
            fallingCubeGroup.remove(fallingCube);
            scene.add(fallingCube); // Add it directly to the scene

            // Set the exact coordinates from the curve's start point
            const hardcodedStartPoint = curveEditor.segments[0].p0;
            fallingCube.position.copy(hardcodedStartPoint);
            currentPointIndex = 0; // Reset progress

            // 2. Create the editor visuals and GUI with the original, unaltered points
            createCurveEditor();
            setupCurveGUI();

            // 3. Initial camera setup to look at the cube's new static position
            const targetCameraPosition = fallingCube.position.clone().add(cameraOffset);
            camera.position.copy(targetCameraPosition);
            camera.lookAt(fallingCube.position);
        }
    }

    if (!collisionDetected) {
        // Camera follows cube BEFORE landing
        const cubeWorldPosition = new THREE.Vector3();
        fallingCube.getWorldPosition(cubeWorldPosition);
        const targetCameraPosition = cubeWorldPosition.clone().add(cameraOffset);
        camera.position.lerp(targetCameraPosition, CONFIG.CAMERA_FOLLOW_SPEED);
        camera.lookAt(cubeWorldPosition);
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