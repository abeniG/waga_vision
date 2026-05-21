import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";
import SmoothScroll from "@/components/SmoothScroll";
import GalleryGrid from "@/components/GalleryGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Environment & Diagnostics Gallery | Waga Eye Clinic",
  description: "Take a visual tour of our cleanroom operating theaters, state-of-the-art diagnostic imaging suites, and patient relaxation lounges.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="bg-brand-dark min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Glow meshes */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-4 mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              VISUAL REVENUE / INTERIORS & TECH
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-100 uppercase tracking-wide leading-tight">
              Visual Gallery
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-lg mt-2 opacity-70 font-sans">
              Explore our clinical workspaces, FDA-approved laser setups, diagnostic technologies, and patient care lounges.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
