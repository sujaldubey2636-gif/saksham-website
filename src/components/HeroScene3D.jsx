import React, { useEffect, useRef } from 'react';
// Force Cache Busting - v1.0.1
import * as THREE from 'three';

export default function HeroScene3D() {
  const containerRef = useRef(null);
  console.log("Cache Bust v2 - 3D Core Active");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 1. Scene, Camera & High-Performance Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    // Start the camera far away for a dramatic cinematic zoom-in on page load
    camera.position.set(0, 40, 180); 
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Disabled for extreme performance
      powerPreference: 'high-performance',
      precision: 'mediump',
    });

    // Cap pixel ratio to 1.0 for rock-solid 60 FPS across all GPUs (especially mobile)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.0));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Brand Palette
    const COLOR_AMBER = new THREE.Color(0xe58e26);
    const COLOR_TEAL = new THREE.Color(0x4cd7f6);
    const COLOR_MUTED = new THREE.Color(0x2a2d35);

    // =========================================================
    // SECTION A: 3D FLOWING PARTICLE TERRAIN WAVES (Moving Dots)
    // =========================================================
    const cols = 45;
    const rows = 30;
    const count = cols * rows;
    const separation = 1.8;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const baseHeights = new Float32Array(count);

    let pIdx = 0;
    for (let ix = 0; ix < cols; ix++) {
      for (let iy = 0; iy < rows; iy++) {
        const x = (ix - cols / 2) * separation;
        const z = (iy - rows / 2) * separation;
        const y = Math.sin(ix * 0.25) * 1.6 + Math.cos(iy * 0.25) * 1.6 - 4;

        positions[pIdx * 3] = x;
        positions[pIdx * 3 + 1] = y;
        positions[pIdx * 3 + 2] = z;
        baseHeights[pIdx] = y;

        // Radiant color gradient across the grid
        const factor = (ix / cols + iy / rows) * 0.5;
        const c = new THREE.Color();
        if (factor > 0.65) {
          c.lerpColors(COLOR_AMBER, COLOR_MUTED, (factor - 0.65) * 2.8);
        } else if (factor > 0.3) {
          c.lerpColors(COLOR_TEAL, COLOR_AMBER, (factor - 0.3) * 2.8);
        } else {
          c.lerpColors(COLOR_MUTED, COLOR_TEAL, factor * 3.3);
        }

        colors[pIdx * 3] = c.r;
        colors[pIdx * 3 + 1] = c.g;
        colors[pIdx * 3 + 2] = c.b;

        pIdx++;
      }
    }

    const waveGeometry = new THREE.BufferGeometry();
    waveGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    waveGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Glow Disc Particle Texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext('2d');
    const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    pGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    pGrad.addColorStop(0.35, 'rgba(229, 142, 38, 0.85)');
    pGrad.addColorStop(0.75, 'rgba(76, 215, 246, 0.35)');
    pGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 32, 32);
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const waveMaterial = new THREE.PointsMaterial({
      size: 1.15,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveParticles = new THREE.Points(waveGeometry, waveMaterial);
    scene.add(waveParticles);

    // Connecting Network Wireframe Lines
    const lineIndices = [];
    for (let ix = 0; ix < cols; ix++) {
      for (let iy = 0; iy < rows; iy++) {
        const current = ix * rows + iy;
        if (ix < cols - 1) lineIndices.push(current, (ix + 1) * rows + iy);
        if (iy < rows - 1) lineIndices.push(current, ix * rows + (iy + 1));
      }
    }
    const waveLineGeo = new THREE.BufferGeometry();
    waveLineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    waveLineGeo.setIndex(lineIndices);

    const waveLineMat = new THREE.LineBasicMaterial({
      color: 0x4cd7f6, // Bright Cyan Tron-grid
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const waveLines = new THREE.LineSegments(waveLineGeo, waveLineMat);
    scene.add(waveLines);

    // =========================================================
    // SECTION B: 3D HOLOGRAPHIC ARCHITECTURE CORE
    // =========================================================
    const coreGroup = new THREE.Group();
    
    // Config for floating all over the page
    let basePosition = new THREE.Vector3(0, 1.5, -2);
    let floatRange = new THREE.Vector3(12, 5, 3);

    coreGroup.position.copy(basePosition);
    coreGroup.scale.set(1.0, 1.0, 1.0);
    scene.add(coreGroup);

    // 1. Ambient Glow Aura
    const auraCanvas = document.createElement('canvas');
    auraCanvas.width = 64;
    auraCanvas.height = 64;
    const auraCtx = auraCanvas.getContext('2d');
    const auraGrad = auraCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    auraGrad.addColorStop(0, 'rgba(229, 142, 38, 0.35)');
    auraGrad.addColorStop(0.45, 'rgba(76, 215, 246, 0.15)');
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
    auraSprite.scale.set(16, 16, 1);
    coreGroup.add(auraSprite);

    // 2. Polyhedral Icosahedron Core
    const outerCoreGeo = new THREE.IcosahedronGeometry(4.0, 1);
    const outerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending, // Makes the lines glow when overlapping
    });
    const outerCoreMesh = new THREE.Mesh(outerCoreGeo, outerCoreMat);
    coreGroup.add(outerCoreMesh);

    const innerCoreGeo = new THREE.IcosahedronGeometry(2.3, 0);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending, // Neon energy effect
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCoreMesh);

    // Quantum Layering: Dodecahedron inside the Icosahedron
    const quantumGeo = new THREE.DodecahedronGeometry(3.1, 0);
    const quantumMat = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const quantumMesh = new THREE.Mesh(quantumGeo, quantumMat);
    coreGroup.add(quantumMesh);

    // Data Swarm Nucleus (Replaces solid ball)
    const swarmCount = 200;
    const swarmGeo = new THREE.BufferGeometry();
    const swarmPos = new Float32Array(swarmCount * 3);
    const swarmOrigins = new Float32Array(swarmCount * 3);
    for (let i = 0; i < swarmCount * 3; i++) {
      const val = (Math.random() - 0.5) * 2.5; // Spread within the inner core
      swarmPos[i] = val;
      swarmOrigins[i] = val;
    }
    swarmGeo.setAttribute('position', new THREE.BufferAttribute(swarmPos, 3));
    swarmGeo.setAttribute('origin', new THREE.BufferAttribute(swarmOrigins, 3));
    const swarmMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const swarmMesh = new THREE.Points(swarmGeo, swarmMat);
    coreGroup.add(swarmMesh);

    // 2.5 High-Performance Stardust Particle Field
    const stardustGeo = new THREE.BufferGeometry();
    const stardustCount = 120;
    const stardustPos = new Float32Array(stardustCount * 3);
    for (let i = 0; i < stardustCount * 3; i += 3) {
      // Generate points randomly inside a spherical volume
      const r = 4 + Math.random() * 8; 
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      stardustPos[i] = r * Math.sin(phi) * Math.cos(theta);
      stardustPos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      stardustPos[i + 2] = r * Math.cos(phi);
    }
    stardustGeo.setAttribute('position', new THREE.BufferAttribute(stardustPos, 3));
    const stardustMat = new THREE.PointsMaterial({
      color: 0x4cd7f6,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const stardustMesh = new THREE.Points(stardustGeo, stardustMat);
    coreGroup.add(stardustMesh);

    // Neural Constellation Lines (dynamically drawn each frame)
    const stardustLinesGeo = new THREE.BufferGeometry();
    // Maximum 100 points means 100*99/2 lines max. We'll allocate for 1000 lines.
    const stardustLinesPos = new Float32Array(1000 * 6);
    stardustLinesGeo.setAttribute('position', new THREE.BufferAttribute(stardustLinesPos, 3));
    const stardustLinesMat = new THREE.LineBasicMaterial({
      color: 0x4cd7f6,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const stardustLinesMesh = new THREE.LineSegments(stardustLinesGeo, stardustLinesMat);
    coreGroup.add(stardustLinesMesh);

    const nucleusGeo = new THREE.SphereGeometry(0.7, 12, 12);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0xf0f1f3,
      transparent: true,
      opacity: 0.9,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreGroup.add(nucleusMesh);

    // 3. Kinetic Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(8.0, 0.05, 8, 48);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xe58e26,
      transparent: true,
      opacity: 0.85,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(6.4, 0.04, 8, 48);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x4cd7f6,
      transparent: true,
      opacity: 0.75,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    coreGroup.add(ring2);

    const ring3Geo = new THREE.RingGeometry(9.4, 9.6, 36);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x2a2d35,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
      wireframe: true,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI / 2.2;
    coreGroup.add(ring3);

    // 4. Orbiting High-DPI Micro-Nodes
    const nodeLabels = [
      { text: 'React UI', color: '#4cd7f6' },
      { text: 'PostgreSQL', color: '#e58e26' },
      { text: 'Webhooks', color: '#10b981' },
      { text: 'APIs', color: '#f0f1f3' },
      { text: 'Stripe Pay', color: '#e58e26' },
    ];

    const createNodeSprite = (label, colorHex) => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 72;
      const ctx = c.getContext('2d');

      ctx.fillStyle = 'rgba(20, 22, 25, 0.92)';
      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(4, 4, 248, 64, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = colorHex;
      ctx.beginPath();
      ctx.arc(28, 36, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = 'bold 22px "IBM Plex Mono", monospace';
      ctx.fillStyle = '#F0F1F3';
      ctx.fillText(label, 48, 43);

      const tex = new THREE.CanvasTexture(c);
      const sMat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(sMat);
      sprite.scale.set(4.2, 1.15, 1);
      return sprite;
    };

    const orbitRadius = 10.8;
    const orbitNodes = [];

    // Distinct spherical orbital planes for each node to create an atom-like electron cloud
    const axes = [
      new THREE.Vector3(1, 1.5, 0.5).normalize(),
      new THREE.Vector3(-1, 1.2, -0.8).normalize(),
      new THREE.Vector3(0.5, 1, 1.5).normalize(),
      new THREE.Vector3(-0.8, 1, 1.2).normalize(),
      new THREE.Vector3(1.2, -0.5, 1).normalize(),
    ];

    nodeLabels.forEach((item, index) => {
      const sprite = createNodeSprite(item.text, item.color);
      const angle = (index / nodeLabels.length) * Math.PI * 2;
      const speed = 0.35 + index * 0.05;
      
      const axis = axes[index % axes.length];
      
      // Determine starting position orthogonal to axis
      const arbitrary = new THREE.Vector3(0, 1, 0);
      if (Math.abs(axis.y) > 0.9) arbitrary.set(1, 0, 0);
      const startVec = new THREE.Vector3().crossVectors(axis, arbitrary).normalize();

      coreGroup.add(sprite);
      orbitNodes.push({
        sprite,
        angle,
        speed,
        axis,
        startVec,
        originalRadius: orbitRadius,
        currentRadius: orbitRadius,
      });
    });

    // 5. Interactive Shockwave Mesh
    const shockwaveGeo = new THREE.RingGeometry(0.2, 0.6, 48);
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
    let quantumRippleRadius = 0;

    // Hyperdrive State
    let isHyperdrive = false;
    let hyperdriveSpeed = 1.0;
    window.triggerHyperdrive = (state) => {
      isHyperdrive = state;
    };

    // =========================================================
    // SECTION C: INTERACTION & 360° DRAG-TO-ORBIT PHYSICS
    // =========================================================
    let isDragging = false;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let rotationVelocity = { x: 0.001, y: 0.003 };

    let mouseParallaxX = 0;
    let mouseParallaxY = 0;
    let normalizedMouseX = 0;
    let normalizedMouseY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      pointerStartX = clientX;
      pointerStartY = clientY;
    };

    const onPointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      normalizedMouseX = (clientX / window.innerWidth) * 2 - 1;
      normalizedMouseY = -(clientY / window.innerHeight) * 2 + 1;

      if (isDragging) {
        const deltaX = clientX - pointerStartX;
        const deltaY = clientY - pointerStartY;

        rotationVelocity.y = deltaX * 0.005;
        rotationVelocity.x = deltaY * 0.005;

        pointerStartX = clientX;
        pointerStartY = clientY;
      } else {
        mouseParallaxX = ((clientX - halfW) / halfW) * 4;
        mouseParallaxY = ((clientY - halfH) / halfH) * 2.5;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const onClick = () => {
      shockwaveActive = true;
      shockwaveScale = 0.5;
      quantumRippleRadius = 0; // Trigger the massive grid ripple
      shockwaveMesh.scale.set(0.5, 0.5, 0.5);
      shockwaveMat.opacity = 0.95;

      orbitNodes.forEach((node) => {
        node.currentRadius = node.originalRadius * 1.3;
      });
    };

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    container.addEventListener('click', onClick);

    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // =========================================================
    // SECTION D: RELIABLE 60FPS CONTINUOUS ANIMATION LOOP
    // =========================================================
    let animationFrameId;
    let clock = new THREE.Clock();
    const tempNodePos = new THREE.Vector3(); // For calculating spherical orbits
    const baseCameraPos = new THREE.Vector3(0, 14, 42);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Only suspend when tab is hidden, never pause unexpectedly
      if (document.hidden) return;

      const rawDelta = clock.getDelta();
      const delta = Math.min(rawDelta, 0.04);
      const elapsedTime = clock.getElapsedTime();
      const waveSpeed = prefersReducedMotion ? 0.3 : 0.85;

      // Camera parallax
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseParallaxX, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 14 - mouseParallaxY, 0.05);

      // Hyperdrive Logic
      hyperdriveSpeed = THREE.MathUtils.lerp(hyperdriveSpeed, isHyperdrive ? 4.0 : 1.0, 0.05);

      // 1. Dynamic Wave Terrain with Mouse Ripple Physics
      const positions = waveGeometry.attributes.position.array;
      const dynamicWaveSpeed = waveSpeed * hyperdriveSpeed;
      let idx = 0;
      
      // Calculate approximate world pos of mouse on the wave plane
      const mouseWorldX = normalizedMouseX * 30;
      const mouseWorldZ = normalizedMouseY * 30;

      for (let ix = 0; ix < cols; ix++) {
        for (let iy = 0; iy < rows; iy++) {
          const w1 = Math.sin(ix * 0.28 + elapsedTime * dynamicWaveSpeed) * 2.2;
          const w2 = Math.cos(iy * 0.24 + elapsedTime * (dynamicWaveSpeed * 0.8)) * 2.2;
          const w3 = Math.sin((ix + iy) * 0.14 + elapsedTime * 0.6 * hyperdriveSpeed) * 1.6;

          let ripple = 0;
          const pointX = positions[idx * 3];
          const pointZ = positions[idx * 3 + 2];
          const dist = Math.sqrt(Math.pow(pointX - mouseWorldX, 2) + Math.pow(pointZ - mouseWorldZ, 2));
          
          if (dist < 15) {
            ripple = -(15 - dist) * 0.3; // Gentle mouse parting
          }
          
          // Explosive Quantum Ripple from Click
          if (shockwaveActive) {
            const swDist = Math.abs(Math.sqrt(Math.pow(pointX, 2) + Math.pow(pointZ, 2)) - quantumRippleRadius);
            if (swDist < 5) {
               ripple += Math.sin((5 - swDist) * Math.PI / 5) * 6.0 * shockwaveMat.opacity; // Massive vertical displacement
            }
          }

          positions[idx * 3 + 1] = baseHeights[idx] + w1 + w2 + w3 + ripple;
          idx++;
        }
      }
      waveGeometry.attributes.position.needsUpdate = true;
      waveLineGeo.attributes.position.needsUpdate = true;

      // Neural Constellation Networking (Draw lines between close stardust particles)
      const starPos = stardustGeo.attributes.position.array;
      let lineIdx = 0;
      // Fast nearest neighbor check (only checking a subset to save CPU, it creates a nice flicker effect)
      for (let i = 0; i < stardustCount; i += 2) {
        for (let j = i + 2; j < stardustCount; j += 2) {
          if (lineIdx >= 1000 * 6) break;
          const dx = starPos[i*3] - starPos[j*3];
          const dy = starPos[i*3+1] - starPos[j*3+1];
          const dz = starPos[i*3+2] - starPos[j*3+2];
          const distSq = dx*dx + dy*dy + dz*dz;
          if (distSq < 16) { // threshold distance
            stardustLinesPos[lineIdx++] = starPos[i*3];
            stardustLinesPos[lineIdx++] = starPos[i*3+1];
            stardustLinesPos[lineIdx++] = starPos[i*3+2];
            stardustLinesPos[lineIdx++] = starPos[j*3];
            stardustLinesPos[lineIdx++] = starPos[j*3+1];
            stardustLinesPos[lineIdx++] = starPos[j*3+2];
          }
        }
      }
      // Magnetic Mouse Pull for Stardust
      const mouseStarX = mouseParallaxX * 3;
      const mouseStarY = mouseParallaxY * 3;
      for (let i = 0; i < stardustCount; i++) {
        const px = starPos[i*3];
        const py = starPos[i*3+1];
        // Calculate distance in 2D space relative to camera view
        const distToMouse = Math.sqrt(Math.pow(px - mouseStarX, 2) + Math.pow(py - mouseStarY, 2));
        if (distToMouse < 4) {
           // Magnetic Pull
           starPos[i*3] = THREE.MathUtils.lerp(px, mouseStarX, 0.02 * hyperdriveSpeed);
           starPos[i*3+1] = THREE.MathUtils.lerp(py, mouseStarY, 0.02 * hyperdriveSpeed);
        } else {
           // Spring back outward slightly to create continuous swarming
           starPos[i*3] += (Math.random() - 0.5) * 0.01;
           starPos[i*3+1] += (Math.random() - 0.5) * 0.01;
        }
      }
      stardustGeo.attributes.position.needsUpdate = true;

      stardustLinesGeo.setDrawRange(0, lineIdx / 3);
      stardustLinesGeo.attributes.position.needsUpdate = true;

      // 2. Core Group Floating, Rotation & Drag Inertia
      coreGroup.rotation.y += rotationVelocity.y * hyperdriveSpeed;
      coreGroup.rotation.x += rotationVelocity.x * hyperdriveSpeed;

      if (!isHyperdrive) {
        outerCoreMesh.material.color.setHex(0x4cd7f6);
        outerCoreMesh.material.opacity = 0.45;
        quantumMat.color.setHSL(0.55 + Math.sin(elapsedTime * 0.3) * 0.1, 0.8, 0.5);
      } else {
        // Hyperdrive Deep Blue/Violet
        outerCoreMesh.material.color.setHex(0x2288ff);
        outerCoreMesh.material.opacity = 0.8;
        quantumMat.color.setHex(0x8844ff); // Shifts to purple/violet!
      }

      if (!isDragging) {
        rotationVelocity.x = THREE.MathUtils.lerp(rotationVelocity.x, Math.sin(elapsedTime * 0.4) * 0.003 * hyperdriveSpeed, 0.02);
        rotationVelocity.y = THREE.MathUtils.lerp(rotationVelocity.y, 0.004 + Math.cos(elapsedTime * 0.25) * 0.002 * hyperdriveSpeed, 0.02);
        coreGroup.rotation.z += Math.sin(elapsedTime * 0.3) * 0.0015 * hyperdriveSpeed;
      }

      // Smoothly float the entire ball all over the screen (Lissajous curve)
      const floatSpeed = 0.3 * hyperdriveSpeed;
      coreGroup.position.x = basePosition.x + Math.sin(elapsedTime * floatSpeed) * floatRange.x;
      coreGroup.position.y = basePosition.y + Math.cos(elapsedTime * floatSpeed * 0.7) * floatRange.y;
      coreGroup.position.z = basePosition.z + Math.sin(elapsedTime * floatSpeed * 1.1) * floatRange.z;

      // 3. Core Pulsing & Internal Ring Rotation
      const breath = Math.sin(elapsedTime * 2.2 * hyperdriveSpeed) * 0.06 + 1;
      innerCoreMesh.scale.set(breath, breath, breath);
      
      // Dynamic color shifting for the inner core
      innerCoreMesh.material.color.setHSL(0.08 + Math.sin(elapsedTime * 0.5) * 0.03, 0.8, 0.5);

      // Quantum Geometry Layering Rotation
      quantumMesh.rotation.y -= 0.007 * hyperdriveSpeed;
      quantumMesh.rotation.z += 0.004 * hyperdriveSpeed;
      quantumMesh.rotation.x += 0.002 * hyperdriveSpeed;

      // Data Swarm Nucleus Animation (Buzzing)
      const swarmP = swarmGeo.attributes.position.array;
      const swarmO = swarmGeo.attributes.origin.array;
      for (let i = 0; i < swarmCount * 3; i++) {
         swarmP[i] = swarmO[i] + Math.sin(elapsedTime * 15 + i) * 0.15;
      }
      swarmGeo.attributes.position.needsUpdate = true;
      swarmMesh.rotation.y -= 0.01 * hyperdriveSpeed;

      outerCoreMesh.rotation.y += 0.005 * hyperdriveSpeed;
      outerCoreMesh.rotation.x += 0.003 * hyperdriveSpeed;
      
      stardustMesh.rotation.y -= 0.002 * hyperdriveSpeed;
      stardustMesh.rotation.z += 0.001 * hyperdriveSpeed;
      stardustLinesMesh.rotation.copy(stardustMesh.rotation);

      ring1.rotation.z += 0.010 * hyperdriveSpeed;
      ring2.rotation.y -= 0.008 * hyperdriveSpeed;
      ring3.rotation.z += 0.004 * hyperdriveSpeed;

      // 4. Orbiting Micro-Nodes Motion
      for (let n = 0; n < orbitNodes.length; n++) {
        const node = orbitNodes[n];
        node.angle += node.speed * delta * hyperdriveSpeed;
        node.currentRadius = THREE.MathUtils.lerp(node.currentRadius, node.originalRadius, 0.06);

        tempNodePos.copy(node.startVec)
                   .applyAxisAngle(node.axis, node.angle)
                   .multiplyScalar(node.currentRadius);

        node.sprite.position.copy(tempNodePos);
      }

      // Deep Space Parallax Camera
      // Base camera target
      if (window.innerWidth < 768) baseCameraPos.set(0, 16, 48);
      else if (window.innerWidth < 1024) baseCameraPos.set(0, 15, 44);
      else baseCameraPos.set(0, 14, 42);

      const targetCamX = baseCameraPos.x - normalizedMouseX * 4.0;
      const targetCamY = baseCameraPos.y - normalizedMouseY * 4.0;
      
      // Dramatic Cinematic Swoop on Load
      // We use a slow lerp for Z to make the entrance feel powerful
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetCamX, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetCamY, 0.05);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, baseCameraPos.z, Math.min(0.02 + elapsedTime * 0.005, 0.08));
      camera.lookAt(0, 0, 0);

      // Pulse Click Effect
      if (shockwaveActive) {
        shockwaveScale += delta * 20;
        quantumRippleRadius += delta * 60; // Expands very fast across the grid
        shockwaveMesh.scale.set(shockwaveScale, shockwaveScale, shockwaveScale);
        shockwaveMat.opacity -= delta * 1.4;

        if (shockwaveMat.opacity <= 0) {
          shockwaveActive = false;
        }
      }

      renderer.render(scene, camera);
    };

    // Launch immediately
    animate();

    // =========================================================
    // SECTION E: RESPONSIVE RESIZE
    // =========================================================
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;

      if (width < 768) {
        // Mobile: Narrower float range
        basePosition.set(0, 3, -10);
        floatRange.set(4, 5, 2);
        coreGroup.scale.set(0.6, 0.6, 0.6);
        camera.position.set(0, 16, 48);
      } else if (width < 1024) {
        // Tablet: Medium float range
        basePosition.set(0, 2, -6);
        floatRange.set(8, 6, 4);
        coreGroup.scale.set(0.72, 0.72, 0.72);
        camera.position.set(0, 15, 44);
      } else {
        // Desktop: Float majestically across the entire screen
        basePosition.set(0, 1.5, -2);
        floatRange.set(13, 5.5, 4);
        coreGroup.scale.set(1.0, 1.0, 1.0);
        camera.position.set(0, 14, 42);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Visibility change handler to prevent time-delta jumps
    const onVisibilityChange = () => {
      if (!document.hidden) {
        clock.getDelta();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // =========================================================
    // SECTION F: CLEANUP
    // =========================================================
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.triggerHyperdrive = undefined;
      container.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      container.removeEventListener('click', onClick);
      container.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);

      // Cleanup
      scene.clear();
      waveGeometry.dispose();
      waveMaterial.dispose();
      particleTexture.dispose();
      waveLineGeo.dispose();
      waveLineMat.dispose();
      outerCoreGeo.dispose();
      outerCoreMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      quantumGeo.dispose();
      quantumMat.dispose();
      swarmGeo.dispose();
      swarmMat.dispose();
      stardustGeo.dispose();
      stardustMat.dispose();
      stardustLinesGeo.dispose();
      stardustLinesMat.dispose();
      nucleusGeo.dispose();
      nucleusMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      shockwaveGeo.dispose();
      shockwaveMat.dispose();
      auraTexture.dispose();
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
      title="Click and drag to spin 3D System Core & pulse waves"
    >
    </div>
  );
}
