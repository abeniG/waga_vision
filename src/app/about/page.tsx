import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";
import SmoothScroll from "@/components/SmoothScroll";
import { ShieldCheck, Award, Users, Cpu } from "lucide-react";
import { Metadata } from "next";

const values = [
  {
    icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
    title: "Ophthalmic Innovation",
    description: "Investing continually in FDA-approved robotic lasers and diagnostic platforms to deliver unmatched procedural safety.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
    title: "Absolute Clinical Safety",
    description: "Configuring cleanroom surgical environments and sterile protocols matching the highest international health standards.",
  },
  {
    icon: <Users className="w-5 h-5 text-brand-cyan" />,
    title: "Tailored Patient Profiles",
    description: "No generic prescriptions. We build custom mathematical cornea maps for every patient treatment.",
  },
];

export const metadata: Metadata = {
  title: "About Waga Eye Clinic | Clinical Leadership & Team Profile",
  description: "Learn about the mission, certifications, and medical history of Waga Eye Clinic under surgical director Dr. Waga Abdi.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="bg-brand-dark min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex flex-col gap-4 text-left max-w-3xl mb-20">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              THE PEDIGREE / ABOUT WAGA CLINIC
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-100 tracking-tight leading-[1.1]">
              Pioneering Crystal Clear Vision For Over A Decade
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mt-2 opacity-70 font-sans">
              Waga Eye Clinic was established to bridge the gap between advanced robotic eye surgery and luxury patient-centric hospitality. Today, we are proud to be one of the region's elite centers for laser vision correction and surgical ophthalmology.
            </p>
          </div>

          {/* History / Split Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200"
                alt="Eye Exam Facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-85" />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-100">
                Our Mission & Visual Philosophy
              </h2>
              <p className="text-slate-405 text-sm leading-relaxed font-sans">
                We believe that clear vision is a core human right that directly affects quality of life, creative capacity, and professional performance. By integrating optical coherence topography (OCT) and wavefront analysis, we detect and treat patient eye concerns with absolute certainty.
              </p>
              <p className="text-slate-405 text-sm leading-relaxed font-sans">
                Our surgical director, Dr. Waga Abdi, holds multiple certifications and patents in refractive lens procedures. Under his guidance, the medical staff delivers absolute precision with a warm, welcoming touch.
              </p>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-4 border-t border-white/5 pt-8">
                <div>
                  <span className="block font-display font-black text-2xl text-brand-cyan">15+</span>
                  <span className="block text-[10px] text-slate-500 font-mono tracking-wide uppercase mt-1">
                    Years Operation
                  </span>
                </div>
                <div>
                  <span className="block font-display font-black text-2xl text-brand-teal">99.8%</span>
                  <span className="block text-[10px] text-slate-500 font-mono tracking-wide uppercase mt-1">
                    Laser Accuracy
                  </span>
                </div>
                <div>
                  <span className="block font-display font-black text-2xl text-brand-cyan">12+</span>
                  <span className="block text-[10px] text-slate-500 font-mono tracking-wide uppercase mt-1">
                    Expert Doctors
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="flex flex-col gap-12">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
                GUIDING CLINICAL ETHICS
              </span>
              <h2 className="text-3xl font-display font-bold text-slate-100 uppercase tracking-wide">
                Our Core Pillars
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((val, i) => (
                <div
                  key={i}
                  className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col gap-6 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-150 text-base">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2 font-sans">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
