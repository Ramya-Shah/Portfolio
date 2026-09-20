'use client';

import React, { useState, useEffect, useRef } from 'react';

const FlareCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(false);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number>();

  useEffect(() => {
    // Disable on touch devices (phones / tablets)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      // Snap position instantly on first mouse move to prevent initial jump
      if (mousePos.current.x === -100) {
        ringPos.current = { x: e.clientX, y: e.clientY };
      }

      mousePos.current = { x: e.clientX, y: e.clientY };

      // Detect clickable / interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.bento-poppy') ||
          target.closest('.bento-btn-poppy') ||
          window.getComputedStyle(target).cursor === 'pointer'
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth Lerp Physics Animation Loop
    const renderLoop = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // 1. Instant Precision Dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      // 2. Fluid Magnetic Follower Ring (Lerp factor 0.18 for buttery smooth chase)
      ringPos.current.x += (targetX - ringPos.current.x) * 0.18;
      ringPos.current.y += (targetY - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Fluid Outer Ring Follower */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full will-change-transform transition-[width,height,background-color,border-color,transform] duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-14 h-14 bg-[#CC3A63]/12 border-[1.5px] border-[#CC3A63]/70 backdrop-blur-[2px]'
            : 'w-9 h-9 bg-[#141416]/5 border-[1.5px] border-[#141416]/30 backdrop-blur-[1px]'
        } ${isClicking ? 'scale-75' : 'scale-100'}`}
      />

      {/* Instant Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full will-change-transform transition-[width,height,background-color,transform] duration-150 ease-out ${
          isHovered
            ? 'w-2 h-2 bg-[#CC3A63]'
            : 'w-1.5 h-1.5 bg-[#141416]'
        } ${isClicking ? 'scale-50' : 'scale-100'}`}
      />
    </div>
  );
};

export default FlareCursor;