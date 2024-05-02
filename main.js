import * as THREE from 'https://unpkg.com/three@v0.149.0/build/three.module.js';
import * as dat from 'dat.gui'

const gui = new dat.GUI()
const world = {
    plane: {
        Width:  10
    }
}
gui.add(world.plane, 'Width', 1 ,500).onChange(() => {
    console.log(world.plane.Width)
})
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
)
const render =  new THREE.WebGLRenderer();

const planepgeometry = new THREE.PlaneGeometry( 5, 5, 20, 20 );
const planematerial = new THREE.MeshPhongMaterial( {
    color: 0xff33, 
    side: THREE.DoubleSide, 
    flatShading: true} );
const plane = new THREE.Mesh( planepgeometry, planematerial );
scene.add(plane);

console.log(plane.geometry.attributes.position.array)
const {array} = plane.geometry.attributes.position;
for(let i = 0; i < array.length; i+= 3)
{
    const x = array[i]
    const y = array[i+1]
    const z = array[i+2]

    array[i+2] = z + Math.random();
}

const light = new THREE.DirectionalLight( 0xffffff, 1);
light.position.set(0, 0 ,1 )
scene.add( light );

camera.position.z = 5;

render.setSize(innerWidth, innerHeight)
render.render(scene, camera);

document.body.appendChild(render.domElement)



// function animation ()
// {
//     requestAnimationFrame(animation);
// render.render(scene, camera);

// cube.rotation.x += 0.01;
// cube.rotation.y += 0.01;
// }
// animation()