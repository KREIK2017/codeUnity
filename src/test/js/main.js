import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import modelUrl from '../UnityCode_Island.glb';
import fbxModelUrl from '../R01_Animate_S.fbx';
// import { setupModelCameraGUI } from './GUI.js';
import { GUI } from 'lil-gui';

gsap.registerPlugin(ScrollTrigger);

import { LowPolyWater } from './LowPolyWater.js';
import { CONFIG } from './config.js';
import {
    CurveManager,
    LightingManager,
    // AnimationManager,
    LogoManager
} from './modules/index.js';
import wordpressLogoUrl from '../textures/logos/blue-wordpress-logo-hd-picture-3.png';
import cssLogoUrl from '../textures/logos/CSS3_logo_and_wordmark.svg.png';
import htmlLogoUrl from '../textures/logos/HTML5_logo_and_wordmark.svg.png';
import shopifyLogoUrl from '../textures/logos/Shopify-Logo-PNG-HD.png';
import androidLogoUrl from '../textures/logos/icons8-android-100.png';
import iosLogoUrl from '../textures/logos/icons8-apple-intelligence-100.png';
let curveManager;
let mixer; // Declare mixer here
let islandMixer; // Declare islandMixer here
let ferrisWheelMixer; // Declare ferrisWheelMixer here
let ferrisWheelAction; // Declare ferrisWheelAction here
let model; // Declare model here
let boat; // <<< Змінна для човна

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
    console.log('All models loaded');
    popupButton.disabled = false;
};

popupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

// --- Reference Point Marker ---
const markerGeometry = new THREE.SphereGeometry(0.3, 16, 16);
const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, visible: false }); // Green
const referenceMarker = new THREE.Mesh(markerGeometry, markerMaterial);
referenceMarker.position.set(-10, 1.75, 5);
scene.add(referenceMarker);
// -----------------------------


// Визначаємо, на якій відстані від куба буде камера
const cameraOffset = CONFIG.CAMERA_OFFSET;

// --- Camera Setup ---
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// --- Falling Model Setup ---
let fallingCube; // Will be the loaded FBX model
const fbxLoader = new FBXLoader(loadingManager);

// --- Platform Setup ---
const platformGeometry = new THREE.PlaneGeometry(2, 2);
const platformMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
const platform = new THREE.Mesh(platformGeometry, platformMaterial);
platform.rotation.x = -Math.PI / 2;
platform.position.set(-16.2, 36.9, 5);
platform.receiveShadow = true;
scene.add(platform);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    }
});

function hasMesh(object) {
    if (object.isMesh || object.isSkinnedMesh) {
        return true;
    }

    for (const child of object.children) {
        if (hasMesh(child)) {
            return true;
        }
    }

    return false;
}

fbxLoader.load(fbxModelUrl, (object) => {
    fallingCube = object;
    window.fallingCube = fallingCube;
    fallingCube.scale.set(0.06, 0.06, 0.06); // Adjust scale if necessary
    fallingCube.rotation.y = Math.PI / 2; // Rotate 90 degrees to the left
    fallingCube.position.set(-16.2, 37, 5); // Initial position

    // Inspect the loaded model hierarchy and hide non-essential helpers
    fallingCube.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true; // Optional: if the model should receive shadows from other objects
        }
        if (child.name.startsWith('nurbsCircle') && !hasMesh(child)) {
            child.visible = false;
        }
    });

    scene.add(fallingCube);

    // Animation setup
    if (fallingCube.animations && fallingCube.animations.length > 0) {
        mixer = new THREE.AnimationMixer(fallingCube);
        const action = mixer.clipAction(fallingCube.animations[0]);
        action.play();
    }

    // Встановлюємо початкову позицію камери відносно моделі
    const modelWorldPosition = new THREE.Vector3();
    fallingCube.getWorldPosition(modelWorldPosition);
    camera.position.copy(modelWorldPosition.clone().add(cameraOffset));
    camera.lookAt(modelWorldPosition);

    // --- Анімація куба в кілька етапів ---
    if (fallingCube) {
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
    }
});


// --- Renderer Setup ---
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, logarithmicDepthBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true; // Enable shadows
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Додаємо для м'яких тіней
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);
renderer.outputColorSpace = THREE.SRGBColorSpace;

// --- Controls ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false; // Disabled until the cube lands

// --- GUI ---
const gui = new GUI();
const lightingManager = new LightingManager(scene, renderer, camera, gui);







// --- Для перевірки ---
// const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(helper);



let water;
let landingPlane;
let collisionDetected = false;
const cubeBoundingBox = new THREE.Box3();
const planeBoundingBox = new THREE.Box3();

// --- Load Model ---
const loader = new GLTFLoader(loadingManager);
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./libs/draco/gltf/');
loader.setDRACOLoader(dracoLoader);
loader.load(modelUrl, function(gltf) {
    model = gltf.scene;
    window.model = model; // Expose for testing

    // --- Налаштування моделі (поворот, масштаб, позиція) ---
    model.rotation.y = 2;

    const wheelObjects = [];
    // Traverse the model to enable shadows and find the target planes
    console.log('Model elements:');
    model.traverse(function(node) {
        console.log(node.name);
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
        if (node.name === 'wheel' || node.name.startsWith('car_baked001')) {
            wheelObjects.push(node);
        }
        if (node.name === 'Cube_Cube001') {
            logoManager.addLogo(node, wordpressLogoUrl);
        }
        if (node.name === 'Cube') {
            logoManager.addLogo(node, cssLogoUrl);
        }
        if (node.name === 'Downtown_Center_City1456') {
            logoManager.addLogo(node, htmlLogoUrl);
        }
        if (node.name === 'Mesh011') {
            logoManager.addLogo(node, shopifyLogoUrl);
        }
        if (node.name === 'MainBridge') {
            logoManager.addLogo(node, androidLogoUrl);
        }
        if (node.name === 'BackBridge') {
            logoManager.addLogo(node, iosLogoUrl);
        }
        // +++ ПОШУК ЧОВНА +++
        if (node.name === 'Boat') {
            boat = node; // Зберігаємо об'єкт човна
            console.log('Boat object found:', boat);
        }
        // +++ КІНЕЦЬ ПОШУКУ +++
    });
    scene.add(model);

    if (wheelObjects.length > 0) {
        islandMixer = new THREE.AnimationMixer(model);
        const tracks = [];
        wheelObjects.forEach(obj => {
            const axis = new THREE.Vector3(0, 1, 0);
            const qInitial = new THREE.Quaternion().setFromAxisAngle(axis, 0);
            const qMiddle = new THREE.Quaternion().setFromAxisAngle(axis, Math.PI);
            const qFinal = new THREE.Quaternion().setFromAxisAngle(axis, 2 * Math.PI);

            const times = [0, 4, 8]; // Start, middle, and end times
            const values = [
                ...qInitial.toArray(),
                ...qMiddle.toArray(),
                ...qFinal.toArray(),
            ];
            const track = new THREE.QuaternionKeyframeTrack(obj.name + '.quaternion', times, values);
            tracks.push(track);
        });

        const clip = new THREE.AnimationClip('WheelAnimation', -1, tracks);
        const action = islandMixer.clipAction(clip);
        action.setLoop(THREE.LoopRepeat);
        action.play();
    }

    // Play ferris_wheel_armature animation
    if (gltf.animations && gltf.animations.length > 0) {
        const ferrisWheelClip = THREE.AnimationClip.findByName(gltf.animations, 'ferris_wheel_armature|ferris_wheel_armature|ferriss_wheel_acti');
        if (ferrisWheelClip) {
            ferrisWheelMixer = new THREE.AnimationMixer(model);
            ferrisWheelAction = ferrisWheelMixer.clipAction(ferrisWheelClip);
            ferrisWheelAction.setLoop(THREE.LoopRepeat);
            ferrisWheelAction.play();
        } else {
            console.warn('Animation clip "ferris_wheel_armature|ferris_wheel_armature|ferriss_wheel_acti" not found.');
        }
    }



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


// --- Анімація куба в кілька етапів ---
if (fallingCube) {
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
}


// --- Arrow Event Listeners ---
rightArrow.addEventListener('click', () => {
    if (curveManager) curveManager.move('forward');
});
leftArrow.addEventListener('click', () => {
    if (curveManager) curveManager.move('backward');
});

// --- Keyboard Event Listeners ---
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        if (curveManager) curveManager.move('backward');
    } else if (event.key === 'ArrowRight') {
        if (curveManager) curveManager.move('forward');
    }
});


// --- Animation Loop ---
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    // --- Raycasting for Tooltip ---
    if (model) {
        // console.log('Raycasting on model:', model);
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(model, true);

        if (intersects.length > 0) {
            // console.log('Intersects:', intersects);
            let objectToShow = intersects[0].object;
            let objectName = '';

            // Traverse up the hierarchy to find a name
            while (objectToShow && !objectName) {
                if (objectToShow.name && objectToShow.name.trim() !== '' && objectToShow.name.trim() !== 'Scene') {
                    objectName = objectToShow.name;
                }
                objectToShow = objectToShow.parent;
            }
            // console.log('Found name:', objectName);

            if (objectName) {
                intersectedObject = intersects[0].object; // Keep track of the actual intersected mesh
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
    // -----------------------------

    if (curveManager) { curveManager.updateVisualsInLoop(); }

    const elapsedTime = clock.getElapsedTime();
    const delta = clock.getDelta();

    if (mixer) {
        mixer.update(delta);
    }

    if (islandMixer) {
        islandMixer.update(delta);
    }

    if (ferrisWheelMixer) {
        // ferrisWheelMixer.update(delta);
    }

    if (ferrisWheelAction) {
        const elapsedTime = clock.getElapsedTime();
        ferrisWheelAction.time = elapsedTime % ferrisWheelAction.getClip().duration;
        ferrisWheelMixer.update(0); // Update with 0 delta to apply the new time
    }



    if (logoManager) {
        logoManager.update(camera);
    }

    if (water) {
        water.update(elapsedTime);

        // +++ МАТЕМАТИЧНА ЛОГІКА ПЛАВАННЯ ЧОВНА (БЕЗ RAYCAST) +++
        if (boat && water) {
            const boatPosition = new THREE.Vector3();
            boat.getWorldPosition(boatPosition);

            // 1. Отримуємо висоту води в позиції човна за допомогою нової функції
            const waterHeight = water.getHeightAt(boatPosition.x, boatPosition.z);

            // 2. Плавно інтерполюємо позицію човна до розрахованої висоти
            // +0.1 - невеликий зсув, щоб човен був над ватерлінією
            const targetBoatY = waterHeight + 0.1;
            boat.position.y = THREE.MathUtils.lerp(boat.position.y, targetBoatY, 0.1);
        }
        // +++ КІНЕЦЬ ЛОГІКИ ПЛАВАННЯ +++
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
            // 1. Ініціалізуємо менеджер
            curveManager = new CurveManager(scene, gui, camera, controls, fallingCube);
            // Set the exact coordinates from the curve's start point
            const hardcodedStartPoint = curveManager.config.segments[0].p0;
            fallingCube.position.copy(hardcodedStartPoint);

            // Orient the model correctly on landing
            const firstCurve = new THREE.CubicBezierCurve3(
                curveManager.config.segments[0].p0,
                curveManager.config.segments[0].h0,
                curveManager.config.segments[0].h1,
                curveManager.config.segments[0].p1
            );
            const tangent = firstCurve.getTangentAt(0);
            const lookAtPosition = new THREE.Vector3().addVectors(hardcodedStartPoint, tangent);

            // Reset rotation before applying new one
            fallingCube.rotation.set(0, 0, 0);
            fallingCube.lookAt(lookAtPosition);
            fallingCube.rotation.y += Math.PI / 2; // Apply initial rotation


            // 2. Create the editor visuals and GUI with the original, unaltered points
            curveManager.createVisuals();
            curveManager.setupGUI();

            // 3. Initial camera setup to look at the cube's new static position
            const targetCameraPosition = fallingCube.position.clone().add(cameraOffset);
            camera.position.copy(targetCameraPosition);
            camera.lookAt(fallingCube.position);
        }
    }

    if (!collisionDetected && fallingCube) {
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

window.addEventListener('mousemove', (event) => {
    // Normalize mouse coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
});