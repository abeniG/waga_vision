"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2500);
  };

  return (
    <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 relative">
      {isSent ? (
        <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-2">
            <CheckCircle className="w-8 h-8 animate-pulse" />
          </div>
          <h3 className="text-xl font-display font-bold text-slate-200">
            Message Dispatched
          </h3>
          <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
            Thank you for connecting. Our ophthalmic support desk will reply within 12 business hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan text-slate-200"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="johndoe@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan text-slate-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Subject / Topic
            </label>
            <input
              type="text"
              required
              placeholder="LASIK pricing query"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan text-slate-200"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Message Content
            </label>
            <textarea
              required
              rows={4}
              placeholder="Type details regarding surgery cross-checks or eye care questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan text-slate-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-teal to-brand-cyan text-slate-900 font-bold text-xs tracking-wider uppercase mt-2 hover:opacity-95 transition-all shadow-[0_4px_15px_rgba(6,182,212,0.15)]"
          >
            Transmit Message
          </button>
        </form>
      )}
    </div>
  );
}
