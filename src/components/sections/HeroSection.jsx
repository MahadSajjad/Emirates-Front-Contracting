import React from "react";
import { FaWhatsapp, FaArrowRight, FaTruckMoving, FaBuilding, FaDraftingCompass } from "react-icons/fa";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Button from "../ui/Button.jsx";
import Reveal from "../motion/Reveal.jsx";

export const HeroSection = () => {
  const heroWhatsAppUrl = buildWhatsAppLink();

  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center bg-[#091e36] text-white overflow-hidden w-full max-w-full">
      {/* Vivid Background Construction Photography + Architectural Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2400&q=85"
          alt="Heavy Construction and Tower Cranes - Emirates Front Contracting"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
          loading="eager"
        />
        {/* Directional Corporate Blue & Slate Gradient: Ensures total text readability while keeping image vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091e36]/95 via-[#091e36]/85 to-[#005596]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091e36] via-transparent to-[#091e36]/70" />
        {/* Diagonal architectural pattern */}
        <div className="absolute inset-0 bg-steel-truss opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Concise Editorial Headline & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <Reveal direction="up" delay={0.2}>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.04]">
                BUILDING EXCELLENCE. <span className="text-[#f59e0b]">SHAPING THE FUTURE.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="font-display text-sm sm:text-base lg:text-lg font-bold text-slate-200 tracking-wide leading-relaxed">
                شركة واجهة الامارات للمقاولات — حلول المقاولات العامة وتأجير المعدات والشاحنات الإنشائية
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                Comprehensive contracting services across Saudi Arabia: Road Building, Luxury Villas, Street Lighting, Civil Superstructures, and Full Fleet Rentals (Excavators, Dumpers, 3-Ton Pickups, Trailers & Cranes).
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Button
                  href={heroWhatsAppUrl}
                  variant="cta"
                  size="lg"
                  icon={FaWhatsapp}
                  iconPosition="right"
                  className="font-bold w-full sm:w-auto shadow-lg"
                >
                  WhatsApp Us
                </Button>
                <Button
                  to="/services"
                  variant="outline-light"
                  size="lg"
                  icon={FaArrowRight}
                  iconPosition="right"
                  className="border-white/30 hover:bg-white/10 text-white w-full sm:w-auto font-semibold"
                >
                  Explore Services
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Responsive Visual Showcase Card with Real Construction Photography (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <Reveal direction="up" delay={0.4}>
              {/* Main Interactive Glass Card */}
              <div className="relative rounded-2xl overflow-hidden p-4 sm:p-5 shadow-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-md">

                <div className="flex px-3.5 py-2 rounded-xl shadow-xl border border-slate-700/80 items-center gap-2.5 bg-slate-900/95 max-w-full mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </span>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-white uppercase">
                      Saudi Building Code (SBC)
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      Certified Fleet & Execution
                    </span>
                  </div>
                </div>
                <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden mb-4">

                  <img
                    src="https://images.unsplash.com/photo-1685708716815-94c588417c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Active Construction Site with Excavators and Heavy Logistics - Emirates Front Contracting"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                  {/* Floating Top Badge */}
                  <div className="absolute top-3 left-3 text-[10px] sm:text-xs font-mono font-bold text-slate-950 bg-[#f59e0b] px-2.5 py-1 rounded shadow-md flex items-center gap-1.5">
                    <span>★</span>
                    <span>ACTIVE RIYADH FLEET</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] sm:text-xs font-mono text-white bg-slate-900/90 px-3 py-1.5 rounded-md backdrop-blur-sm border border-slate-700">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                      <span>Heavy Excavators · Dumpers</span>
                    </span>
                    <span className="text-[#f59e0b] font-bold">Exit 18</span>
                  </div>
                </div>

                {/* 4-Item Visual Fleet Snapshot */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-[#f59e0b]/15 text-[#f59e0b] flex items-center justify-center shrink-0 font-mono font-bold">
                      🚜
                    </div>
                    <div className="min-w-0">
                      <span className="block font-display font-bold text-white text-[11px] sm:text-xs uppercase truncate">
                        Excavators & Dumpers
                      </span>
                      <span className="block font-mono text-[10px] text-slate-400 truncate">
                        Daily & Monthly Rental
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-[#f59e0b]/15 text-[#f59e0b] flex items-center justify-center shrink-0 font-mono font-bold">
                      🚛
                    </div>
                    <div className="min-w-0">
                      <span className="block font-display font-bold text-white text-[11px] sm:text-xs uppercase truncate">
                        3-Ton Pickups & Dyna
                      </span>
                      <span className="block font-mono text-[10px] text-slate-400 truncate">
                        Rapid Riyadh Haulage
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-[#0284c7]/20 text-[#38bdf8] flex items-center justify-center shrink-0 font-mono font-bold">
                      🛣️
                    </div>
                    <div className="min-w-0">
                      <span className="block font-display font-bold text-white text-[11px] sm:text-xs uppercase truncate">
                        Roads & Asphalting
                      </span>
                      <span className="block font-mono text-[10px] text-slate-400 truncate">
                        Grading & Street Light
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-[#0284c7]/20 text-[#38bdf8] flex items-center justify-center shrink-0 font-mono font-bold">
                      🏡
                    </div>
                    <div className="min-w-0">
                      <span className="block font-display font-bold text-white text-[11px] sm:text-xs uppercase truncate">
                        Villa Construction
                      </span>
                      <span className="block font-mono text-[10px] text-slate-400 truncate">
                        Turnkey Contracting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div >
    </section >
  );
};

export default HeroSection;
