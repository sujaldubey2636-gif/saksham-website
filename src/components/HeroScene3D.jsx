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
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Brand Palette ---
    const COLOR_AMBER = new THREE.Color(0xe58e26);
    const COLOR_TEAL = new THREE.Color(0x4cd7f6);
    const COLOR_DARK = new THREE.Color(0x2a2d35);

    // Main 3D Core Hierarchy
    const coreGroup = new THREE.Group();
    coreGroup.position.set(11, 0, 0);
    scene.add(coreGroup);

    // --- 1. Central Ambient Glow Aura ---
    const auraCanvas = document.createElement('canvas');
    auraCanvas.width = 128;
    auraCanvas.height = 128;
    const auraCtx = auraCanvas.getContext('2d');
    const auraGrad = auraCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    auraGrad.addColorStop(0, 'rgba(229, 142, 38, 0.35)');
    auraGrad.addColorStop(0.4, 'rgba(76, 215, 246, 0.15)');
    auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    auraCtx.fillStyle = auraGrad;
    auraCtx.fillRect(0, 0, 128, 128);

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

    // --- 2. Central Refined Polyhedral Core ---
    // Outer Clean Wireframe (Oceanic Teal)
    const coreGeo = new THREE.IcosahedronGeometry(3.8, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreWireMat);
    coreGroup.add(coreMesh);

    // Inner Glowing Polyhedron (Cadmium Amber)
    const innerCoreGeo = new THREE.IcosahedronGeometry(2.1, 0);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCoreMesh);

    // Core Solid Nucleus (Subtle point of focus)
    const nucleusGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0xf0f1f3,
      transparent: true,
      opacity: 0.85,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreGroup.add(nucleusMesh);

    // --- 3. Kinetic Orbital Rings (Thin, Elegant, Luminous) ---
    // Amber Ring
    const ringGeo1 = new THREE.TorusGeometry(7.6, 0.04, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      transparent: true,
      opacity: 0.75,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    coreGroup.add(ring1);

    // Teal Ring
    const ringGeo2 = new THREE.TorusGeometry(6.2, 0.035, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      transparent: true,
      opacity: 0.65,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    coreGroup.add(ring2);

    // Outer Blueprint Grid Ring (Phoenix Gear Reference)
    const ringGeo3 = new THREE.RingGeometry(8.8, 8.95, 60);
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

    // --- 4. High-DPI Crisp 3D System Tech Micro-Nodes ---
    const nodeLabels = [
      { text: 'React UI', color: '#4cd7f6' },
      { text: 'PostgreSQL', color: '#e58e26' },
      { text: 'Webhooks', color: '#10b981' },
      { text: 'REST APIs', color: '#f0f1f3' },
      { text: 'Stripe Pay', color: '#e58e26' },
    ];

    const createCrispNodeSprite = (label, colorHex) => {
      // 2X Retina resolution canvas for pin-sharp text
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 144;
      const ctx = canvas.getContext('2d');

      // Minimal translucent glass background
      ctx.fillStyle = 'rgba(18, 19, 22, 0.88)';
      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(8, 8, 496, 128, 36);
      ctx.fill();
      ctx.stroke();

      // Glowing dot
      ctx.fillStyle = colorHex;
      ctx.shadowColor = colorHex;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(60, 72, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      // Crisp typographic label
      ctx.font = '600 44px "IBM Plex Mono", monospace';
      ctx.fillStyle = '#F0F1F3';
      ctx.fillText(label, 96, 88);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.generateMipmaps = true;

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
      const speed = 0.28 + index * 0.03;
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

    // --- 5. Clean Ambient Star/Data Particles ---
    const particleCount = 180;
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
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleSystem);

    // --- 6. Smooth Shockwave Ring ---
    const shockwaveGeo = new THREE.RingGeometry(0.1, 0.25, 64);
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
    let shockwaveScale = 0.5;

    // --- 7. Butter-Smooth Damped Rotation Physics ---
    let isDragging = false;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let targetRotationX = 0.15;
    let targetRotationY = 0;
    let currentRotationX = 0.15;
    let currentRotationY = 0;

    // Parallax mouse follow when idle
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

        // Clamp vertical pitch so it never flips upside down
        targetRotationX = Math.max(-0.85, Math.min(0.85, targetRotationX));

        pointerStartX = clientX;
        pointerStartY = clientY;
      } else {
        // Subtle optical parallax
        const halfW = window.innerWidth / 2;
        const halfH = window.innerHeight / 2;
        mouseParallaxX = ((clientX - halfW) / halfW) * 1.8;
        mouseParallaxY = ((clientY - halfH) / halfH) * 1.2;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    // Click Shockwave Pulse
    const onClick = () => {
      shockwaveActive = true;
      shockwaveScale = 0.2;
      shockwaveMesh.scale.set(0.2, 0.2, 0.2);
      shockwaveMat.opacity = 0.85;

      // Soft spring impulse to orbiting nodes
      orbitNodes.forEach((node) => {
        node.currentRadius = node.originalRadius * 1.22;
      });
    };

    window.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('click', onClick);

    window.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // --- 8. Animation Loop with Exponential Smoothing ---
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

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth idle drift when not actively grabbing
      if (!isDragging) {
        const driftSpeed = prefersReducedMotion ? 0.001 : 0.003;
        targetRotationY += driftSpeed;
      }

      // Buttery smooth exponential interpolation (Damping factor: 0.075)
      currentRotationX += (targetRotationX - currentRotationX) * 0.075;
      currentRotationY += (targetRotationY - currentRotationY) * 0.075;

      coreGroup.rotation.x = currentRotationX;
      coreGroup.rotation.y = currentRotationY;

      // Smooth camera parallax
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, 11 + mouseParallaxX, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 4 - mouseParallaxY, 0.05);
      camera.lookAt(coreGroup.position.x * 0.7, 0, 0);

      // Core harmonic breathing pulse
      const breath = Math.sin(elapsedTime * 2.0) * 0.05 + 1;
      innerCoreMesh.scale.set(breath, breath, breath);
      nucleusMesh.scale.set(breath * 1.1, breath * 1.1, breath * 1.1);

      coreMesh.rotation.y += 0.004;
      coreMesh.rotation.x += 0.002;

      // Kinetic rings rotation
      ring1.rotation.z += 0.008;
      ring2.rotation.y -= 0.007;
      ring3.rotation.z += 0.003;

      // Orbit tech nodes with smooth radius spring
      orbitNodes.forEach((node) => {
        node.angle += node.speed * delta;
        node.currentRadius = THREE.MathUtils.lerp(node.currentRadius, node.originalRadius, 0.07);

        const x = Math.cos(node.angle) * node.currentRadius;
        const z = Math.sin(node.angle) * node.currentRadius;
        const y = Math.sin(node.angle * 2) * (node.currentRadius * node.inclination * 0.35);

        node.sprite.position.set(x, y, z);
      });

      // Ambient particle drift
      particleSystem.rotation.y -= 0.0008;
      particleSystem.rotation.z += 0.0005;

      // Shockwave expansion with smooth ease-out
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

    // --- 9. Responsive Layout Adjustment ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;

      if (width < 768) {
        // Mobile: Centered, pulled slightly back
        coreGroup.position.set(0, -2, -6);
        camera.position.set(0, 3, 38);
      } else if (width < 1024) {
        // Tablet
        coreGroup.position.set(6, 0, -2);
        camera.position.set(7, 4, 38);
      } else {
        // Desktop: Perfectly balanced behind right column
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
      window.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('resize', handleResize);
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
      {/* Minimal, Sleek 3D Control Hint */}
      {hintVisible && (
        <div className="hidden sm:flex items-center gap-2 absolute top-6 right-8 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-[#1A1C21]/85 border border-[#2A2D35] text-[11px] font-mono text-[#8A919E] backdrop-blur-md shadow-lg transition-opacity duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>3D Core: Drag to spin &bull; Click to pulse</span>
        </div>
      )}
    </div>
  );
}
