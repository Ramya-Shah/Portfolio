'use client';

import React, { useState, useEffect, useRef } from 'react';

const FlareCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const trailContainerRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const requestRef = useRef<number>();
  
  // Real mouse position
  const mousePos = useRef({ x: -100, y: -100 });
  
  // Animated positions for physics
  const flarePos = useRef({ x: -100, y: -100 });
  const trailPos = useRef<{x: number, y: number}[]>(
    Array(8).fill(null).map(() => ({ x: -100, y: -100 }))
  );
  
  const isClickingRef = useRef(false);
  
  // Keep syncing state to ref for the animation loop
  useEffect(() => {
    isClickingRef.current = isClicking;
  }, [isClicking]);

  useEffect(() => {
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      // Snap instantly on the very first mouse move to avoid a flying comet cursor
      if (mousePos.current.x === -100) {
        flarePos.current = { x: e.clientX, y: e.clientY };
        trailPos.current.forEach(p => { p.x = e.clientX; p.y = e.clientY; });
      }
      mousePos.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      const isPointerElement = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isPointerElement);
    };

    const handleMouseDown = (): void => setIsClicking(true);
    const handleMouseUp = (): void => setIsClicking(false);

    const cleanup = (): void => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.style.cursor = 'auto';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Animation Loop with Lerp Physics
    const updateCursor = () => {
      const { x, y } = mousePos.current;
      const click = isClickingRef.current;

      // 1. Update Core Dot (Instant)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0) scale(${click ? 1.5 : 1})`;
      }

      // 2. Lerp Main Flare (Adds weight and drag)
      flarePos.current.x += (x - flarePos.current.x) * 0.2;
      flarePos.current.y += (y - flarePos.current.y) * 0.2;
      
      if (flareRef.current) {
        flareRef.current.style.transform = `translate3d(calc(${flarePos.current.x}px - 50%), calc(${flarePos.current.y}px - 50%), 0) scale(${click ? 0.7 : 1})`;
      }

      // 3. Lerp Trail (Each dot follows the one ahead of it elastically)
      let prevPos = mousePos.current;
      const trail = trailPos.current;

      if (trailContainerRef.current) {
        const trailDots = trailContainerRef.current.children;
        for (let i = 0; i < trail.length; i++) {
          trail[i].x += (prevPos.x - trail[i].x) * 0.35;
          trail[i].y += (prevPos.y - trail[i].y) * 0.35;
          prevPos = trail[i];

          const dot = trailDots[i] as HTMLElement;
          dot.style.transform = `translate3d(calc(${trail[i].x}px - 50%), calc(${trail[i].y}px - 50%), 0)`;
        }
      }

      requestRef.current = requestAnimationFrame(updateCursor);
    };
    
    requestRef.current = requestAnimationFrame(updateCursor);

    return cleanup;
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block">
      {/* Elastic Comet Trail */}
      <div ref={trailContainerRef}>
        {[...Array(8)].map((_, i) => {
          const size = Math.max(12 - i * 1.5, 2);
          return (
            <div 
              key={i}
              className="absolute top-0 left-0 rounded-full bg-white will-change-transform"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.3 - (i * 0.025), // Smooth fade backwards
              }}
            />
          );
        })}
      </div>
      
      {/* Main cursor flare */}
      <div
        ref={flareRef}
        className={`absolute top-0 left-0 rounded-full bg-white transition-[width,height,opacity,background-color] duration-200 ease-out will-change-transform ${
          isPointer ? 'w-10 h-10 bg-opacity-20 backdrop-blur-sm' : 'w-[30px] h-[30px] bg-opacity-70'
        }`}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorRef}
        className={`absolute top-0 left-0 rounded-full bg-white transition-[width,height] duration-200 ease-out will-change-transform ${
          isPointer ? 'w-2 h-2' : 'w-[6px] h-[6px]'
        }`}
      />
    </div>
  );
};

export default FlareCursor;