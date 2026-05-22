"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LoadingScreen — Cinematic branded preloader with animated eye SVG,
 * spinning orbital rings, and a dynamic progress bar.
 */
export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 14) + 3, 100);
      });
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan/5 blur-[100px] rounded-full" />

          <div className="relative flex flex-col items-center">
            {/* Animated logo */}
            <div className="relative w-28 h-28 mb-8 flex items-center justify-center overflow-hidden rounded-3xl bg-slate-950/40 border border-white/10">
              {/* Orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-brand-teal/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border border-dotted border-brand-cyan/25 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-brand-accent/10 rounded-full"
              />

              <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                <svg
                  className="w-full h-full max-w-[140px] max-h-[140px]"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="60" cy="60" r="58" stroke="#22d3ee" strokeWidth="4" opacity="0.2" />
                  <path
                    d="M12 60c18-28 30-38 48-38s30 10 48 38c-18 28-30 38-48 38S30 88 12 60Z"
                    stroke="#7dd3fc"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="60" cy="60" r="24" fill="#22d3ee" opacity="0.12" />
                  <circle cx="60" cy="60" r="16" fill="#0f172a" />
                  <circle cx="68" cy="52" r="4" fill="#ffffff" opacity="0.95" />
                  <path
                    d="M42 64c10 12 26 12 36 0"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>

            {/* Brand text */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-display font-bold tracking-[0.2em] text-slate-100 uppercase"
            >
              Waga Eye Clinic
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] tracking-[0.35em] text-brand-teal uppercase mt-2 mb-8"
            >
              Precision Ophthalmology
            </motion.p>

            {/* Progress bar */}
            <div className="w-56 bg-white/5 h-[2px] rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-teal to-brand-cyan"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="flex items-center justify-between w-56 text-[9px] font-mono tracking-[0.15em] text-slate-600 uppercase">
              <span>Initializing Optic Core</span>
              <span className="text-brand-cyan font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
