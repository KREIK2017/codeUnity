import * as THREE from 'three';

class LogoManager {
    constructor(scene) {
        this.scene = scene;
        this.textureLoader = new THREE.TextureLoader();
        this.logos = [];
    }

    addLogo(targetObject, logoUrl) {
        this.textureLoader.load(logoUrl, (texture) => {
            const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, alphaTest: 0.5, blending: THREE.NormalBlending });
            const geometry = new THREE.PlaneGeometry(1, 1);
            const logo = new THREE.Mesh(geometry, material);

            // Get the bounding box of the target object
            const boundingBox = new THREE.Box3().setFromObject(targetObject);
            const center = boundingBox.getCenter(new THREE.Vector3());
            const size = boundingBox.getSize(new THREE.Vector3());

            // Position the logo above the object
            logo.position.set(center.x, boundingBox.max.y + 2, center.z); // 2 units above the object

            // Scale the logo
            const scale = Math.max(size.x, size.z) * 0.5;
            logo.scale.set(scale, scale, scale);

            this.scene.add(logo);
            this.logos.push(logo);
        });
    }

    update(camera) {
        this.logos.forEach(logo => {
            const cameraQuaternion = camera.quaternion.clone();
            const euler = new THREE.Euler();
            euler.setFromQuaternion(cameraQuaternion, 'YXZ');
            logo.rotation.y = euler.y;
        });
    }
}

export { LogoManager };