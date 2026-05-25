"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

/**
 * Navbar — Floating glassmorphism navigation bar with smart scroll
 * hide/reveal, animated active indicators, and a cinematic mobile drawer.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-slate-950/20 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className={`flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-500 ${
              scrolled
                ? "glass shadow-lg shadow-black/20"
                : "glass"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 flex items-center justify-center rounded-full bg-brand-cyan/10 border border-brand-cyan/20 group-hover:border-brand-cyan/50 transition-all duration-300">
                <svg
                  className="w-4.5 h-4.5 text-brand-cyan transition-transform duration-700 group-hover:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-wider text-slate-100 uppercase leading-none">
                  Wgga
                </span>
                <span className="text-[8px] tracking-[0.25em] text-brand-teal uppercase leading-none mt-0.5">
                  Eye Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? "text-brand-cyan" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-0 rounded-full bg-brand-cyan/8 border border-brand-cyan/15"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/book"
                className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan text-slate-900 font-semibold text-sm tracking-wide shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-[1.03]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-brand-cyan transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-brand-dark/98 backdrop-blur-2xl px-10 lg:hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="flex flex-col gap-5 relative z-10">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-display font-semibold tracking-wide hover:text-brand-cyan transition-colors duration-300 flex items-center gap-3 ${
                        isActive ? "text-brand-cyan" : "text-slate-100"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-brand-teal" />}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6"
              >
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="w-full justify-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan text-slate-900 font-bold text-center flex items-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
