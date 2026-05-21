"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes Waga Eye Clinic different from standard clinics?",
    answer:
      "We blend world-class medical professionalism with luxury hospitality. Our diagnostic suite features FDA-approved Zeiss lasers and Solix 3D retinal scanners that identify optic issues years before standard equipment, delivering unparalleled safety and precision.",
  },
  {
    question: "Is LASIK laser vision correction painful?",
    answer:
      "No. The procedure is performed using numbing eye drops, and patients feel only a light pressure sensation for about 30 seconds. Most patients achieve 20/20 vision or better within 24 hours of treatment.",
  },
  {
    question: "How often should I get a comprehensive eye examination?",
    answer:
      "For adults with no symptoms, we recommend a comprehensive scan every 2 years. If you are over 50, wear contact lenses, or have a family history of diabetes/glaucoma, an annual exam is highly recommended.",
  },
  {
    question: "Are your procedures covered by vision insurance?",
    answer:
      "Many medical evaluations, cataract surgeries, and glaucoma treatments are covered. Refractive procedures like LASIK are often elective, but we offer interest-free financing plans to ensure premium care is accessible.",
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = openFaq === i;
        return (
          <div
            key={i}
            className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenFaq(isOpen ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-display font-bold text-sm sm:text-base text-slate-200">
                {faq.question}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-cyan border border-white/10 shrink-0">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-400 border-t border-white/5 leading-relaxed bg-brand-dark/30">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
