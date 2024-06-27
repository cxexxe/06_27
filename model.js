import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { OrbitControls } from 'OrbitControls';

// 캔버스와 렌더러 설정
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputEncoding = THREE.sRGBEncoding;

// 씬 설정
const scene = new THREE.Scene();
scene.background = new THREE.Color('#ffffff');

// 카메라 설정
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 2);

// 조명 설정
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 2, 2);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // 부드러운 조명 추가
scene.add(ambientLight);

// 모델 로드
const loader = new GLTFLoader();
loader.load('pen/scene.gltf', function (gltf) {
    const model = gltf.scene;
    model.position.set(0, 0, 0);
    model.scale.set(0.3, 0.3, 0.3); // 모델 크기 조정
    scene.add(model);
    animate();
}, undefined, function (error) {
    console.error(error);
});

// 마우스 컨트롤 설정
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // 감속 효과 활성화
controls.enableZoom = false; // 스크롤로 확대/축소 해제
controls.update();

// 애니메이션 함수
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // 감속 효과 또는 자동 회전이 활성화된 경우 필수
    renderer.render(scene, camera);
}

// 윈도우 리사이즈 핸들링
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, false);
}

window.addEventListener('resize', onWindowResize);
onWindowResize();  // 초기 크기 설정
