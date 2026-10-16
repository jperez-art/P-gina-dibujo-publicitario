import * as THREE from "three";

const container = document.getElementById("cubo");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
camera.position.z = 3.2;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const images = ["humor", "satira", "sofisticacion", "deseo", "triunfo", "triunfo-b"];

const materials = images.map(name => {
    const texture = loader.load("img/" + name + ".jpg");
    texture.colorSpace = THREE.SRGBColorSpace;
    return new THREE.MeshBasicMaterial({ map: texture });
});

const cube = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 1.6), materials);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.004;
    renderer.render(scene, camera);
}

animate();