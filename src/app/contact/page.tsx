import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";
import SmoothScroll from "@/components/SmoothScroll";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Waga Eye Clinic | Central Hub & Patient Care Support",
  description: "Get in touch with our scheduling specialists. Find directions, phone numbers, email support, and operating hours for Waga Eye Clinic.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
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
          <div className="text-center flex flex-col items-center gap-4 mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              CONNECT WITH OUR SPECIALISTS / REACH US
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-100 uppercase tracking-wide leading-tight">
              Contact Waga
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-lg mt-2 opacity-70 font-sans">
              Have questions regarding surgery options, insurance cover, or diagnostics? Drop us a line below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact details */}
            <div className="lg:col-span-5 flex flex-col gap-8 text-left">
              <div>
                <h2 className="text-xl md:text-2xl font-display font-bold text-slate-150 mb-3">
                  Direct Correspondence
                </h2>
                <p className="text-xs text-slate-405 leading-relaxed font-sans">
                  Our front-desk team operates daily, ensuring prompt scheduling support, patient files extraction, and insurance pre-verifications.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-200">Central Hub</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      108 Futuristic Medical Blvd, Suite 400, Tech City
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-200">Patient Lines</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      Office: +1 (800) 555-WAGA <br />
                      Emergencies (24/7): +1 (800) 999-EYES
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-200">Electronic Mail</h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      General: info@wagaeyeclinic.com <br />
                      Patient care: care@wagaeyeclinic.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="border-t border-white/5 pt-8">
                <h3 className="font-display font-bold text-slate-250 text-sm tracking-widest uppercase mb-4">
                  Clinical Hours
                </h3>
                <div className="flex flex-col gap-2 font-mono text-xs text-slate-400">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>MONDAY - WEDNESDAY</span>
                    <span className="text-slate-300">08:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>THURSDAY - FRIDAY</span>
                    <span className="text-slate-300">08:00 AM - 05:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SATURDAY - SUNDAY</span>
                    <span className="text-brand-teal">EMERGENCY CALLS ONLY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-7 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
