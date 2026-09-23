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
  // Crane hook and cables lower dynamically as the user scrolls, hoisting the structural card upward
  const liftY = useTransform(scrollYProgress, [0, 0.45, 1], [150, 60, 0]);
  const cableHeight = useTransform(scrollYProgress, [0, 0.45, 1], [190, 115, 75]);
  const hookY = useTransform(scrollYProgress, [0, 0.45, 1], [115, 55, 12]);
  const rotateSway = useTransform(scrollYProgress, [0, 0.5, 1], [-1.2, 0.6, 0]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        className="relative w-full bg-[#fafafa] text-slate-800 overflow-hidden py-16 sm:py-24 border-t border-b border-slate-200 max-w-full"
      >
        {/* Background architectural blueprint grid on #fafafa */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-blueprint-lines opacity-40" />
          <div className="absolute inset-0 bg-steel-truss opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* ========================================================================= */}
        {/* 1. HEAVY INDUSTRIAL TOWER CRANE VERTICAL MAST (POLE)                      */}
        {/* Positioned FLUSH on the starting left (left-0) without any padding/space   */}
        {/* ========================================================================= */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 z-10 pointer-events-none flex flex-col justify-between"
          aria-hidden="true"
        >
          {/* Top Slew-Ring Flange Mount directly beneath turntable */}
          <div className="w-full h-8 bg-slate-900 border-r-2 border-b-2 border-slate-950 flex items-center justify-between px-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cta animate-ping" />
            <span className="font-mono text-[9px] font-black text-cta tracking-tighter uppercase">
              MAST_01
            </span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </div>
          </div>

          {/* Continuous Heavy Steel Lattice Mast (SVG Column) */}
          <div className="flex-1 w-full relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 80 800"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Outer vertical tubular steel chords (Liebherr Industrial Safety Yellow) */}
              <line x1="12" y1="0" x2="12" y2="800" stroke="#f59e0b" strokeWidth="6" />
              <line x1="68" y1="0" x2="68" y2="800" stroke="#f59e0b" strokeWidth="6" />

              {/* Structural shadow lines on chords */}
              <line x1="9" y1="0" x2="9" y2="800" stroke="#b45309" strokeWidth="1.5" />
              <line x1="65" y1="0" x2="65" y2="800" stroke="#b45309" strokeWidth="1.5" />

              {/* Center safety ladder column */}
              <line x1="40" y1="0" x2="40" y2="800" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />

              {/* Repeating K-Truss & Double X-Lattice Steel Sections */}
              {Array.from({ length: 25 }, (_, i) => {
                const yTop = i * 32;
                const yBottom = yTop + 32;
                const yMid = yTop + 16;
                return (
                  <g key={i}>
                    {/* Horizontal strut tie */}
                    <line x1="12" y1={yTop} x2="68" y2={yTop} stroke="#0f172a" strokeWidth="3" />
                    {/* Diagonal X-cross lattice members */}
                    <line x1="12" y1={yTop} x2="68" y2={yBottom} stroke="#d97706" strokeWidth="2.5" />
                    <line x1="68" y1={yTop} x2="12" y2={yBottom} stroke="#d97706" strokeWidth="2.5" />
                    {/* Mid-lattice tie */}
                    <line x1="12" y1={yMid} x2="68" y2={yMid} stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.7" />
                    {/* Joint gusset plates & heavy high-tensile connection bolts */}
                    <circle cx="12" cy={yTop} r="3.5" fill="#0f172a" />
                    <circle cx="68" cy={yTop} r="3.5" fill="#0f172a" />
                    <circle cx="12" cy={yTop} r="1.5" fill="#fbbf24" />
                    <circle cx="68" cy={yTop} r="1.5" fill="#fbbf24" />
                  </g>
                );
              })}

              {/* Telescopic Hydraulic Climbing Cage Unit (Tower Jacking Frame) */}
              <g transform="translate(0, 140)">
                <rect x="4" y="0" width="72" height="64" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" rx="2" />
                <rect x="8" y="6" width="64" height="12" fill="#f59e0b" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="1" />
                <text x="14" y="15" fill="#fbbf24" fontSize="8" fontFamily="monospace" fontWeight="bold">
                  CLIMB_UNIT
                </text>
                {/* Hydraulic Rams */}
                <line x1="16" y1="20" x2="16" y2="56" stroke="#38bdf8" strokeWidth="3.5" />
                <line x1="64" y1="20" x2="64" y2="56" stroke="#38bdf8" strokeWidth="3.5" />
                <circle cx="40" cy="38" r="7" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                <circle cx="40" cy="38" r="3" fill="#38bdf8" />
              </g>
            </svg>
          </div>

          {/* Heavy Concrete Ballast Foundation & Outrigger Anchors at Base */}
          <div className="w-full bg-slate-900 border-r-2 border-t-2 border-slate-950 p-2 shadow-2xl flex flex-col items-center">
            <div className="w-full h-5 bg-amber-500 rounded flex items-center justify-center font-mono text-[9px] font-black text-black uppercase tracking-wider mb-1">
              BASE_36T
            </div>
            <div className="w-full grid grid-cols-2 gap-1 text-[8px] font-mono text-slate-400 text-center">
              <span className="bg-slate-800 rounded px-0.5">SBC-OK</span>
              <span className="bg-slate-800 rounded px-0.5 text-cta font-bold">LOCKED</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TOP HORIZONTAL CRANE JIB, MODERN CABIN & TROLLEY HOIST ASSEMBLY         */}
        {/* Spans across the top, lifting the structural module                       */}
        {/* ========================================================================= */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-18 sm:pl-24 lg:pl-28">
          {/* Telemetry Header Bar */}
          <div className="w-full max-w-5xl mx-auto flex items-center justify-between text-xs font-mono text-slate-700 pb-2 mb-2 border-b border-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cta animate-ping" />
              <span className="font-extrabold text-slate-900 uppercase tracking-wider">
                LIEBHERR_280_EC // SITE_OPERATION_RIYADH
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-5 text-slate-500 text-[11px]">
              <span>BOOM: 68.0M</span>
              <span>HOOK_RADIUS: 34.5M</span>
              <span>CAPACITY: 12,500 KG</span>
              <span className="text-amber-600 font-bold bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                ACTIVE_HOIST
              </span>
            </div>
          </div>

          {/* High-Tech Industrial Tower Crane Structure (Jib + Apex + Modern Cab + Counterweights) */}
          <div className="relative w-full max-w-5xl mx-auto h-24 flex items-center justify-center">
            <svg
              viewBox="0 0 1000 90"
              className="w-full h-full overflow-visible"
              fill="none"
            >
              {/* Pattern: Safety Hazard Stripes for Hook & Slewing Deck */}
              <defs>
                <pattern id="hazard-stripes" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="6" height="12" fill="#f59e0b" />
                  <rect x="6" width="6" height="12" fill="#0f172a" />
                </pattern>
                <linearGradient id="cabin-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#0284c7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              {/* ------------------------------------------------------------- */}
              {/* A. COUNTER-JIB & HEAVY BALLAST BLOCKS (LEFT SIDE)             */}
              {/* ------------------------------------------------------------- */}
              {/* Counter-jib truss beams */}
              <line x1="20" y1="48" x2="140" y2="48" stroke="#0f172a" strokeWidth="4" />
              <line x1="20" y1="62" x2="140" y2="62" stroke="#0f172a" strokeWidth="4" />
              {/* Counter-jib lattice */}
              {Array.from({ length: 4 }, (_, i) => (
                <line
                  key={i}
                  x1={25 + i * 28}
                  y1={i % 2 === 0 ? 48 : 62}
                  x2={53 + i * 28}
                  y2={i % 2 === 0 ? 62 : 48}
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                />
              ))}

              {/* Cast concrete counterweight ballast slabs */}
              <rect x="18" y="38" width="58" height="28" fill="#1e293b" stroke="#0f172a" strokeWidth="2" rx="2" />
              <rect x="22" y="42" width="50" height="20" fill="#334155" stroke="#f59e0b" strokeWidth="1" />
              <text x="26" y="55" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">
                18.5T BALLAST
              </text>

              {/* ------------------------------------------------------------- */}
              {/* B. SLEWING TURNTABLE & TOWER APEX (CATHEAD)                   */}
              {/* ------------------------------------------------------------- */}
              {/* Slewing turntable assembly ring */}
              <rect x="120" y="58" width="48" height="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" rx="2" />
              <rect x="124" y="61" width="40" height="4" fill="url(#hazard-stripes)" />

              {/* Cathead Tower Peak (Triangular A-Frame Apex) */}
              <polygon points="122,58 144,6 166,58" fill="#0f172a" stroke="#f59e0b" strokeWidth="3" />
              <line x1="144" y1="6" x2="144" y2="58" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="144" cy="6" r="3" fill="#ef4444" /> {/* Red Aviation Obstruction Beacon */}

              {/* High-tensile steel wire pendants from apex to counter-jib and working jib */}
              <line x1="144" y1="6" x2="35" y2="44" stroke="#475569" strokeWidth="2.5" />
              <line x1="144" y1="6" x2="480" y2="48" stroke="#475569" strokeWidth="2.5" strokeDasharray="6 3" />
              <line x1="144" y1="6" x2="780" y2="48" stroke="#475569" strokeWidth="2" strokeDasharray="8 4" />

              {/* ------------------------------------------------------------- */}
              {/* C. MODERN ERGONOMIC OPERATOR CABIN WITH WALKWAY               */}
              {/* ------------------------------------------------------------- */}
              {/* Exterior Access Walkway with Safety Railing */}
              <line x1="164" y1="66" x2="204" y2="66" stroke="#f59e0b" strokeWidth="3" />
              <line x1="168" y1="56" x2="204" y2="56" stroke="#f59e0b" strokeWidth="1.5" />
              <line x1="174" y1="56" x2="174" y2="66" stroke="#f59e0b" strokeWidth="1.5" />
              <line x1="194" y1="56" x2="194" y2="66" stroke="#f59e0b" strokeWidth="1.5" />

              {/* Streamlined Operator Cab Body */}
              <rect x="166" y="38" width="34" height="26" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" rx="4" />
              {/* Panoramic Front Glass with pilot silhouette */}
              <path d="M 180 40 L 198 40 Q 199 50 198 62 L 180 62 Z" fill="url(#cabin-glass)" stroke="#38bdf8" strokeWidth="1" />
              <circle cx="186" cy="48" r="3" fill="#0f172a" />
              <rect x="184" y="52" width="5" height="7" fill="#0f172a" rx="1" />

              {/* ------------------------------------------------------------- */}
              {/* D. WORKING JIB BOOM (EXTENDS FULL WIDTH ACROSS)               */}
              {/* ------------------------------------------------------------- */}
              {/* Top main chord */}
              <line x1="160" y1="46" x2="980" y2="46" stroke="#0f172a" strokeWidth="3.5" />
              {/* Bottom trolley rail chords */}
              <line x1="160" y1="64" x2="980" y2="64" stroke="#0f172a" strokeWidth="3.5" />

              {/* High-Precision Triangular Lattice Truss Webbing */}
              {Array.from({ length: 27 }, (_, i) => {
                const x1 = 165 + i * 30;
                const x2 = x1 + 30;
                return (
                  <g key={i}>
                    <line
                      x1={x1}
                      y1={i % 2 === 0 ? 46 : 64}
                      x2={x2}
                      y2={i % 2 === 0 ? 64 : 46}
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                    {/* Vertical truss uprights */}
                    <line x1={x1} y1="46" x2={x1} y2="64" stroke="#d97706" strokeWidth="1.2" />
                  </g>
                );
              })}

              {/* Jib Tip with Aviation Warning Flasher */}
              <polygon points="980,46 995,55 980,64" fill="#f59e0b" stroke="#0f172a" strokeWidth="2" />
              <circle cx="995" cy="55" r="3.5" fill="#ef4444" className="animate-ping" />

              {/* ------------------------------------------------------------- */}
              {/* E. MOTORIZED HOIST TROLLEY (CENTERED AT X=500)                */}
              {/* ------------------------------------------------------------- */}
              <g transform="translate(470, 60)">
                {/* Trolley Frame on bottom rail */}
                <rect x="0" y="0" width="60" height="12" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" rx="2" />
                <rect x="4" y="2" width="52" height="4" fill="url(#hazard-stripes)" />
                {/* Guide Wheels */}
                <circle cx="10" cy="2" r="3" fill="#f59e0b" stroke="#0f172a" strokeWidth="1" />
                <circle cx="50" cy="2" r="3" fill="#f59e0b" stroke="#0f172a" strokeWidth="1" />
                {/* Cable Sheaves */}
                <circle cx="22" cy="11" r="3" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />
                <circle cx="38" cy="11" r="3" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />
              </g>
            </svg>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* F. TWIN HOIST CABLES, INDUSTRIAL HAZARD HOOK & RIGGING SLINGS     */}
          {/* Dynamic Motion transforms driven by scroll                        */}
          {/* ----------------------------------------------------------------- */}
          <div className="relative w-full flex flex-col items-center pointer-events-none -mt-4">
            {/* Twin Multi-Strand Wire Rope Cables */}
            <m.div
              style={{ height: cableHeight }}
              className="w-10 flex justify-between px-2 items-stretch"
            >
              <div className="w-[2.5px] bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 shadow-md" />
              <div className="w-[2.5px] bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 shadow-md" />
            </m.div>

            {/* Heavy-Duty German / Liebherr Style Crane Hook Block */}
            <m.div style={{ y: hookY }} className="flex flex-col items-center -mt-1">
              {/* Sheave Block with Safety Hazard Warning Stripes */}
              <div className="w-14 h-10 rounded-md bg-slate-900 border-2 border-slate-950 flex flex-col items-center justify-between p-1 shadow-2xl overflow-hidden relative">
                {/* Diagonal Safety Hazard Band */}
                <div
                  className="w-full h-3 rounded-sm shadow-inner"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #f59e0b, #f59e0b 6px, #0f172a 6px, #0f172a 12px)",
                  }}
                />
                {/* Heavy Swivel Bearing Ring */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-400 border border-slate-800 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-slate-900" />
                  </div>
                  <div className="w-3 h-3 rounded-full bg-slate-400 border border-slate-800 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-slate-900" />
                  </div>
                </div>
              </div>

              {/* Massive Forged Alloy Steel Swivel Crane Hook with Safety Snap Latch */}
              <svg width="34" height="42" viewBox="0 0 34 42" fill="none" className="-mt-1 drop-shadow-xl">
                {/* Hook Shank */}
                <rect x="14" y="0" width="6" height="8" fill="#1e293b" />
                {/* Forged Body */}
                <path
                  d="M 17 8 C 17 18, 6 20, 6 27 C 6 34, 20 38, 26 30 C 29 26, 28 20, 24 19"
                  stroke="#f59e0b"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Inner throat shadow */}
                <path
                  d="M 17 8 C 17 18, 6 20, 6 27 C 6 34, 20 38, 26 30"
                  stroke="#b45309"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                {/* Spring safety latch */}
                <line x1="17" y1="16" x2="24" y2="20" stroke="#cbd5e1" strokeWidth="2.5" />
              </svg>
            </m.div>

            {/* High-Strength 2-Leg Wire Rope Slings connecting to Hoisted Module */}
            <div className="w-full max-w-3xl h-10 relative mt-1">
              <svg viewBox="0 0 700 40" className="w-full h-full" fill="none">
                {/* Left rigging wire */}
                <line x1="350" y1="2" x2="50" y2="38" stroke="#0f172a" strokeWidth="3" strokeDasharray="5 2.5" />
                <line x1="350" y1="2" x2="50" y2="38" stroke="#f59e0b" strokeWidth="1.5" />
                {/* Right rigging wire */}
                <line x1="350" y1="2" x2="650" y2="38" stroke="#0f172a" strokeWidth="3" strokeDasharray="5 2.5" />
                <line x1="350" y1="2" x2="650" y2="38" stroke="#f59e0b" strokeWidth="1.5" />
                {/* Certified High-Tensile Rigging Shackles */}
                <circle cx="50" cy="38" r="4.5" fill="#f59e0b" stroke="#0f172a" strokeWidth="2" />
                <circle cx="650" cy="38" r="4.5" fill="#f59e0b" stroke="#0f172a" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 3. THE HOISTED STRUCTURAL SECTION (ANIMATED ON SCROLL)                    */}
          {/* Crisp, high-contrast white card lifting upward on scroll                   */}
          {/* ========================================================================= */}
          <m.div
            style={{
              y: liftY,
              rotate: rotateSway,
            }}
            className="w-full max-w-5xl mx-auto transition-shadow duration-300 relative z-10"
          >
            {/* Structural Rigging Shackle Mounts on Top Edge */}
            <div className="flex justify-between px-6 sm:px-14 -mb-2 relative z-20 pointer-events-none">
              <div className="px-3 py-1 bg-cta text-black font-mono font-extrabold text-[10px] rounded-t uppercase shadow-lg border-t border-x border-black/20 flex items-center gap-1.5">
                <span>⚓</span>
                <span>LUG_LEFT // RIG_LOCKED</span>
              </div>
              <div className="px-3 py-1 bg-cta text-black font-mono font-extrabold text-[10px] rounded-t uppercase shadow-lg border-t border-x border-black/20 flex items-center gap-1.5">
                <span>⚓</span>
                <span>LUG_RIGHT // RIG_LOCKED</span>
              </div>
            </div>

            {/* Main Section Card: Crisp White Structural Card */}
            <div className="relative rounded-2xl bg-white border-2 border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-xl">
              {/* Technical Watermark */}
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
