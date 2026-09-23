import React from "react";
import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { StaggerContainer, StaggerItem } from "../motion/Reveal.jsx";
import { features } from "../../data/features.js";
import { FaBuilding, FaLayerGroup, FaAward, FaShieldAlt, FaCheckDouble, FaComments } from "react-icons/fa";

export const WhyUsSection = () => {
  const iconMap = {
    FaBuilding: FaBuilding,
    FaLayerGroup: FaLayerGroup,
    FaAward: FaAward,
    FaShieldAlt: FaShieldAlt,
    FaCheckDouble: FaCheckDouble,
    FaComments: FaComments,
  };

  return (
    <Section variant="alabaster" padding="default" className="relative overflow-hidden">
      {/* Subtle blueprint dot background */}
      <div className="absolute inset-0 bg-blueprint-lines pointer-events-none opacity-40" />

      <Container className="relative z-10">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">
            Execution Standards
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
            Why Contractors Choose Emirates Front
          </h2>
          <p className="font-display text-sm sm:text-base text-slate-600 font-medium mt-2">
            لماذا تختار شركة واجهة الامارات للمقاولات
          </p>
        </div>

        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon] || FaShieldAlt;

            return (
              <StaggerItem key={feature.id}>
                <div className="h-full p-5 sm:p-8 rounded-xl bg-white border border-slate-200/80 hover-lift hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {feature.number}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-900 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default WhyUsSection;
