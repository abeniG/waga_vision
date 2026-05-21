"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "ZEISS Excimer Surgery Room",
    category: "surgical",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800",
    desc: "Sterile surgical theater equipped with ZEISS MEL 90 and Alcon Constellation systems.",
  },
  {
    id: 2,
    title: "Retina Scanning Suite",
    category: "diagnostic",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
    desc: "A patient undergoing microscopic optical coherence tomography structural retina scanning.",
  },
  {
    id: 3,
    title: "Patient Recovery Lounge",
    category: "facility",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800",
    desc: "Glassmorphism aesthetics lounge designed for pre-op hydration and comfortable post-op recovery.",
  },
  {
    id: 4,
    title: "Laser Eye Custom Mapping",
    category: "diagnostic",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800",
    desc: "3D topology corneal profiling mapping the exact refractive contour of a patient's lens.",
  },
  {
    id: 5,
    title: "Successful LASIK Patient",
    category: "patients",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    desc: "Happy patient checking her vision clarity metric sheet post-operation.",
  },
  {
    id: 6,
    title: "Clinical Sterile Ward",
    category: "facility",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800",
    desc: "Our FDA-approved diagnostic equipment preparation and verification desk.",
  },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="w-full">
      {/* Categories Tab */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[
          { id: "all", name: "Show All" },
          { id: "surgical", name: "Surgical Suites" },
          { id: "diagnostic", name: "Diagnostics" },
          { id: "facility", name: "Facilities" },
          { id: "patients", name: "Patients" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-6 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
              filter === tab.id
                ? "bg-brand-cyan border-brand-cyan text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.25)] font-bold"
                : "border-white/5 bg-white/5 hover:border-white/10 text-slate-400 hover:text-slate-200"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 group relative h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Absolute Details Overlays */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-left">
                <span className="text-[9px] font-mono tracking-[0.2em] text-brand-teal uppercase">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-slate-100 text-base leading-snug group-hover:text-brand-cyan transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-normal line-clamp-2 mt-0.5 font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
