import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight, FaWhatsapp, FaBuilding, FaHome, FaIndustry, FaLandmark, FaTruck } from "react-icons/fa";
import SEO from "../../components/seo/SEO.jsx";
import StructuredData from "../../components/seo/StructuredData.jsx";
import Section from "../../components/ui/Section.jsx";
import Container from "../../components/ui/Container.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";
import Button from "../../components/ui/Button.jsx";
import Breadcrumbs from "../../components/sections/Breadcrumbs.jsx";
import CTASection from "../../components/sections/CTASection.jsx";
import { sectors } from "../../data/sectors.js";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Reveal, { StaggerContainer, StaggerItem } from "../../components/motion/Reveal.jsx";

export const SectorsPage = () => {
  const breadcrumbs = [{ name: "Sectors & Markets", url: "/sectors" }];

  const iconMap = {
    "fleet-fuel-logistics": FaTruck,
    commercial: FaBuilding,
    residential: FaHome,
    industrial: FaIndustry,
    government: FaLandmark,
  };

  return (
    <>
      <SEO
        title="Fleet Rental, Fuel Logistics & Contracting Sectors | Riyadh"
        description="Emirates Front contracting capabilities: Heavy Fleet Rental, 24/7 On-Site Fuel Supply, Commercial, Luxury Residential Villas, and Industrial projects in Riyadh, Saudi Arabia."
        canonical="/sectors"
      />
      <StructuredData type="all" breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <Section variant="dark" padding="default" hairline="bottom">
        <Container>
          <div className="max-w-3xl">
            <Reveal direction="up">
              <Eyebrow variant="primary" className="mb-3">
                Sector-Specific Experience
              </Eyebrow>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4">
                ENGINEERED FOR DIVERSE ASSET CLASSES.
              </h1>
              <p className="font-display text-lg text-slate-300 font-medium mb-6">
                القطاعات والأسواق المستهدفة — حلول تنفيذية متخصصة لكل قطاع
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                Tailoring our structural methodologies, safety standards, and finishing precision to meet the operational demands of corporate developers, private estate owners, and industrial operators.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Main Sectors Showcase */}
      <Section variant="white" padding="default">
        <Container>
          <div className="space-y-16">
            {sectors.map((sector, index) => {
              const IconComponent = iconMap[sector.id] || FaBuilding;
              const sectorWhatsApp = buildWhatsAppLink({
                sector: sector.title,
                message: `Hello Emirates Front, I would like to discuss a ${sector.title} contracting requirement in Riyadh.`,
              });

              return (
                <div
                  key={sector.id}
                  id={sector.id}
                  className="p-8 sm:p-12 rounded border border-slate-200 bg-white hover:border-slate-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Sector Identity & Info (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-slate-900 text-white flex items-center justify-center shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-xs text-primary-600 uppercase font-bold tracking-widest block">
                            Sector 0{index + 1}
                          </span>
                          <span className="font-display text-xs text-slate-500">
                            {sector.titleAr}
                          </span>
                        </div>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900">
                        {sector.title}
                      </h2>

                      <span className="inline-block font-mono text-xs text-slate-500 font-semibold pb-2 border-b border-slate-100">
                        {sector.subtitle}
                      </span>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                        {sector.description}
                      </p>

                      <div className="pt-4 flex flex-wrap gap-4">
                        <Button
                          href={sectorWhatsApp}
                          variant="cta"
                          size="sm"
                          icon={FaWhatsapp}
                          iconPosition="left"
                        >
                          Inquire for {sector.title.split(" ")[0]}
                        </Button>
                        <Button
                          to="/services"
                          variant="outline"
                          size="sm"
                        >
                          Relevant Scopes
                        </Button>
                      </div>
                    </div>

                    {/* Right: Technical Capabilities Checklist (5 cols) */}
                    <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded p-6 shadow-sm">
                      <h4 className="font-display text-base font-bold uppercase tracking-tight text-slate-900 mb-4 pb-2 border-b border-slate-200">
                        Core Sector Capabilities
                      </h4>
                      <div className="space-y-3">
                        {sector.capabilities.map((cap, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                            <span className="text-slate-800 text-xs sm:text-sm font-medium leading-snug">
                              {cap}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Late Page CTA */}
      <CTASection
        title="Planning a Development in Riyadh?"
        subtitle="تواصل معنا لمناقشة المتطلبات الفنية والجدول الزمني لمشروعك"
        description="Our technical team is ready to review your project brief, coordinate site visits, and outline tailored contracting packages."
      />
    </>
  );
};

export default SectorsPage;
