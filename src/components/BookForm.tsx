"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ClipboardList, CheckCircle, Clock, ChevronRight, ChevronLeft, CalendarDays } from "lucide-react";

const steps = [
  { id: 1, name: "Service Selection", icon: <ClipboardList className="w-4 h-4" /> },
  { id: 2, name: "Consultant & Date", icon: <Calendar className="w-4 h-4" /> },
  { id: 3, name: "Patient Details", icon: <User className="w-4 h-4" /> },
];

const services = [
  { id: "lasik", name: "LASIK Consultation", duration: "45 mins", price: "Free Screening" },
  { id: "cataract", name: "Cataract Evaluation", duration: "60 mins", price: "$120" },
  { id: "retina", name: "Retinal Laser Screen", duration: "90 mins", price: "$180" },
  { id: "general", name: "Comprehensive Eye Exam", duration: "30 mins", price: "$75" },
];

const doctors = [
  { id: "waga", name: "Dr. Waga Abdi", role: "Chief Refractive Surgeon", availability: "Mon - Wed" },
  { id: "helen", name: "Dr. Helen Vance", role: "Retinal Specialist", availability: "Tue - Thu" },
  { id: "marcus", name: "Dr. Marcus Cole", role: "Glaucoma Specialist", availability: "Mon, Fri" },
];

const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

export default function BookForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectService = (id: string) => {
    setFormData({ ...formData, service: id });
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
    }, 1500);
  };

  const selectedServiceObj = services.find((s) => s.id === formData.service);
  const selectedDoctorObj = doctors.find((d) => d.id === formData.doctor);

  if (isCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 md:p-12 rounded-3xl border border-brand-cyan/20 max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <div className="w-20 h-20 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-2">
          <CheckCircle className="w-10 h-10 animate-bounce" />
        </div>
        <div>
          <h3 className="text-2xl font-display font-extrabold text-slate-100 uppercase tracking-wide">
            Appointment Reserved
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            A confirmation code and intake questionnaire have been sent to your email.
          </p>
        </div>

        <div className="w-full bg-slate-900/60 border border-white/5 rounded-2xl p-6 text-left flex flex-col gap-4 text-sm font-mono mt-2">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-slate-500">CLINICAL SERVICE:</span>
            <span className="text-brand-cyan">{selectedServiceObj?.name}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-slate-500">OPHTHALMOLOGIST:</span>
            <span className="text-slate-300">{selectedDoctorObj?.name}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-slate-500">DATE & SLOT:</span>
            <span className="text-slate-300">
              {formData.date} at {formData.time}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">PATIENT NAME:</span>
            <span className="text-slate-300">{formData.name}</span>
          </div>
        </div>

        <button
          onClick={() => {
            setFormData({
              service: "",
              doctor: "",
              date: "",
              time: "",
              name: "",
              email: "",
              phone: "",
              notes: "",
            });
            setCurrentStep(1);
            setIsCompleted(false);
          }}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan text-slate-900 font-bold text-sm hover:opacity-90 transition-opacity"
        >
          Book Another Appointment
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress header steps */}
      <div className="flex justify-between items-center mb-10 max-w-md mx-auto">
        {steps.map((s, index) => {
          const isActive = currentStep >= s.id;
          return (
            <div key={s.id} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-brand-cyan border-brand-cyan text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    : "border-white/10 text-slate-500"
                }`}
              >
                {s.id}
              </div>
              <span
                className={`text-xs font-medium tracking-wide hidden sm:inline ${
                  isActive ? "text-slate-200" : "text-slate-500"
                }`}
              >
                {s.name}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`w-6 h-[1px] bg-white/10 hidden sm:block ${
                    currentStep > s.id ? "bg-brand-cyan" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Main wizard interface */}
      <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 relative min-h-[400px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-6"
            >
              <div>
                <h3 className="text-lg font-display font-bold text-slate-100">
                  Select Required Care Program
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Choose the eye treatment or routine checkup required.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleSelectService(service.id)}
                    className={`flex flex-col justify-between p-5 rounded-2xl border text-left transition-all ${
                      formData.service === service.id
                        ? "border-brand-cyan bg-brand-cyan/5 text-slate-100"
                        : "border-white/5 bg-white/5 hover:border-white/15 text-slate-300"
                    }`}
                  >
                    <span className="font-display font-semibold text-sm">
                      {service.name}
                    </span>
                    <div className="flex justify-between items-center w-full mt-4 text-xs font-mono">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-teal" />
                        {service.duration}
                      </span>
                      <span className="text-brand-cyan font-bold">{service.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-6"
            >
              <div>
                <h3 className="text-lg font-display font-bold text-slate-100">
                  Select Surgeon & Schedule
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Choose your doctor, date, and preferred time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {doctors.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setFormData({ ...formData, doctor: doc.id })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      formData.doctor === doc.id
                        ? "border-brand-cyan bg-brand-cyan/5 text-slate-100"
                        : "border-white/5 bg-white/5 hover:border-white/15 text-slate-300"
                    }`}
                  >
                    <span className="block font-display font-bold text-sm">
                      {doc.name}
                    </span>
                    <span className="block text-[10px] text-brand-teal uppercase mt-0.5">
                      {doc.role}
                    </span>
                    <span className="block text-[9px] text-slate-500 font-mono mt-3">
                      Availability: {doc.availability}
                    </span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan text-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                    Select Available Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`py-2 px-1 text-xs font-mono rounded-lg border text-center transition-all ${
                          formData.time === slot
                            ? "border-brand-cyan bg-brand-cyan/10 text-brand-cyan"
                            : "border-white/5 bg-white/5 hover:border-white/10 text-slate-400"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-5"
            >
              <div>
                <h3 className="text-lg font-display font-bold text-slate-100">
                  Patient Credentials
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Complete the final step with your basic info.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                      Full Name
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan text-slate-200"
                    />
                  </div>
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

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                    Additional Patient Notes (Optic History / Concerns)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any vision issues or current glasses prescription..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan text-slate-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-teal to-brand-cyan text-slate-900 font-bold text-sm tracking-wide mt-2 hover:opacity-95 transition-all shadow-[0_4px_20px_rgba(6,182,212,0.2)] disabled:opacity-50"
                >
                  {isSubmitting ? "transmitting registration..." : "Securely Book Appointment"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wizard Controls */}
        <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8">
          {currentStep > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-xs font-mono tracking-widest text-slate-400 hover:text-slate-100 transition-colors uppercase"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 && (
            <button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !formData.service) ||
                (currentStep === 2 && (!formData.doctor || !formData.date || !formData.time))
              }
              className="flex items-center gap-1 text-xs font-mono tracking-widest text-brand-cyan hover:text-brand-accent transition-colors uppercase disabled:opacity-30 disabled:pointer-events-none"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
