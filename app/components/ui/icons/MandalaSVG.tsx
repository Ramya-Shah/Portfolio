import React from "react";

export const MandalaSVG = ({ className = "w-16 h-16 text-[#A2AB73]" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central multi-petal geometric wireframe flower */}
      <circle cx="50" cy="50" r="10" strokeDasharray="2 2" />
      <circle cx="50" cy="50" r="22" opacity="0.6" />
      <circle cx="50" cy="50" r="38" opacity="0.4" />
      
      {/* Overlapping ellipses forming rosette */}
      {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((angle, idx) => (
        <ellipse
          key={`petal-${idx}`}
          cx="50"
          cy="50"
          rx="14"
          ry="38"
          transform={`rotate(${angle} 50 50)`}
          opacity="0.75"
        />
      ))}
    </svg>
  );
};
