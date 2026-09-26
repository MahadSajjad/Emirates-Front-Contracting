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
            <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">
              Market Sectors
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
              Industry Capabilities
            </h2>
            <p className="font-display text-sm sm:text-base text-slate-600 font-medium mt-1">
              القطاعات والمشاريع المستهدفة بالمملكة
            </p>
          </div>

          <Link
            to="/sectors"
            className="group inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 hover:text-primary-600 transition-colors shrink-0"
          >
            <span>Explore All Sectors</span>
            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sectors.map((sector, index) => {
            const sectorImages = {
              "fleet-fuel-logistics": "https://images.unsplash.com/photo-1693212924767-32597c091f20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhlYXZ5JTIwRmxlZXQlMjBSZW50YWwlMjAlMjYlMjBPbi1TaXRlJTIwRnVlbCUyMFN1cHBseXxlbnwwfHwwfHx8MA%3D%3D",
              commercial: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
              residential: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
              industrial: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
              government: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
            };
            const imageSrc = sectorImages[sector.id] || "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80";

            return (
              <StaggerItem key={sector.id}>
                <div className="group h-full bg-white border border-slate-200/80 rounded-xl overflow-hidden hover-lift hover:border-[#0066b2]/40 shadow-sm flex flex-col justify-between transition-all duration-300">
                  {/* Sector Image Header */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={imageSrc}
                      alt={sector.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Floating Top Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 font-mono text-[10px] text-white font-bold tracking-wider uppercase backdrop-blur-sm">
                      Sector 0{index + 1}
                    </div>

                    {/* Bottom Title Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="font-display text-xs text-[#f59e0b] font-bold block mb-0.5">
                        {sector.titleAr}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white leading-tight">
                        {sector.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs text-[#0066b2] font-semibold block mb-2">
                        {sector.subtitle}
                      </span>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                        {sector.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {sector.capabilities.slice(0, 3).map((cap, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <FaCheck className="w-3 h-3 text-[#0066b2] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                      <Link
                        to="/sectors"
                        className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#0066b2] transition-colors"
                      >
                        <span>View Sector Scope</span>
                        <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
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

export default SectorsPreview;
