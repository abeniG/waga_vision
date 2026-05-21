"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ParallaxScroll } from "@/components/ParallaxScroll";

interface ServiceCardProps {
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  tag,
  icon,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card glass-card-hover relative p-8 rounded-3xl overflow-hidden flex flex-col justify-between group h-[340px] border border-white/5"
    >
      {/* Glow mesh behind item */}
      <ParallaxScroll offset={-30} className="absolute -right-12 -top-12 pointer-events-none">
        <div className="w-32 h-32 bg-brand-cyan/5 rounded-full blur-3xl group-hover:bg-brand-cyan/15 transition-all duration-500" />
      </ParallaxScroll>

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-slate-900 transition-all duration-300">
            {icon}
          </div>
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase border border-slate-800 px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>

        <h3 className="text-xl font-display font-semibold text-slate-100 group-hover:text-brand-cyan transition-colors duration-300 mb-3">
          {title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 line-clamp-3 font-sans">
          {description}
        </p>
      </div>

      <div className="mt-4">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-brand-teal group-hover:text-brand-cyan transition-colors uppercase"
        >
          <span>Explore Service</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
