"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Scan, Activity, Cpu } from "lucide-react";

const technologies = [
  {
    id: "laser",
    name: "ZEISS MEL 90 Laser",
    category: "Refractive Suite",
    icon: <Zap className="w-5 h-5" />,
    specs: [
      "Ablation Rate: 1.3 seconds per diopter",
      "Pulse Frequency: 500 Hz Excimer",
      "Atmospheric Sensor Control: Automated"
    ],
    description:
      "The pinnacle of German refractive laser engineering. The ZEISS MEL 90 integrates custom wavefront mappings to reshape the cornea with molecular accuracy, yielding standard-defying 20/15 clarity results.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000",
    glowColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    id: "oct",
    name: "Optovue Solix OCT",
    category: "Spectral Diagnostics",
    icon: <Scan className="w-5 h-5" />,
    specs: [
      "Imaging Speed: 120,000 A-scans/sec",
      "Axial Resolution: 5.0 µm in tissue",
      "Scan Depth: 6.2 mm structural profiling"
    ],
    description:
      "A high-speed optical coherence tomography scanner providing micrometer-level 3D visualization of the retina, choroid, and optic nerve. Vital for detecting macular degeneration and glaucoma years before symptoms manifest.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000",
    glowColor: "rgba(14, 165, 233, 0.3)",
  },
  {
    id: "constellation",
    name: "Alcon Constellation",
    category: "Vitreoretinal Platform",
    icon: <Activity className="w-5 h-5" />,
    specs: [
      "Ultra-Speed Cutting: 10,000 cuts/min",
      "Intraocular Pressure: Real-time sensor-gated",
      "Laser Delivery: Integrated green endophotocoagulation"
    ],
    description:
      "The premier surgical workstation for intricate vitreoretinal and micro-incision cataract procedures. Enables fluidic stability and surgical command through computerized infusion feedback loops.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000",
    glowColor: "rgba(34, 211, 238, 0.3)",
  },
];

export default function TechShowcase() {
  const [activeTab, setActiveTab] = useState(technologies[0].id);
  const currentTech = technologies.find((t) => t.id === activeTab)!;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
      {/* Navigation tabs */}
      <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
        {technologies.map((tech) => {
          const isActive = tech.id === activeTab;
          return (
            <button
              key={tech.id}
              onClick={() => setActiveTab(tech.id)}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-left border transition-all duration-300 w-full shrink-0 lg:shrink ${
                isActive
                  ? "glass border-brand-cyan bg-brand-cyan/5 text-slate-100 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                  : "border-white/5 bg-transparent hover:border-white/15 text-slate-400 hover:text-slate-200"
              }`}
            >
              <div
                className={`p-2.5 rounded-xl border transition-colors ${
                  isActive
                    ? "bg-brand-cyan/20 border-brand-cyan/30 text-brand-cyan"
                    : "bg-white/5 border-white/10 text-slate-400"
                }`}
              >
                {tech.icon}
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-brand-teal uppercase">
                  {tech.category}
                </span>
                <span className="block font-display font-bold text-sm tracking-wide mt-0.5">
                  {tech.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Showcase Display Area */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTech.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            {/* Ambient background glow matching tab selection */}
            <div
              className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full blur-[100px] pointer-events-none transition-all duration-500"
              style={{ backgroundColor: currentTech.glowColor }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Product Info */}
              <div className="flex flex-col gap-6">
                <div>
                  <span className="inline-block text-xs font-mono tracking-[0.25em] text-brand-teal uppercase mb-2">
                    {currentTech.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold text-slate-100">
                    {currentTech.name}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {currentTech.description}
                </p>

                <div>
                  <span className="block text-xs font-mono tracking-wider text-slate-500 uppercase mb-3">
                    Technical Specifications
                  </span>
                  <ul className="flex flex-col gap-2">
                    {currentTech.specs.map((spec, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-xs font-mono text-slate-400"
                      >
                        <Cpu className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Product Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video md:aspect-square group">
                <img
                  src={currentTech.image}
                  alt={currentTech.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Scanner sweep line overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/20 via-transparent to-transparent h-1/2 w-full animate-pulse border-b border-brand-cyan/40 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
