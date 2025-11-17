import * as THREE from 'three';
import gsap from 'gsap';

class AnimationManager {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.mixers = [];
        this.loopingTimelines = []; // For continuous animations like the crane
        this.oneOffTimelines = []; // For animations that run once, like the initial fall
        this.clock = new THREE.Clock();
        this.initialTogglePassed = false;
        console.log("AnimationManager initialized.");
    }

    addLoopingTimeline(timeline) {
        this.loopingTimelines.push(timeline);
    }

    addOneOffTimeline(timeline) {
        this.oneOffTimelines.push(timeline);
    }

    killOneOffTimelines() {
        this.oneOffTimelines.forEach(timeline => timeline.kill());
        this.oneOffTimelines = []; // Clear the array
    }

    update() {
        const delta = this.clock.getDelta();
        for (const mixer of this.mixers) {
            mixer.update(delta);
        }
    }

    addMixer(mixer) {
        this.mixers.push(mixer);
    }

    setupInitialCubeAnimation(fallingCube, CONFIG, controls) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#scroll-container",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onToggle: self => {
                    if (!this.initialTogglePassed && !self.isActive) {
                        this.initialTogglePassed = true;
                        this.renderer.domElement.style.pointerEvents = 'none';
                        if (controls) controls.enabled = false;
                        return;
                    }
                    this.renderer.domElement.style.pointerEvents = self.isActive ? 'none' : 'auto';
                    if (controls) {
                        controls.enabled = !self.isActive;
                    }
                }
            }
        });

        tl.to(fallingCube.position, { x: `+=${CONFIG.CUBE_SLIDE_DISTANCE}`, ease: "power1.in", duration: CONFIG.CUBE_SLIDE_DURATION });
        tl.to(fallingCube.position, { x: `+=${CONFIG.CUBE_FALL_X_OFFSET}`, ease: "none" }, ">");
        tl.to(fallingCube.position, { y: `-=${CONFIG.CUBE_FALL_DISTANCE}`, ease: "power1.in" }, "<");
        tl.to(fallingCube.rotation, { x: CONFIG.CUBE_ROTATION_X, z: CONFIG.CUBE_ROTATION_Z, ease: "power1.inOut" }, "<");

        this.addOneOffTimeline(tl); // Add to one-off timelines
    }

    createCraneAnimation(cable, hookParts) {
        if (!cable || !hookParts || hookParts.length === 0) {
            console.error("Crane parts not provided for animation.");
            return;
        }
        // Prevent this complex setup from running more than once
        if (cable.userData.isManuallyAnimated) return;

        console.log("--- Attempting final, manual vertex animation method. ---");

        const positions = cable.geometry.attributes.position;
        // Create a copy of the original vertex positions to revert to
        const originalPositionsArray = new Float32Array(positions.array);

        // Find the minimum Z value to identify the "top" vertices, which should be pinned.
        let minZ = Infinity;
        for (let i = 0; i < positions.count; i++) {
            minZ = Math.min(minZ, originalPositionsArray[i * 3 + 2]);
        }

        // This is a dummy object whose property will be animated by GSAP
        const target = { stretchAmount: 0 };

        const craneTl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            defaults: {
                ease: "power2.inOut",
                duration: 6
            },
            onUpdate: () => {
                // On every frame, we iterate through ALL vertices
                for (let i = 0; i < positions.count; i++) {
                    // Check if the current vertex is a "top" vertex
                    if (Math.abs(originalPositionsArray[i * 3 + 2] - minZ) < 0.001) {
                        // If it is, pin it to its original position.
                        positions.array[i * 3 + 2] = originalPositionsArray[i * 3 + 2];
                    } else {
                        // If it's NOT a top vertex (i.e., it's a bottom one), apply the stretch.
                        positions.array[i * 3 + 2] = originalPositionsArray[i * 3 + 2] + target.stretchAmount;
                    }
                }
                // Mark the attribute as needing an update
                positions.needsUpdate = true;
            }
        });

        // Animate the 'stretchAmount' property of our dummy target object
        craneTl.to(target, {
            stretchAmount: 75 // Positive value to stretch "down"
        });

        // Animate the hook's position to match the stretch
        craneTl.to(hookParts.map(part => part.position), {
            z: "+=75", // Positive value to move "down"
        }, "<");

        this.addLoopingTimeline(craneTl);
        cable.userData.isManuallyAnimated = true;
    }
}

export { AnimationManager };