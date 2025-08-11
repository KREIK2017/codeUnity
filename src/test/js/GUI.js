import GUI from 'lil-gui';

export function setupModelCameraGUI(model, camera) {
    const gui = new GUI();

    // --- Model Controls ---
    const modelFolder = gui.addFolder('Model');

    // Position
    const modelPosFolder = modelFolder.addFolder('Position');
    modelPosFolder.add(model.position, 'x', -50, 50, 0.1).name('X');
    modelPosFolder.add(model.position, 'y', -50, 50, 0.1).name('Y');
    modelPosFolder.add(model.position, 'z', -50, 50, 0.1).name('Z');
    modelPosFolder.open();

    // Rotation
    const modelRotFolder = modelFolder.addFolder('Rotation');
    modelRotFolder.add(model.rotation, 'x', -Math.PI, Math.PI, 0.01).name('X');
    modelRotFolder.add(model.rotation, 'y', -Math.PI, Math.PI, 0.01).name('Y');
    modelRotFolder.add(model.rotation, 'z', -Math.PI, Math.PI, 0.01).name('Z');
    modelRotFolder.open();

    // Scale
    const modelScaleFolder = modelFolder.addFolder('Scale');
    modelScaleFolder.add(model.scale, 'x', 0.1, 5, 0.01).name('X');
    modelScaleFolder.add(model.scale, 'y', 0.1, 5, 0.01).name('Y');
    modelScaleFolder.add(model.scale, 'z', 0.1, 5, 0.01).name('Z');
    modelScaleFolder.open();
    
    modelFolder.open();


    // --- Camera Controls ---
    const cameraFolder = gui.addFolder('Camera');

    // Position
    const camPosFolder = cameraFolder.addFolder('Position');
    camPosFolder.add(camera.position, 'x', -100, 100, 0.1).name('X');
    camPosFolder.add(camera.position, 'y', -100, 100, 0.1).name('Y');
    camPosFolder.add(camera.position, 'z', -100, 100, 0.1).name('Z');
    camPosFolder.open();

    // Rotation
    const camRotFolder = cameraFolder.addFolder('Rotation');
    camRotFolder.add(camera.rotation, 'x', -Math.PI, Math.PI, 0.01).name('X');
    camRotFolder.add(camera.rotation, 'y', -Math.PI, Math.PI, 0.01).name('Y');
    camRotFolder.add(camera.rotation, 'z', -Math.PI, Math.PI, 0.01).name('Z');
    camRotFolder.open();

    cameraFolder.open();
}