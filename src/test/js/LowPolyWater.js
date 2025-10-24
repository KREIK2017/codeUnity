
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
      varying vec3 v_world_position;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        // Waves with a slight rotation to break the grid pattern
        float wave_x = modelPosition.x * u_waves_frequency.x + u_time * u_waves_speed;
        float wave_z = modelPosition.z * u_waves_frequency.y + u_time * u_waves_speed;
        float elevation = sin(wave_x) * sin(wave_z) * u_waves_elevation;

        modelPosition.y += elevation;
        
        v_elevation = elevation;
        v_world_position = modelPosition.xyz;

        gl_Position = projectionMatrix * viewMatrix * modelPosition;
      }
    `;

    const fragmentShader = `
      uniform vec3 u_deep_color;
      uniform vec3 u_shallow_color;
      uniform float u_color_offset;
      uniform float u_color_multiplier;

      varying float v_elevation;
      varying vec3 v_world_position;

      void main() {
        // Calculate normal for flat shading
        vec3 normal = normalize(cross(dFdx(v_world_position), dFdy(v_world_position)));
        
        // Simple directional light
        vec3 light_direction = normalize(vec3(0.8, 0.7, 0.2));
        float light_intensity = max(0.25, dot(normal, light_direction));

        // Mix color based on depth
        float mix_strength = (v_elevation + u_color_offset) * u_color_multiplier;
        vec3 color = mix(u_deep_color, u_shallow_color, mix_strength);

        // Apply lighting
        vec3 final_color = color * light_intensity;

        gl_FragColor = vec4(final_color, 1.0);
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
