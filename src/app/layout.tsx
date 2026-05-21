import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waga Eye Clinic | Premium Ophthalmology & Advanced Vision Care",
  description:
    "Experience the future of eye care. Waga Eye Clinic provides world-class LASIK, Cataract Surgery, Retina Care, and comprehensive diagnostics with state-of-the-art technology.",
  keywords: [
    "eye clinic",
    "LASIK",
    "cataract surgery",
    "ophthalmology",
    "retina care",
    "eye doctor",
    "vision correction",
    "glaucoma treatment",
  ],
};

import RetinaPattern from "@/components/RetinaPattern";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="relative min-h-screen bg-brand-dark text-slate-100">
        <RetinaPattern />
        {children}
      </body>
    </html>
  );
}
