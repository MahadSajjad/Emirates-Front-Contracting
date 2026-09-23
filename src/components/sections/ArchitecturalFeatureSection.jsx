import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "../motion/Reveal.jsx";

export const ArchitecturalFeatureSection = ({
  headline = "Craftsmanship & Integrity,",
  highlightedText = "our standard across the Kingdom",
  headlineAr = "الكفاءة والنزاهة — معاييرنا الثابتة في قطاع المقاولات والتشييد",
  description = "A disciplined, transparent, and tailored contracting methodology driven by the technical precision and on-site expertise of our engineering team in Riyadh.",
  linkTo = "/about",
  linkText = "About Our Firm",
}) => {
  return (
    <section className="relative w-full bg-primary-950 overflow-hidden py-0 my-0">
      {/* Background B&W / Grayscale Construction & Transport Machinery Photography */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900/60 to-primary-950" />
      </div>

      {/* Outer wrapper with staggered decorative architectural blocks */}
      <div className="relative z-10 w-full pt-16 pb-20">
        {/* Top Decorative Block Transitions */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-8 sm:h-12 overflow-hidden flex items-end pointer-events-none">
            <div className="w-1/4 h-4 bg-alabaster/40 backdrop-blur-sm" />
            <div className="w-1/6 h-8 bg-alabaster/70 backdrop-blur-sm ml-2" />
            <div className="w-1/3 h-full bg-alabaster ml-4" />
            <div className="w-1/5 h-6 bg-alabaster/80 ml-2" />
          </div>

          {/* Main Alabaster Architectural Card */}
          <div className="relative bg-alabaster text-primary px-5 sm:px-14 lg:px-20 py-10 sm:py-20 lg:py-24 shadow-2xl border-t border-b border-slate-300/60 rounded-xl sm:rounded-none">
            {/* Top Brand Tag / Logo Icon in Top-Left */}
            <div className="absolute top-5 left-5 sm:top-6 sm:left-14 flex items-center gap-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary text-cta font-mono font-bold text-xs flex items-center justify-center border border-cta/40 shadow-md">
                EF
              </div>
            </div>

            {/* Stepped Technical Schematic Line */}
            <Reveal direction="left" delay={0.1}>
              <div className="w-full max-w-4xl mb-6 sm:mb-10 pt-8 sm:pt-2">
                <svg
                  className="w-full h-6 text-primary/30"
                  viewBox="0 0 800 24"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 4 H 140 L 164 20 H 800"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
            </Reveal>

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              {/* Left Col: Prominent Editorial Headline (8 cols) */}
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <Reveal direction="up" delay={0.2}>
                  <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-primary leading-[1.08]">
                    {headline}{" "}
                    <span className="text-cta block sm:inline font-black">
                      {highlightedText}
                    </span>
                  </h2>
                </Reveal>

                {headlineAr && (
                  <Reveal direction="up" delay={0.3}>
                    <p className="font-display text-sm sm:text-base font-semibold text-muted tracking-wide pt-1">
                      {headlineAr}
                    </p>
                  </Reveal>
                )}
              </div>

              {/* Right Col: Descriptive Body & Signature Split Button (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <Reveal direction="up" delay={0.35}>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed font-normal">
                    {description}
                  </p>
                </Reveal>

                <Reveal direction="up" delay={0.45}>
                  <div className="pt-2">
                    <Link
                      to={linkTo}
                      className="group inline-flex items-stretch rounded-lg border border-slate-300 bg-white hover:border-cta hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                    >
                      <span className="px-5 sm:px-6 py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-primary group-hover:text-primary-800 flex items-center">
                        {linkText}
                      </span>
                      <span className="px-4 py-3 border-l border-slate-200 bg-slate-50 group-hover:bg-cta group-hover:text-black transition-colors flex items-center justify-center text-primary">
                        <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Subtle asterisk architectural motif */}
            <div className="absolute bottom-8 left-8 sm:left-14 text-primary/20 font-mono text-2xl select-none pointer-events-none">
              ✦
            </div>
          </div>

          {/* Bottom Decorative Stepped Mosaic Blocks */}
          <div className="relative w-full h-8 sm:h-12 overflow-hidden flex items-start pointer-events-none">
            <div className="w-1/6 h-8 bg-alabaster/80 ml-6" />
            <div className="w-1/4 h-4 bg-alabaster/50 ml-4" />
            <div className="w-1/5 h-10 bg-alabaster/90 ml-8" />
            <div className="w-1/3 h-5 bg-alabaster/40 ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalFeatureSection;
