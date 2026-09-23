import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBuilding, FaCube, FaBolt, FaPaintRoller, FaTractor, FaIndustry } from "react-icons/fa";
import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { StaggerContainer, StaggerItem } from "../motion/Reveal.jsx";
import { serviceCategories } from "../../data/services.js";

export const ExpertiseList = () => {
  const categoryIcons = {
    facade: FaBuilding,
    civil: FaCube,
    mep: FaBolt,
    finishing: FaPaintRoller,
    earthworks: FaTractor,
    industrial: FaIndustry,
  };

  const categoryNumbers = {
    facade: "01",
    civil: "02",
    mep: "03",
    finishing: "04",
    earthworks: "05",
    industrial: "06",
  };

  return (
    <Section variant="white" padding="default" id="expertise" className="relative">
      <Container>
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">
              Capabilities & Scopes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
              Contracting Disciplines
            </h2>
            <p className="font-display text-sm sm:text-base text-slate-600 font-medium mt-1">
              مجالات المقاولات والخبرات الرئيسية
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 hover:text-primary-600 transition-colors shrink-0"
          >
            <span>View Full Service Catalog (16+ Scopes)</span>
            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* 01 - 06 Expertise List with Hover Lift & Staggered Reveal */}
        <StaggerContainer
          staggerDelay={0.07}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {serviceCategories.map((category) => {
            const num = categoryNumbers[category.id] || "00";
            const IconComponent = categoryIcons[category.id] || FaBuilding;
            const isHighlighted = category.highlight;

            return (
              <StaggerItem key={category.id}>
                <div
                  className={`group relative h-full bg-white rounded-xl border p-5 sm:p-8 flex flex-col justify-between hover-lift transition-all duration-300 ${
                    isHighlighted
                      ? "border-slate-300 shadow-elevated bg-gradient-to-b from-white to-slate-50"
                      : "border-slate-200/80 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {/* Card Header: Mono numeral + Architectural Icon */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                      <span className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-300 group-hover:text-primary-600 group-hover:scale-105 transition-all">
                        {num}
                      </span>
                      <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors mb-3">
                      {category.name}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>

                  {/* Bottom link with smooth arrow */}
                  <div className="pt-4 border-t border-slate-100 group-hover:border-slate-300 transition-colors">
                    <Link
                      to={`/services#${category.id}`}
                      className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-primary-600 transition-colors"
                    >
                      <span>Explore {category.shortName}</span>
                      <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Link>
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

export default ExpertiseList;
