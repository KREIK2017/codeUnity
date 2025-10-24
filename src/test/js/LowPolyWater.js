
import * as THREE from 'three';

export class LowPolyWater {
  constructor() {
    // Define the shaders
    const vertexShader = `
      uniform float u_time;
      uniform float u_waves_elevation;
      uniform vec2 u_waves_frequency;
      uniform float u_waves_speed;

      varying float v_elevation;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        // Simple Gerstner-like waves
        float elevation = sin(modelPosition.x * u_waves_frequency.x + u_time * u_waves_speed) *
                         sin(modelPosition.z * u_waves_frequency.y + u_time * u_waves_speed) *
                         u_waves_elevation;

        modelPosition.y += elevation;
        
        v_elevation = elevation;

        gl_Position = projectionMatrix * viewMatrix * modelPosition;
      }
    `;

    const fragmentShader = `
      uniform vec3 u_deep_color;
      uniform vec3 u_shallow_color;
      uniform float u_color_offset;
      uniform float u_color_multiplier;

      varying float v_elevation;

      void main() {
        float mix_strength = (v_elevation + u_color_offset) * u_color_multiplier;
        vec3 color = mix(u_deep_color, u_shallow_color, mix_strength);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Create the geometry
    this.geometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
    this.geometry.rotateX(-Math.PI / 2);

    // Create the material
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        u_time: { value: 0 },
        u_waves_elevation: { value: 5 }, // Wave height
        u_waves_frequency: { value: new THREE.Vector2(0.01, 0.01) }, // Wave "tiling"
        u_waves_speed: { value: 0.05 }, // Wave speed

        u_deep_color: { value: new THREE.Color('#005c7f') }, // Dark blue
        u_shallow_color: { value: new THREE.Color('#00bfff') }, // Lighter blue
        u_color_offset: { value: 0.25 },
        u_color_multiplier: { value: 2.0 }
      },
      flatShading: true, // This is key for the low-poly look
    });

    // Create the mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
  }

  // Method to update time for animation
  update(elapsedTime) {
    this.material.uniforms.u_time.value = elapsedTime * 0.1; // Slow down time a bit
  }
}
