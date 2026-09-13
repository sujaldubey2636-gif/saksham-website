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
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(12, 6, 38);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Colors ---
    const COLOR_AMBER = new THREE.Color(0xe58e26);
    const COLOR_TEAL = new THREE.Color(0x4cd7f6);
    const COLOR_DARK = new THREE.Color(0x2a2d35);

    // Root group for all 3D core elements (for drag-to-orbit)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(10, 0, 0); // Positioned slightly toward right side
    scene.add(coreGroup);

    // --- 1. Central Geometric Icosahedron Core ---
    const coreGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreWireMat);
    coreGroup.add(coreMesh);

    // Inner glowing solid core with Fresnel glow effect
    const innerCoreGeo = new THREE.IcosahedronGeometry(2.4, 0);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCoreMesh);

    // --- 2. Kinetic Orbital Rings ---
    // Outer Amber Ring (Tilted)
    const ringGeo1 = new THREE.TorusGeometry(8.2, 0.08, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      transparent: true,
      opacity: 0.85,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    // Inner Teal Ring (Counter-Tilted)
    const ringGeo2 = new THREE.TorusGeometry(6.6, 0.06, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      transparent: true,
      opacity: 0.75,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    coreGroup.add(ring2);

    // Third Gear/Dotted Ring (Phoenix Gear Reference)
    const ringGeo3 = new THREE.RingGeometry(9.6, 9.8, 48);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x2a2d35,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
      wireframe: true,
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.x = Math.PI / 2;
    coreGroup.add(ring3);

    // --- 3. Orbiting 3D System Tech Nodes ---
    const nodeLabels = [
      { text: 'React UI', color: '#4cd7f6' },
      { text: 'PostgreSQL', color: '#e58e26' },
      { text: 'Webhooks', color: '#10b981' },
      { text: 'APIs', color: '#f0f1f3' },
      { text: 'Stripe Pay', color: '#e58e26' },
    ];

    const createNodeSprite = (label, colorHex) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 72;
      const ctx = canvas.getContext('2d');

      // Rounded container pill
      ctx.fillStyle = 'rgba(26, 28, 33, 0.9)';
      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(6, 6, 244, 60, 16);
      ctx.fill();
      ctx.stroke();

      // Dot
      ctx.fillStyle = colorHex;
      ctx.beginPath();
      ctx.arc(32, 36, 8, 0, Math.PI * 2);
      ctx.fill();

      // Text
      ctx.font = 'bold 24px "IBM Plex Mono", monospace';
      ctx.fillStyle = '#F0F1F3';
      ctx.fillText(label, 52, 44);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(4.5, 1.25, 1);
      return sprite;
    };

    const orbitNodes = [];
    const orbitRadius = 11.5;

    nodeLabels.forEach((item, index) => {
      const sprite = createNodeSprite(item.text, item.color);
      const angle = (index / nodeLabels.length) * Math.PI * 2;
      const speed = 0.35 + index * 0.05;
      const inclination = (index % 2 === 0 ? 1 : -1) * 0.45;

      coreGroup.add(sprite);
      orbitNodes.push({ sprite, angle, speed, inclination, originalRadius: orbitRadius, currentRadius: orbitRadius });
    });

    // --- 4. Cosmic Particle Cloud (Dust & Signal Pulses) ---
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount; p++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 5 + Math.random() * 18;

      particlePositions[p * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[p * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[p * 3 + 2] = r * Math.cos(phi);

      const isAmber = Math.random() > 0.45;
      const c = isAmber ? COLOR_AMBER : COLOR_TEAL;
      particleColors[p * 3] = c.r;
      particleColors[p * 3 + 1] = c.g;
      particleColors[p * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleSystem);

    // --- 5. Interactive Shockwave Ring ---
    const shockwaveGeo = new THREE.RingGeometry(0.1, 0.4, 64);
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
    let shockwaveScale = 1;

    // --- 6. Drag & Orbit Physics ---
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.002, y: 0.004 }; // Gentle default drift

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      setHintVisible(false);
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        rotationVelocity.y = deltaX * 0.005;
        rotationVelocity.x = deltaY * 0.005;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Trigger explosive shockwave on click
    const onClick = () => {
      shockwaveActive = true;
      shockwaveScale = 0.5;
      shockwaveMesh.scale.set(1, 1, 1);
      shockwaveMat.opacity = 0.95;

      // Expand orbit nodes momentarily
      orbitNodes.forEach((node) => {
        node.currentRadius = node.originalRadius * 1.35;
      });
    };

    // Touch Support for mobile drag
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        setHintVisible(false);
      }
    };

    const onTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;

        rotationVelocity.y = deltaX * 0.006;
        rotationVelocity.x = deltaY * 0.006;

        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('click', onClick);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // --- 7. Animation Loop ---
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

      // Apply drag inertia with damping
      coreGroup.rotation.y += rotationVelocity.y;
      coreGroup.rotation.x += rotationVelocity.x;

      if (!isDragging) {
        // Natural gentle drift
        rotationVelocity.x *= 0.95;
        rotationVelocity.y = THREE.MathUtils.lerp(rotationVelocity.y, 0.003, 0.04);
      }

      // Pulse core geometry
      const pulse = Math.sin(elapsedTime * 2.5) * 0.08 + 1;
      innerCoreMesh.scale.set(pulse, pulse, pulse);
      coreMesh.rotation.y += 0.005;
      coreMesh.rotation.x += 0.003;

      // Rotate kinetic orbital rings at independent rates
      ring1.rotation.z += 0.012;
      ring2.rotation.y -= 0.009;
      ring3.rotation.z += 0.004;

      // Orbit tech nodes
      orbitNodes.forEach((node) => {
        node.angle += node.speed * delta;
        node.currentRadius = THREE.MathUtils.lerp(node.currentRadius, node.originalRadius, 0.06);

        const x = Math.cos(node.angle) * node.currentRadius;
        const z = Math.sin(node.angle) * node.currentRadius;
        const y = Math.sin(node.angle * 2) * (node.currentRadius * node.inclination * 0.4);

        node.sprite.position.set(x, y, z);
      });

      // Animate particle dust
      particleSystem.rotation.y -= 0.001;
      particleSystem.rotation.z += 0.0008;

      // Handle shockwave expansion
      if (shockwaveActive) {
        shockwaveScale += delta * 24;
        shockwaveMesh.scale.set(shockwaveScale, shockwaveScale, shockwaveScale);
        shockwaveMat.opacity -= delta * 1.6;

        if (shockwaveMat.opacity <= 0) {
          shockwaveActive = false;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- 8. Responsive Resize ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;

      // Adjust position for mobile screens
      if (width < 768) {
        coreGroup.position.set(0, 0, -8);
        camera.position.set(0, 4, 42);
      } else if (width < 1024) {
        coreGroup.position.set(6, 0, -2);
        camera.position.set(8, 5, 40);
      } else {
        coreGroup.position.set(11, 0, 0);
        camera.position.set(12, 6, 38);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      coreGeo.dispose();
      innerCoreGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringGeo3.dispose();
      shockwaveGeo.dispose();
      particleGeo.dispose();

      coreWireMat.dispose();
      innerCoreMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      shockwaveMat.dispose();
      particleMat.dispose();

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
      {/* Interactive Drag Badge Hint */}
      {hintVisible && (
        <div className="hidden sm:flex items-center gap-2 absolute top-6 right-8 z-20 pointer-events-none px-3 py-1.5 rounded-full bg-[#1A1C21]/80 border border-[#2A2D35] text-[11px] font-mono text-[#8A919E] backdrop-blur-md animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E58E26]"></span>
          <span>3D Core: Drag to orbit &bull; Click to pulse</span>
        </div>
      )}
    </div>
  );
}
