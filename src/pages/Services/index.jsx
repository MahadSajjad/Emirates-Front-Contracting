import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight, FaWhatsapp, FaCheck } from "react-icons/fa";
import SEO from "../../components/seo/SEO.jsx";
import StructuredData from "../../components/seo/StructuredData.jsx";
import Section from "../../components/ui/Section.jsx";
import Container from "../../components/ui/Container.jsx";
import Breadcrumbs from "../../components/sections/Breadcrumbs.jsx";
import CTASection from "../../components/sections/CTASection.jsx";
import { services, serviceCategories } from "../../data/services.js";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Reveal, { StaggerContainer, StaggerItem } from "../../components/motion/Reveal.jsx";

export const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const categoryId = hash.replace("#", "");
      if (serviceCategories.some((c) => c.id === categoryId)) {
        setActiveCategory(categoryId);
      }
    }
  }, [hash]);

  const breadcrumbs = [{ name: "Services Catalog", url: "/services" }];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <SEO
        title="Fuel Supply, Fleet Vehicle Rental & Contracting Services | Riyadh"
        description="Comprehensive services: 24/7 On-Site Fuel Supply & Diesel Logistics, Full Fleet Vehicle Rental (Excavators, Dumpers, Pickups, Dynas, Trailers, Cranes), and General Contracting in Riyadh, Saudi Arabia."
        canonical="/services"
      />
      <StructuredData type="all" breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <Section variant="dark" padding="default" className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-950" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/15 border border-primary-400/30 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-400" />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-300">
                  Services Taxonomy · Riyadh
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4">
                SPECIALIZED SCOPES. <span className="text-primary-400">UNIFIED DELIVERY.</span>
              </h1>
              <p className="font-display text-base sm:text-lg text-slate-300 font-medium mb-6">
                دليل خدمات ومجالات المقاولات العامة والإنشائية وأنظمة الواجهات
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Explore our full spectrum of 21+ specialized contracting scopes across envelope engineering, civil structures, electromechanical systems, and interior finishing.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Category Filter Tabs */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all shrink-0 ${
                activeCategory === "all"
                  ? "bg-slate-900 text-white shadow-md font-bold"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Scopes ({services.length})
            </button>

            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-primary-400 text-slate-950 shadow-md font-bold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.highlight && <span className="text-xs">★</span>}
                <span>{cat.shortName}</span>
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <Section variant="white" padding="default">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
              Showing {filteredServices.length} Contracting Scopes
            </span>
            {activeCategory !== "all" && (
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className="text-xs font-mono text-primary font-bold hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const quickWhatsApp = buildWhatsAppLink();

              return (
                <div
                  key={service.slug}
                  id={service.category}
                  className="group bg-white border border-slate-200/90 rounded-xl flex flex-col justify-between hover-lift shadow-sm hover:border-primary-400 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 sm:p-8">
                    {/* Header: Category tag & Title */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-primary-50 text-primary-700 border border-primary-200">
                        {service.categoryName}
                      </span>
                      <span className="font-display text-xs text-slate-400">
                        {service.titleAr}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900 group-hover:text-primary transition-colors mb-3">
                      <Link to={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.excerpt}
                    </p>

                    {/* Key Technical Bullets */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {service.bullets.slice(0, 3).map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <FaCheck className="w-3 h-3 text-primary-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-primary-600 transition-colors"
                    >
                      <span>Full Scope Specs</span>
                      <FaArrowRight className="w-3 h-3" />
                    </Link>

                    <a
                      href={quickWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-slate-900 hover:text-white text-slate-700 border border-slate-200 transition-colors shadow-sm"
                      title="Quick WhatsApp Inquiry"
                      aria-label="WhatsApp Inquiry"
                    >
                      <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:text-white" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Late Page CTA */}
      <CTASection
        title="Need a Custom Scope of Work or Turnkey Package?"
        subtitle="جاهزون لتسعير جداول الكميات وتنسيق الحزم الإنشائية المتكاملة"
        description="Submit your structural drawings, specifications, or bill of quantities for rapid technical estimation and scheduling."
      />
    </>
  );
};

export default ServicesPage;
