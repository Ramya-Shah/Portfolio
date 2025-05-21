'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

const FlareCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [trail, setTrail] = useState<Position[]>([]);
  const trailLength = 3;

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update trail with new position
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY }];
        if (newTrail.length > trailLength) {
          return newTrail.slice(newTrail.length - trailLength);
        }
        return newTrail;
      });

      // Check if hovering over a clickable element
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

    // Clean up when component unmounts
    const cleanup = (): void => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return cleanup;
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 hidden md:block">
      {/* Ink trail */}
      {trail.map((point, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-white bg-opacity-30 transition-all duration-300"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${6 + (index * 2)}px`,
            height: `${6 + (index * 2)}px`,
            opacity: (index + 1) / trail.length,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
      
      {/* Main cursor flare */}
      <div
        ref={flareRef}
        className="absolute rounded-full bg-white bg-opacity-70 transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '40px' : '30px',
          height: isPointer ? '40px' : '30px',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorRef}
        className="absolute rounded-full bg-white transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '8px' : '6px',
          height: isPointer ? '8px' : '6px',
          transform: `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1})`,
        }}
      />
    </div>
  );
};

export default FlareCursor;