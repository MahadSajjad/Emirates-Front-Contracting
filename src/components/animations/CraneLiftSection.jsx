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

  // Physically linked cable shortening and constant height compensation:
  // As the user scrolls, the hoist cables shorten from 150px to 45px.
  // The hook block, slings, and card naturally rise 105px in direct physical flow.
  // The bottom spacer expands from 0px to 105px, keeping total section height strictly constant!
  const cableHeight = useTransform(scrollYProgress, [0, 1], [150, 45]);
  const bottomSpacer = useTransform(scrollYProgress, [0, 1], [0, 105]);
  const hookGlow = useTransform(scrollYProgress, [0, 0.85, 1], [0.4, 0.8, 1]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        className="relative w-full bg-[#fafafa] text-slate-800 overflow-hidden py-10 sm:py-16 border-t border-b border-slate-200 max-w-full"
      >
        {/* Background architectural blueprint grid on #fafafa */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-blueprint-lines opacity-35" />
          <div className="absolute inset-0 bg-steel-truss opacity-15" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* ========================================================================= */}
        {/* 1. HEAVY VERTICAL TOWER CRANE MAST (POLE)                                 */}
        {/* Hidden on mobile (hidden md:flex), flush left on desktop (left-0)         */}
        {/* ========================================================================= */}
        <div
          className="hidden md:flex absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 z-20 pointer-events-none flex-col justify-between"
          aria-hidden="true"
        >
          {/* Continuous Heavy Steel Lattice Mast Column */}
          <div className="flex-1 w-full relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 80 800"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Outer vertical tubular steel chords (Heavy Dark Steel) */}
              <line x1="14" y1="0" x2="14" y2="800" stroke="#1e293b" strokeWidth="6" />
              <line x1="66" y1="0" x2="66" y2="800" stroke="#1e293b" strokeWidth="6" />

              {/* Structural inner shadow flanges */}
              <line x1="11" y1="0" x2="11" y2="800" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="63" y1="0" x2="63" y2="800" stroke="#0f172a" strokeWidth="1.5" />

              {/* Center safety ladder column */}
              <line x1="40" y1="0" x2="40" y2="800" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />

              {/* Repeating K-Truss & Double X-Lattice Steel Sections */}
              {Array.from({ length: 25 }, (_, i) => {
                const yTop = i * 32;
                const yBottom = yTop + 32;
                const yMid = yTop + 16;
                return (
                  <g key={i}>
                    {/* Horizontal strut tie */}
                    <line x1="14" y1={yTop} x2="66" y2={yTop} stroke="#0f172a" strokeWidth="3" />
                    {/* Diagonal X-cross lattice members */}
                    <line x1="14" y1={yTop} x2="66" y2={yBottom} stroke="#334155" strokeWidth="2.5" />
                    <line x1="66" y1={yTop} x2="14" y2={yBottom} stroke="#334155" strokeWidth="2.5" />
                    {/* Mid-lattice tie */}
                    <line x1="14" y1={yMid} x2="66" y2={yMid} stroke="#475569" strokeWidth="1.5" strokeOpacity="0.7" />
                    {/* Joint gusset plates & bolts */}
                    <circle cx="14" cy={yTop} r="3.5" fill="#0f172a" />
                    <circle cx="66" cy={yTop} r="3.5" fill="#0f172a" />
                    <circle cx="14" cy={yTop} r="1.5" fill="#64748b" />
                    <circle cx="66" cy={yTop} r="1.5" fill="#64748b" />
                  </g>
                );
              })}

              {/* Telescopic Hydraulic Climbing Cage Unit */}
              <g transform="translate(0, 160)">
                <rect x="4" y="0" width="72" height="64" fill="#0f172a" stroke="#334155" strokeWidth="2.5" rx="2" />
                <rect x="8" y="6" width="64" height="12" fill="#1e293b" fillOpacity="0.5" stroke="#475569" strokeWidth="1" />
                <text x="12" y="15" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="bold">
                  CLIMB_UNIT
                </text>
                <line x1="16" y1="20" x2="16" y2="56" stroke="#60a5fa" strokeWidth="3.5" />
                <line x1="64" y1="20" x2="64" y2="56" stroke="#60a5fa" strokeWidth="3.5" />
                <circle cx="40" cy="38" r="7" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                <circle cx="40" cy="38" r="3" fill="#60a5fa" />
              </g>
            </svg>
          </div>

          {/* Heavy Concrete Ballast Foundation at Base */}
          <div className="w-full bg-slate-900 border-r-2 border-t-2 border-slate-950 p-2 shadow-2xl flex flex-col items-center">
            <div className="w-full h-5 bg-slate-800 border border-slate-700 rounded flex items-center justify-center font-mono text-[9px] font-bold text-slate-200 uppercase tracking-wider mb-1">
              BASE_36T
            </div>
            <div className="w-full grid grid-cols-2 gap-1 text-[8px] font-mono text-slate-400 text-center">
              <span className="bg-slate-800 rounded px-0.5">SBC-OK</span>
              <span className="bg-slate-800 rounded px-0.5 text-primary-400 font-bold">LOCKED</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HEAVY INDUSTRIAL WORKING BOOM (MASSIVE LATTICE TRUSS WITH HEAVY CHORDS)*/}
        {/* Physically connected at left-0 to the vertical mast, shooting dead-straight */}
        {/* ========================================================================= */}
        <div className="hidden md:block relative w-full z-20 pointer-events-none">
          <svg
            className="w-full h-auto block overflow-visible"
            viewBox="0 0 1400 92"
            fill="none"
          >
            {/* Pattern: Safety Technical Warning Stripes */}
            <defs>
              <pattern id="crane-hazard" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="6" height="12" fill="#334155" />
                <rect x="6" width="6" height="12" fill="#0f172a" />
              </pattern>
              <linearGradient id="cab-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* ------------------------------------------------------------- */}
            {/* A. SLEWING TURNTABLE JOINING VERTICAL MAST DIRECTLY AT LEFT   */}
            {/* Center at x=40 (the exact coordinates of the left mast!)      */}
            {/* ------------------------------------------------------------- */}
            {/* Turntable Bearing Ring */}
            <rect x="10" y="74" width="60" height="16" fill="#0f172a" stroke="#334155" strokeWidth="3" rx="2" />
            <rect x="14" y="78" width="52" height="8" fill="url(#crane-hazard)" />

            {/* Heavy A-Frame Tower Apex directly above mast */}
            <polygon points="10,74 40,6 70,74" fill="#0f172a" stroke="#334155" strokeWidth="4.5" />
            <line x1="40" y1="6" x2="40" y2="74" stroke="#475569" strokeWidth="3" strokeDasharray="4 4" />
            <circle cx="40" cy="6" r="5" fill="#ef4444" className="animate-ping" />

            {/* Heavy Counter-Jib projecting left with 32.5T Ballast Blocks */}
            <line x1="0" y1="24" x2="40" y2="24" stroke="#0f172a" strokeWidth="10" />
            <line x1="0" y1="84" x2="40" y2="84" stroke="#0f172a" strokeWidth="12" />
            <rect x="0" y="16" width="38" height="68" fill="#1e293b" stroke="#0f172a" strokeWidth="3" rx="2" />
            <rect x="2" y="20" width="34" height="12" fill="url(#crane-hazard)" />
            <text x="3" y="56" fill="#94a3b8" fontSize="9" fontFamily="monospace" fontWeight="bold">
              32.5T
            </text>
            <line x1="40" y1="6" x2="4" y2="16" stroke="#475569" strokeWidth="4" />

            {/* Modern Liebherr Operator Cabin directly next to slewing ring */}
            <rect x="70" y="20" width="42" height="42" fill="#0f172a" stroke="#334155" strokeWidth="3" rx="4" />
            <path d="M 86 22 L 110 22 Q 111 40 110 60 L 86 60 Z" fill="url(#cab-glass)" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="96" cy="36" r="3.5" fill="#0f172a" />
            <rect x="94" y="44" width="7" height="10" fill="#0f172a" rx="1" />
            <line x1="68" y1="70" x2="114" y2="70" stroke="#334155" strokeWidth="4" />

            {/* ------------------------------------------------------------- */}
            {/* B. ULTRA-HEAVY WORKING BOOM (DEEP 60PX HEAVY TRUSS CHORDS)    */}
            {/* ------------------------------------------------------------- */}
            {/* Top Main Chord (Heavy Steel Pipe with dual wall visual) */}
            <line x1="40" y1="24" x2="1390" y2="24" stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />
            <line x1="40" y1="24" x2="1390" y2="24" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

            {/* Internal Mid-Height Reinforcing Chord */}
            <line x1="40" y1="54" x2="1390" y2="54" stroke="#334155" strokeWidth="3.5" strokeDasharray="12 4" />

            {/* Bottom Main Chord / Heavy Flanged Trolley Runway Track */}
            <line x1="40" y1="84" x2="1390" y2="84" stroke="#0f172a" strokeWidth="14" strokeLinecap="round" />
            <line x1="40" y1="84" x2="1390" y2="84" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
            {/* Lower Runway Lip */}
            <line x1="40" y1="90" x2="1390" y2="90" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

            {/* Heavy Lattice Webbing (Diagonal Warren Struts + Vertical Compression Posts) */}
            {Array.from({ length: 42 }, (_, i) => {
              const x1 = 44 + i * 32;
              const x2 = x1 + 32;
              return (
                <g key={i}>
                  {/* Heavy Diagonal Struts */}
                  <line
                    x1={x1}
                    y1={i % 2 === 0 ? 24 : 84}
                    x2={x2}
                    y2={i % 2 === 0 ? 84 : 24}
                    stroke="#334155"
                    strokeWidth="5.5"
                  />
                  {/* Vertical Heavy Compression Post */}
                  <line x1={x1} y1="24" x2={x1} y2="84" stroke="#0f172a" strokeWidth="4" />
                  <line x1={x1} y1="24" x2={x1} y2="84" stroke="#475569" strokeWidth="2" />

                  {/* Industrial Heavy Connection Gusset Plates */}
                  <circle cx={x1} cy="24" r="5.5" fill="#0f172a" />
                  <circle cx={x1} cy="24" r="2.5" fill="#64748b" />
                  <circle cx={x1} cy="84" r="5.5" fill="#0f172a" />
                  <circle cx={x1} cy="84" r="2.5" fill="#64748b" />
                </g>
              );
            })}

            {/* Heavy High-Tensile Steel Guy-Wires from Apex to Boom */}
            <line x1="40" y1="6" x2="450" y2="24" stroke="#334155" strokeWidth="4" />
            <line x1="40" y1="6" x2="900" y2="24" stroke="#475569" strokeWidth="3.5" />

            {/* Boom Tip with Aviation Warning Flasher */}
            <polygon points="1388,24 1400,54 1388,84" fill="#334155" stroke="#0f172a" strokeWidth="4" />
            <circle cx="1400" cy="54" r="5" fill="#ef4444" className="animate-ping" />
          </svg>
        </div>

        {/* ========================================================================= */}
        {/* 3. CENTERED HOISTING AXIS: TROLLEY -> ROPES -> HOOK -> SLINGS -> CARD    */}
        {/* The Trolley, Ropes, Hook, Slings, and Card share the EXACT SAME centerline!*/}
        {/* The ropes are 100% DEAD-STRAIGHT vertical lines, dropping from the trolley */}
        {/* ========================================================================= */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pl-20 lg:pl-26 md:-mt-2.5">
          {/* Centralized Hoisting Column: Trolley -> Cables -> Hook Block -> Slings -> Card */}
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            {/* 1. Heavy Motorized Trolley on Boom Bottom Rail */}
            {/* Clamped directly to the horizontal pole runway rail with 0px space */}
            <div className="w-20 bg-slate-900 border-2 border-slate-950 rounded flex flex-col items-center justify-between shadow-xl relative z-30 pointer-events-none">
              {/* Boom Runway Clamping Rollers (Top of Trolley) */}
              <div className="hidden md:flex justify-between w-14 px-1 -mt-1.5 mb-0.5">
                <div className="w-3.5 h-2 rounded-t-sm bg-slate-700 border border-slate-950 shadow-sm" />
                <div className="w-3.5 h-2 rounded-t-sm bg-slate-700 border border-slate-950 shadow-sm" />
              </div>
              {/* Technical Stripes Band on Trolley */}
              <div
                className="w-full h-2 rounded-sm"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #334155, #334155 5px, #0f172a 5px, #0f172a 10px)",
                }}
              />
              {/* Cable Sheaves Outlets at bottom of Trolley */}
              <div className="w-10 flex justify-between px-1 -mb-1.5 mt-0.5">
                <div className="w-3 h-3 rounded-full bg-slate-400 border border-slate-900 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-slate-950" />
                </div>
                <div className="w-3 h-3 rounded-full bg-slate-400 border border-slate-900 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-slate-950" />
                </div>
              </div>
            </div>

            {/* 2. 100% DEAD-STRAIGHT VERTICAL HOIST CABLES */}
            {/* Shortens smoothly on scroll as the card is hoisted up */}
            <m.div
              style={{ height: cableHeight }}
              className="w-10 flex justify-between px-1.5 items-stretch pointer-events-none relative z-20"
            >
              <div className="w-[3.5px] bg-slate-900 shadow-sm" />
              <div className="w-[3.5px] bg-slate-900 shadow-sm" />
            </m.div>

            {/* 3. HEAVY-DUTY LIEBHERR HOOK BLOCK (DIRECTLY CONNECTED TO CABLES) */}
            {/* Overlaps cable ends by 1px so cables physically enter the sheaves with 0 gap */}
            <div className="flex flex-col items-center pointer-events-none relative z-20 -mt-1 mb-1">
              {/* Top Cable Entry Pulleys directly receiving the cables */}
              <div className="w-10 flex justify-between px-1.5 -mb-1 relative z-30">
                <div className="w-3 h-3 rounded-full bg-slate-300 border-2 border-slate-900 flex items-center justify-center shadow">
                  <div className="w-1 h-1 rounded-full bg-slate-950" />
                </div>
                <div className="w-3 h-3 rounded-full bg-slate-300 border-2 border-slate-900 flex items-center justify-center shadow">
                  <div className="w-1 h-1 rounded-full bg-slate-950" />
                </div>
              </div>

              {/* Main Dual-Sheave Hook Block Body with Technical Stripes */}
              <div className="w-18 h-12 rounded-lg bg-slate-900 border-2 border-slate-950 flex flex-col items-center justify-between p-1.5 shadow-2xl relative">
                <div
                  className="w-full h-4 rounded shadow-inner"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #334155, #334155 6px, #0f172a 6px, #0f172a 12px)",
                  }}
                />
                <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-400 border border-slate-800 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-400 border border-slate-800 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  </div>
                </div>
              </div>

              {/* Massive Forged Alloy Steel Swivel Crane Hook with Safety Latch */}
              <div className="relative z-20 flex justify-center pointer-events-none">
                <svg width="42" height="50" viewBox="0 0 34 42" fill="none" className="-mt-1 drop-shadow-2xl">
                  <rect x="14" y="0" width="6" height="8" fill="#1e293b" />
                  <path
                    d="M 17 8 C 17 18, 6 20, 6 27 C 6 34, 20 38, 26 30 C 29 26, 28 20, 24 19"
                    stroke="#1e293b"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 17 8 C 17 18, 6 20, 6 27 C 6 34, 20 38, 26 30"
                    stroke="#64748b"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line x1="17" y1="16" x2="24" y2="20" stroke="#cbd5e1" strokeWidth="2.5" />
                </svg>
              </div>

              {/* Perfectly Straight, Symmetrical Rigging Wire Slings */}
              {/* Overlaps hook by -mt-[28px] so the master rigging link loops directly inside the hook throat */}
              <div className="w-full max-w-3xl h-10 relative -mt-[28px] z-10">
                <svg viewBox="0 0 700 40" className="w-full h-full overflow-visible" fill="none">
                  {/* Heavy Steel Master Rigging O-Ring looped in hook bowl */}
                  <circle cx="350" cy="8" r="8" fill="none" stroke="#0f172a" strokeWidth="4.5" />
                  <circle cx="350" cy="8" r="8" fill="none" stroke="#64748b" strokeWidth="2" />

                  {/* Left rigging wire */}
                  <line x1="344" y1="12" x2="60" y2="38" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="344" y1="12" x2="60" y2="38" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 3" />
                  {/* Right rigging wire */}
                  <line x1="356" y1="12" x2="640" y2="38" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="356" y1="12" x2="640" y2="38" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 3" />
                  {/* High-Tensile Certified Shackles at attachment points */}
                  <circle cx="60" cy="38" r="5" fill="#334155" stroke="#0f172a" strokeWidth="2" />
                  <circle cx="640" cy="38" r="5" fill="#334155" stroke="#0f172a" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* 4. Symmetrical Structural Rigging Mounts & Main Section Card */}
            <div className="w-full relative z-10 transition-shadow duration-300">
              {/* Symmetrical Structural Rigging Mounts on Top Edge of Card */}
              <div className="flex justify-between px-3 sm:px-14 -mb-2 relative z-20 pointer-events-none">
                <div className="px-2 sm:px-3.5 py-1 bg-slate-900 text-slate-200 font-mono font-extrabold text-[9px] sm:text-[10px] rounded-t uppercase shadow-lg border-t border-x border-slate-700 flex items-center gap-1 sm:gap-1.5">
                  <span>⚓</span>
                  <span>LUG_L<span className="hidden sm:inline">EFT // RIG_LOCKED</span></span>
                </div>
                <div className="px-2 sm:px-3.5 py-1 bg-slate-900 text-slate-200 font-mono font-extrabold text-[9px] sm:text-[10px] rounded-t uppercase shadow-lg border-t border-x border-slate-700 flex items-center gap-1 sm:gap-1.5">
                  <span>⚓</span>
                  <span>LUG_R<span className="hidden sm:inline">IGHT // RIG_LOCKED</span></span>
                </div>
              </div>

              {/* Main Section Card: Crisp White Structural Card */}
              <div className="relative rounded-2xl bg-white border-2 border-slate-200/90 p-5 sm:p-10 lg:p-14 shadow-2xl backdrop-blur-xl">
                {/* Technical Watermark */}
                <div className="hidden md:block absolute top-4 right-6 font-mono text-xs text-slate-400 uppercase tracking-widest pointer-events-none">
                  [SECTION_MODULE_01 // ACTIVE_LIFT]
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Left Column: Scope & Headline (7 cols) */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold">
                      <FaHardHat className="text-slate-600" />
                      <span>Heavy Crane & Structural Assembly</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
                      Engineered from Ground to Pinnacle.
                    </h2>

                    <p className="font-display text-xs sm:text-base text-slate-600 font-medium tracking-wide">
                      {subtitle}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                      We mobilize specialized heavy plant, crane rigging teams, and precision alignment lasers to erect high-tolerance curtain wall cassettes, structural steel trusses, and pre-cast concrete modules across Riyadh.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      <Button
                        href={whatsappUrl}
                        variant="cta"
                        size="md"
                        icon={FaWhatsapp}
                        iconPosition="left"
                        className="font-bold w-full sm:w-auto"
                      >
                        Inquire via WhatsApp
                      </Button>
                      <Button
                        to="/services"
                        variant="outline"
                        size="md"
                        icon={FaArrowRight}
                        iconPosition="right"
                        className="w-full sm:w-auto"
                      >
                        View All Scopes
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Key Technical Specs Box (5 cols) */}
                  <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-sm">
                    <span className="font-mono text-xs text-slate-900 uppercase tracking-widest block pb-2 border-b border-slate-200 font-bold">
                      Rigging & Lifting Tolerances
                    </span>

                    <div className="space-y-2.5 sm:space-y-3 text-xs font-mono">
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
                        <span className="text-slate-900 font-bold">SBC & OSHA Compliant</span>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-slate-500">Site Location:</span>
                        <span className="text-slate-900 font-bold">Riyadh Metropolitan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Compensatory Bottom Spacer: Maintains strictly constant section height */}
            <m.div style={{ height: bottomSpacer }} className="w-full pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default CraneLiftSection;
