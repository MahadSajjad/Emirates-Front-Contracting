import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { StaggerContainer, StaggerItem } from "../motion/Reveal.jsx";
import { sectors } from "../../data/sectors.js";

export const SectorsPreview = () => {
  return (
    <Section variant="white" padding="default" className="relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-cta uppercase tracking-widest block mb-2">
              Market Sectors
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-primary">
              Industry <span className="text-cta">Capabilities</span>
            </h2>
            <p className="font-display text-sm sm:text-base text-muted font-medium mt-1">
              القطاعات والمشاريع المستهدفة بالمملكة
            </p>
          </div>

          <Link
            to="/sectors"
            className="group inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-primary hover:text-cta transition-colors shrink-0"
          >
            <span>Explore All Sectors</span>
            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sectors.map((sector, index) => (
            <StaggerItem key={sector.id}>
              <div className="group h-full bg-white border border-slate-200/80 rounded-xl p-5 sm:p-8 hover-lift hover:border-cta/50 shadow-sm flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
                    <span className="font-mono text-xs text-cta uppercase tracking-widest font-bold">
                      Sector 0{index + 1}
                    </span>
                    <span className="font-display text-xs text-muted font-medium">
                      {sector.titleAr}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary group-hover:text-primary-800 transition-colors mb-2">
                    {sector.title}
                  </h3>

                  <span className="font-mono text-xs text-muted block mb-4">
                    {sector.subtitle}
                  </span>

                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {sector.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary">
                        <FaCheck className="w-3.5 h-3.5 text-cta shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 group-hover:border-cta/30 transition-colors">
                  <Link
                    to="/sectors"
                    className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-primary group-hover:text-cta transition-colors"
                  >
                    <span>Sector Specifications</span>
                    <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default SectorsPreview;
