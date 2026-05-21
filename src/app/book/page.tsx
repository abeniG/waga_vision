import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";
import SmoothScroll from "@/components/SmoothScroll";
import BookForm from "@/components/BookForm";
import { Award, CalendarDays, ShieldCheck } from "lucide-react";
import { ParallaxScroll } from "@/components/ParallaxScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Ophthalmic Consult & Surgery | Waga Eye Clinic",
  description: "Schedule your customized refractive wavefront scan or comprehensive glaucoma screening using our clinical reservation wizard.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="relative min-h-screen pt-32 pb-20 bg-transparent overflow-hidden flex flex-col justify-center">
        {/* Glow meshes */}
        <ParallaxScroll offset={-150} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-teal/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-cyan/5 blur-[100px] rounded-full" />
        </ParallaxScroll>

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center flex flex-col items-center gap-4 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-brand-teal/15 text-brand-teal text-xs font-mono uppercase tracking-widest">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Scheduling System v2.0</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-slate-100 uppercase tracking-wide">
              Book Appointment
            </h1>
            <p className="text-sm text-slate-400 max-w-lg leading-relaxed opacity-70 font-sans">
              Plan your precision consultation or diagnostics with our expert surgeons. Select your preferred service and clinician below.
            </p>
          </div>

          <BookForm />

          {/* Guarantee Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-xs text-slate-500 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              <span>SECURE PATIENT PORTAL (HIPAA COMPLIANT)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-cyan" />
              <span>ZERO FEES FOR RESCHEDULING</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
