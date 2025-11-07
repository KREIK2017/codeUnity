import * as THREE from 'three';

export class LowPolyWater {
    constructor(islandModel) {
        this.waves = [];
        this.deepColor = new THREE.Color('#00a1d6');
        this.midColor = new THREE.Color('#0080b3'); // New mid color for gradient effect
        this.shallowColor = new THREE.Color('#00bfff');

        // =================================================================
        // 1. КІЛЬКІСТЬ ПОЛІГОНІВ
        // Змініть останні два числа, щоб змінити деталізацію води.
        // Більше число = більше полігонів.
        // =================================================================
        // Wavy surface (PlaneGeometry)
        const surfaceGeometry = new THREE.PlaneGeometry(1000, 1000, 500, 500);
        surfaceGeometry.rotateX(-Math.PI / 2);

        const positionAttribute = surfaceGeometry.attributes.position;
        const vertexCount = positionAttribute.count;

        // Initialize color attribute for surface
        const colors = [];
        for (let i = 0; i < vertexCount; i++) {
            colors.push(this.shallowColor.r, this.shallowColor.g, this.shallowColor.b);
        }
        surfaceGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // Create wave data for each unique vertex on the surface.
        for (let i = 0; i < vertexCount; i++) {
            const y = positionAttribute.getY(i);
            this.waves.push({
                y: y,
                ang: Math.random() * Math.PI * 2,
                amp: 0.3, // Амплітуда
                speed: Math.random() * 0.02, // Швидкість
            });
        }

        const surfaceMaterial = new THREE.MeshPhongMaterial({
            vertexColors: true,
            flatShading: true,
            transparent: true,
            opacity: 0.7
        });

        const surfaceMesh = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
        surfaceMesh.receiveShadow = true;
        surfaceMesh.renderOrder = 1; // Render surface after volume

        // Water volume (BoxGeometry)
        const volumeHeight = 50; // How deep the water volume goes
        const volumeGeometry = new THREE.BoxGeometry(1000, volumeHeight, 1000, 1, 1, 1); // Low subdivisions for volume
        volumeGeometry.translate(0, -volumeHeight / 2 - 5, 0); // Position its center further below the surface

        // Calculate vertex colors for volume depth effect
        const volumeTopColor = this.midColor; // Blends with the surface
        const volumeBottomColor = new THREE.Color('#001a26'); // Even darker blue for deeper water

        const volumeColors = [];
        const volumePositionAttribute = volumeGeometry.attributes.position;
        for (let i = 0; i < volumePositionAttribute.count; i++) {
            const y = volumePositionAttribute.getY(i);
            // Normalize y from -volumeHeight/2 to volumeHeight/2 to 0 to 1
            const normalizedY = (y + volumeHeight / 2) / volumeHeight;
            const mixedColor = volumeBottomColor.clone().lerp(volumeTopColor, normalizedY);
            volumeColors.push(mixedColor.r, mixedColor.g, mixedColor.b);
        }
        volumeGeometry.setAttribute('color', new THREE.Float32BufferAttribute(volumeColors, 3));

        const volumeMaterial = new THREE.MeshPhongMaterial({
            vertexColors: true, // Enable vertex colors for gradient
            flatShading: true,
            transparent: true,
            opacity: 0.9 // Increased opacity for water volume
        });
        const volumeMesh = new THREE.Mesh(volumeGeometry, volumeMaterial);
        volumeMesh.receiveShadow = true;
        volumeMesh.renderOrder = 0; // Render volume first

        // Group the surface and volume
        this.mesh = new THREE.Group();
        this.mesh.add(surfaceMesh);
        this.mesh.add(volumeMesh);

        // Store references for update method
        this.surfaceMesh = surfaceMesh;
        this.volumeMesh = volumeMesh;
        this.surfacePositionAttribute = surfaceGeometry.attributes.position;
        this.surfaceColorAttribute = surfaceGeometry.attributes.color;

        // =================================================================
        // ПОЧАТОК: ЛОГІКА ХОВАННЯ ХВИЛЬ ПІД ОСТРОВОМ
        // =================================================================

        // 1. Викликаємо функцію, яка створить "маску" для острова
        this.mesh.updateMatrixWorld(true); // Ensure water mesh world matrix is up-to-date

        // Ensure island model's world matrix is up-to-date for accurate raycasting
        islandModel.updateMatrixWorld(true);

        this._createIslandMask(islandModel);
    }

    // 2. Ось сама функція, яка ховає хвилі.
    // Вона проходить по всіх вершинах води і перевіряє, чи є над ними модель острова.
    _createIslandMask(islandModel) {
        this.isUnderIsland = new Array(this.surfaceMesh.geometry.attributes.position.count).fill(false);
        const raycaster = new THREE.Raycaster();
        const down = new THREE.Vector3(0, -1, 0);
        const vertex = new THREE.Vector3();

        const positionAttribute = this.surfaceMesh.geometry.attributes.position;
        const vertexCount = positionAttribute.count;

        for (let i = 0; i < vertexCount; i++) {
            vertex.fromBufferAttribute(positionAttribute, i);

            // Transform vertex to world coordinates
            vertex.applyMatrix4(this.surfaceMesh.matrixWorld);

            raycaster.set(vertex, down);

            const intersections = raycaster.intersectObject(islandModel, true);

            if (intersections.length > 0) {
                this.isUnderIsland[i] = true;
            }
        }
    }

    update() {
        const positionAttribute = this.surfacePositionAttribute; // Use surface's attributes
        const colorAttribute = this.surfaceColorAttribute; // Use surface's attributes
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
            let mixedColor;
            if (normalizedHeight < 0.5) {
                // Interpolate between deepColor and midColor
                mixedColor = this.deepColor.clone().lerp(this.midColor, normalizedHeight * 2);
            } else {
                // Interpolate between midColor and shallowColor
                mixedColor = this.midColor.clone().lerp(this.shallowColor, (normalizedHeight - 0.5) * 2);
            }
            colorAttribute.setXYZ(i, mixedColor.r, mixedColor.g, mixedColor.b);
        }

        positionAttribute.needsUpdate = true;
        colorAttribute.needsUpdate = true; // Important for color animation
    }

    getHeightAt(x, z) {
        // 1. Трансформуємо світові координати в локальні координати водної площини
        const localPos = new THREE.Vector3(x, 0, z);
        this.mesh.worldToLocal(localPos);

        const lx = localPos.x;
        const lz = localPos.z;

        // Деталі площини з конструктора
        const planeSize = 1000;
        const segments = 500;
        const halfSize = planeSize / 2;
        const segmentSize = planeSize / segments;
        const verticesPerRow = segments + 1;

        // 2. Знаходимо комірку сітки та дробову позицію
        const gridX = Math.floor((lx + halfSize) / segmentSize);
        const gridZ = Math.floor((lz + halfSize) / segmentSize);

        // Перевірка меж
        if (gridX < 0 || gridX >= segments || gridZ < 0 || gridZ >= segments) {
            return this.mesh.position.y; // Поза водною площиною, повертаємо базовий рівень води
        }

        const fracX = ((lx + halfSize) / segmentSize) - gridX;
        const fracZ = ((lz + halfSize) / segmentSize) - gridZ;

        // 3. Отримуємо індекси 4-х навколишніх вершин
        const v1_index = gridX + gridZ * verticesPerRow;
        const v2_index = (gridX + 1) + gridZ * verticesPerRow;
        const v3_index = gridX + (gridZ + 1) * verticesPerRow;
        const v4_index = (gridX + 1) + (gridZ + 1) * verticesPerRow;

        // 4. Отримуємо поточну висоту цих вершин з атрибута геометрії
        const h1 = this.surfacePositionAttribute.getY(v1_index);
        const h2 = this.surfacePositionAttribute.getY(v2_index);
        const h3 = this.surfacePositionAttribute.getY(v3_index);
        const h4 = this.surfacePositionAttribute.getY(v4_index);

        // 5. Виконуємо білінійну інтерполяцію
        const ix1 = THREE.MathUtils.lerp(h1, h2, fracX);
        const ix2 = THREE.MathUtils.lerp(h3, h4, fracX);
        const localHeight = THREE.MathUtils.lerp(ix1, ix2, fracZ);

        // 6. Трансформуємо локальну висоту назад у світову
        return localHeight + this.mesh.position.y;
    }
}