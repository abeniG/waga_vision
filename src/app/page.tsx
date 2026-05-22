import Link from "next/link";
import { Eye, Shield, Activity, Award, ArrowRight, Star, Mail, Phone, MapPin, ExternalLink, Zap } from "lucide-react";
import { Metadata } from "next";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import MouseSpotlight from "@/components/MouseSpotlight";
import SmoothScroll from "@/components/SmoothScroll";
import ServiceCard from "@/components/ServiceCard";
import VisionSlider from "@/components/VisionSlider";
import TechShowcase from "@/components/TechShowcase";
import FaqSection from "@/components/FaqSection";
import EyeTracker from "@/components/EyeTracker";
import { ParallaxScroll, ParallaxImage } from "@/components/ParallaxScroll";

export const metadata: Metadata = {
  title: "Waga Eye Clinic | Elite Laser Vision Correction & Ophthalmology",
  description: "Experience ultra-high definition clarity. Waga Eye Clinic combines state-of-the-art Zeiss Excimer laser procedures with compassionate patient care.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <MouseSpotlight />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-transparent">
        {/* Glow grid mesh overlay & glows (with negative parallax scroll to drift upwards slowly) */}
        <ParallaxScroll offset={-120} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-teal/5 blur-[160px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 blur-[140px] rounded-full" />
        </ParallaxScroll>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Hero Left Text (with positive parallax to slide downward slightly) */}
          <ParallaxScroll offset={40} className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-brand-teal/20 text-brand-teal text-xs font-mono uppercase tracking-widest w-fit">
              <Award className="w-3.5 h-3.5" />
              <span>Accredited Elite Eye Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-100 leading-[1.1]">
              The Future of <br />
              <span className="bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-accent bg-clip-text text-transparent text-glow">
                Optic Precision
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl opacity-70">
              Experience ultra-high definition vision. Waga Eye Clinic combines state-of-the-art robotic ophthalmology with elite surgical artistry to restore and enhance your clarity.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan text-slate-900 font-bold text-sm tracking-wide shadow-lg shadow-brand-cyan/20 hover:scale-[1.02] transition-transform text-center"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/10 hover:border-brand-cyan/35 text-slate-200 font-semibold text-sm tracking-wide hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-brand-teal" />
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8 mt-4">
              {[
                { number: "25k+", label: "Successful LASIK" },
                { number: "99.8%", label: "Success Rate" },
                { number: "15+", label: "Zeiss Diagnostics" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl md:text-2xl font-display font-black text-brand-cyan">
                    {stat.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ParallaxScroll>

          <ParallaxScroll offset={-50} className="lg:col-span-6 h-[420px] md:h-[600px] relative w-full flex items-center justify-center">
            <EyeTracker />
          </ParallaxScroll>
        </div>
      </section>

      {/* Brand Ethos / About Section */}
      <section className="py-24 relative overflow-hidden bg-[#0a0f24]/40">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual interior preview */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/15 aspect-[4/3] shadow-2xl group">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200"
                alt="Clinic Interior"
                className="w-full h-full"
                offset={40}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-85 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl border border-white/10 flex items-center justify-between pointer-events-auto">
                <div>
                  <span className="block text-xs font-mono text-brand-teal uppercase">Clinic Space</span>
                  <span className="block font-display font-semibold text-sm text-slate-100 mt-1">
                    Next-Generation Diagnostic Ward
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Right text detail */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
                01 / CORE CLINICAL VALUES
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-slate-100 tracking-wide leading-tight">
                Where Elite Surgical Expertise Meets Compassionate Care
              </h3>
              <p className="text-slate-455 text-sm leading-relaxed font-sans">
                Founded by world-renowned ophthalmic innovators, Waga Eye Clinic represents the pinnacle of patient-centric ocular therapy. We treat every individual profile with custom diagnostics and surgical plans designed for lifetime vision stability.
              </p>
              
              <div className="flex flex-col gap-4 mt-2">
                {[
                  { title: "Advanced Pupil Profiling", desc: "Digital modeling of your exact eye contour to program customized surgical lasers." },
                  { title: "Micro-Incision Techniques", desc: "Cataract and vitreoretinal treatments utilizing sub-2mm incisions for zero stitch healing." },
                ].map((val, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-200">{val.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 font-sans">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-cyan hover:text-brand-accent tracking-widest uppercase"
                >
                  <span>Our Medical Pedigree</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 relative bg-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              02 / HIGH-PRECISION TREATMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-100 tracking-wide">
              Advanced Solutions For Every Eye Profile
            </h2>
            <p className="text-slate-400 text-sm max-w-xl font-sans">
              From restoring complete lens clarity to resolving micro-refractive faults, our treatment board utilizes elite medical technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="LASIK Laser Surgery"
              description="Eliminate contact lenses and glasses completely. Our wavefront-guided excimer lasers reshape your cornea in 15 seconds."
              tag="Refractive"
              icon={<Zap className="w-6 h-6" />}
              href="/services#lasik"
            />
            <ServiceCard
              title="Cataract Solutions"
              description="Restore vibrant, clear color vision. We replace clouded lenses with premium multi-focal and toric lens implants."
              tag="Surgical"
              icon={<Eye className="w-6 h-6" />}
              href="/services#cataract"
            />
            <ServiceCard
              title="Retinal Therapy"
              description="Microscopic diagnostics and focal laser treatments to stabilize macular degeneration, diabetic issues, and tear repairs."
              tag="Therapeutic"
              icon={<Activity className="w-6 h-6" />}
              href="/services#retina"
            />
            <ServiceCard
              title="Glaucoma Control"
              description="Prevent optic nerve deterioration. We offer micro-shunt implants and selective laser trabeculoplasty (SLT) therapy."
              tag="Diagnostics"
              icon={<Shield className="w-6 h-6" />}
              href="/services#glaucoma"
            />
            <ServiceCard
              title="Pediatric Care"
              description="Early-stage visual tracking, myopia control, and pediatric diagnostics configured for comfortable child evaluations."
              tag="Pediatric"
              icon={<Star className="w-6 h-6" />}
              href="/services#pediatric"
            />
            <ServiceCard
              title="Vision Profiling"
              description="Ultra-comprehensive examinations measuring intraocular pressure, visual fields, and digital cornea topologies."
              tag="Routine"
              icon={<Award className="w-6 h-6" />}
              href="/services#exams"
            />
          </div>
        </div>
      </section>

      {/* Before / After Vision Simulation Section */}
      <section className="py-24 relative bg-[#0a0f24]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-12">
          <div className="text-center flex flex-col items-center gap-4">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              03 / VISUAL SIMULATOR
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-100 tracking-wide">
              Restore Pure 20/20 Clarity
            </h2>
            <p className="text-slate-400 text-sm max-w-xl font-sans">
              Slide to preview the visual contrast between astigmatic blur and the crystalline results of our custom refractive corrections.
            </p>
          </div>

          <VisionSlider />
        </div>
      </section>

      {/* Technology Suite Section */}
      <section className="py-24 relative bg-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              04 / INNOVATIVE TECHNOLOGY
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-100 tracking-wide">
              The Optics Suite
            </h2>
            <p className="text-slate-400 text-sm max-w-xl font-sans">
              We invest in the absolute standard of surgical lasers and structural scanning hardware.
            </p>
          </div>

          <TechShowcase />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative bg-[#0a0f24]/40">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              05 / PATIENT EXPERIENCES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-100 tracking-wide">
              Visionaries of Waga Clinic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The LASIK procedure at Waga Clinic was entirely painless. My vision was corrected from -5.25 to 20/15 in under a minute. Dr. Waga Abdi is a true master of ophthalmology.",
                author: "Sarah Sterling",
                role: "Digital Artist & Creative Director",
                stars: 5,
              },
              {
                text: "My cataract surgery was seamless. Colors are vibrant again, and I no longer require distance glasses. The premium toric lens implant has changed my quality of life completely.",
                author: "Marcus Aureli",
                role: "Retired Architect",
                stars: 5,
              },
              {
                text: "Waga Eye Clinic diagnosed my glaucoma early during a routine scan. Their advanced OCT scan saved my vision. The clinical team is highly skilled and very caring.",
                author: "David Brooks",
                role: "Software Architect",
                stars: 5,
              },
            ].map((test, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between gap-6"
              >
                <div className="flex gap-1">
                  {[...Array(test.stars)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic font-sans">
                  "{test.text}"
                </p>
                <div>
                  <span className="block font-display font-bold text-sm text-slate-100">
                    {test.author}
                  </span>
                  <span className="block text-[10px] text-brand-teal font-mono mt-0.5 uppercase">
                    {test.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-transparent">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              06 / FREQUENT QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-100 tracking-wide">
              Ocular Health Insights
            </h2>
          </div>

          <FaqSection />
        </div>
      </section>

      {/* Appointment CTA section */}
      <section className="py-20 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-card p-8 md:p-16 rounded-[40px] border border-brand-cyan/20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-left flex flex-col gap-4 lg:max-w-lg">
              <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
                07 / GET STARTED
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-slate-100 uppercase tracking-wide">
                Experience High Definition Vision
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                Coordinate with our clinical intake team to schedule your precision diagnostics. Restoring visual perfection starts here.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan text-slate-900 font-bold text-sm tracking-wide text-center"
              >
                Schedule Evaluation
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/10 hover:border-brand-cyan/35 text-slate-200 font-semibold text-sm tracking-wide hover:bg-white/5 transition-all text-center"
              >
                Contact Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Info Section */}
      <section className="py-24 bg-[#050814]/60 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em] mb-2 block">
                  08 / LOCATION & HOURS
                </span>
                <h2 className="text-3xl font-display font-extrabold text-slate-100">
                  Our Central Clinic
                </h2>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                Located in the heart of Tech City, our premier eye care hub is engineered with clean-room surgeries, comfortable recovery suites, and private diagnostic lounges.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-200">Address</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      108 Futuristic Medical Blvd, Suite 400, Tech City
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-200">Phone & Emergencies</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      Office: +1 (800) 555-WAGA <br />
                      Emergencies (24/7): +1 (800) 999-EYES
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-200">Email Correspondence</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      General: info@wagaeyeclinic.com <br />
                      Patient Care: care@wagaeyeclinic.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map Visualizer */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/10 h-[350px] md:h-[450px]">
              {/* Virtual stylized map grid */}
              <div className="absolute inset-0 bg-[#070b19] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-cyan/5 blur-3xl" />
                
                {/* Visual medical vector map graphics */}
                <svg className="w-full h-full opacity-35 stroke-brand-teal/40 stroke-[1.5] fill-none" viewBox="0 0 400 300">
                  <path d="M 0,50 L 400,50" />
                  <path d="M 0,150 L 400,150" />
                  <path d="M 0,250 L 400,250" />
                  <path d="M 100,0 L 100,300" />
                  <path d="M 250,0 L 250,300" />
                  <circle cx="250" cy="150" r="30" className="stroke-brand-cyan/20" />
                  <circle cx="250" cy="150" r="10" className="fill-brand-cyan animate-pulse" />
                </svg>

                <div className="absolute glass px-4 py-3 rounded-2xl border border-brand-cyan/20 flex flex-col gap-1 items-start text-left shadow-lg">
                  <span className="text-[10px] font-mono text-brand-teal uppercase tracking-widest">
                    Waga Location Hub
                  </span>
                  <span className="text-xs font-semibold text-slate-100 flex items-center gap-1.5">
                    <span>Futuristic Medical Blvd</span>
                    <ExternalLink className="w-3.5 h-3.5 text-brand-cyan" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </SmoothScroll>
  );
}
