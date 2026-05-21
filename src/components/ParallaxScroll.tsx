"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxScroll({
  children,
  offset = 50,
  className = "",
}: ParallaxProps) {
  const { scrollY } = useScroll();

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map global scroll from 0 to 2000px directly to the offset range.
  // This guarantees movement as the user scrolls down the page.
  const y = useTransform(smoothScrollY, [0, 2000], [0, offset * 3]);

  return (
    <div className={className}>
      <motion.div style={{ y, willChange: "transform" }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  offset?: number;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  offset = 30,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the y translation. Since the image has scale 1.15, it has room to translate.
  const y = useTransform(smoothProgress, [0, 1], [-offset * 2, offset * 2]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.15, willChange: "transform" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
