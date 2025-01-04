// src/components/sections/Hero/ParticleEffect.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';

const ParticleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const particleCount = width < 768 ? 40 : 80;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * (width < 768 ? 1.5 : 3),
      speedX: Math.random() * 0.4 - 0.2,
      speedY: Math.random() * 0.4 - 0.2,
      opacity: Math.random() * 0.5 + 0.4,
      angle: Math.random() * 360,
      rotationSpeed: (Math.random() * 0.2 - 0.1) * 0.1,
      color: `rgba(128, 90, 213, ${Math.random() * 0.5 + 0.4})`,
    }));

    const updateMousePosition = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const calculateDistance = (particle: any) => {
      const dx = mouse.current.x - particle.x;
      const dy = mouse.current.y - particle.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    window.addEventListener('mousemove', updateMousePosition);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const distance = calculateDistance(particle);
        const maxDistance = 150;

        particle.x += particle.speedX * 0.8;
        particle.y += particle.speedY * 0.8;
        
        particle.angle += particle.rotationSpeed;

        if (particle.x < -50) particle.x = width + 50;
        if (particle.x > width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = height + 50;
        if (particle.y > height + 50) particle.y = -50;

        const proximityFactor = 1 - Math.min(distance / maxDistance, 1);
        if (proximityFactor > 0) {
          const alpha = 0.4 + proximityFactor * 0.4;
          particle.color = `rgba(173, 216, 230, ${alpha})`;
        }

        ctx.beginPath();
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleEffect;
