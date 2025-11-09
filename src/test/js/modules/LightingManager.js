import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

export class LightingManager {
    constructor(scene, renderer, camera, gui) {
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        this.gui = gui;

        this.sky = new Sky();
        this.sun = new THREE.Vector3();
        this.directionalLight = null; // Ініціалізуємо пізніше

        this.effectController = {
            turbidity: 10,
            rayleigh: 0.165,
            mieCoefficient: 0.009,
            mieDirectionalG: 1,
            elevation: 60,
            azimuth: 60,
            exposure: 0.8

        };

        this.initSky();
        this.initLights();
        this.setupGUI();
        this.guiChanged(); // Перший виклик для застосування налаштувань

    }

    initSky() {
        // Тут буде код для створення неба
        this.sky.scale.setScalar(450000);
        this.scene.add(this.sky);
    }
    initLights() {
        // --- Lighting ---
        // Ambient light to softly illuminate all objects in the scene equally
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Increased intensity
        this.scene.add(ambientLight);

        // Hemisphere light for more natural ambient lighting (sky and ground colors)
        const hemisphereLight = new THREE.HemisphereLight(0xb1e1ff, 0xb97a20, 0.7); // Sky color, ground color, intensity
        this.scene.add(hemisphereLight);

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 3);
        this.directionalLight.position.copy(this.sun).multiplyScalar(50);
        this.directionalLight.target.position.set(0, 0, 0);
        this.scene.add(this.directionalLight.target);

        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.mapSize.set(4096, 4096);
        this.directionalLight.shadow.camera.left = -50;
        this.directionalLight.shadow.camera.right = 50;
        this.directionalLight.shadow.camera.top = 50;
        this.directionalLight.shadow.camera.bottom = -50;
        this.directionalLight.shadow.camera.near = 0.5;
        this.directionalLight.shadow.camera.far = 200;

        this.directionalLight.shadow.bias = -0.002;
        this.directionalLight.shadow.normalBias = 0.05;

        this.scene.add(this.directionalLight);
        // Point light for localized illumination (e.g., a lamp)
        const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Color, intensity, distance
        pointLight.position.set(0, 5, 0); // Position the point light
        this.scene.add(pointLight);

    }

    guiChanged() {

        const uniforms = this.sky.material.uniforms;
        uniforms['turbidity'].value = this.effectController.turbidity;
        uniforms['rayleigh'].value = this.effectController.rayleigh;
        uniforms['mieCoefficient'].value = this.effectController.mieCoefficient;
        uniforms['mieDirectionalG'].value = this.effectController.mieDirectionalG;

        const phi = THREE.MathUtils.degToRad(90 - this.effectController.elevation);
        const theta = THREE.MathUtils.degToRad(this.effectController.azimuth);

        this.sun.setFromSphericalCoords(1, phi, theta);

        uniforms['sunPosition'].value.copy(this.sun);

        // Update directional light position based on sun
        if (this.directionalLight) {
            this.directionalLight.position.copy(this.sun).multiplyScalar(50);
        }

        if (this.renderer) {
            this.renderer.toneMappingExposure = this.effectController.exposure;

        }
    }

    setupGUI() {
        if (this.gui) {
            const skyFolder = this.gui.addFolder('Sky');
            skyFolder.add(this.effectController, 'turbidity', 0.0, 20.0, 0.1).onChange(() => this.guiChanged());
            skyFolder.add(this.effectController, 'rayleigh', 0.0, 4.0, 0.001).onChange(() => this.guiChanged());
            skyFolder.add(this.effectController, 'mieCoefficient', 0.0, 0.1, 0.001).onChange(() => this.guiChanged());
            skyFolder.add(this.effectController, 'mieDirectionalG', 0.0, 1.0, 0.001).onChange(() => this.guiChanged());
            skyFolder.add(this.effectController, 'elevation', 0, 90, 0.1).onChange(() => this.guiChanged());
            skyFolder.add(this.effectController, 'azimuth', 0, 360, 0.1).onChange(() => this.guiChanged());
            skyFolder.add(this.effectController, 'exposure', 0.0, 1.0, 0.0001).onChange(() => this.guiChanged());
            skyFolder.open();
        }
    }
}