import React, { useRef, useEffect } from 'react';

export default function Card3D({
  children,
  className = '',
  maxTilt = 10,
  glare = true,
  scale = 1.02,
  borderGlow = true,
  glowColor = 'rgba(229,142,38,0.6)',
  style = {},
}) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const borderRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let currentScale = 1;
    let targetScale = 1;
    let glareX = 50;
    let glareY = 50;
    let glareOpacity = 0;
    let isHovered = false;

    const updateTransform = () => {
      // Smooth interpolation for silky 60fps tilt
      currentRotateX += (targetRotateX - currentRotateX) * 0.15;
      currentRotateY += (targetRotateY - currentRotateY) * 0.15;
      currentScale += (targetScale - currentScale) * 0.15;

      card.style.transform = `perspective(1000px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) scale3d(${currentScale.toFixed(3)}, ${currentScale.toFixed(3)}, 1)`;

      if (glareRef.current) {
        glareRef.current.style.opacity = glareOpacity;
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35) 0%, rgba(229,142,38,0.12) 35%, transparent 70%)`;
      }

      // Border glow follows the mouse
      if (borderRef.current) {
        borderRef.current.style.opacity = isHovered ? '1' : '0';
        borderRef.current.style.background = `radial-gradient(600px circle at ${glareX}% ${glareY}%, ${glowColor}, transparent 40%)`;
      }

      if (isHovered || Math.abs(currentRotateX) > 0.05 || Math.abs(currentRotateY) > 0.05) {
        rafId.current = requestAnimationFrame(updateTransform);
      }
    };

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetRotateX = ((y - centerY) / centerY) * -maxTilt;
      targetRotateY = ((x - centerX) / centerX) * maxTilt;
      targetScale = scale;

      glareX = (x / rect.width) * 100;
      glareY = (y / rect.height) * 100;
      glareOpacity = 0.15;

      if (!isHovered) {
        isHovered = true;
        cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(updateTransform);
      }
    };

    const handleMouseLeave = () => {
      isHovered = false;
      targetRotateX = 0;
      targetRotateY = 0;
      targetScale = 1;
      glareOpacity = 0;
    };

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [maxTilt, scale, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`relative will-change-transform ${className}`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {children}

      {/* Mouse-following border glow */}
      {borderGlow && (
        <div
          ref={borderRef}
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 z-20"
          style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '1px' }}
        />
      )}

      {/* Glare overlay */}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30 opacity-0"
        />
      )}
    </div>
  );
}
