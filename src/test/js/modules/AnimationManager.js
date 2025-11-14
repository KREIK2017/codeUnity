import * as THREE from 'three';
import gsap from 'gsap';

class AnimationManager {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.mixers = [];
        this.gsapTimelines = [];
        this.clock = new THREE.Clock();
        this.initialTogglePassed = false; // Flag to handle initial ScrollTrigger state
        console.log("AnimationManager initialized.");
    }

    addGSAPTimeline(timeline) {
        this.gsapTimelines.push(timeline);
    }

    killAllGSAPTimelines() {
        this.gsapTimelines.forEach(timeline => timeline.kill());
        this.gsapTimelines = []; // Clear the array after killing
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

    setupInitialCubeAnimation(fallingCube, CONFIG, controls) { // Accept controls
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#scroll-container",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onToggle: self => {
                    if (!this.initialTogglePassed && !self.isActive) {
                        // First "off" toggle is on initialization. Ignore it and set the flag.
                        this.initialTogglePassed = true;
                        // We must ensure pointer-events are none and controls are disabled initially.
                        this.renderer.domElement.style.pointerEvents = 'none';
                        if (controls) controls.enabled = false;
                        return;
                    }

                    // Standard logic for all other toggles
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
        
        this.addGSAPTimeline(tl); // Add the timeline to be managed
    }

    // You can add methods here to manage GSAP timelines as well
    // For example:
    // addGSAPTimeline(timeline) {
    //     this.gsapTimelines.push(timeline);
    // }
    // playAllGSAPTimelines() {
    //     this.gsapTimelines.forEach(timeline => timeline.play());
    // }
}

export { AnimationManager };
