import { useRef } from "react";
import { FaWhatsapp, FaArrowRight, FaHardHat, FaRulerCombined, FaLayerGroup } from "react-icons/fa";
import { LazyMotion, domAnimation, m, useScroll, useTransform } from "motion/react";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Button from "../ui/Button.jsx";

export const CraneLiftSection = ({
  headline = "Structural Delivery & Façade Engineering",
  subtitle = "رفع وتشييد الهياكل الإنشائية وأنظمة الواجهات بأعلى معايير الدقة",
  tagline = "Crane Operation & Site Mobilization",
}) => {
  const containerRef = useRef(null);
  const whatsappUrl = buildWhatsAppLink();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Scroll-driven transforms:
  // Crane hook and cables lower as you scroll, lifting the entire section block upward
  const liftY = useTransform(scrollYProgress, [0, 0.4, 1], [140, 60, 0]);
  const cableHeight = useTransform(scrollYProgress, [0, 0.4, 1], [180, 110, 70]);
  const hookY = useTransform(scrollYProgress, [0, 0.4, 1], [110, 50, 10]);
  const shadowSpread = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const rotateSway = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 1, 0]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        className="relative w-full bg-slate-900 text-white overflow-hidden py-16 sm:py-24 border-t border-b border-primary-800/40"
      >
        {/* Background construction atmosphere & technical blueprint lines */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15 grayscale contrast-125"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950" />
          <div className="absolute inset-0 bg-steel-truss opacity-25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ========================================================= */}
          {/* TOWER CRANE HEADER & JIB BOOM ASSEMBLY                    */}
          {/* ========================================================= */}
          <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
            {/* Top Crane Jib & Boom Graphic */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-primary-300 pb-2 border-b border-primary-700/50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cta animate-ping" />
                <span className="font-bold text-white uppercase tracking-wider">
                  TOWER_CRANE_01 // RIYADH_ACTIVE
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-slate-400">
                <span>BOOM_REACH: 65.0M</span>
                <span>MAX_LOAD: 12.5T</span>
                <span className="text-cta font-bold">STATUS: HOISTING</span>
              </div>
            </div>

            {/* Industrial Crane Horizontal Truss Jib */}
            <div className="relative w-full h-12 flex items-center justify-center">
              {/* Jib Truss Graphic */}
              <svg
                viewBox="0 0 1000 40"
                className="w-full h-full text-cta/80 overflow-visible"
                fill="none"
              >
                {/* Horizontal Boom Rails */}
                <line x1="20" y1="12" x2="980" y2="12" stroke="currentColor" strokeWidth="2.5" />
                <line x1="20" y1="28" x2="980" y2="28" stroke="currentColor" strokeWidth="2.5" />

                {/* Diagonal Lattice Bracing */}
                {Array.from({ length: 32 }, (_, i) => (
                  <line
                    key={i}
                    x1={30 + i * 30}
                    y1={i % 2 === 0 ? 12 : 28}
                    x2={60 + i * 30}
                    y2={i % 2 === 0 ? 28 : 12}
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.7"
                  />
                ))}

                {/* Counterweight Block on Left */}
                <rect x="30" y="8" width="60" height="24" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="35" y="24" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  CW-8T
                </text>

                {/* Operator Cabin */}
                <rect x="220" y="4" width="28" height="32" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" rx="2" />
                <circle cx="234" cy="18" r="4" fill="#38bdf8" opacity="0.8" />

                {/* Central Hoist Trolley positioned at 50% */}
                <rect x="480" y="24" width="40" height="12" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" rx="2" />
              </svg>
            </div>

            {/* Dual Steel Hoist Cables & Heavy Hook Assembly */}
            <div className="relative w-full flex flex-col items-center pointer-events-none">
              {/* Twin Hoist Cable Lines stretching dynamically */}
              <m.div
                style={{ height: cableHeight }}
                className="w-8 flex justify-between px-2 items-stretch"
              >
                <div className="w-[1.5px] bg-gradient-to-b from-cta via-primary-300 to-white shadow-sm" />
                <div className="w-[1.5px] bg-gradient-to-b from-cta via-primary-300 to-white shadow-sm" />
              </m.div>

              {/* Crane Hook Block Assembly */}
              <m.div style={{ y: hookY }} className="flex flex-col items-center">
                {/* Pulley Sheave */}
                <div className="w-9 h-7 rounded bg-primary-800 border-2 border-cta flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-cta" />
                </div>
                {/* Heavy Forged Crane Hook */}
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                  <path
                    d="M 12 0 L 12 8 C 12 16, 4 16, 4 20 C 4 24, 16 26, 20 20 C 22 17, 20 12, 17 12"
                    stroke="#f59e0b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </m.div>

              {/* Rigging Slings expanding outward to the 4 structural corner lugs */}
              <div className="w-full max-w-2xl h-8 relative mt-1">
                <svg viewBox="0 0 600 32" className="w-full h-full text-cta/70" fill="none">
                  {/* Left rigging wire */}
                  <line x1="300" y1="2" x2="40" y2="30" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
                  {/* Right rigging wire */}
                  <line x1="300" y1="2" x2="560" y2="30" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
                  {/* Rigging shackles */}
                  <circle cx="40" cy="30" r="3" fill="#f59e0b" />
                  <circle cx="560" cy="30" r="3" fill="#f59e0b" />
                </svg>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* THE LIFTED STRUCTURAL SECTION (ANIMATED ON SCROLL)        */}
          {/* ========================================================= */}
          <m.div
            style={{
              y: liftY,
              rotate: rotateSway,
            }}
            className="w-full max-w-5xl mx-auto transition-shadow duration-300"
          >
            {/* Structural Rigging Shackle Mounts on Top Edge */}
            <div className="flex justify-between px-8 sm:px-16 -mb-2 relative z-20 pointer-events-none">
              <div className="px-3 py-1 bg-cta text-black font-mono font-bold text-[10px] rounded-t uppercase shadow">
                ⚓ LUG_LEFT // RIG_LOCKED
              </div>
              <div className="px-3 py-1 bg-cta text-black font-mono font-bold text-[10px] rounded-t uppercase shadow">
                ⚓ LUG_RIGHT // RIG_LOCKED
              </div>
            </div>

            {/* Main Section Card Being Hoisted */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 border-2 border-primary-500/50 p-8 sm:p-12 lg:p-14 shadow-2xl shadow-primary-950/80 backdrop-blur-xl">
              {/* Construction Crane Watermark Pattern */}
              <div className="absolute top-4 right-6 font-mono text-xs text-primary-400/30 uppercase tracking-widest pointer-events-none">
                [SECTION_MODULE_01 // ACTIVE_LIFT]
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Scope & Headline (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-400/40 text-primary-300 text-xs font-mono">
                    <FaHardHat className="text-cta" />
                    <span>Heavy Crane & Structural Assembly</span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                    Engineered from Ground to <span className="text-primary-400">Pinnacle.</span>
                  </h2>

                  <p className="font-display text-sm sm:text-base text-cta font-medium">
                    {subtitle}
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    We mobilize specialized heavy plant, crane rigging teams, and precision alignment lasers to erect high-tolerance curtain wall cassettes, structural steel trusses, and pre-cast concrete modules.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Button
                      href={whatsappUrl}
                      variant="cta"
                      size="md"
                      icon={FaWhatsapp}
                      iconPosition="left"
                      className="shadow-glow-cta font-bold"
                    >
                      Inquire via WhatsApp
                    </Button>
                    <Button
                      to="/services"
                      variant="outline-light"
                      size="md"
                      icon={FaArrowRight}
                      iconPosition="right"
                    >
                      View All Scopes
                    </Button>
                  </div>
                </div>

                {/* Right Column: Key Technical Specs Box (5 cols) */}
                <div className="lg:col-span-5 bg-slate-950/70 border border-primary-700/50 rounded-xl p-6 space-y-4">
                  <span className="font-mono text-xs text-cta uppercase tracking-widest block pb-2 border-b border-white/10 font-semibold">
                    Rigging & Lifting Tolerances
                  </span>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <span className="text-slate-400">Façade Alignment:</span>
                      <span className="text-white font-bold">± 1.5mm Precision</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <span className="text-slate-400">Structural Steel:</span>
                      <span className="text-white font-bold">A36 / S355 Certified</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <span className="text-slate-400">Safety Standards:</span>
                      <span className="font-bold">SBC & OSHA Compliant</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-400">Site Location:</span>
                      <span className="text-primary-300 font-bold">Riyadh Metropolitan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default CraneLiftSection;
