import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";
import SmoothScroll from "@/components/SmoothScroll";
import { Eye, Sparkles, Activity, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { ParallaxImage } from "@/components/ParallaxScroll";

const detailedServices = [
  {
    id: "lasik",
    title: "LASIK & Refractive Corrections",
    icon: <Zap className="w-6 h-6 text-brand-cyan" />,
    intro: "Wavefront-guided corneal remodeling for ultimate refractive correction.",
    description: "Eliminate dependency on spectacles and contact lenses. Our procedure is 100% blade-free, combining diagnostic corneal topography with custom Excimer laser sculpting for astigmatism, myopia, and hyperopia. Healing occurs rapidly, with 20/20 clarity achieved in under 24 hours.",
    details: [
      "Blade-Free Intralase flap creation.",
      "Custom wavefront map matching your unique eye footprint.",
      "Sub-20 second laser reshape profile.",
      "Quick post-operative follow-up routine."
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800"
  },
  {
    id: "cataract",
    title: "Premium Cataract Solutions",
    icon: <Eye className="w-6 h-6 text-brand-teal" />,
    intro: "Replacing clouded lenses with state-of-the-art multi-focal implants.",
    description: "Cataracts cause visual clouding and color dullness. We utilize micro-incision phacoemulsification to extract the clouded natural lens and implant a customized intraocular lens (IOL). Choose from premium Toric (astigmatism correcting) or Multifocal lenses for distance and near clarity.",
    details: [
      "Sub-2mm micro-incision requiring zero suture stitches.",
      "Premium IOL profiling (Zeiss, Alcon lenses).",
      "Immediate color vibrancy restoration.",
      "Minimal downtime (resume light activity within 48 hours)."
    ],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800"
  },
  {
    id: "retina",
    title: "Retina Care & Laser Therapy",
    icon: <Activity className="w-6 h-6 text-brand-cyan" />,
    intro: "Microscopic diagnostics and focal treatments for retinal stability.",
    description: "Your retina translates light rays into brain signals. Issues like macular degeneration, diabetic retinopathy, and retinal tears require instant intervention. We utilize high-resolution OCT imaging to guide sub-visible laser pulses, repairing macular tissues and sealing tears safely.",
    details: [
      "Advanced 3D OCT retina layer scans.",
      "Focal green laser photocoagulation.",
      "Anti-VEGF intraocular therapeutic injections.",
      "Vitreoretinal surgical intervention suite."
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800"
  }
];

export const metadata: Metadata = {
  title: "Clinical Ophthalmology Services | Waga Eye Clinic",
  description: "Explore our surgical and therapeutic treatments including LASIK correction, advanced cataract lens replacements, and detailed retina care.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="bg-brand-dark min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Glow particles background */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-4 mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              OUR TREATMENT BOARD / CLINICAL SERVICES
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-100 uppercase tracking-wide leading-tight">
              Ophthalmology Suite
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-lg mt-2 opacity-70 font-sans">
              Advanced diagnostics and high-precision laser surgeries designed to restore and maintain your absolute clarity.
            </p>
          </div>

          {/* Detailed sections */}
          <div className="flex flex-col gap-28">
            {detailedServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-28`}
                >
                  {/* Left Text */}
                  <div
                    className={`lg:col-span-6 flex flex-col gap-6 text-left ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span className="text-xs font-mono tracking-widest text-slate-500 uppercase border border-slate-800 px-3.5 py-1 rounded-full">
                        Treatment Suite {index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3.5xl font-display font-bold text-slate-100">
                      {service.title}
                    </h2>
                    
                    <p className="text-brand-teal text-sm font-semibold tracking-wide">
                      {service.intro}
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {service.description}
                    </p>

                    <div>
                      <span className="block text-xs font-mono tracking-wider text-slate-500 uppercase mb-3.5">
                        Procedural Milestones
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-400 font-mono"
                          >
                            <Sparkles className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <Link
                        href="/book"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-brand-cyan/35 text-slate-200 font-bold text-xs tracking-wider uppercase transition-all"
                      >
                        <span>Schedule Clinical Scan</span>
                        <Eye className="w-4 h-4 text-brand-cyan" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div
                    className={`lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] group shadow-xl ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
