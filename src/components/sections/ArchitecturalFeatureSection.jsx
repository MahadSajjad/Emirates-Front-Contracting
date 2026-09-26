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
    <section className="relative w-full bg-[#225F98] overflow-hidden py-0 my-0">

      {/* Outer wrapper with staggered decorative architectural blocks */}
      <div className="relative z-10 w-full pt-16 pb-20">
        {/* Top Decorative Block Transitions */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-8 sm:h-12 overflow-hidden flex items-end pointer-events-none">
            <div className="w-1/4 h-4 bg-white/20 backdrop-blur-sm" />
            <div className="w-1/6 h-8 bg-white/40 backdrop-blur-sm ml-2" />
            <div className="w-1/3 h-full bg-slate-100 ml-4" />
            <div className="w-1/5 h-6 bg-white/60 ml-2" />
          </div>

          {/* Main Alabaster Architectural Card */}
          <div className="relative bg-white text-slate-900 px-5 sm:px-14 lg:px-20 py-10 sm:py-20 lg:py-24 shadow-2xl border-t border-b border-slate-200 rounded-xl sm:rounded-none">
            {/* Top Brand Tag / Logo Icon in Top-Left */}
            <div className="absolute top-5 left-5 sm:top-6 sm:left-14 flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Emirates Front Emblem"
                className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-sm"
                width="56"
                height="56"
              />
            </div>

            {/* Stepped Technical Schematic Line */}
            <Reveal direction="left" delay={0.1}>
              <div className="w-full max-w-4xl mb-6 sm:mb-10 pt-8 sm:pt-2">
                <svg
                  className="w-full h-6 text-slate-300"
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
                  <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.08]">
                    {headline}{" "}
                    <span className="block sm:inline font-black text-slate-900">
                      {highlightedText}
                    </span>
                  </h2>
                </Reveal>

                {headlineAr && (
                  <Reveal direction="up" delay={0.3}>
                    <p className="font-display text-sm sm:text-base font-medium text-slate-600 tracking-wide pt-1">
                      {headlineAr}
                    </p>
                  </Reveal>
                )}
              </div>

              {/* Right Col: Descriptive Body & Signature Split Button (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <Reveal direction="up" delay={0.35}>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {description}
                  </p>
                </Reveal>

                <Reveal direction="up" delay={0.45}>
                  <div className="pt-2">
                    <Link
                      to={linkTo}
                      className="group inline-flex items-stretch rounded-lg border border-slate-300 bg-white hover:border-slate-900 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                    >
                      <span className="px-5 sm:px-6 py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-slate-900 group-hover:text-black flex items-center">
                        {linkText}
                      </span>
                      <span className="px-4 py-3 border-l border-slate-200 bg-slate-50 group-hover:bg-slate-950 group-hover:text-white transition-colors flex items-center justify-center text-slate-800">
                        <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </Reveal>
              </div>
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
