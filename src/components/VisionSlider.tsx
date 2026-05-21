"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";

export default function VisionSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    setContainerWidth(containerRef.current.getBoundingClientRect().width);

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={(e) => handleMove(e.clientX)}
        onTouchMove={handleTouchMove}
        className="relative w-full max-w-4xl h-[300px] md:h-[480px] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-slate-950"
      >
        {/* Before Treatment (Blurred / Dull) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600"
            alt="Dull vision"
            className="w-full h-full object-cover filter blur-[10px] saturate-[0.6] opacity-70"
          />
          <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-xs font-mono tracking-widest text-slate-400 border border-white/5">
            BLURRED / ASTIGMATIC VISION
          </div>
        </div>

        {/* After Treatment (Sharp / Laser Precision) */}
        <div
          className="absolute inset-y-0 left-0 right-0 overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600"
            alt="Precision Laser Vision"
            className="absolute inset-y-0 left-0 object-cover h-full"
            style={{ width: containerWidth }}
          />
          <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-xs font-mono tracking-widest text-brand-cyan border border-brand-cyan/25">
            AFTER WAGA LASER CORRECTION
          </div>
        </div>

        {/* Slider bar line */}
        <div
          className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-brand-teal via-brand-cyan to-brand-teal pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Centered slider handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-brand-cyan/35 flex items-center justify-center shadow-lg shadow-black/50">
            <ArrowLeftRight className="w-5 h-5 text-brand-cyan" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
          Drag the center handle to simulate clinical vision enhancement
        </p>
      </div>
    </div>
  );
}
