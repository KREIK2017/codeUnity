import * as THREE from 'three';
import gsap from 'gsap';

export class CurveManager {
    constructor(scene, camera, controls, fallingCube, popupManager) {
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;
        this.fallingCube = fallingCube;
        this.popupManager = popupManager; // Store the popup manager
        this.currentPointIndex = 0;
        this.isMoving = false;
        this.cameraOrbitAngle = 0;
        this.crystals = [];
        this.pointToCrystalMap = new Map();

        this.config = {
            segments: [ // Array to hold multiple curve segments
                {
                    p0: new THREE.Vector3(-10, 1.35, 5), // Anchor A (will be updated to landing spot)
                    h0: new THREE.Vector3(-3.5, 4, 6), // Handle for A
                    h1: new THREE.Vector3(-4.6, 2, 11.64), // Handle for B
                    p1: new THREE.Vector3(1, 4, 11.5) // Anchor B
                },
                {
                    // Placeholder for the second segment
                    p0: new THREE.Vector3(1, 4, 11.5), // Anchor B (from previous segment)
                    h0: new THREE.Vector3(10.5, 4, 12.5), // Handle for B
                    h1: new THREE.Vector3(7, 3.5, 10.12), // Handle for C
                    p1: new THREE.Vector3(6.8, 3.5, 7) // Anchor C
                },
                {
                    // START of W-shape path (Segment 3)
                    p0: new THREE.Vector3(6.8, 3.5, 7), // Anchor C (Point 3)
                    h0: new THREE.Vector3(7.5, 3, 1.96),
                    h1: new THREE.Vector3(5.8, 3.2, -0.36),
                    p1: new THREE.Vector3(5.44, 3.3, -0.96) // Anchor W1
                },
                {
                    // W-shape path (Segment 4)
                    p0: new THREE.Vector3(5.44, 3.3, -0.96), // Anchor W1
                    h0: new THREE.Vector3(5.2, 3.3, -4),
                    h1: new THREE.Vector3(4.7, 3.1, -5),
                    p1: new THREE.Vector3(3.5, 3.3, -7) // Anchor W2
                },
                {
                    // END of W-shape path (Segment 5)
                    p0: new THREE.Vector3(3.5, 3.3, -7), // Anchor W2
                    h0: new THREE.Vector3(1, 3.2, -8.7),
                    h1: new THREE.Vector3(-1.5, 3.5, -6.7),
                    p1: new THREE.Vector3(-4, 4.1, -9) // Anchor D (Point 4)
                },
                {
                    // Segment 6
                    p0: new THREE.Vector3(-4, 4.1, -9),
                    h0: new THREE.Vector3(-10.8, 5.3, -9.5),
                    h1: new THREE.Vector3(-10, 2.58, 1.9),
                    p1: new THREE.Vector3(-10, 1.35, 5)
                }

            ],
            visuals: [], // Array to hold visuals for each segment
            curvePath: null, // Now a CurvePath
            curveLine: null
        };
    }

    createVisuals() {
        const sphereGeo = new THREE.SphereGeometry(0.25, 16, 16);
        const handleGeo = new THREE.SphereGeometry(0.15, 16, 16);

        // --- Cleanup from previous calls ---
        this.crystals.forEach(c => this.scene.remove(c));
        this.crystals = [];
        this.pointToCrystalMap.clear();
        this.config.visuals.forEach(segmentVisuals => {
            Object.values(segmentVisuals).forEach(v => this.scene.remove(v));
        });
        this.config.visuals = [];

        // --- Create invisible spheres for GUI ---
        this.config.segments.forEach((segment) => {
            const segmentVisuals = {};
            segmentVisuals.p0 = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0x00ff00, visible: false }));
            segmentVisuals.p1 = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0x00ff00, visible: false }));
            segmentVisuals.h0 = new THREE.Mesh(handleGeo, new THREE.MeshBasicMaterial({ color: 0xff0000, visible: false }));
            segmentVisuals.h1 = new THREE.Mesh(handleGeo, new THREE.MeshBasicMaterial({ color: 0xff0000, visible: false }));

            segmentVisuals.p0.position.copy(segment.p0);
            segmentVisuals.p1.position.copy(segment.p1);
            segmentVisuals.h0.position.copy(segment.h0);
            segmentVisuals.h1.position.copy(segment.h1);

            Object.values(segmentVisuals).forEach(v => this.scene.add(v));
            this.config.visuals.push(segmentVisuals);
        });

        // --- Create visible crystals above the points ---
        const octahedronGeo = new THREE.OctahedronGeometry(0.25, 0);
        const octahedronMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const edgesGeo = new THREE.EdgesGeometry(octahedronGeo);
        const edgesMat = new THREE.LineBasicMaterial({ color: 0xcccccc });

        const createCrystal = () => {
            const group = new THREE.Group();
            group.add(new THREE.Mesh(octahedronGeo, octahedronMat));
            group.add(new THREE.LineSegments(edgesGeo, edgesMat));
            return group;
        };

        const uniquePoints = new Map();
        this.config.segments.forEach(segment => {
            uniquePoints.set(segment.p0, segment.p0);
        });

        uniquePoints.forEach(pointVec => {
            const crystalGroup = createCrystal();
            crystalGroup.position.copy(pointVec).add(new THREE.Vector3(0, 0.5, 0));
            this.scene.add(crystalGroup);
            this.crystals.push(crystalGroup);
            this.pointToCrystalMap.set(pointVec, crystalGroup);
        });

        // --- Set Initial State ---
        // Hide the crystal at the robot's starting point
        const initialPoint = this.config.segments[0].p0;
        const initialCrystal = this.pointToCrystalMap.get(initialPoint);
        if (initialCrystal) {
            initialCrystal.visible = false;
        }

        this._updateCurve();
    }




    _updateCurve() {
        // 1. Update the curve path object
        if (!this.config.curvePath) {
            this.config.curvePath = new THREE.CurvePath();
        } else {
            // Clear existing curves from the path
            this.config.curvePath.curves = [];
        }

        this.config.segments.forEach(segment => {
            const curve = new THREE.CubicBezierCurve3(segment.p0, segment.h0, segment.h1, segment.p1);
            this.config.curvePath.add(curve);
        });

        // 2. Update the visual line
        const points = this.config.curvePath.getPoints(50 * this.config.segments.length); // More points for longer path
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        if (!this.config.curveLine) {
            const material = new THREE.LineBasicMaterial({ color: 0xffff00, visible: false });
            this.config.curveLine = new THREE.Line(geometry, material);
            this.scene.add(this.config.curveLine);
        } else {
            this.config.curveLine.geometry.dispose();
            this.config.curveLine.geometry = geometry;
        }

    }

        move(direction) {
            if (!this.config.curvePath || this.isMoving) return;
    
            const movementDuration = 2.0;
            const fadeDuration = 1.0;
    
            // --- Handle Departure Crystal (Animate In) ---
            const departurePoint = this.config.segments[this.currentPointIndex].p0;
            const departureCrystal = this.pointToCrystalMap.get(departurePoint);
            if (departureCrystal) {
                departureCrystal.visible = true;
                gsap.to(departureCrystal.scale, { x: 1, y: 1, z: 1, duration: fadeDuration, ease: 'power2.out' });
                departureCrystal.children.forEach(child => {
                    child.material.transparent = true;
                    gsap.to(child.material, { opacity: 1, duration: fadeDuration, ease: 'power2.out' });
                });
            }
    
            this.isMoving = true;
            if (this.controls) this.controls.enabled = false;
    
            // --- Determine Target and Handle Arrival Crystal (Animate Out) ---
            const numPoints = this.config.segments.length;
            const previousPointIndex = this.currentPointIndex;
    
            if (direction === 'forward') {
                this.currentPointIndex = (this.currentPointIndex + 1) % numPoints;
            } else {
                this.currentPointIndex = (this.currentPointIndex - 1 + numPoints) % numPoints;
            }
    
            const arrivalPoint = this.config.segments[this.currentPointIndex].p0;
            const arrivalCrystal = this.pointToCrystalMap.get(arrivalPoint);
            if (arrivalCrystal) {
                const animationDelay = Math.max(0, movementDuration - fadeDuration);
                gsap.to(arrivalCrystal.scale, { x: 0.01, y: 0.01, z: 0.01, duration: fadeDuration, ease: 'power2.in', delay: animationDelay });
                arrivalCrystal.children.forEach(child => {
                    child.material.transparent = true;
                    gsap.to(child.material, { opacity: 0, duration: fadeDuration, ease: 'power2.in', delay: animationDelay });
                });
            }
            
            // --- Animate Robot and Camera ---
            const curveIndex = (direction === 'forward') ? previousPointIndex : this.currentPointIndex;
            const curve = this.config.curvePath.curves[curveIndex];
            const angleStep = Math.PI / 3;
            const targetCameraOrbitAngle = (direction === 'forward') ? this.cameraOrbitAngle + angleStep : this.cameraOrbitAngle - angleStep;
            const animation = {
                progress: (direction === 'forward') ? 0 : 1,
                currentCameraOrbitAngle: this.cameraOrbitAngle
            };
            const targetProgress = (direction === 'forward') ? 1 : 0;
    
            gsap.to(animation, {
                progress: targetProgress,
                currentCameraOrbitAngle: targetCameraOrbitAngle,
                duration: movementDuration,
                ease: 'power1.inOut',
                onUpdate: () => {
                    const newPosition = curve.getPointAt(animation.progress);
                    const tangent = curve.getTangentAt(animation.progress);
                    const lookAtPosition = new THREE.Vector3().addVectors(newPosition, tangent);
    
                    this.fallingCube.position.copy(newPosition);
                    if (direction === 'forward') {
                        this.fallingCube.lookAt(lookAtPosition);
                    } else {
                        const backwardLookAt = new THREE.Vector3().subVectors(newPosition, tangent);
                        this.fallingCube.lookAt(backwardLookAt);
                    }
    
                    const orbitRadius = 8;
                    const orbitHeight = 5;
                    const cameraX = newPosition.x + Math.sin(animation.currentCameraOrbitAngle) * orbitRadius;
                    const cameraZ = newPosition.z + Math.cos(animation.currentCameraOrbitAngle) * orbitRadius;
                    const cameraY = newPosition.y + orbitHeight;
    
                    const targetCameraPos = new THREE.Vector3(cameraX, cameraY, cameraZ);
                    const delta = gsap.ticker.deltaRatio();
                    const alpha = 1 - Math.pow(0.9, delta);
                    this.camera.position.lerp(targetCameraPos, alpha);
    
                    this.camera.lookAt(newPosition);
                },
                onComplete: () => {
                    this.isMoving = false;
                    if (this.controls) this.controls.enabled = true;
                    this.cameraOrbitAngle = animation.currentCameraOrbitAngle;
                    
                    // Show popup for the destination point
                    if (this.popupManager) {
                        this.popupManager.showPopup(this.currentPointIndex);
                    }
                }
            });
        }
    updateVisualsInLoop() {
        const time = performance.now();
        const bobbingSpeed = 0.002;
        const bobbingAmount = 0.1;
        const rotationSpeed = 0.01;

        // Animate crystals
        this.crystals.forEach(crystal => {
            if (crystal.visible) {
                crystal.rotation.y += rotationSpeed;
                // The base position is set by the GUI helpers, we just add the bobbing
                const basePoint = this.pointToCrystalMap.get(crystal);
                // This is a bit of a reverse lookup, not ideal. Let's assume the crystal's userData stores its base point vector
                // Let's correct the logic based on what we stored in createVisuals. We stored the crystal in a map with the point as key.
                // It's better to iterate the map.
            }
        });

        // This is inefficient. A better way:
        this.pointToCrystalMap.forEach((crystal, point) => {
            // Update crystal base position from the point vector (which is updated by GUI)
            crystal.position.x = point.x;
            crystal.position.z = point.z;
            const baseCrystalY = point.y + 0.5; // Recalculate base Y

            if (crystal.visible) {
                crystal.rotation.y += rotationSpeed;
                crystal.position.y = baseCrystalY + Math.sin(time * bobbingSpeed + crystal.position.x) * bobbingAmount;
            } else {
                // Ensure non-visible crystals are at their base position without bobbing
                crystal.position.y = baseCrystalY;
            }
        });


        // Update invisible GUI helper positions from data
        if (this.config.visuals.length > 0) {
            this.config.segments.forEach((segment, segIndex) => {
                const segmentVisuals = this.config.visuals[segIndex];
                if (segmentVisuals) {
                    segmentVisuals.p0.position.copy(segment.p0);
                    segmentVisuals.p1.position.copy(segment.p1);
                    segmentVisuals.h0.position.copy(segment.h0);
                    segmentVisuals.h1.position.copy(segment.h1);
                }
            });
        }
    }
}