import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function TechCore3D() {
  const mountRef = useRef(null);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 24);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Root Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Ambient Glow Sprite
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 64;
    glowCanvas.height = 64;
    const gCtx = glowCanvas.getContext('2d');
    const grad = gCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(229, 142, 38, 0.4)');
    grad.addColorStop(0.5, 'rgba(76, 215, 246, 0.15)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    gCtx.fillStyle = grad;
    gCtx.fillRect(0, 0, 64, 64);
    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    const glowMat = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glowSprite = new THREE.Sprite(glowMat);
    glowSprite.scale.set(12, 12, 1);
    coreGroup.add(glowSprite);

    // 2. Icosahedron Geometry Core
    const outerGeo = new THREE.IcosahedronGeometry(3.2, 0);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    const innerGeo = new THREE.IcosahedronGeometry(1.8, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 3. Kinetic Rings
    const ring1Geo = new THREE.TorusGeometry(5.2, 0.04, 8, 48);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xe58e26, transparent: true, opacity: 0.85 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(4.4, 0.035, 8, 48);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x4cd7f6, transparent: true, opacity: 0.75 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    coreGroup.add(ring2);

    // 4. Orbiting Tech Nodes
    const nodesData = [
      { text: 'React UI', color: '#4cd7f6' },
      { text: 'PostgreSQL', color: '#e58e26' },
      { text: 'Webhooks', color: '#10b981' },
      { text: 'APIs', color: '#f0f1f3' },
    ];

    const createNode = (text, col) => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 64;
      const ctx = c.getContext('2d');
      ctx.fillStyle = 'rgba(20, 22, 25, 0.92)';
      ctx.strokeStyle = col;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(4, 4, 248, 56, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(26, 32, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = 'bold 20px "IBM Plex Mono", monospace';
      ctx.fillStyle = '#F0F1F3';
      ctx.fillText(text, 44, 38);

      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.95 });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(3.4, 0.85, 1);
      return sprite;
    };

    const orbitRadius = 6.8;
    const nodes = [];

    nodesData.forEach((item, i) => {
      const sprite = createNode(item.text, item.color);
      const angle = (i / nodesData.length) * Math.PI * 2;
      const speed = 0.45 + i * 0.05;
      const inclination = (i % 2 === 0 ? 1 : -1) * 0.35;
      coreGroup.add(sprite);
      nodes.push({ sprite, angle, speed, inclination, r: orbitRadius });
    });

    // 5. Drag & Spin Physics
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let rotX = 0.2;
    let rotY = 0;
    let targetRotX = 0.2;
    let targetRotY = 0;

    const onDown = (e) => {
      isDragging = true;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      startX = clientX;
      startY = clientY;
      setHint(false);
    };

    const onMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const dx = clientX - startX;
      const dy = clientY - startY;

      targetRotY += dx * 0.008;
      targetRotX += dy * 0.008;
      targetRotX = Math.max(-0.9, Math.min(0.9, targetRotX));

      startX = clientX;
      startY = clientY;
    };

    const onUp = () => {
      isDragging = false;
    };

    mount.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    mount.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

    // 6. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const dt = Math.min(clock.getDelta(), 0.04);
      const time = clock.getElapsedTime();

      if (!isDragging) {
        targetRotY += 0.006; // Continuous smooth rotation
      }

      rotX += (targetRotX - rotX) * 0.1;
      rotY += (targetRotY - rotY) * 0.1;

      coreGroup.rotation.x = rotX;
      coreGroup.rotation.y = rotY;

      // Pulse
      const scale = Math.sin(time * 2.5) * 0.06 + 1;
      innerMesh.scale.set(scale, scale, scale);

      outerMesh.rotation.y += 0.008;
      outerMesh.rotation.x += 0.004;

      ring1.rotation.z += 0.015;
      ring2.rotation.y -= 0.012;

      // Orbit Nodes
      nodes.forEach((n) => {
        n.angle += n.speed * dt;
        const x = Math.cos(n.angle) * n.r;
        const z = Math.sin(n.angle) * n.r;
        const y = Math.sin(n.angle * 2) * (n.r * n.inclination * 0.4);
        n.sprite.position.set(x, y, z);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mount.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      mount.removeEventListener('touchstart', onDown);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);

      outerGeo.dispose();
      innerGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      outerMat.dispose();
      innerMat.dispose();
      ring1Mat.dispose();
      ring2Mat.dispose();
      glowMat.dispose();
      glowTexture.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[280px] bg-[#141619] overflow-hidden select-none cursor-grab active:cursor-grabbing flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full" />
      {hint && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1 rounded-full bg-[#1A1C21]/90 border border-[#2A2D35] text-[10px] font-mono text-[#8A919E] flex items-center gap-1.5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E58E26] animate-ping"></span>
          <span>3D Core: Drag to spin 360°</span>
        </div>
      )}
    </div>
  );
}
