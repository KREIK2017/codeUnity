import * as THREE from 'three';

const INITIAL_Y_POSITION = 37;

// Змінні для анімації падіння
const fallDistance = 35.2; // Як далеко вниз впаде куб
const fallStartScroll = 0.1; // Падіння починається після 20% прокрутки
const fallEndScroll = 0.8; // і закінчується на 80%

// Зберігаємо початкову позицію куба
const cubeStartPosition = new THREE.Vector3(0, 0.75, 0);

export function createFallingCubeScene() {
    const group = new THREE.Group();
    group.position.y = INITIAL_Y_POSITION;
    group.position.x = -5; // Переміщуємо всю групу вліво
    const platformGeometry = new THREE.PlaneGeometry(2, 2);
    const platformMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.rotation.x = -Math.PI / 2; // Робимо її горизонтальною
    platform.receiveShadow = true;
    group.add(platform);

    // 2. Створюємо куб
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff8000 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.copy(cubeStartPosition); // Ставимо на платформу
    cube.castShadow = true;
    group.add(cube);

    return { group, cube };
}