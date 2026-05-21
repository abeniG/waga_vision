import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, Award } from "lucide-react";

/**
 * Footer — Elegant multi-column footer with brand info, services,
 * navigation, and contact details. Features decorative light sweeps.
 */
export default function Footer() {
  return (
    <footer className="relative bg-[#040810] border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Decorative light sweeps */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
                <svg className="w-4 h-4 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-wider text-slate-100 uppercase leading-none">Waga</span>
                <span className="text-[8px] tracking-[0.25em] text-brand-teal uppercase leading-none mt-0.5">Eye Clinic</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              State-of-the-art diagnostic facilities and premium surgical procedures.
              Restoring vision with absolute precision and human care.
            </p>
            <div className="flex flex-col gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                <span>FDA Approved Surgical Lasers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Joint Commission Accredited</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-display text-slate-300 font-bold text-xs tracking-[0.15em] uppercase mb-5">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Cataract Surgery", href: "/services#cataract" },
                { name: "LASIK Vision Correction", href: "/services#lasik" },
                { name: "Retina Care & Therapy", href: "/services#retina" },
                { name: "Glaucoma Diagnostics", href: "/services#glaucoma" },
                { name: "Pediatric Ophthalmology", href: "/services#pediatric" },
                { name: "Vision Profiling", href: "/services#exams" },
              ].map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-slate-500 hover:text-brand-cyan text-sm transition-colors duration-300">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="font-display text-slate-300 font-bold text-xs tracking-[0.15em] uppercase mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About the Clinic", href: "/about" },
                { name: "Our Doctors", href: "/doctors" },
                { name: "Patient Gallery", href: "/gallery" },
                { name: "Optic Health Blog", href: "/blog" },
                { name: "Book Appointment", href: "/book" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-slate-500 hover:text-brand-cyan text-sm transition-colors duration-300">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="font-display text-slate-300 font-bold text-xs tracking-[0.15em] uppercase mb-1">Connect With Us</h3>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>108 Futuristic Medical Blvd, Suite 400, Tech City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <span>+1 (800) 555-WAGA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>care@wagaeyeclinic.com</span>
              </li>
            </ul>
            <div>
              <span className="block text-[10px] font-mono text-brand-teal uppercase tracking-widest mb-1">Emergency Line</span>
              <span className="text-slate-200 font-display font-semibold text-lg">+1 (800) 999-EYES</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Waga Eye Clinic. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Patient Data Safety</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
