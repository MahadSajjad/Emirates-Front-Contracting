import { useRef } from "react";
import { FaWhatsapp, FaArrowRight, FaHardHat } from "react-icons/fa";
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
  const rotateSway = useTransform(scrollYProgress, [0, 0.5, 1], [-1.5, 0.8, 0]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        className="relative w-full bg-[#fafafa] text-slate-800 overflow-hidden py-16 sm:py-24 border-t border-b border-slate-200 max-w-full"
      >
        {/* Background architectural drafting lines & subtle engineering grid on #fafafa */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-blueprint-lines opacity-35" />
          <div className="absolute inset-0 bg-steel-truss opacity-15" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* ========================================================= */}
        {/* REALISTIC VERTICAL TOWER CRANE MAST (POLE)                */}
        {/* Extends from slewing turntable down to ground foundation  */}
        {/* ========================================================= */}
        <div
          className="absolute left-[6%] sm:left-[11%] lg:left-[14%] top-20 bottom-8 w-12 sm:w-16 pointer-events-none z-0 flex flex-col items-center"
          aria-hidden="true"
        >
          {/* Top connection flange joining turntable to mast */}
          <div className="w-14 sm:w-20 h-4 bg-slate-800 rounded-sm border border-slate-900 shadow-md flex items-center justify-around px-1">
            <div className="w-1.5 h-1.5 rounded-full bg-cta" />
            <div className="w-1.5 h-1.5 rounded-full bg-cta" />
            <div className="w-1.5 h-1.5 rounded-full bg-cta" />
          </div>

          {/* Continuous steel lattice tower mast column */}
          <svg
            className="w-full h-full text-primary-700/85 overflow-visible"
            viewBox="0 0 60 700"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Left and right vertical structural corner chords */}
            <line x1="6" y1="0" x2="6" y2="700" stroke="#0d6efd" strokeWidth="4" />
            <line x1="54" y1="0" x2="54" y2="700" stroke="#0d6efd" strokeWidth="4" />

            {/* Center service/ladder spine */}
            <line x1="30" y1="0" x2="30" y2="700" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Repeating X-lattice and horizontal truss cross braces */}
            {Array.from({ length: 24 }, (_, i) => {
              const yTop = i * 30;
              const yBottom = yTop + 30;
              return (
                <g key={i}>
                  {/* Horizontal strut tie */}
                  <line x1="6" y1={yTop} x2="54" y2={yTop} stroke="#0b5ed7" strokeWidth="2" />
                  {/* Diagonal X-cross braces */}
                  <line x1="6" y1={yTop} x2="54" y2={yBottom} stroke="#f59e0b" strokeWidth="1.8" strokeOpacity="0.8" />
                  <line x1="54" y1={yTop} x2="6" y2={yBottom} stroke="#f59e0b" strokeWidth="1.8" strokeOpacity="0.8" />
                  {/* Joint node gusset plates */}
                  <circle cx="6" cy={yTop} r="2.5" fill="#052559" />
                  <circle cx="54" cy={yTop} r="2.5" fill="#052559" />
                </g>
              );
            })}

            {/* Mast climbing collar cage near top */}
            <rect x="2" y="50" width="56" height="42" fill="#052559" fillOpacity="0.12" stroke="#0d6efd" strokeWidth="2" rx="2" />
            <line x1="2" y1="71" x2="58" y2="71" stroke="#0d6efd" strokeWidth="1.5" />
          </svg>

          {/* Heavy concrete ballasted base foundation at ground level */}
          <div className="w-16 sm:w-24 h-8 bg-slate-300 border-2 border-slate-400 rounded-sm shadow-md flex flex-col items-center justify-center -mt-1">
            <span className="font-mono text-[8px] font-bold text-slate-700 uppercase tracking-tighter">
              BALLAST_24T
            </span>
            <div className="flex gap-2 mt-0.5">
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span className="w-1 h-1 rounded-full bg-slate-600" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ========================================================= */}
          {/* TOWER CRANE HEADER & JIB BOOM ASSEMBLY                    */}
          {/* ========================================================= */}
          <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
            {/* Top Crane Jib Status & Telemetry Bar */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-slate-600 pb-2 border-b border-slate-300/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cta animate-ping" />
                <span className="font-bold text-slate-900 uppercase tracking-wider">
                  TOWER_CRANE_01 // RIYADH_ACTIVE
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-slate-500">
                <span>BOOM_REACH: 65.0M</span>
                <span>MAST_HEIGHT: 72.0M</span>
                <span>MAX_LOAD: 12.5T</span>
                <span className="text-cta font-bold">STATUS: HOISTING</span>
              </div>
            </div>

            {/* Industrial Crane Horizontal Truss Jib + Cathead Apex */}
            <div className="relative w-full h-16 flex items-center justify-center mt-1">
              <svg
                viewBox="0 0 1000 50"
                className="w-full h-full text-slate-700"
                fill="none"
              >
                {/* Triangular Tower Cathead / Apex above turntable */}
                <polygon points="190,46 220,4 250,46" fill="#0d6efd" fillOpacity="0.15" stroke="#0d6efd" strokeWidth="2.5" />
                <line x1="220" y1="4" x2="220" y2="46" stroke="#0d6efd" strokeWidth="2" strokeDasharray="3 2" />

                {/* Guy-wire tension pendants from apex to counter-jib and working jib */}
                <line x1="220" y1="4" x2="50" y2="22" stroke="#475569" strokeWidth="1.8" strokeDasharray="4 2" />
                <line x1="220" y1="4" x2="540" y2="22" stroke="#475569" strokeWidth="1.8" strokeDasharray="4 2" />

                {/* Slewing turntable unit joining mast top to upper structure */}
                <rect x="202" y="44" width="36" height="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" rx="1" />

                {/* Operator Cabin */}
                <rect x="238" y="24" width="24" height="22" fill="#0f172a" stroke="#0d6efd" strokeWidth="1.5" rx="2" />
                <circle cx="250" cy="33" r="3.5" fill="#38bdf8" />

                {/* Counterweight Block on Left */}
                <rect x="24" y="16" width="66" height="24" fill="#052559" stroke="#0d6efd" strokeWidth="1.5" rx="2" />
                <text x="32" y="32" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  CW-8T
                </text>

                {/* Horizontal Boom Rails */}
                <line x1="20" y1="20" x2="980" y2="20" stroke="#0d6efd" strokeWidth="2.5" />
                <line x1="20" y1="36" x2="980" y2="36" stroke="#0d6efd" strokeWidth="2.5" />

                {/* Diagonal Lattice Bracing on working boom */}
                {Array.from({ length: 32 }, (_, i) => (
                  <line
                    key={i}
                    x1={30 + i * 30}
                    y1={i % 2 === 0 ? 20 : 36}
                    x2={60 + i * 30}
                    y2={i % 2 === 0 ? 36 : 20}
                    stroke="#f59e0b"
                    strokeWidth="1.4"
                    strokeOpacity="0.85"
                  />
                ))}

                {/* Central Hoist Trolley positioned at 50% */}
                <rect x="480" y="34" width="40" height="12" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" rx="2" />
                <circle cx="492" cy="40" r="2.5" fill="#0f172a" />
                <circle cx="508" cy="40" r="2.5" fill="#0f172a" />
              </svg>
            </div>

            {/* Dual Steel Hoist Cables & Heavy Hook Assembly */}
            <div className="relative w-full flex flex-col items-center pointer-events-none">
              {/* Twin Hoist Cable Lines stretching dynamically */}
              <m.div
                style={{ height: cableHeight }}
                className="w-8 flex justify-between px-2 items-stretch"
              >
                <div className="w-[2px] bg-gradient-to-b from-cta via-slate-600 to-slate-800 shadow-sm" />
                <div className="w-[2px] bg-gradient-to-b from-cta via-slate-600 to-slate-800 shadow-sm" />
              </m.div>

              {/* Crane Hook Block Assembly */}
              <m.div style={{ y: hookY }} className="flex flex-col items-center">
                {/* Pulley Sheave Block */}
                <div className="w-10 h-8 rounded bg-slate-900 border-2 border-cta flex items-center justify-center shadow-xl">
                  <div className="w-3.5 h-3.5 rounded-full bg-cta flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  </div>
                </div>
                {/* Heavy Forged Crane Hook */}
                <svg width="26" height="30" viewBox="0 0 24 28" fill="none">
                  <path
                    d="M 12 0 L 12 8 C 12 16, 4 16, 4 20 C 4 24, 16 26, 20 20 C 22 17, 20 12, 17 12"
                    stroke="#f59e0b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </m.div>

              {/* Rigging Slings expanding outward to the 2 structural corner lugs */}
              <div className="w-full max-w-2xl h-8 relative mt-1">
                <svg viewBox="0 0 600 32" className="w-full h-full text-cta/80" fill="none">
                  {/* Left rigging wire */}
                  <line x1="300" y1="2" x2="40" y2="30" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
                  {/* Right rigging wire */}
                  <line x1="300" y1="2" x2="560" y2="30" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
                  {/* Rigging shackles */}
                  <circle cx="40" cy="30" r="3.5" fill="#f59e0b" stroke="#0f172a" strokeWidth="1" />
                  <circle cx="560" cy="30" r="3.5" fill="#f59e0b" stroke="#0f172a" strokeWidth="1" />
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
            className="w-full max-w-5xl mx-auto transition-shadow duration-300 relative z-10"
          >
            {/* Structural Rigging Shackle Mounts on Top Edge */}
            <div className="flex justify-between px-8 sm:px-16 -mb-2 relative z-20 pointer-events-none">
              <div className="px-3 py-1 bg-cta text-black font-mono font-bold text-[10px] rounded-t uppercase shadow-md">
                ⚓ LUG_LEFT // RIG_LOCKED
              </div>
              <div className="px-3 py-1 bg-cta text-black font-mono font-bold text-[10px] rounded-t uppercase shadow-md">
                ⚓ LUG_RIGHT // RIG_LOCKED
              </div>
            </div>

            {/* Main Section Card Being Hoisted: Crisp White Card */}
            <div className="relative rounded-2xl bg-white border-2 border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-xl">
              {/* Construction Crane Watermark Pattern */}
              <div className="absolute top-4 right-6 font-mono text-xs text-primary-600/40 uppercase tracking-widest pointer-events-none">
                [SECTION_MODULE_01 // ACTIVE_LIFT]
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Scope & Headline (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-mono font-semibold">
                    <FaHardHat className="text-cta" />
                    <span>Heavy Crane & Structural Assembly</span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
                    Engineered from Ground to <span className="text-primary-600">Pinnacle.</span>
                  </h2>

                  <p className="font-display text-sm sm:text-base text-amber-600 font-semibold tracking-wide">
                    {subtitle}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We mobilize specialized heavy plant, crane rigging teams, and precision alignment lasers to erect high-tolerance curtain wall cassettes, structural steel trusses, and pre-cast concrete modules across Riyadh.
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
                      variant="outline"
                      size="md"
                      icon={FaArrowRight}
                      iconPosition="right"
                    >
                      View All Scopes
                    </Button>
                  </div>
                </div>

                {/* Right Column: Key Technical Specs Box (5 cols) */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-xl p-6 space-y-4 shadow-sm">
                  <span className="font-mono text-xs text-primary-700 uppercase tracking-widest block pb-2 border-b border-slate-200 font-bold">
                    Rigging & Lifting Tolerances
                  </span>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                      <span className="text-slate-500">Façade Alignment:</span>
                      <span className="text-slate-900 font-bold">± 1.5mm Precision</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                      <span className="text-slate-500">Structural Steel:</span>
                      <span className="text-slate-900 font-bold">A36 / S355 Certified</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                      <span className="text-slate-500">Safety Standards:</span>
                      <span className="text-emerald-700 font-bold">SBC & OSHA Compliant</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-500">Site Location:</span>
                      <span className="text-primary-700 font-bold">Riyadh Metropolitan</span>
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
