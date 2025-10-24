import * as THREE from 'three';

// This class is an adaptation of the user-provided code to work as a component
// within the existing project structure and with modern Three.js (BufferGeometry).
export class LowPolyWater {
  constructor() {
    this.waves = [];
    
    // 1. Create Geometry and Material (from user's `creatWaves`)
    const geometry = new THREE.PlaneGeometry(1500, 1500, 40, 40);
    geometry.rotateX(-Math.PI / 2);

    // We need to work with a non-indexed geometry to ensure flat shading works correctly
    // when vertices are manipulated.
    this.geometry = geometry.toNonIndexed();

    const positionAttribute = this.geometry.attributes.position;
    const vertexCount = positionAttribute.count;

    for (let i = 0; i < vertexCount; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      const z = positionAttribute.getZ(i);

      this.waves.push({
        x: x,
        y: y,
        z: z,
        ang: Math.random() * Math.PI * 2,
        amp: 3 + Math.random() * 7, // Wave amplitude
        speed: 0.016 + Math.random() * 0.032,
      });
    }

    const material = new THREE.MeshPhongMaterial({
      color: 0x68c3c0,
      flatShading: true, // This works on MeshPhongMaterial
      transparent: true,
      opacity: 0.9
    });

    this.mesh = new THREE.Mesh(this.geometry, material);
    this.mesh.receiveShadow = true;
  }

  // 2. Animate waves (from user's `moveWaves`, adapted for BufferGeometry)
  update() {
    const positionAttribute = this.geometry.attributes.position;
    const vertexCount = positionAttribute.count;

    for (let i = 0; i < vertexCount; i++) {
      const waveData = this.waves[i];
      
      // Update the angle
      waveData.ang += waveData.speed;

      // Calculate new Y position based on sine wave
      const newY = waveData.y + Math.sin(waveData.ang) * waveData.amp;
      positionAttribute.setY(i, newY);
    }

    // Important: We need to recompute normals for flat shading to work correctly
    this.geometry.computeVertexNormals();
    positionAttribute.needsUpdate = true; // Mark the attribute as needing an update
  }
}