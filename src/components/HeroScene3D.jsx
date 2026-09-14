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
    
    // Add Depth Fog to make distant objects fade into the background smoothly
    scene.fog = new THREE.FogExp2(0x121316, 0.012);
    
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
      antialias: false, // Disabled to completely eliminate scrolling lag
      powerPreference: 'high-performance',
      precision: 'lowp', // Lowest precision for maximum speed on mobile
    });

    // Hard-cap pixel ratio to 1.0. This guarantees a locked 60FPS on almost all devices.
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
    // Reduced grid density (35x22) to drastically cut down CPU math in the animate loop
    const cols = 35;
    const rows = 22;
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
    const stardustOrigins = new Float32Array(stardustCount * 3);
    const stardustColors = new Float32Array(stardustCount * 3);
    
    for (let i = 0; i < stardustCount * 3; i += 3) {
      // Generate points randomly inside a spherical volume
      const r = 4 + Math.random() * 8; 
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      stardustPos[i] = x;
      stardustPos[i + 1] = y;
      stardustPos[i + 2] = z;
      
      stardustOrigins[i] = x;
      stardustOrigins[i + 1] = y;
      stardustOrigins[i + 2] = z;
      
      // Default Cyan color
      stardustColors[i] = 0.3;     // R
      stardustColors[i + 1] = 0.84; // G
      stardustColors[i + 2] = 0.96; // B
    }
    stardustGeo.setAttribute('position', new THREE.BufferAttribute(stardustPos, 3));
    stardustGeo.setAttribute('origin', new THREE.BufferAttribute(stardustOrigins, 3));
    stardustGeo.setAttribute('color', new THREE.BufferAttribute(stardustColors, 3));
    
    const stardustMat = new THREE.PointsMaterial({
      size: 0.08,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      vertexColors: true, // Enables the heatmap color shift
    });
    const stardustMesh = new THREE.Points(stardustGeo, stardustMat);
    coreGroup.add(stardustMesh);

    // Neural Constellation Lines removed for performance

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
    let starScatterIntensity = 0;

    // Hyperdrive State
    let isHyperdrive = false;
    let hyperdriveSpeed = 1.0;
    window.triggerHyperdrive = (state) => {
      isHyperdrive = state;
    };

    
    // --- DIGITAL VOXELIZATION CORE ---
    const voxelCount = 800;
    const voxelGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const voxelMat = new THREE.MeshBasicMaterial({ color: 0x4cd7f6, transparent: true, opacity: 0.9, wireframe: false });
    const voxelMesh = new THREE.InstancedMesh(voxelGeo, voxelMat, voxelCount);
    
    const voxelTargets = new Float32Array(voxelCount * 3);
    const voxelVelocities = new Float32Array(voxelCount * 3);
    const voxelPositions = new Float32Array(voxelCount * 3);
    const voxelRotations = new Float32Array(voxelCount * 3);
    const voxelDummy = new THREE.Object3D();

    for (let i = 0; i < voxelCount; i++) {
        let r, theta, phi, tx, ty, tz;
        if (i < 250) {
            r = 1.2; // Inner Core
            theta = Math.random() * Math.PI * 2; phi = Math.acos((Math.random() * 2) - 1);
            tx = r * Math.sin(phi) * Math.cos(theta); ty = r * Math.sin(phi) * Math.sin(theta); tz = r * Math.cos(phi);
        } else if (i < 500) {
            r = 2.2; // Outer Core
            theta = Math.random() * Math.PI * 2; phi = Math.acos((Math.random() * 2) - 1);
            tx = r * Math.sin(phi) * Math.cos(theta); ty = r * Math.sin(phi) * Math.sin(theta); tz = r * Math.cos(phi);
        } else {
            r = 3.5 + Math.random() * 1.5; // Rings
            theta = Math.random() * Math.PI * 2;
            tx = r * Math.cos(theta); ty = (Math.random() - 0.5) * 0.5; tz = r * Math.sin(theta);
        }
        voxelTargets[i*3] = tx; voxelTargets[i*3+1] = ty; voxelTargets[i*3+2] = tz;
        voxelPositions[i*3] = tx; voxelPositions[i*3+1] = ty; voxelPositions[i*3+2] = tz;
        const vSpeed = 5.0 + Math.random() * 15.0;
        const norm = Math.sqrt(tx*tx + ty*ty + tz*tz) || 1;
        // Magnetic Swirl (cross product) for orbital explosion
        const swirlX = tz / norm;
        const swirlZ = -tx / norm;
        
        voxelVelocities[i*3] = (tx/norm * 0.5 + swirlX * 1.2) * vSpeed;
        voxelVelocities[i*3+1] = (ty/norm * 0.5 + (Math.random()-0.5)) * vSpeed;
        voxelVelocities[i*3+2] = (tz/norm * 0.5 + swirlZ * 1.2) * vSpeed;
        voxelRotations[i*3] = Math.random() * Math.PI; voxelRotations[i*3+1] = Math.random(); voxelRotations[i*3+2] = Math.random();
        voxelDummy.position.set(tx, ty, tz);
        voxelDummy.updateMatrix();
        voxelMesh.setMatrixAt(i, voxelDummy.matrix);
    }
    voxelMesh.instanceMatrix.needsUpdate = true;
    voxelMesh.visible = false;
    coreGroup.add(voxelMesh);
    let voxelState = 0;
    let voxelAnimTimer = 0;
    let nextVoxelTrigger = 10.0; // Starts first trigger at 10 seconds
    // 6. Targeted Hyper-Comet
    const cometGeo = new THREE.BufferGeometry();
    const cometPositions = new Float32Array([0,0,0, 0,0,0]);
    cometGeo.setAttribute('position', new THREE.BufferAttribute(cometPositions, 3));
    const cometMat = new THREE.LineBasicMaterial({ color: 0x4cd7f6, transparent: true, opacity: 0, blending: THREE.AdditiveBlending });
    const cometMesh = new THREE.Line(cometGeo, cometMat);
    scene.add(cometMesh);

    let cometActive = false;
    let cometProgress = 0;
    let cometStart = new THREE.Vector3();
    let cometEnd = new THREE.Vector3();

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

    let manualVoxelTimer = 0;
    let lastClickTime = 0;

    const onClick = () => {
      const currentTime = performance.now();
      const isDoubleClick = (currentTime - lastClickTime) < 400; // 400ms threshold
      lastClickTime = currentTime;

      if (isDoubleClick) {
          // Check if hovering near core to trigger Holographic Slice
          coreGroup.updateMatrixWorld();
          tempNodePos.set(0, 0, 0).applyMatrix4(coreGroup.matrixWorld).project(camera);
          const dx = tempNodePos.x - normalizedMouseX;
          const dy = tempNodePos.y - normalizedMouseY;
          if (Math.sqrt(dx*dx + dy*dy) < 0.4) {
             manualVoxelTimer = 4.0; // 4 seconds of voxel glitch
             return; // Stop comet/shockwave if slicing
          }
      }

      shockwaveActive = true;
      shockwaveScale = 0.5;
      quantumRippleRadius = 0; // Trigger the massive grid ripple
      starScatterIntensity = 1.0; // Trigger Big Bang scatter
      shockwaveMesh.scale.set(0.5, 0.5, 0.5);
      shockwaveMat.opacity = 0.95;

      orbitNodes.forEach((node) => {
        node.currentRadius = node.originalRadius * 1.3;
      });
      
      // Targeted Hyper-Comet
      cometEnd.set(normalizedMouseX, normalizedMouseY, 0.5).unproject(camera);
      const dir = cometEnd.clone().sub(camera.position).normalize();
      cometEnd.copy(camera.position).add(dir.multiplyScalar(60));
      cometStart.copy(cometEnd).add(new THREE.Vector3((Math.random()-0.5)*100, 40, (Math.random()-0.5)*40));
      cometActive = true;
      cometProgress = 0;
      cometMat.opacity = 1.0;
    };

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    container.addEventListener('click', onClick);

    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    let currentScrollY = 0;
    const onScroll = () => {
       currentScrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // =========================================================
    // SECTION D: RELIABLE 60FPS CONTINUOUS ANIMATION LOOP
    // =========================================================
    let animationFrameId;
    let customTime = 0;
    let globalTimeScale = 1.0;
    let warpSpeedMultiplier = 15.0; // Warp speed intro
    let clock = new THREE.Clock();
    const tempNodePos = new THREE.Vector3(); // For calculating spherical orbits
    const baseCameraPos = new THREE.Vector3(0, 14, 42);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Only suspend when tab is hidden, never pause unexpectedly
      if (document.hidden) return;

      const rawDelta = clock.getDelta();
      const delta = Math.min(rawDelta, 0.04);
      
      // Cinematic 1: Warp Speed Intro
      if (warpSpeedMultiplier > 1.0) {
          warpSpeedMultiplier = THREE.MathUtils.lerp(warpSpeedMultiplier, 1.0, 0.04);
      }
      
      // Cinematic 2: Bullet-Time Hover
      coreGroup.updateMatrixWorld();
      tempNodePos.set(0, 0, 0).applyMatrix4(coreGroup.matrixWorld).project(camera);
      const dx = tempNodePos.x - normalizedMouseX;
      const dy = tempNodePos.y - normalizedMouseY;
      const distToCore = Math.sqrt(dx*dx + dy*dy);
      const isHoveringCore = distToCore < 0.25;
      
      const targetTimeScale = isHoveringCore ? 0.08 : 1.0;
      globalTimeScale = THREE.MathUtils.lerp(globalTimeScale, targetTimeScale, 0.08);
      
      const activeDelta = delta * globalTimeScale * warpSpeedMultiplier;
      customTime += activeDelta;
      
      const elapsedTime = customTime; // Use scaled time everywhere
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
      
      // Automatic Heartbeat Ripple
      const beatTime = customTime % 3.0;
      let beatRippleRadius = -1;
      if (beatTime < 1.0) {
          beatRippleRadius = beatTime * 50.0;
      }

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
          
          // Heartbeat Ripple
          if (beatRippleRadius > 0) {
            const hbDist = Math.abs(Math.sqrt(Math.pow(pointX, 2) + Math.pow(pointZ, 2)) - beatRippleRadius);
            if (hbDist < 4) {
               ripple += Math.sin((4 - hbDist) * Math.PI / 4) * 2.0; // Soft wave
            }
          }

          positions[idx * 3 + 1] = baseHeights[idx] + w1 + w2 + w3 + ripple;
          idx++;
        }
      }
      waveGeometry.attributes.position.needsUpdate = true;
      waveLineGeo.attributes.position.needsUpdate = true;

      // Neural Constellation lines removed to drastically improve mobile CPU scrolling performance
      // Magnetic Mouse Pull, Heatmap, and Big Bang Scatter
      const mouseStarX = mouseParallaxX * 3;
      const mouseStarY = mouseParallaxY * 3;
      const starPos = stardustGeo.attributes.position.array;
      const starOrigins = stardustGeo.attributes.origin.array;
      const starCols = stardustGeo.attributes.color.array;
      
      for (let i = 0; i < stardustCount; i++) {
        let px = starPos[i*3];
        let py = starPos[i*3+1];
        let pz = starPos[i*3+2];
        
        // Big Bang Scatter
        if (starScatterIntensity > 0) {
           px += px * starScatterIntensity * 0.1;
           py += py * starScatterIntensity * 0.1;
           pz += pz * starScatterIntensity * 0.1;
        }

        // Calculate distance in 2D space relative to camera view
        const distToMouse = Math.sqrt(Math.pow(px - mouseStarX, 2) + Math.pow(py - mouseStarY, 2));
        
        if (distToMouse < 5) {
           // Ultra-smooth Magnetic Pull
           px = THREE.MathUtils.lerp(px, mouseStarX, 0.008 * hyperdriveSpeed);
           py = THREE.MathUtils.lerp(py, mouseStarY, 0.008 * hyperdriveSpeed);
           
           // Heatmap: Shift to Amber (0.9, 0.55, 0.15)
           starCols[i*3] = THREE.MathUtils.lerp(starCols[i*3], 0.9, 0.1);
           starCols[i*3+1] = THREE.MathUtils.lerp(starCols[i*3+1], 0.55, 0.1);
           starCols[i*3+2] = THREE.MathUtils.lerp(starCols[i*3+2], 0.15, 0.1);
        } else {
           // Spring back toward origin
           px = THREE.MathUtils.lerp(px, starOrigins[i*3], 0.02);
           py = THREE.MathUtils.lerp(py, starOrigins[i*3+1], 0.02);
           pz = THREE.MathUtils.lerp(pz, starOrigins[i*3+2], 0.02);
           
           // Heatmap: Shift back to Cyan (0.3, 0.84, 0.96)
           starCols[i*3] = THREE.MathUtils.lerp(starCols[i*3], 0.3, 0.05);
           starCols[i*3+1] = THREE.MathUtils.lerp(starCols[i*3+1], 0.84, 0.05);
           starCols[i*3+2] = THREE.MathUtils.lerp(starCols[i*3+2], 0.96, 0.05);
        }
        
        starPos[i*3] = px;
        starPos[i*3+1] = py;
        starPos[i*3+2] = pz;
      }
      
      if (starScatterIntensity > 0) {
         starScatterIntensity *= 0.92; // Decay the scatter
         if (starScatterIntensity < 0.01) starScatterIntensity = 0;
      }
      
      stardustGeo.attributes.position.needsUpdate = true;
      stardustGeo.attributes.color.needsUpdate = true;

      // 1. Friction Heatmap (Spin to Heat)
      const spinSpeed = Math.abs(rotationVelocity.x) + Math.abs(rotationVelocity.y);
      const heatRatio = Math.max(0, Math.min((spinSpeed - 0.005) * 15, 1.0));
      const colorCyan = new THREE.Color(0x4cd7f6);
      const colorAmber = new THREE.Color(0xe58e26);

      if (!isHyperdrive) {
        outerCoreMesh.material.color.lerpColors(colorCyan, colorAmber, heatRatio);
        outerCoreMesh.material.opacity = 0.45 + (heatRatio * 0.3); // Glows brighter when hot
        quantumMat.color.setHSL(0.55 + Math.sin(elapsedTime * 0.3) * 0.1 - (heatRatio * 0.4), 0.8, 0.5);
      } else {
        // Hyperdrive Deep Blue/Violet
        outerCoreMesh.material.color.setHex(0x2288ff);
        outerCoreMesh.material.opacity = 0.8;
        quantumMat.color.setHex(0x8844ff);
      }
      
      // 2. Magnetic Hover Expansion
      // (Calculated above for bullet-time)
      
      // If mouse is near the core on screen, expand!
      const hoverScale = (distToCore < 0.25) ? 1.15 : 1.0;
      
      // Heartbeat pulse effect
      const corePulse = (beatTime < 0.5) ? (0.5 - beatTime) * 0.15 : 0;
      
      const currentScale = outerCoreMesh.scale.x;
      const nextScale = THREE.MathUtils.lerp(currentScale, hoverScale + corePulse, 0.08);
      
      outerCoreMesh.scale.set(nextScale, nextScale, nextScale);
      quantumMesh.scale.set(nextScale, nextScale, nextScale);
      ring1.scale.set(nextScale, nextScale, nextScale);
      ring2.scale.set(nextScale, nextScale, nextScale);
      ring3.scale.set(nextScale, nextScale, nextScale);
      
      
      // DIGITAL VOXELIZATION ANIMATION - Smart Autonomous Timer
      let shouldVoxelize = false;
      
      // Countdown the trigger
      nextVoxelTrigger -= activeDelta;
      
      if (nextVoxelTrigger <= 0) {
          // Trigger the explosion! It lasts for 4 seconds
          shouldVoxelize = true;
          // If we've held the explosion for 4 seconds, reset the timer to a random interval between 8 and 20s
          if (nextVoxelTrigger <= -4.0) {
              nextVoxelTrigger = 8.0 + Math.random() * 12.0; 
              shouldVoxelize = false; // Turn off explosion
          }
      }

      if (manualVoxelTimer > 0) {
          manualVoxelTimer -= activeDelta;
          shouldVoxelize = true;
      }

      if (shouldVoxelize && voxelState === 0) {
         voxelState = 1;
         voxelAnimTimer = 0;
         coreGroup.children.forEach(c => {
            if (c !== voxelMesh && c !== shockwaveMesh) c.visible = false;
         });
         voxelMesh.visible = true;
         for(let i=0; i<voxelCount*3; i++) voxelPositions[i] = voxelTargets[i];
      } else if (!shouldVoxelize && voxelState !== 0) {
         voxelState = 0;
         coreGroup.children.forEach(c => c.visible = true);
         voxelMesh.visible = false;
         voxelMat.color.setHex(0x4cd7f6);
      }
      
      if (voxelState > 0) {
          voxelAnimTimer += activeDelta;
          let progress = voxelAnimTimer / 4.0;
          
          if (progress < 0.5) {
              // EXPLODE (0 to 2 sec)
              const expFactor = activeDelta * Math.max(0, 1.0 - progress * 2.0);
              for(let i=0; i<voxelCount; i++) {
                  voxelPositions[i*3] += voxelVelocities[i*3] * expFactor;
                  voxelPositions[i*3+1] += voxelVelocities[i*3+1] * expFactor;
                  voxelPositions[i*3+2] += voxelVelocities[i*3+2] * expFactor;
                  voxelRotations[i*3] += 0.05; voxelRotations[i*3+1] += 0.05;
                  
                  voxelDummy.position.set(voxelPositions[i*3], voxelPositions[i*3+1], voxelPositions[i*3+2]);
                  voxelDummy.rotation.set(voxelRotations[i*3], voxelRotations[i*3+1], voxelRotations[i*3+2]);
                  voxelDummy.updateMatrix();
                  voxelMesh.setMatrixAt(i, voxelDummy.matrix);
              }
          } else {
              // IMPLODE (2 to 4 sec) - LIQUID GRAVITY & LOCK-IN GLOW
              const implodeProgress = (progress - 0.5) * 2.0; // 0.0 to 1.0
              
              for(let i=0; i<voxelCount; i++) {
                  let startImplode = false;
                  let localProgress = 0;
                  
                  if (i < 250 && implodeProgress > 0.0) {
                      startImplode = true;
                      localProgress = implodeProgress / 1.0;
                  } else if (i >= 250 && i < 500 && implodeProgress > 0.3) {
                      startImplode = true;
                      localProgress = (implodeProgress - 0.3) / 0.7;
                  } else if (i >= 500 && implodeProgress > 0.6) {
                      startImplode = true;
                      localProgress = (implodeProgress - 0.6) / 0.4;
                  }
                  
                  if (startImplode) {
                      // LIQUID GRAVITY EASING: Starts extremely slow, smoothly accelerates to lock-in
                      const lerpFactor = Math.pow(localProgress, 2.5) * 0.35;
                      
                      voxelPositions[i*3] = THREE.MathUtils.lerp(voxelPositions[i*3], voxelTargets[i*3], lerpFactor);
                      voxelPositions[i*3+1] = THREE.MathUtils.lerp(voxelPositions[i*3+1], voxelTargets[i*3+1], lerpFactor);
                      voxelPositions[i*3+2] = THREE.MathUtils.lerp(voxelPositions[i*3+2], voxelTargets[i*3+2], lerpFactor);
                      
                      voxelRotations[i*3] = THREE.MathUtils.lerp(voxelRotations[i*3], 0, lerpFactor);
                      voxelRotations[i*3+1] = THREE.MathUtils.lerp(voxelRotations[i*3+1], 0, lerpFactor);
                      voxelRotations[i*3+2] = THREE.MathUtils.lerp(voxelRotations[i*3+2], 0, lerpFactor);
                  } else {
                      // Majestic slow drift in zero-gravity
                      voxelPositions[i*3] += voxelVelocities[i*3] * activeDelta * 0.05;
                      voxelPositions[i*3+1] += voxelVelocities[i*3+1] * activeDelta * 0.05;
                      voxelPositions[i*3+2] += voxelVelocities[i*3+2] * activeDelta * 0.05;
                      voxelRotations[i*3] += 0.01; 
                      voxelRotations[i*3+1] += 0.01;
                  }
                  
                  voxelDummy.position.set(voxelPositions[i*3], voxelPositions[i*3+1], voxelPositions[i*3+2]);
                  voxelDummy.rotation.set(voxelRotations[i*3], voxelRotations[i*3+1], voxelRotations[i*3+2]);
                  voxelDummy.updateMatrix();
                  voxelMesh.setMatrixAt(i, voxelDummy.matrix);
              }
              
              // LOCK-IN GLOW: Flash pure blinding white exactly as the pieces snap together
              if (implodeProgress > 0.85) {
                  const flash = (implodeProgress - 0.85) * 6.66; // Scales 0 to 1
                  voxelMat.color.r = THREE.MathUtils.lerp(0.30, 1.0, flash);
                  voxelMat.color.g = THREE.MathUtils.lerp(0.84, 1.0, flash);
                  voxelMat.color.b = THREE.MathUtils.lerp(0.96, 1.0, flash);
              } else {
                  // Random glitch colors before lock-in
                  if (Math.random() > 0.8) voxelMat.color.setHex(Math.random() > 0.5 ? 0x4cd7f6 : 0xe58e26);
              }
          }
          voxelMesh.instanceMatrix.needsUpdate = true;
          
          
      }

      // Restore normal hover Spin
      const hoverSpin = (distToCore < 0.25) ? 2.0 : 1.0;
      nucleusMesh.position.set(0,0,0);

      
      // Core Group Floating, Rotation & Drag Inertia
      coreGroup.rotation.y += rotationVelocity.y * hyperdriveSpeed * hoverSpin;
      coreGroup.rotation.x += rotationVelocity.x * hyperdriveSpeed * hoverSpin;

      if (!isDragging) {
        rotationVelocity.x = THREE.MathUtils.lerp(rotationVelocity.x, Math.sin(elapsedTime * 0.4) * 0.003 * hyperdriveSpeed, 0.008);
        rotationVelocity.y = THREE.MathUtils.lerp(rotationVelocity.y, 0.004 + Math.cos(elapsedTime * 0.25) * 0.002 * hyperdriveSpeed, 0.008);
        coreGroup.rotation.z += Math.sin(elapsedTime * 0.3) * 0.0015 * hyperdriveSpeed;
      }

      // Smoothly float the entire ball all over the screen (Lissajous curve) + Scroll Influence
      const floatSpeed = 0.3 * hyperdriveSpeed;
      // The Apple effect: As you scroll, the 3D core dives down and spins
      const scrollOffset = currentScrollY * 0.012;
      
      coreGroup.position.x = basePosition.x + Math.sin(elapsedTime * floatSpeed) * floatRange.x;
      coreGroup.position.y = basePosition.y + Math.cos(elapsedTime * floatSpeed * 0.7) * floatRange.y - scrollOffset;
      coreGroup.position.z = basePosition.z + Math.sin(elapsedTime * floatSpeed * 1.1) * floatRange.z + (currentScrollY * 0.005);
      
      // Scroll-driven rotation (makes it feel deeply integrated with the page)
      coreGroup.rotation.x += currentScrollY * 0.00005;
      coreGroup.rotation.z -= currentScrollY * 0.00002;

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

      // Cinematic 3: Deep-Space Layered Parallax (Hologram Effect)
      // By significantly increasing the camera movement, the layers visually separate based on Z depth!
      const targetCamX = baseCameraPos.x - normalizedMouseX * 12.0;
      const targetCamY = baseCameraPos.y - normalizedMouseY * 12.0;
      
      // Dramatic Cinematic Swoop on Load
      // We use an ultra-smooth lerp to make the camera glide effortlessly
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetCamX, 0.015);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetCamY, 0.015);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, baseCameraPos.z, Math.min(0.01 + elapsedTime * 0.003, 0.04));
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

      // Targeted Hyper-Comet Animation
      if (cometActive) {
          cometProgress += activeDelta * 2.5; // High speed
          if (cometProgress > 1.0) {
              cometActive = false;
              cometMat.opacity = 0;
          } else {
              const currentPos = new THREE.Vector3().lerpVectors(cometStart, cometEnd, cometProgress);
              const tailPos = new THREE.Vector3().lerpVectors(cometStart, cometEnd, Math.max(0, cometProgress - 0.15));
              
              const posArray = cometGeo.attributes.position.array;
              posArray[0] = currentPos.x; posArray[1] = currentPos.y; posArray[2] = currentPos.z;
              posArray[3] = tailPos.x;    posArray[4] = tailPos.y;    posArray[5] = tailPos.z;
              cometGeo.attributes.position.needsUpdate = true;
              
              cometMat.opacity = 1.0 - (cometProgress * cometProgress); // smooth fade at end
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
