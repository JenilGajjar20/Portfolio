<template>
  <div ref="sceneEl" class="three-hero-scene" aria-hidden="true"></div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import * as THREE from "three";

const sceneEl = ref(null);

let animationFrame = 0;
let renderer;
let scene;
let camera;
let nebula;
let core;
let grid;
let resizeObserver;

const pointer = {
  x: 0,
  y: 0,
};

const createStarField = () => {
  const count = 950;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorA = new THREE.Color("#60f7ff");
  const colorB = new THREE.Color("#ff65b3");
  const colorC = new THREE.Color("#b7ff5a");

  for (let i = 0; i < count; i += 1) {
    const radius = 2.6 + Math.random() * 5.2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const index = i * 3;

    positions[index] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[index + 2] = radius * Math.cos(phi);

    const color = i % 3 === 0 ? colorA : i % 3 === 1 ? colorB : colorC;
    colors[index] = color.r;
    colors[index + 1] = color.g;
    colors[index + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.028,
    vertexColors: true,
    transparent: true,
    opacity: 0.78,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Points(geometry, material);
};

const createCore = () => {
  const group = new THREE.Group();

  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.78, 0.18, 160, 18),
    new THREE.MeshBasicMaterial({
      color: "#60f7ff",
      wireframe: true,
      transparent: true,
      opacity: 0.34,
    })
  );

  const shellGeometry = new THREE.IcosahedronGeometry(1.45, 1);
  const shellEdges = new THREE.EdgesGeometry(shellGeometry);
  const shell = new THREE.LineSegments(
    shellEdges,
    new THREE.LineBasicMaterial({
      color: "#ff65b3",
      transparent: true,
      opacity: 0.28,
    })
  );

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.95, 0.006, 8, 160),
    new THREE.MeshBasicMaterial({
      color: "#b7ff5a",
      transparent: true,
      opacity: 0.46,
    })
  );
  ring.rotation.x = Math.PI / 2.8;

  group.add(knot, shell, ring);
  group.position.set(1.05, 0.15, 0);

  return group;
};

const createGrid = () => {
  const helper = new THREE.GridHelper(9, 18, "#60f7ff", "#25435e");
  helper.material.transparent = true;
  helper.material.opacity = 0.16;
  helper.position.y = -1.85;
  helper.rotation.x = Math.PI * 0.02;
  return helper;
};

const resize = () => {
  if (!sceneEl.value || !renderer || !camera) return;

  const { width, height } = sceneEl.value.getBoundingClientRect();
  if (!width || !height) return;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
};

const animate = () => {
  animationFrame = window.requestAnimationFrame(animate);

  const time = performance.now() * 0.001;

  if (nebula) {
    nebula.rotation.y = time * 0.035 + pointer.x * 0.05;
    nebula.rotation.x = pointer.y * 0.035;
  }

  if (core) {
    core.rotation.y = time * 0.32 + pointer.x * 0.18;
    core.rotation.x = Math.sin(time * 0.45) * 0.16 + pointer.y * 0.16;
  }

  if (grid) {
    grid.position.z = Math.sin(time * 0.7) * 0.18;
  }

  renderer.render(scene, camera);
};

const handlePointerMove = (event) => {
  if (!sceneEl.value) return;
  const bounds = sceneEl.value.getBoundingClientRect();
  pointer.x = (event.clientX - bounds.left) / bounds.width - 0.5;
  pointer.y = (event.clientY - bounds.top) / bounds.height - 0.5;
};

onMounted(() => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.2, 6);

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
    preserveDrawingBuffer: true,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));

  sceneEl.value.appendChild(renderer.domElement);

  nebula = createStarField();
  core = createCore();
  grid = createGrid();

  scene.add(nebula, core, grid);

  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(sceneEl.value);
  window.addEventListener("pointermove", handlePointerMove, { passive: true });

  resize();
  animate();
});

onBeforeUnmount(() => {
  window.cancelAnimationFrame(animationFrame);
  window.removeEventListener("pointermove", handlePointerMove);
  resizeObserver?.disconnect();

  scene?.traverse((object) => {
    object.geometry?.dispose?.();
    if (Array.isArray(object.material)) {
      object.material.forEach((material) => material.dispose?.());
    } else {
      object.material?.dispose?.();
    }
  });

  renderer?.dispose?.();
  renderer?.domElement?.remove?.();
});
</script>

<style lang="scss">
.three-hero-scene {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
