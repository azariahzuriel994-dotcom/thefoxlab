"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountNode.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xe4283a,
      emissive: 0xe4283a,
      emissiveIntensity: 0.55,
      transparent: true,
      opacity: 0.22,
      roughness: 0.25,
      metalness: 0.7,
    });

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 1), coreMaterial);
    const wireframe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.15, 1),
      new THREE.MeshBasicMaterial({
        color: 0xebd9b4,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      })
    );

    const earMat = new THREE.MeshStandardMaterial({
      color: 0x7a0f1d,
      emissive: 0xe4283a,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.85,
      metalness: 0.6,
      roughness: 0.3,
    });

    const leftEar = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.95, 4), earMat);
    leftEar.position.set(-0.62, 0.95, -0.1);
    leftEar.rotation.z = 0.5;

    const rightEar = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.95, 4), earMat);
    rightEar.position.set(0.62, 0.95, -0.1);
    rightEar.rotation.z = -0.5;

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.9, 0.012, 8, 96),
      new THREE.MeshBasicMaterial({ color: 0xd4af7a, transparent: true, opacity: 0.5 })
    );
    ring.rotation.x = Math.PI / 2.3;

    group.add(core, wireframe, leftEar, rightEar, ring);

    const ambient = new THREE.AmbientLight(0xebd9b4, 0.5);
    const keyLight = new THREE.PointLight(0xe4283a, 2.2, 20);
    keyLight.position.set(3, 2, 4);
    const fillLight = new THREE.PointLight(0xd4af7a, 1.1, 20);
    fillLight.position.set(-3, -1, -3);
    scene.add(ambient, keyLight, fillLight);

    const sparkleGeometry = new THREE.BufferGeometry();
    const sparkleCount = 140;
    const sparklePositions = new Float32Array(sparkleCount * 3);
    for (let i = 0; i < sparkleCount; i += 1) {
      sparklePositions[i * 3] = (Math.random() - 0.5) * 8;
      sparklePositions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      sparklePositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    sparkleGeometry.setAttribute("position", new THREE.BufferAttribute(sparklePositions, 3));

    const sparkles = new THREE.Points(
      sparkleGeometry,
      new THREE.PointsMaterial({
        color: 0xd4af7a,
        size: 0.035,
        transparent: true,
        opacity: 0.9,
      })
    );
    scene.add(sparkles);

    const resize = () => {
      if (!mountNode) return;
      const width = mountNode.clientWidth;
      const height = mountNode.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const tick = () => {
      const elapsed = clock.getElapsedTime();
      const delta = clock.getDelta();

      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, Math.sin(elapsed * 0.6) * 0.24, 0.04);
      group.rotation.y += delta * 0.18;
      ring.rotation.z += delta * 0.08;
      sparkles.rotation.y += delta * 0.03;
      sparkles.rotation.x += delta * 0.015;

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      mountNode.removeChild(renderer.domElement);
      coreGeometryDispose(core.geometry);
      wireframe.geometry.dispose();
      leftEar.geometry.dispose();
      rightEar.geometry.dispose();
      ring.geometry.dispose();
      sparkleGeometry.dispose();
      coreMaterial.dispose();
      wireframe.material.dispose();
      earMat.dispose();
      ring.material.dispose();
      sparkles.material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

function coreGeometryDispose(geometry: THREE.BufferGeometry) {
  geometry.dispose();
}
