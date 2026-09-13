import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroScene3D() {
  const containerRef = useRef(null);
  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      48,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(11, 4, 36);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'mediump', // Faster mobile & integrated GPU shader precision
    });

    // Cap pixel ratio to 1.25 for buttery 60fps on all screens
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Brand Colors ---
    const COLOR_AMBER = new THREE.Color(0xe58e26);
    const COLOR_TEAL = new THREE.Color(0x4cd7f6);

    // Root Group
    const coreGroup = new THREE.Group();
    coreGroup.position.set(11, 0, 0);
    scene.add(coreGroup);

    // --- 1. Ambient Glow Aura (Optimized Low-Res Texture) ---
    const auraCanvas = document.createElement('canvas');
    auraCanvas.width = 64;
    auraCanvas.height = 64;
    const auraCtx = auraCanvas.getContext('2d');
    const auraGrad = auraCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    auraGrad.addColorStop(0, 'rgba(229, 142, 38, 0.35)');
    auraGrad.addColorStop(0.4, 'rgba(76, 215, 246, 0.12)');
    auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    auraCtx.fillStyle = auraGrad;
    auraCtx.fillRect(0, 0, 64, 64);

    const auraTexture = new THREE.CanvasTexture(auraCanvas);
    const auraMat = new THREE.SpriteMaterial({
      map: auraTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const auraSprite = new THREE.Sprite(auraMat);
    auraSprite.scale.set(14, 14, 1);
    coreGroup.add(auraSprite);

    // --- 2. Geometric Polyhedral Core (Optimized Low Poly) ---
    const coreGeo = new THREE.IcosahedronGeometry(3.8, 0); // 20 faces, ultra fast
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreWireMat);
    coreGroup.add(coreMesh);

    const innerCoreGeo = new THREE.IcosahedronGeometry(2.1, 0);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCoreMesh);

    const nucleusGeo = new THREE.SphereGeometry(0.7, 10, 10);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0xf0f1f3,
      transparent: true,
      opacity: 0.85,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreGroup.add(nucleusMesh);

    // --- 3. Kinetic Orbital Rings (Optimized Segments: 8 x 48) ---
    const ringGeo1 = new THREE.TorusGeometry(7.6, 0.04, 8, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      transparent: true,
      opacity: 0.75,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(6.2, 0.035, 8, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      transparent: true,
      opacity: 0.65,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    coreGroup.add(ring2);

    const ringGeo3 = new THREE.RingGeometry(8.8, 8.95, 36);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x2a2d35,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.x = Math.PI / 2.2;
    coreGroup.add(ring3);

    // --- 4. 3D System Tech Micro-Nodes (Clean High-DPI without shadow blur) ---
    const nodeLabels = [
      { text: 'React UI', color: '#4cd7f6' },
      { text: 'PostgreSQL', color: '#e58e26' },
      { text: 'Webhooks', color: '#10b981' },
      { text: 'REST APIs', color: '#f0f1f3' },
      { text: 'Stripe Pay', color: '#e58e26' },
    ];

    const createCrispNodeSprite = (label, colorHex) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 72;
      const ctx = canvas.getContext('2d');

      // Minimal translucent background pill
      ctx.fillStyle = 'rgba(18, 19, 22, 0.90)';
      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(4, 4, 248, 64, 18);
      ctx.fill();
      ctx.stroke();

      // Flat status dot (no expensive shadowBlur)
      ctx.fillStyle = colorHex;
      ctx.beginPath();
      ctx.arc(28, 36, 7, 0, Math.PI * 2);
      ctx.fill();

      // Clean label
      ctx.font = '600 22px "IBM Plex Mono", monospace';
      ctx.fillStyle = '#F0F1F3';
      ctx.fillText(label, 48, 44);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.92,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(3.8, 1.08, 1);
      return sprite;
    };

    const orbitNodes = [];
    const orbitRadius = 10.8;

    nodeLabels.forEach((item, index) => {
      const sprite = createCrispNodeSprite(item.text, item.color);
      const angle = (index / nodeLabels.length) * Math.PI * 2;
      const speed = 0.26 + index * 0.03;
      const inclination = (index % 2 === 0 ? 1 : -1) * 0.38;

      coreGroup.add(sprite);
      orbitNodes.push({
        sprite,
        angle,
        speed,
        inclination,
        originalRadius: orbitRadius,
        currentRadius: orbitRadius,
      });
    });

    // --- 5. Clean Ambient Star Particles (Optimized count: 90) ---
    const particleCount = 90;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount; p++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 4 + Math.random() * 16;

      particlePositions[p * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[p * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[p * 3 + 2] = r * Math.cos(phi);

      const isAmber = Math.random() > 0.5;
      const c = isAmber ? COLOR_AMBER : COLOR_TEAL;
      particleColors[p * 3] = c.r;
      particleColors[p * 3 + 1] = c.g;
      particleColors[p * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleSystem);

    // --- 6. Smooth Shockwave Ring ---
    const shockwaveGeo = new THREE.RingGeometry(0.1, 0.25, 36);
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    const shockwaveMesh = new THREE.Mesh(shockwaveGeo, shockwaveMat);
    coreGroup.add(shockwaveMesh);
    let shockwaveActive = false;
    let shockwaveScale = 0.2;

    // --- 7. Optimized Pointer Interaction ---
    let isDragging = false;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let targetRotationX = 0.15;
    let targetRotationY = 0;
    let currentRotationX = 0.15;
    let currentRotationY = 0;

    let mouseParallaxX = 0;
    let mouseParallaxY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      pointerStartX = clientX;
      pointerStartY = clientY;
      setHintVisible(false);
    };

    const onPointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      if (isDragging) {
        const deltaX = clientX - pointerStartX;
        const deltaY = clientY - pointerStartY;

        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;
        targetRotationX = Math.max(-0.85, Math.min(0.85, targetRotationX));

        pointerStartX = clientX;
        pointerStartY = clientY;
      } else {
        const halfW = window.innerWidth / 2;
        const halfH = window.innerHeight / 2;
        mouseParallaxX = ((clientX - halfW) / halfW) * 1.5;
        mouseParallaxY = ((clientY - halfH) / halfH) * 1.0;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const onClick = () => {
      shockwaveActive = true;
      shockwaveScale = 0.2;
      shockwaveMesh.scale.set(0.2, 0.2, 0.2);
      shockwaveMat.opacity = 0.85;

      orbitNodes.forEach((node) => {
        node.currentRadius = node.originalRadius * 1.20;
      });
    };

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    container.addEventListener('click', onClick);

    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // --- 8. 60FPS Clamped Animation Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
      } else {
        isVisible = true;
        clock.getDelta(); // reset delta to prevent jump
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const rawDelta = clock.getDelta();
      const delta = Math.min(rawDelta, 0.04); // Clamp delta to avoid frame spikes
      const elapsedTime = clock.getElapsedTime();

      // Smooth idle drift
      if (!isDragging) {
        const driftSpeed = prefersReducedMotion ? 0.001 : 0.003;
        targetRotationY += driftSpeed;
      }

      // Exponential damping
      currentRotationX += (targetRotationX - currentRotationX) * 0.08;
      currentRotationY += (targetRotationY - currentRotationY) * 0.08;

      coreGroup.rotation.x = currentRotationX;
      coreGroup.rotation.y = currentRotationY;

      // Optical parallax
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, 11 + mouseParallaxX, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 4 - mouseParallaxY, 0.05);
      camera.lookAt(coreGroup.position.x * 0.7, 0, 0);

      // Core pulse
      const breath = Math.sin(elapsedTime * 2.0) * 0.05 + 1;
      innerCoreMesh.scale.set(breath, breath, breath);

      coreMesh.rotation.y += 0.004;
      coreMesh.rotation.x += 0.002;

      // Kinetic rings
      ring1.rotation.z += 0.008;
      ring2.rotation.y -= 0.007;
      ring3.rotation.z += 0.003;

      // Nodes orbit
      for (let n = 0; n < orbitNodes.length; n++) {
        const node = orbitNodes[n];
        node.angle += node.speed * delta;
        node.currentRadius = THREE.MathUtils.lerp(node.currentRadius, node.originalRadius, 0.07);

        const x = Math.cos(node.angle) * node.currentRadius;
        const z = Math.sin(node.angle) * node.currentRadius;
        const y = Math.sin(node.angle * 2) * (node.currentRadius * node.inclination * 0.35);

        node.sprite.position.set(x, y, z);
      }

      // Particle system
      particleSystem.rotation.y -= 0.0008;

      // Shockwave
      if (shockwaveActive) {
        shockwaveScale += delta * 18;
        shockwaveMesh.scale.set(shockwaveScale, shockwaveScale, shockwaveScale);
        shockwaveMat.opacity -= delta * 1.25;

        if (shockwaveMat.opacity <= 0) {
          shockwaveActive = false;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- 9. Resize ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;

      if (width < 768) {
        coreGroup.position.set(0, -2, -6);
        camera.position.set(0, 3, 38);
      } else if (width < 1024) {
        coreGroup.position.set(6, 0, -2);
        camera.position.set(7, 4, 38);
      } else {
        coreGroup.position.set(11, 0, 0);
        camera.position.set(11, 4, 36);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      container.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      container.removeEventListener('click', onClick);
      container.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      coreGeo.dispose();
      innerCoreGeo.dispose();
      nucleusGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringGeo3.dispose();
      shockwaveGeo.dispose();
      particleGeo.dispose();
      auraTexture.dispose();

      coreWireMat.dispose();
      innerCoreMat.dispose();
      nucleusMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      shockwaveMat.dispose();
      particleMat.dispose();
      auraMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden select-none cursor-grab active:cursor-grabbing"
      title="Click and drag to orbit the 3D System Core"
    >
      {hintVisible && (
        <div className="hidden sm:flex items-center gap-2 absolute top-6 right-8 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-[#1A1C21]/85 border border-[#2A2D35] text-[11px] font-mono text-[#8A919E] backdrop-blur-md shadow-lg transition-opacity duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>3D Core: Drag to spin &bull; Click to pulse</span>
        </div>
      )}
    </div>
  );
}
