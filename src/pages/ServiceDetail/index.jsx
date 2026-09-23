import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FaWhatsapp, FaArrowRight, FaCheckCircle, FaFileDownload, FaBuilding, FaPhoneAlt } from "react-icons/fa";
import SEO from "../../components/seo/SEO.jsx";
import StructuredData from "../../components/seo/StructuredData.jsx";
import Section from "../../components/ui/Section.jsx";
import Container from "../../components/ui/Container.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";
import Badge from "../../components/ui/Badge.jsx";
import Button from "../../components/ui/Button.jsx";
import Accordion from "../../components/ui/Accordion.jsx";
import Breadcrumbs from "../../components/sections/Breadcrumbs.jsx";
import CTASection from "../../components/sections/CTASection.jsx";
import { getServiceBySlug, getServicesByCategory } from "../../data/services.js";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import siteConfig from "../../config/siteConfig.js";
import Reveal from "../../components/motion/Reveal.jsx";

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const relatedServices = getServicesByCategory(service.category).filter(
    (s) => s.slug !== service.slug
  );

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: service.categoryName, url: `/services#${service.category}` },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  const serviceWhatsAppUrl = buildWhatsAppLink({
    service: service.title,
    message: `Hello Emirates Front, I am inquiring specifically about your ${service.title} capabilities in Riyadh.`,
  });

  const accordionItems = [
    {
      title: "Scope of Execution & Standards",
      subtitle: "Technical Quality Assurance",
      content: (
        <div className="space-y-3">
          <p>
            All execution under our {service.title} package adheres to the Saudi Building Code (SBC) and relevant international engineering benchmarks (ASTM / BS / SASO).
          </p>
          <p>
            We deploy qualified engineers, certified site supervisors, and calibrated equipment to ensure strict tolerance adherence and documented quality assurance handovers.
          </p>
        </div>
      ),
    },
    {
      title: "Procurement & Material Approval Process",
      subtitle: "Verified Supply Chain",
      content: (
        <div className="space-y-3">
          <p>
            Every material batch, coating system, or structural component undergoes rigorous submittal review and client/consultant sample sign-off prior to site delivery.
          </p>
          <p>
            We partner with trusted regional suppliers and certified international manufacturers to guarantee longevity in harsh climatic conditions.
          </p>
        </div>
      ),
    },
    {
      title: "Safety & Site HSE Protocols",
      subtitle: "Zero Compromise on Site Safety",
      content: (
        <div className="space-y-3">
          <p>
            Our dedicated HSE officers conduct continuous site hazard analyses, scaffolding inspections, and PPE enforcement to ensure complete safety across all operations.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/services/${service.slug}`}
      />
      <StructuredData
        type="all"
        breadcrumbs={breadcrumbs}
        service={service}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header */}
      <Section variant="dark" padding="default" hairline="bottom">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <Reveal direction="up">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="cta" size="md">
                    {service.categoryName}
                  </Badge>
                  <span className="font-display text-sm text-cta/90 font-medium">
                    {service.titleAr}
                  </span>
                </div>

                <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-6">
                  {service.title}
                </h1>

                <p className="text-alabaster/85 text-base sm:text-xl leading-relaxed font-light mb-8 max-w-2xl">
                  {service.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href={serviceWhatsAppUrl}
                    variant="cta"
                    size="lg"
                    icon={FaWhatsapp}
                    iconPosition="left"
                    className="shadow-xl shadow-cta/20"
                  >
                    Enquire via WhatsApp
                  </Button>
                  <Button
                    to="/contact"
                    variant="outline-light"
                    size="lg"
                  >
                    Request Scope Proposal
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Quick Spec Box */}
            <div className="lg:col-span-4">
              <div className="bg-primary-900 border border-white/15 p-6 rounded shadow-xl">
                <span className="font-mono text-xs text-cta uppercase tracking-widest block mb-4 pb-2 border-b border-white/10">
                  Quick Scope Summary
                </span>
                <div className="space-y-3 text-xs">
                  {service.specifications?.map((spec, idx) => (
                    <div key={idx} className="pb-2 border-b border-white/5 last:border-b-0">
                      <span className="text-white/50 block font-mono uppercase mb-0.5">
                        {spec.label}
                      </span>
                      <span className="text-white font-display font-semibold text-sm">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <span className="text-white/50 block font-mono uppercase mb-0.5">
                      Service Region
                    </span>
                    <span className="text-white font-display font-semibold text-sm">
                      Riyadh & Central Province
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content & Scope Deep Dive */}
      <Section variant="white" padding="default" hairline="bottom">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Detailed Description */}
              <div>
                <SectionHeading
                  eyebrow="Scope Overview"
                  title={`Engineered ${service.title} Delivery`}
                  highlightWord={service.title}
                  subtitle="نظرة عامة على نطاق التنفيذ والمعايير الهندسية"
                  description={service.description}
                  className="mb-6"
                />
              </div>

              {/* Technical Deliverables Checklist */}
              <div className="p-8 bg-alabaster/40 border border-primary/10 rounded">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-primary mb-6">
                  Key Technical Inclusions & Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="w-4 h-4 text-cta shrink-0 mt-1" />
                      <span className="text-primary text-sm font-medium leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Accordion */}
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary mb-4">
                  Methodology & Assurance
                </h3>
                <Accordion items={accordionItems} />
              </div>
            </div>

            {/* Right Sidebar: Sticky Action Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 bg-primary-950 text-white p-6 sm:p-8 rounded border border-white/10 shadow-xl space-y-6">
                <div>
                  <span className="font-mono text-xs text-cta uppercase tracking-widest block mb-1">
                    Direct Estimating Desk
                  </span>
                  <h4 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                    Need a Quote for {service.title}?
                  </h4>
                  <p className="text-alabaster/70 text-xs sm:text-sm mt-2 leading-relaxed">
                    Send your project scope or BOQ directly via WhatsApp for an expedited initial review.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    href={serviceWhatsAppUrl}
                    variant="cta"
                    size="md"
                    fullWidth
                    icon={FaWhatsapp}
                    iconPosition="left"
                    className="font-bold"
                  >
                    Chat on WhatsApp
                  </Button>

                  <Button
                    to="/contact"
                    variant="outline-light"
                    size="md"
                    fullWidth
                  >
                    Submit Scope Online
                  </Button>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs space-y-2 text-white/60 font-mono">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-cta w-3 h-3" />
                    <span>Direct: {siteConfig.phone.display}</span>
                  </div>
                  <div>Email: {siteConfig.email}</div>
                  <div>Location: Riyadh, KSA</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Services in Category */}
      {relatedServices.length > 0 && (
        <Section variant="alabaster" padding="default" hairline="bottom">
          <Container>
            <div className="mb-8">
              <Eyebrow variant="cta" className="mb-2">
                Related Capabilities
              </Eyebrow>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-primary">
                More in {service.categoryName}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.slice(0, 3).map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white border border-primary/10 rounded p-6 hover:border-cta hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display text-lg font-bold uppercase text-primary mb-2">
                      <Link
                        to={`/services/${rel.slug}`}
                        className="hover:text-cta transition-colors"
                      >
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-muted-dark text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <Link
                    to={`/services/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase text-primary hover:text-cta transition-colors"
                  >
                    <span>View Scope Details</span>
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Late Page CTA */}
      <CTASection
        title={`Inquire About ${service.title} in Riyadh`}
        subtitle="تواصل مع فريقنا الهندسي لتسعير وتنفيذ أعمال المشروع"
        description="Our team is equipped to review engineering drawings and provide detailed feasibility and execution timelines."
        serviceContext={service.title}
      />
    </>
  );
};

export default ServiceDetailPage;
