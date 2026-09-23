import React, { useEffect, useRef, useState } from "react";

/**
 * ConstructionInfinityLoop Component
 * Renders an animated Infinity symbol (∞) composed of discrete construction blocks/cubes.
 * Blocks continuously assemble one-by-one from the left loop, travel across the structural circuit,
 * and disassemble/remove from the opposite side in a perpetual construction cycle.
 */
export const ConstructionInfinityLoop = ({
  className = "",
  totalBlocks = 36,
  visibleSpan = 24, // How many blocks are visible concurrently in the build wave
  speed = 0.003,
  width = 640,
  height = 320,
  colorScheme = "lightBlue", // 'lightBlue' | 'amber' | 'mixed'
}) => {
  const [offset, setOffset] = useState(0);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => (prev + speed) % 1);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [speed]);

  // Lemniscate of Bernoulli parametric equations for infinity symbol:
  // x(t) = a * cos(t) / (1 + sin^2(t))
  // y(t) = a * sin(t) * cos(t) / (1 + sin^2(t))
  const getInfinityPoint = (t, a = 220, b = 110) => {
    const angle = t * 2 * Math.PI;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const denom = 1 + sin * sin;

    const x = (a * cos) / denom + width / 2;
    const y = (b * sin * cos) / denom + height / 2;

    // Calculate tangent angle for block orientation
    const dt = 0.01;
    const nextAngle = (t + dt) * 2 * Math.PI;
    const nextSin = Math.sin(nextAngle);
    const nextCos = Math.cos(nextAngle);
    const nextDenom = 1 + nextSin * nextSin;
    const nextX = (a * nextCos) / nextDenom + width / 2;
    const nextY = (b * nextSin * nextCos) / nextDenom + height / 2;

    const rotation = (Math.atan2(nextY - y, nextX - x) * 180) / Math.PI;

    return { x, y, rotation };
  };

  // Generate blocks array with staggered assembly / disassembly lifecycle
  const blocks = Array.from({ length: totalBlocks }, (_, i) => {
    const baseProgress = i / totalBlocks;
    const currentProgress = (baseProgress + offset) % 1;

    // Visibility curve: creates the "adding one by one from one side, removing from other side" effect
    // As offset moves, a block transitions: entering (assembling) -> full structure -> exiting (removing)
    const phase = (i / totalBlocks + offset * 1.5) % 1;
    const isAssembling = phase < 0.25;
    const isDisassembling = phase > 0.75;
    const isSolid = !isAssembling && !isDisassembling;

    let opacity = 1;
    let scale = 1;

    if (isAssembling) {
      opacity = Math.max(0.15, phase / 0.25);
      scale = 0.5 + 0.5 * (phase / 0.25);
    } else if (isDisassembling) {
      opacity = Math.max(0, 1 - (phase - 0.75) / 0.25);
      scale = 1 - 0.6 * ((phase - 0.75) / 0.25);
    }

    const { x, y, rotation } = getInfinityPoint(currentProgress);

    return {
      id: i,
      x,
      y,
      rotation,
      opacity,
      scale,
      isLeader: i === Math.floor(((offset * 2) % 1) * totalBlocks),
    };
  });

  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full max-w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon Light Blue & Amber Glow Filters */}
          <filter id="blockGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="infinityTrackGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="cubeGradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          <linearGradient id="cubeGradientAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        {/* Blueprint Guide Rails (Ghost Lemniscate Curve) */}
        <path
          d={`M ${width / 2} ${height / 2} 
             C ${width / 2 + 150} ${height / 2 - 120}, ${width / 2 + 250} ${height / 2 + 120}, ${width / 2} ${height / 2}
             C ${width / 2 - 150} ${height / 2 - 120}, ${width / 2 - 250} ${height / 2 + 120}, ${width / 2} ${height / 2}`}
          stroke="url(#infinityTrackGrad)"
          strokeWidth="2"
          strokeDasharray="4 6"
          className="opacity-40"
        />

        {/* Technical Axis Crosshairs */}
        <g className="text-primary-300 opacity-25">
          <line x1={width / 2} y1={height / 2 - 30} x2={width / 2} y2={height / 2 + 30} stroke="currentColor" strokeWidth="1" />
          <line x1={width / 2 - 30} y1={height / 2} x2={width / 2 + 30} y2={height / 2} stroke="currentColor" strokeWidth="1" />
          <circle cx={width / 2} cy={height / 2} r="4" stroke="currentColor" strokeWidth="1" />
        </g>

        {/* Sequential Construction Blocks */}
        {blocks.map((b) => {
          const isAmberAccent = b.id % 6 === 0;

          return (
            <g
              key={b.id}
              transform={`translate(${b.x}, ${b.y}) rotate(${b.rotation}) scale(${b.scale})`}
              opacity={b.opacity}
              className="transition-transform duration-75 ease-linear"
            >
              {/* Isometric 3D Construction Block / Modular Concrete Cube */}
              <g transform="translate(-10, -10)">
                {/* Top face */}
                <polygon
                  points="10,0 20,5 10,10 0,5"
                  fill={isAmberAccent ? "#fef08a" : "#bae6fd"}
                  stroke={isAmberAccent ? "#f59e0b" : "#38bdf8"}
                  strokeWidth="0.8"
                />
                {/* Left face */}
                <polygon
                  points="0,5 10,10 10,20 0,15"
                  fill={isAmberAccent ? "#f59e0b" : "#0284c7"}
                  stroke={isAmberAccent ? "#d97706" : "#0369a1"}
                  strokeWidth="0.8"
                />
                {/* Right face */}
                <polygon
                  points="10,10 20,5 20,15 10,20"
                  fill={isAmberAccent ? "#d97706" : "#0369a1"}
                  stroke={isAmberAccent ? "#b45309" : "#075985"}
                  strokeWidth="0.8"
                />

                {/* Construction Spec Coordinate Dot on Leader Block */}
                {b.isLeader && (
                  <circle cx="10" cy="10" r="3" fill="#f59e0b" filter="url(#blockGlow)" />
                )}
              </g>
            </g>
          );
        })}

        {/* Dynamic Construction Assembly Nodes (End indicators) */}
        <g className="font-mono text-[10px] fill-primary-400 opacity-60">
          <text x="40" y="30" letterSpacing="1.5">
            [BUILD_VECTOR: ∞_FLOW]
          </text>
          <text x={width - 150} y={height - 20} letterSpacing="1.5">
            [STRUCTURAL_CYCLE: ACTIVE]
          </text>
        </g>
      </svg>
    </div>
  );
};

export default ConstructionInfinityLoop;
