import 'vtk.js/Sources/favicon';

import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkOBJReader from 'vtk.js/Sources/IO/Misc/OBJReader';

const fileName = 'Longitudinal_90_0.0';

// ----------------------------------------------------------------------------
// Standard rendering code setup
// ----------------------------------------------------------------------------

const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
    background: [0.5, 0.5, 0.5],
});
const renderer = fullScreenRenderer.getRenderer();
const renderWindow = fullScreenRenderer.getRenderWindow();

const resetCamera = renderer.resetCamera;
const render = renderWindow.render;

// ----------------------------------------------------------------------------
// Example code
// ----------------------------------------------------------------------------

const reader = vtkOBJReader.newInstance({
    splitMode: 'usemtl'
});
const scene = [];

reader
    .setUrl(`${fileName}.obj`)
    .then(() => {
        const size = reader.getNumberOfOutputPorts();
        for (let i = 0; i < size; i++) {
            const polydata = reader.getOutputData(i);
            const name = polydata.get('name').name;
            const mapper = vtkMapper.newInstance();
            const actor = vtkActor.newInstance();

            actor.setMapper(mapper);
            mapper.setInputData(polydata);

            renderer.addActor(actor);

            scene.push({
                name,
                polydata,
                mapper,
                actor
            });
        }
        resetCamera();
        render();
    });

// -----------------------------------------------------------
// Make some variables global so that you can inspect and
// modify objects in your browser's developer console:
// -----------------------------------------------------------

global.reader = reader;
global.scene = scene;
global.fullScreenRenderer = fullScreenRenderer;
