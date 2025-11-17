import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { LowPolyWater } from '../LowPolyWater.js';
import modelUrl from '../../UnityCode_Island.glb';
import fbxModelUrl from '../../R01_Animate_S.fbx';

import wordpressLogoUrl from '../../textures/logos/blue-wordpress-logo-hd-picture-3.png';
import cssLogoUrl from '../../textures/logos/CSS3_logo_and_wordmark.svg.png';
import htmlLogoUrl from '../../textures/logos/HTML5_logo_and_wordmark.svg.png';
import shopifyLogoUrl from '../../textures/logos/Shopify-Logo-PNG-HD.png';
import androidLogoUrl from '../../textures/logos/icons8-android-100.png';
import iosLogoUrl from '../../textures/logos/icons8-apple-intelligence-100.png';

export class AssetLoader {

    constructor(scene, loadingManager, logoManager) {
        this.scene = scene;
        this.loadingManager = loadingManager;
        this.logoManager = logoManager; // <--- Додано цю властивість
        this.assets = {}; // Тут будемо зберігати завантажені ресурси

        this.gltfLoader = new GLTFLoader(this.loadingManager);
        this.fbxLoader = new FBXLoader(this.loadingManager);

        // Налаштування DRACOLoader

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('./libs/draco/gltf/');
        this.gltfLoader.setDRACOLoader(dracoLoader);

    }

    loadAll() {

        const promises = [
            this.loadFallingCube(),
            this.loadIsland()

        ];


        return Promise.all(promises).then(() => {
            // Коли всі Promise виконані, повертаємо об'єкт з ресурсами

            return this.assets;

        });

    }

    loadFallingCube() {
        // Цей метод ми реалізуємо на наступному кроці
        return new Promise((resolve, reject) => {
            this.fbxLoader.load(fbxModelUrl, (object) => {
                const fallingCube = object;
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
                    if (child.name.startsWith('nurbsCircle') && !this.hasMesh(child)) {
                        child.visible = false;
                    }
                });

                this.scene.add(fallingCube);

                // Зберігаємо ресурси в this.assets
                this.assets.fallingCube = fallingCube;

                // Animation setup
                if (fallingCube.animations && fallingCube.animations.length > 0) {
                    const mixer = new THREE.AnimationMixer(fallingCube);
                    const action = mixer.clipAction(fallingCube.animations[0]);
                    action.play();
                    this.assets.mixer = mixer;
                }
                resolve();
            }, undefined, (error) => {
                console.error('An error happened while loading the FBX model:', error);
                reject(error); // Повідомляємо Promise про помилку

            });

        });

    }

    loadIsland() {
        return new Promise((resolve, reject) => {
            this.gltfLoader.load(modelUrl, (gltf) => {
                const model = gltf.scene;
                window.model = model; // Для дебагу
                model.rotation.y = 2;

                const wheelObjects = [];
                let landingPlane, boat, propeller1, propeller2;

                model.traverse((node) => {
                    // Removed generic shadow casting/receiving for all meshes
                    if (node.name === 'Plane005') landingPlane = node;
                    if (node.name === 'Boat') boat = node;
                    if (node.name === 'Roundcube001') propeller1 = node;
                    if (node.name === 'Roundcube002') propeller2 = node;
                    if (node.name === 'wheel' || node.name.startsWith('car_baked001')) {
                        wheelObjects.push(node);
                    }
                    // Використовуємо this.logoManager та імпортовані URL
                    if (node.name === 'Cube_Cube001') this.logoManager.addLogo(node, wordpressLogoUrl);
                    if (node.name === 'Cube') this.logoManager.addLogo(node, cssLogoUrl);
                    if (node.name === 'Downtown_Center_City1456') this.logoManager.addLogo(node, htmlLogoUrl);
                    if (node.name === 'Mesh011') this.logoManager.addLogo(node, shopifyLogoUrl);
                    if (node.name === 'MainBridge') this.logoManager.addLogo(node, androidLogoUrl);
                    if (node.name === 'BackBridge') this.logoManager.addLogo(node, iosLogoUrl);
                });

                this.scene.add(model);

                // Зберігаємо ключові об'єкти
                this.assets.model = model;
                this.assets.landingPlane = landingPlane;
                this.assets.boat = boat;
                this.assets.propeller1 = propeller1;
                this.assets.propeller2 = propeller2;

                // Explicitly enable receiveShadow for the landing plane
                if (this.assets.landingPlane) {
                    this.assets.landingPlane.receiveShadow = true;
                }

                // Анімація коліс
                if (wheelObjects.length > 0) {
                    const islandMixer = new THREE.AnimationMixer(model);
                    const tracks = [];
                    wheelObjects.forEach(obj => {
                        const axis = new THREE.Vector3(0, 1, 0);
                        const qInitial = new THREE.Quaternion().setFromAxisAngle(axis, 0);
                        const qMiddle = new THREE.Quaternion().setFromAxisAngle(axis, Math.PI);
                        const qFinal = new THREE.Quaternion().setFromAxisAngle(axis, 2 * Math.PI);
                        const times = [0, 4, 8];
                        const values = [...qInitial.toArray(), ...qMiddle.toArray(), ...qFinal.toArray()];
                        const track = new THREE.QuaternionKeyframeTrack(obj.name + '.quaternion', times, values);
                        tracks.push(track);
                    });
                    const clip = new THREE.AnimationClip('WheelAnimation', -1, tracks);
                    const action = islandMixer.clipAction(clip);
                    action.setLoop(THREE.LoopRepeat);
                    action.play();
                    this.assets.islandMixer = islandMixer; // Зберігаємо мікшер
                }

                // Анімація колеса огляду
                if (gltf.animations && gltf.animations.length > 0) {
                    const ferrisWheelClip = THREE.AnimationClip.findByName(gltf.animations, 'ferris_wheel_armature|ferris_wheel_armature|ferriss_wheel_acti');
                    if (ferrisWheelClip) {
                        const ferrisWheelMixer = new THREE.AnimationMixer(model);
                        const ferrisWheelAction = ferrisWheelMixer.clipAction(ferrisWheelClip);
                        ferrisWheelAction.setLoop(THREE.LoopRepeat);
                        ferrisWheelAction.play();
                        this.assets.ferrisWheelMixer = ferrisWheelMixer;
                        this.assets.ferrisWheelAction = ferrisWheelAction;
                    }
                }

                // Створення води
                const water = new LowPolyWater(model);
                water.mesh.position.y = 0.7;
                this.scene.add(water.mesh);
                this.assets.water = water; // Зберігаємо воду

                resolve();
            }, undefined, (error) => {
                console.error('An error happened while loading the GLTF model:', error);
                reject(error);
            });
        });
    }



    // Утилітарна функція, перенесена з main.js
    hasMesh(object) {

        if (object.isMesh || object.isSkinnedMesh) {

            return true;

        }

        for (const child of object.children) {

            if (this.hasMesh(child)) { // Звертаємось через this

                return true;

            }

        }

        return false;

    }
}