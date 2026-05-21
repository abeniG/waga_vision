import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";
import SmoothScroll from "@/components/SmoothScroll";
import { GraduationCap, Award, Calendar } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

const doctors = [
  {
    id: "waga",
    name: "Dr. Waga Abdi, MD, FACS",
    role: "Chief Cornea & Refractive Surgeon",
    bio: "Dr. Waga Abdi is a double board-certified ophthalmic surgeon with over 15 years of experience in laser vision correction. He has successfully performed over 20,000 refractive surgeries and holds multiple patents in custom wavefront lens technology.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600",
    degrees: ["Doctor of Medicine, Johns Hopkins University", "Fellowship in Refractive Surgery, Stanford Eye Center", "Board Certified, American Academy of Ophthalmology"],
    specialty: ["Custom Topography LASIK", "Advanced Toric Lens Implant", "Corneal Cross-Linking (CXL)"]
  },
  {
    id: "helen",
    name: "Dr. Helen Vance, MD",
    role: "Senior Vitreo-Retinal Surgeon",
    bio: "Dr. Helen Vance specializes in microscopic treatments of the retina, macula, and vitreous body. Her research in focal photocoagulation laser therapy has been published in leading ophthalmic journals.",
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=600",
    degrees: ["Doctor of Medicine, Harvard Medical School", "Retinal Surgery Fellowship, Moorfields Eye Hospital", "Active Board Director, Retinal Specialist Society"],
    specialty: ["Macular Degeneration Therapy", "Focal Laser Tear Repair", "Diabetic Retinal Management"]
  },
  {
    id: "marcus",
    name: "Dr. Marcus Cole, MD",
    role: "Glaucoma Specialist & Consultant",
    bio: "Dr. Marcus Cole is an expert in early glaucoma diagnostics, visual field analysis, and micro-shunt implants. He is dedicated to preserving optic nerve function and vision longevity.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600",
    degrees: ["Doctor of Medicine, Columbia University", "Glaucoma Research Fellowship, Mayo Clinic", "Member, Association for Research in Vision"],
    specialty: ["Selective Laser Trabeculoplasty (SLT)", "Micro-Incision Shunts", "Cornea Hydration & Diagnostics"]
  }
];

export const metadata: Metadata = {
  title: "Board-Certified Ophthalmic Surgeons | Waga Eye Clinic",
  description: "Meet our elite surgeons specializing in laser refractive corrections, advanced glaucoma shunts, and complex vitreo-retinal repairs.",
  alternates: {
    canonical: "/doctors",
  },
};

export default function DoctorsPage() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="bg-brand-dark min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Glow particles */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-4 mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              WORLD-CLASS OPHTHALMOLOGISTS / CLINICIANS
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-100 uppercase tracking-wide leading-tight">
              Medical Board
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-lg mt-2 opacity-70 font-sans">
              Meet our board-certified ophthalmic specialists dedicated to visual health, precision surgery, and personalized care plans.
            </p>
          </div>

          {/* Doctors Board Cards */}
          <div className="flex flex-col gap-24">
            {doctors.map((doc, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={doc.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
                >
                  {/* Photo Visual */}
                  <div
                    className={`lg:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] group shadow-2xl ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-white/10">
                      <span className="block text-xs font-mono text-brand-teal uppercase">{doc.role}</span>
                      <span className="block font-display font-bold text-slate-100 text-sm mt-0.5">Waga Clinic Consultant</span>
                    </div>
                  </div>

                  {/* Info details */}
                  <div
                    className={`lg:col-span-7 flex flex-col gap-6 text-left ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-mono text-brand-teal uppercase tracking-widest">
                        BOARD ACCREDITED CLINICIAN
                      </span>
                      <h2 className="text-2xl md:text-3.5xl font-display font-bold text-slate-100 mt-1">
                        {doc.name}
                      </h2>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed font-sans">
                      {doc.bio}
                    </p>

                    {/* Academic Degrees */}
                    <div>
                      <span className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                        <GraduationCap className="w-4 h-4 text-brand-cyan" />
                        <span>Academic Credentials & Degrees</span>
                      </span>
                      <ul className="flex flex-col gap-2">
                        {doc.degrees.map((degree, dIdx) => (
                          <li key={dIdx} className="text-xs font-mono text-slate-400 pl-4 border-l border-brand-teal/30">
                            {degree}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Specialties */}
                    <div>
                      <span className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                        <Award className="w-4 h-4 text-brand-teal" />
                        <span>Clinical Focus & Procedures</span>
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {doc.specialty.map((spec, sIdx) => (
                          <span key={sIdx} className="glass px-3 py-1.5 rounded-full text-[10px] font-mono text-brand-cyan border border-brand-cyan/20 uppercase">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <Link
                        href="/book"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan text-slate-900 font-bold text-xs tracking-wide uppercase transition-all shadow-md shadow-brand-cyan/15 hover:opacity-95"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Consult</span>
                      </Link>
                    </div>
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
