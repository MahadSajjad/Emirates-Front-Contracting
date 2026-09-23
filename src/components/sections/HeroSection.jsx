import React from "react";
import { FaWhatsapp, FaArrowRight, FaTruckMoving, FaBuilding, FaDraftingCompass } from "react-icons/fa";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Button from "../ui/Button.jsx";
import Reveal from "../motion/Reveal.jsx";

export const HeroSection = () => {
  const heroWhatsAppUrl = buildWhatsAppLink();

  return (
    <section className="relative min-h-[94vh] flex items-center bg-primary-900/90 text-white overflow-hidden w-full max-w-full">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Concise Editorial Headline & Action (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary-500/15 border border-primary-400/30 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-cta animate-ping" />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary-200">
                  Riyadh, Saudi Arabia · General Contracting
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.04] mb-6">
                BUILT WITH <span className="text-primary-400">PRECISION.</span> ENGINEERED TO LEAD.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="font-display text-base sm:text-lg font-medium text-cta mb-6 tracking-wide">
                شركة واجهة الامارات للمقاولات — حلول الواجهات، الأعمال الإنشائية والمدنية المتكاملة
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
                Specialized building equipments, civil construction, and complete contracting solutions across Saudi Arabia.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.45}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href={heroWhatsAppUrl}
                  variant="cta"
                  size="lg"
                  icon={FaWhatsapp}
                  iconPosition="right"
                  className="shadow-glow-cta hover:scale-105 transition-transform"
                >
                  WhatsApp
                </Button>
                <Button
                  to="/services"
                  variant="outline-light"
                  size="lg"
                  icon={FaArrowRight}
                  iconPosition="right"
                  className="border-primary-400/50 hover:bg-primary-500/20 text-white"
                >
                  Explore
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Floating Responsive Visual Cards (5 cols) */}
          <div className="lg:col-span-5 relative hidden sm:block pr-2 py-4">
            {/* Main Interactive Glass Card */}
            <div className="relative rounded-2xl overflow-hidden glass-card-dark p-6 shadow-2xl border border-primary-500/30 hover-lift bg-slate-900/80">
              <div className="relative h-64 rounded-xl overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
                  alt="Heavy Transport and Construction Fleet - Emirates Front Contracting"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-mono text-white bg-primary-900/90 px-3 py-1 rounded-md backdrop-blur-sm border border-primary-400/30">
                  Site Operations · Heavy Logistics
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="text-slate-400">Riyadh Fleet & Heavy Haulage</span>
                <span className="text-cta font-bold">SBC Standards</span>
              </div>
            </div>

            {/* Floating Metric 1: Heavy Equipment / Earthworks pill */}
            <div className="absolute -bottom-3 left-0 sm:-left-3 z-20 glass-card-dark px-4 py-3 rounded-xl shadow-xl border border-primary-400/30 flex items-center gap-3 animate-float-slow hover:border-cta transition-colors bg-slate-900/95 max-w-[260px]">
              <div className="w-10 h-10 rounded-lg bg-cta/20 text-cta flex items-center justify-center shrink-0">
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

            {/* Floating Metric 2: Envelope Engineering */}
            <div className="absolute -top-3 right-0 sm:right-1 z-20 glass-card-dark px-4 py-3 rounded-xl shadow-xl border border-primary-400/30 flex items-center gap-3 animate-float-reverse hover:border-cta transition-colors bg-slate-900/95 max-w-[260px]">
              <div className="w-10 h-10 rounded-lg bg-primary-600/30 text-primary-300 flex items-center justify-center shrink-0 border border-primary-400/40">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
