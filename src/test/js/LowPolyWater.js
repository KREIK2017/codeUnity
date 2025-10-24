import * as THREE from 'three';

export class LowPolyWater {
    constructor(islandModel) {
        this.waves = [];
        this.deepColor = new THREE.Color('#005c7f');
        this.shallowColor = new THREE.Color('#00bfff');

        // =================================================================
        // 1. КІЛЬКІСТЬ ПОЛІГОНІВ
        // Змініть останні два числа, щоб змінити деталізацію води.
        // Більше число = більше полігонів.
        // =================================================================
        this.geometry = new THREE.PlaneGeometry(1000, 1000, 1000, 1000);
        this.geometry.rotateX(-Math.PI / 2);

        const positionAttribute = this.geometry.attributes.position;
        const vertexCount = positionAttribute.count;

        // Initialize color attribute
        const colors = [];
        for (let i = 0; i < vertexCount; i++) {
            colors.push(this.shallowColor.r, this.shallowColor.g, this.shallowColor.b);
        }
        this.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // Create wave data for each unique vertex.
        for (let i = 0; i < vertexCount; i++) {
            const y = positionAttribute.getY(i);

            // =================================================================
            // 2. ПАРАМЕТРИ ХВИЛЬ
            // 'amp': амплітуда (висота) хвилі.
            // 'speed': швидкість руху хвилі.
            // =================================================================
            this.waves.push({
                y: y,
                ang: Math.random() * Math.PI * 2,
                amp: 0.7, // Амплітуда
                speed: Math.random() * 0.008, // Швидкість
            });
        }

        const material = new THREE.MeshPhongMaterial({
            // color: 0x68c3c0, // No longer needed, using vertex colors
            vertexColors: true, // This enables the depth effect
            flatShading: true, // Re-enabling flat shading as requested
            transparent: true,
            opacity: 0.7
        });

        this.mesh = new THREE.Mesh(this.geometry, material);
        this.mesh.receiveShadow = true;

        // =================================================================
        // ПОЧАТОК: ЛОГІКА ХОВАННЯ ХВИЛЬ ПІД ОСТРОВОМ
        // =================================================================

        // 1. Викликаємо функцію, яка створить "маску" для острова
        this.mesh.updateMatrixWorld(true); // Ensure world matrix is up-to-date
        this._createIslandMask(islandModel);
    }

    // 2. Ось сама функція, яка ховає хвилі.
    // Вона проходить по всіх вершинах води і перевіряє, чи є над ними модель острова.
    _createIslandMask(islandModel) {
        this.isUnderIsland = new Array(this.geometry.attributes.position.count).fill(false);
        const raycaster = new THREE.Raycaster();
        const down = new THREE.Vector3(0, -1, 0);
        const vertex = new THREE.Vector3();

        const positionAttribute = this.geometry.attributes.position;
        const vertexCount = positionAttribute.count;

        for (let i = 0; i < vertexCount; i++) {
            vertex.fromBufferAttribute(positionAttribute, i);

            // Transform vertex to world coordinates
            vertex.applyMatrix4(this.mesh.matrixWorld);

            raycaster.set(vertex, down);

            const intersections = raycaster.intersectObject(islandModel, true);

            if (intersections.length > 0) {
                this.isUnderIsland[i] = true;
            }
        }
    }

    update() {
        const positionAttribute = this.geometry.attributes.position;
        const colorAttribute = this.geometry.attributes.color;
        const vertexCount = positionAttribute.count;

        for (let i = 0; i < vertexCount; i++) {
            // 3. Тут ми використовуємо створену "маску".
            // Якщо вершина знаходиться під островом, ми пропускаємо її анімацію.
            if (this.isUnderIsland[i]) {
                continue;
            }
            // =================================================================
            // КІНЕЦЬ: ЛОГІКА ХОВАННЯ ХВИЛЬ ПІД ОСТРОВОМ
            // =================================================================

            const waveData = this.waves[i];

            waveData.ang += waveData.speed;

            const waveSin = Math.sin(waveData.ang);
            const newY = waveData.y + waveSin * waveData.amp;
            positionAttribute.setY(i, newY);

            // 3. ЕФЕКТ ГЛИБИНИ
            // Interpolate color based on wave height (waveSin is from -1 to 1)
            const normalizedHeight = (waveSin + 1) / 2; // map to 0-1 range
            const mixedColor = this.deepColor.clone().lerp(this.shallowColor, normalizedHeight);
            colorAttribute.setXYZ(i, mixedColor.r, mixedColor.g, mixedColor.b);
        }

        positionAttribute.needsUpdate = true;
        colorAttribute.needsUpdate = true; // Important for color animation
    }
}