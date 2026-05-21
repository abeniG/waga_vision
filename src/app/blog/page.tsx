import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";
import SmoothScroll from "@/components/SmoothScroll";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ParallaxScroll } from "@/components/ParallaxScroll";
import { Metadata } from "next";

const blogPosts = [
  {
    id: "lasik-tech",
    title: "The Future of LASIK: Custom Wavefront Reshaping Explained",
    excerpt: "Learn how modern high-speed lasers map your corneal surface at the molecular level, delivering crystal-clear post-surgical visual acuity.",
    category: "Refractive Surgery",
    date: "May 18, 2026",
    author: "Dr. Waga Abdi",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800",
  },
  {
    id: "oct-scans",
    title: "Preserving Optic Nerve Longevity: The Power of 3D OCT Scans",
    excerpt: "Glaucoma is often called the silent thief of sight. Discover how micro-resolution OCT imaging detects nerve deterioration years in advance.",
    category: "Diagnostics",
    date: "May 12, 2026",
    author: "Dr. Marcus Cole",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
  },
  {
    id: "cataract-implants",
    title: "Toric vs Multifocal Lenses: Selecting Your Cataract IOL Implant",
    excerpt: "Clouded lens extraction is only half the battle. Discover which medical implant best fits your lifestyle, astigmatism, and near-focus requirements.",
    category: "Cataracts",
    date: "April 29, 2026",
    author: "Dr. Helen Vance",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800",
  },
];

export const metadata: Metadata = {
  title: "Ocular Health Blog & Clinical Insights | Waga Eye Clinic",
  description: "Read the latest ophthalmology articles, clinical insights, and patient health guides published by our medical directors.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <SmoothScroll>
      <MouseSpotlight />
      <Navbar />

      <main className="bg-transparent min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Glow background meshes */}
        <ParallaxScroll offset={-150} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-teal/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 blur-[120px] rounded-full" />
        </ParallaxScroll>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-4 mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-brand-teal uppercase tracking-[0.3em]">
              OPTIC KNOWLEDGE / CLINIC NEWS & STUDIES
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-100 uppercase tracking-wide leading-tight">
              Ocular Insights
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-lg mt-2 opacity-70 font-sans">
              Browse academic articles, visual health guidelines, and clinical studies compiled by our expert ophthalmologists.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ParallaxScroll key={post.id} offset={(index % 3 + 1) * 30}>
                <article
                  className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between group hover:border-brand-cyan/25 transition-all duration-300 h-[480px]"
                >
                  {/* Visual */}
                  <div className="relative h-48 w-full overflow-hidden shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                    <span className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[9px] font-mono text-brand-cyan tracking-wider uppercase border border-brand-cyan/20">
                      {post.category}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col gap-4 text-left grow font-sans">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 uppercase">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-slate-100 text-base leading-snug group-hover:text-brand-cyan transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 font-sans">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Bottom link */}
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono shrink-0">
                    <span className="text-slate-500">By {post.author}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-brand-teal group-hover:text-brand-cyan font-bold flex items-center gap-1 uppercase transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </ParallaxScroll>
            ))}
          </div>

          {/* Newsletter Banner */}
          <div className="glass-card mt-24 p-8 md:p-12 rounded-[30px] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            <div className="flex flex-col gap-2 max-w-md">
              <span className="text-xs font-mono text-brand-teal uppercase tracking-widest">
                NEWSLETTER REGISTRATION
              </span>
              <h3 className="text-2xl font-display font-extrabold text-slate-100">
                Receive Ocular Health Publications
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Receive monthly clinical reports, surgical breakthroughs, and diagnostic tips directly from our medical board.
              </p>
            </div>
            <div
              className="flex items-center gap-3 w-full lg:w-auto max-w-md shrink-0 bg-white/5 border border-white/10 rounded-full p-1.5 focus-within:border-brand-cyan transition-all"
            >
              <input
                type="email"
                placeholder="johndoe@email.com"
                required
                className="bg-transparent text-sm pl-4 pr-2 py-2 focus:outline-none text-slate-200 grow font-sans"
              />
              <button
                type="button"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan text-slate-900 font-bold text-xs tracking-wider uppercase shadow-md shadow-brand-cyan/20 shrink-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
