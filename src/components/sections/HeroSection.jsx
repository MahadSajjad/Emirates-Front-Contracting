import React from "react";
import { FaWhatsapp, FaArrowRight, FaTruckMoving, FaBuilding, FaDraftingCompass } from "react-icons/fa";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Button from "../ui/Button.jsx";
import Reveal from "../motion/Reveal.jsx";

export const HeroSection = () => {
  const heroWhatsAppUrl = buildWhatsAppLink();

  return (
    <section className="relative min-h-[85vh] sm:min-h-[94vh] flex items-center bg-primary-900/90 text-white overflow-hidden w-full max-w-full">
      {/* Background with construction photography + Light Blue Ambient Lighting */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000 opacity-20 grayscale contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        {/* Modern Light Blue & Slate radial glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/90 to-primary-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/25 via-transparent to-transparent" />
        {/* Diagonal steel truss architectural pattern */}
        <div className="absolute inset-0 bg-steel-truss opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left: Concise Editorial Headline & Action (7 cols) */}
          <div className="lg:col-span-7">

            <Reveal direction="up" delay={0.2}>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.04] mb-3 sm:mb-6">
                BUILT WITH <span className="text-primary-400">PRECISION.</span> ENGINEERED TO LEAD.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="font-display text-xs sm:text-base lg:text-lg font-medium text-slate-300 mb-3 sm:mb-6 tracking-wide leading-relaxed">
                شركة واجهة الامارات للمقاولات — حلول الواجهات، الأعمال الإنشائية والمدنية المتكاملة
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
                Specialized building equipments, civil construction, and complete contracting solutions across Saudi Arabia.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.45}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4">
                <Button
                  href={heroWhatsAppUrl}
                  variant="cta"
                  size="lg"
                  icon={FaWhatsapp}
                  iconPosition="right"
                  className="font-bold w-full sm:w-auto"
                >
                  WhatsApp Us
                </Button>
                <Button
                  to="/services"
                  variant="outline-light"
                  size="lg"
                  icon={FaArrowRight}
                  iconPosition="right"
                  className="border-white/30 hover:bg-white/10 text-white w-full sm:w-auto"
                >
                  Explore Scopes
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Responsive Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 sm:mt-0">
            <Reveal direction="up" delay={0.4}>
              {/* Main Interactive Glass Card */}
              <div className="relative rounded-2xl overflow-hidden glass-card-dark p-4 sm:p-6 shadow-2xl border border-slate-700/60 hover-lift bg-slate-900/90">
                <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden mb-3.5 sm:mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
                    alt="Heavy Transport and Construction Fleet - Emirates Front Contracting"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[10px] sm:text-xs font-mono text-white bg-slate-900/90 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-ping" />
                    <span>Site Operations · Heavy Logistics</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-300">
                  <span className="text-slate-300 font-medium">Riyadh Fleet & Heavy Haulage</span>
                  <span className="text-primary-400 font-semibold bg-primary-500/10 px-2 py-0.5 rounded border border-primary-400/25">
                    SBC Standards
                  </span>
                </div>

                {/* Mobile-Friendly Feature Highlights (Integrated cleanly inside card on mobile) */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10 sm:hidden">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-7 h-7 rounded bg-primary-500/15 text-primary-400 flex items-center justify-center shrink-0 border border-primary-400/20">
                      <FaTruckMoving className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-display font-bold text-xs text-white uppercase truncate">
                        Earthworks
                      </span>
                      <span className="block font-mono text-[9px] text-slate-400 truncate">
                        Heavy Haulage
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-7 h-7 rounded bg-primary-500/15 text-primary-400 flex items-center justify-center shrink-0 border border-primary-400/20">
                      <FaDraftingCompass className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-display font-bold text-xs text-white uppercase truncate">
                        Façades
                      </span>
                      <span className="block font-mono text-[9px] text-slate-400 truncate">
                        Curtain Wall
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metric 1: Heavy Equipment / Earthworks pill (Desktop & Tablet) */}
              <div className="hidden sm:flex absolute -bottom-3 left-0 sm:-left-3 z-20 glass-card-dark px-4 py-3 rounded-xl shadow-xl border border-slate-700/60 items-center gap-3 animate-float-slow hover:border-primary-400/60 transition-colors bg-slate-900/95 max-w-[260px]">
                <div className="w-10 h-10 rounded-lg bg-primary-500/15 text-primary-400 flex items-center justify-center shrink-0 border border-primary-400/25">
                  <FaTruckMoving className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display font-bold text-sm text-white uppercase">
                    Earthworks & Logistics
                  </span>
                  <span className="block font-mono text-[11px] text-slate-400">
                    Fleet Haulage & Excavation
                  </span>
                </div>
              </div>

              {/* Floating Metric 2: Envelope Engineering (Desktop & Tablet) */}
              <div className="hidden sm:flex absolute -top-3 right-0 sm:right-1 z-20 glass-card-dark px-4 py-3 rounded-xl shadow-xl border border-slate-700/60 items-center gap-3 animate-float-reverse hover:border-primary-400/60 transition-colors bg-slate-900/95 max-w-[260px]">
                <div className="w-10 h-10 rounded-lg bg-primary-500/15 text-primary-400 flex items-center justify-center shrink-0 border border-primary-400/25">
                  <FaDraftingCompass className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display font-bold text-sm text-white uppercase">
                    Façade Architecture
                  </span>
                  <span className="block font-mono text-[11px] text-slate-400">
                    Curtain Wall & Cladding
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
