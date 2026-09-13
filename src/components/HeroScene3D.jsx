import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 16, 42);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'mediump',
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- 3D Flowing Particle Terrain Wave Grid ---
    const cols = 60;
    const rows = 45;
    const count = cols * rows;
    const separation = 1.75;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const baseHeights = new Float32Array(count);

    const amber = new THREE.Color(0xe58e26);
    const teal = new THREE.Color(0x4cd7f6);
    const muted = new THREE.Color(0x2a2d35);

    let idx = 0;
    for (let ix = 0; ix < cols; ix++) {
      for (let iy = 0; iy < rows; iy++) {
        const x = (ix - cols / 2) * separation;
        const z = (iy - rows / 2) * separation;
        const y = Math.sin(ix * 0.25) * 1.8 + Math.cos(iy * 0.25) * 1.8;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        baseHeights[idx] = y;

        // Radiant color gradient across the grid
        const factor = (ix / cols + iy / rows) * 0.5;
        const c = new THREE.Color();
        if (factor > 0.65) {
          c.lerpColors(amber, muted, (factor - 0.65) * 2.8);
        } else if (factor > 0.3) {
          c.lerpColors(teal, amber, (factor - 0.3) * 2.8);
        } else {
          c.lerpColors(muted, teal, factor * 3.3);
        }

        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Particle Glow Disc Texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext('2d');
    const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(229, 142, 38, 0.8)');
    grad.addColorStop(0.7, 'rgba(76, 215, 246, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = grad;
    pCtx.fillRect(0, 0, 32, 32);
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const material = new THREE.PointsMaterial({
      size: 1.15,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Connecting Network Wireframe Lines
    const lineIndices = [];
    for (let ix = 0; ix < cols; ix++) {
      for (let iy = 0; iy < rows; iy++) {
        const current = ix * rows + iy;
        if (ix < cols - 1) lineIndices.push(current, (ix + 1) * rows + iy);
        if (iy < rows - 1) lineIndices.push(current, ix * rows + (iy + 1));
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeo.setIndex(lineIndices);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x2a2d35,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const networkLines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(networkLines);

    // --- Ambient Floating Star Nodes ---
    const starCount = 60;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let s = 0; s < starCount; s++) {
      starPos[s * 3] = (Math.random() - 0.5) * 80;
      starPos[s * 3 + 1] = Math.random() * 25 - 5;
      starPos[s * 3 + 2] = (Math.random() - 0.5) * 60;

      const isAmber = Math.random() > 0.5;
      const c = isAmber ? amber : teal;
      starColors[s * 3] = c.r;
      starColors[s * 3 + 1] = c.g;
      starColors[s * 3 + 2] = c.b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // --- Interactive Ripple Pulse on Click ---
    let shockwaveCenter = { x: 0, z: 0 };
    let shockwaveRadius = 0;
    let shockwaveActive = false;

    const onPointerDown = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      const normalizedX = ((clientX - rect.left) / rect.width) * 2 - 1;
      const normalizedY = -((clientY - rect.top) / rect.height) * 2 + 1;

      shockwaveCenter.x = normalizedX * 35;
      shockwaveCenter.z = -normalizedY * 25;
      shockwaveRadius = 0;
      shockwaveActive = true;
    };

    container.addEventListener('click', onPointerDown);

    // --- Mouse Parallax ---
    let targetCameraX = 0;
    let targetCameraY = 16;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = ((e.clientX - halfW) / halfW) * 8;
      mouseY = ((e.clientY - halfH) / halfH) * 5;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // --- Reliable 60FPS Animation Loop (Never Pauses on Load) ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Only skip rendering if tab is completely hidden
      if (document.hidden) return;

      const rawDelta = clock.getDelta();
      const delta = Math.min(rawDelta, 0.04);
      const elapsedTime = clock.getElapsedTime();
      const speed = prefersReducedMotion ? 0.25 : 0.85;

      // Smooth camera parallax
      targetCameraX += (mouseX - targetCameraX) * 0.05;
      targetCameraY += (16 - mouseY - targetCameraY) * 0.05;

      camera.position.x = targetCameraX;
      camera.position.y = targetCameraY;
      camera.lookAt(0, 0, 0);

      // Animate wave vertices
      const posAttr = geometry.attributes.position;
      const posArr = posAttr.array;

      if (shockwaveActive) {
        shockwaveRadius += delta * 35;
        if (shockwaveRadius > 90) shockwaveActive = false;
      }

      let i = 0;
      for (let ix = 0; ix < cols; ix++) {
        for (let iy = 0; iy < rows; iy++) {
          // Flowing sinusoidal harmonic wave equations
          const wave1 = Math.sin(ix * 0.28 + elapsedTime * speed) * 2.2;
          const wave2 = Math.cos(iy * 0.24 + elapsedTime * (speed * 0.8)) * 2.2;
          const wave3 = Math.sin((ix + iy) * 0.14 + elapsedTime * 0.6) * 1.6;

          let y = baseHeights[i] + wave1 + wave2 + wave3;

          // Add interactive shockwave ripple
          if (shockwaveActive) {
            const x = posArr[i * 3];
            const z = posArr[i * 3 + 2];
            const dist = Math.hypot(x - shockwaveCenter.x, z - shockwaveCenter.z);
            const waveDist = Math.abs(dist - shockwaveRadius);
            if (waveDist < 8) {
              const amp = Math.cos((waveDist / 8) * (Math.PI / 2)) * 3.5;
              y += amp;
            }
          }

          posArr[i * 3 + 1] = y;
          i++;
        }
      }

      posAttr.needsUpdate = true;
      lineGeo.attributes.position.needsUpdate = true;

      // Gentle star drift
      starField.rotation.y += 0.0006;

      renderer.render(scene, camera);
    };

    // Start animation immediately
    animate();

    // --- Responsive Resize ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      if (width < 768) {
        camera.position.set(0, 18, 52);
      } else {
        camera.position.set(0, 16, 42);
      }
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      container.removeEventListener('click', onPointerDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      lineGeo.dispose();
      starGeo.dispose();
      material.dispose();
      lineMat.dispose();
      starMat.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden opacity-90"
      title="Click to pulse 3D wave"
    />
  );
}
