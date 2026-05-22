"use client";

import { useEffect, useRef, useState } from "react";

export default function EyeTracker() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const deltaX = (x - 0.5) * 2;
      const deltaY = (y - 0.5) * 2;
      const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
      const maxOffset = 10;

      setOffset({
        x: clamp(deltaX * maxOffset, -maxOffset, maxOffset),
        y: clamp(deltaY * maxOffset, -maxOffset, maxOffset),
      });
    };

    const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none flex items-center justify-center"
    >
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full max-w-[420px] max-h-[520px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="eyeGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#0dd9f2" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0b2b45" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="240" height="240" fill="url(#eyeGlow)" />
        <path
          d="M28 120C52 76 88 52 120 52c32 0 68 24 92 68-24 44-60 68-92 68-32 0-68-24-92-68Z"
          stroke="#78f1ff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="120" cy="120" r="52" fill="#0ea5e9" opacity="0.16" />
        <circle cx="120" cy="120" r="40" fill="#7dd3fc" />
        <g transform={`translate(${offset.x} ${offset.y})`}>
          <circle cx="120" cy="120" r="20" fill="#0f172a" />
          <circle cx="132" cy="108" r="6" fill="#ffffff" opacity="0.9" />
        </g>
        <path
          d="M72 120c18-20 38-30 48-30s30 10 48 30"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}
