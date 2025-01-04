'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';

const ParticleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();
  const mouse = useRef({ x: 0, y: 0 });
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Check for low power mode or slower devices
    const checkPerformance = () => {
      if (navigator.hardwareConcurrency <= 4 || 
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        setIsLowPower(true);
      }
    };
    checkPerformance();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    // Reduce particle count based on device capability and screen size
    const particleCount = isLowPower ? 20 : (width < 768 ? 30 : 50);
    
    // Simplified particle properties for better performance
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * (isLowPower ? 1.5 : 2),
      speedX: Math.random() * 0.2 - 0.1,
      speedY: Math.random() * 0.2 - 0.1,
      opacity: 0.5
    }));

    let animationFrameId: number;
    let lastTime = 0;
    const targetFPS = isLowPower ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const updateMousePosition = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const calculateDistance = (particle: any) => {
      const dx = mouse.current.x - particle.x;
      const dy = mouse.current.y - particle.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const render = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Simplified boundary checking
          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;
          if (particle.y < 0) particle.y = height;
          if (particle.y > height) particle.y = 0;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(128, 90, 213, ${particle.opacity})`;
          ctx.fill();
        });

        lastTime = currentTime - (deltaTime % frameInterval);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', updateMousePosition);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height, isLowPower]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleEffect;