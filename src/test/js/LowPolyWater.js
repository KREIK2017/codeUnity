import * as THREE from 'three';

export class LowPolyWater {
  constructor() {
    this.waves = [];
    
    // Create a standard, indexed PlaneGeometry. This will keep the surface continuous.
    this.geometry = new THREE.PlaneGeometry(1500, 1500, 50, 50);
    this.geometry.rotateX(-Math.PI / 2);

    const positionAttribute = this.geometry.attributes.position;
    const vertexCount = positionAttribute.count;

    // Create wave data for each unique vertex.
    for (let i = 0; i < vertexCount; i++) {
      const y = positionAttribute.getY(i);

      this.waves.push({
        y: y,
        ang: Math.random() * Math.PI * 2,
        amp: 2 + Math.random() * 5, // Wave amplitude
        speed: 0.016 + Math.random() * 0.022,
      });
    }

    const material = new THREE.MeshPhongMaterial({
      color: 0x68c3c0,
      flatShading: true, // This will work on a continuous geometry.
      transparent: true,
      opacity: 0.9
    });

    this.mesh = new THREE.Mesh(this.geometry, material);
    this.mesh.receiveShadow = true;
  }

  update() {
    const positionAttribute = this.geometry.attributes.position;
    const vertexCount = positionAttribute.count;

    for (let i = 0; i < vertexCount; i++) {
      const waveData = this.waves[i];
      
      waveData.ang += waveData.speed;

      // Calculate new Y position. The original Y position is stored in waveData.y
      const newY = waveData.y + Math.sin(waveData.ang) * waveData.amp;
      positionAttribute.setY(i, newY);
    }

    // We must NOT recompute normals, as that would smooth the lighting.
    // The flatShading property on the material is enough.
    positionAttribute.needsUpdate = true;
  }
}
