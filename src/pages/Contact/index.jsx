import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SEO from "../../components/seo/SEO.jsx";
import StructuredData from "../../components/seo/StructuredData.jsx";
import Section from "../../components/ui/Section.jsx";
import Container from "../../components/ui/Container.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";
import Breadcrumbs from "../../components/sections/Breadcrumbs.jsx";
import ContactForm from "../../components/sections/ContactForm.jsx";
import MapEmbed from "../../components/sections/MapEmbed.jsx";
import siteConfig from "../../config/siteConfig.js";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Reveal from "../../components/motion/Reveal.jsx";

export const ContactPage = () => {
  const breadcrumbs = [{ name: "Contact & Head Office", url: "/contact" }];

  const contactWhatsAppUrl = buildWhatsAppLink({
    service: "Contact Page General Inquiry",
    message: "Hello Emirates Front Contracting, I am reaching out to discuss a project in Riyadh.",
  });

  const location = siteConfig.locations[0];

  return (
    <>
      <SEO
        title="Contact Emirates Front Contracting | Riyadh Head Office"
        description="Contact Emirates Front Contracting Company (شركة واجهة الامارات للمقاولات) in Riyadh. Instant WhatsApp communication, phone, email, and Google Maps office location."
        canonical="/contact"
      />
      <StructuredData type="all" breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <Section variant="dark" padding="default" hairline="bottom">
        <Container>
          <div className="max-w-3xl">
            <Reveal direction="up">
              <Eyebrow variant="primary" className="mb-3">
                Direct Procurement & Office Access
              </Eyebrow>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4">
                GET IN TOUCH. START THE CONVERSATION.
              </h1>
              <p className="font-display text-lg text-slate-300 font-medium mb-6">
                اتصل بنا — المقر الرئيسي بالرياض وخط التواصل المباشر عبر الواتساب
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Reach out to our estimating and project management teams via WhatsApp, phone, email, or visit our head office in Riyadh.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Main Grid: Form + Info Cards */}
      <Section variant="white" padding="default" hairline="bottom">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Direct Channels & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Priority Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-slate-950 text-white border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-primary-400 uppercase font-semibold tracking-wider block">
                      Primary Lead Channel
                    </span>
                    <h4 className="font-display text-xl font-bold uppercase text-white">
                      Instant WhatsApp Chat
                    </h4>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  For fastest response on bill of quantities (BOQ), tender drawings, or urgent contracting requirements, message us directly.
                </p>

                <a
                  href={contactWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary-400 text-slate-950 font-display font-bold uppercase tracking-wider text-sm rounded hover:bg-primary-300 transition-colors shadow-md"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat With Estimating Team</span>
                </a>
              </div>

              {/* Phone, Email, Hours */}
              <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200/90 space-y-6">
                <h4 className="font-display text-lg font-bold uppercase text-slate-900 pb-3 border-b border-slate-200">
                  Head Office Channels
                </h4>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                    <div>
                      <span className="font-mono text-xs text-slate-500 block uppercase">Direct Line</span>
                      <a
                        href={`tel:${siteConfig.phone.number}`}
                        className="font-display font-bold text-slate-900 hover:text-primary-600 transition-colors text-base"
                      >
                        {siteConfig.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaEnvelope className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                    <div>
                      <span className="font-mono text-xs text-slate-500 block uppercase">Email</span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-display font-bold text-slate-900 hover:text-primary-600 transition-colors break-all"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                    <div>
                      <span className="font-mono text-xs text-slate-500 block uppercase">Location</span>
                      <span className="font-display font-semibold text-slate-900">
                        {location.label} — Riyadh, KSA
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaClock className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                    <div>
                      <span className="font-mono text-xs text-slate-500 block uppercase">Working Hours</span>
                      <span className="font-mono text-xs text-slate-600">
                        {siteConfig.workingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section variant="alabaster" padding="default">
        <Container>
          <SectionHeading
            eyebrow="Interactive Location"
            title="Riyadh Office Map Location"
            highlightWord="Map Location"
            subtitle="موقع مكتبنا الرئيسي بالرياض على خرائط جوجل"
            description="Centrally positioned to serve developments across Riyadh and the Central Province."
          />

          <MapEmbed height="480px" />
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
