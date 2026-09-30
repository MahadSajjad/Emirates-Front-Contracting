import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaEye,
  FaBullseye,
  FaFilePdf,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaFileContract,
  FaTruckMoving,
  FaReceipt,
  FaMapMarkerAlt,
  FaTimes,
  FaDownload,
} from "react-icons/fa";
import SEO from "../../components/seo/SEO.jsx";
import StructuredData from "../../components/seo/StructuredData.jsx";
import Section from "../../components/ui/Section.jsx";
import Container from "../../components/ui/Container.jsx";
import Breadcrumbs from "../../components/sections/Breadcrumbs.jsx";
import CTASection from "../../components/sections/CTASection.jsx";
import { credentials } from "../../data/credentials.js";
import siteConfig from "../../config/siteConfig.js";
import Reveal, { StaggerContainer, StaggerItem } from "../../components/motion/Reveal.jsx";

const iconMap = {
  cr: FaFileContract,
  "road-freight": FaTruckMoving,
  zatca: FaReceipt,
  "national-address": FaMapMarkerAlt,
  "sbc-compliance": FaShieldAlt,
};

export const AboutPage = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const breadcrumbs = [{ name: "About Us", url: "/about" }];

  return (
    <>
      <SEO
        title="About Emirates Front Contracting | Official Certificates & Company Profile"
        description="Emirates Front Contracting Company (شركة واجهة الإمارات للمقاولات): Commercial Registration 2050172727, VAT registered, TGA Road Freight licensed, and Saudi Building Code compliant contractor in Riyadh."
        canonical="/about"
      />
      <StructuredData type="all" breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header */}
      <Section variant="dark" padding="default" className="relative bg-[#225F98] text-white overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-400" />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-300">
                  Company Profile & Official Accreditations · Riyadh
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4">
                ENGINEERED QUALITY. BUILT ON INTEGRITY.
              </h1>
              <p className="font-display text-base sm:text-lg text-slate-300 font-medium mb-6">
                عن شركة واجهة الامارات للمقاولات — السجل التجاري والتراخيص المعتمدة بالمملكة
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                Emirates Front Contracting is a Riyadh-based contractor delivering on-site fuel supply, heavy rental fleets, civil superstructures, and specialized building envelope engineering across the Kingdom.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Narrative Section */}
      <Section variant="white" padding="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Concise Story */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">
                  The Emirates Front Approach
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">
                  Unified Contracting & Façade Craftsmanship
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  General contracting is the core of what we do. Our registered Arabic name — واجهة (façade / front) — reflects our specialized expertise in architectural building envelopes, curtain walls, and composite cladding systems that define the face of modern developments.
                </p>
                <p>
                  Based in Riyadh, we unite structural foundations, masonry, interior fit-outs, heavy fleet mobilization, fuel logistics, and MEP coordination under disciplined site oversight adhering strictly to the Saudi Building Code (SBC).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="font-mono text-xs text-slate-500 font-semibold uppercase block mb-1">
                    Hub & Logistics
                  </span>
                  <span className="font-display font-bold text-slate-900 text-base uppercase">
                    Riyadh Central (Al Sulay)
                  </span>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="font-mono text-xs text-slate-500 font-semibold uppercase block mb-1">
                    Speciality
                  </span>
                  <span className="font-display font-bold text-slate-900 text-base uppercase">
                    Civil · Fleet · Fuel · Façade
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Corporate Emblem, Mission & Objective */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-xl shadow-xl border border-slate-800 flex items-center gap-4 hover-lift">
                <img
                  src="/logo.png"
                  alt="Emirates Front Contracting Company Corporate Seal and Brand Identity"
                  className="h-16 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,102,178,0.45)] shrink-0"
                  width="64"
                  height="64"
                  decoding="async"
                />
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-[#f59e0b] uppercase tracking-widest block font-bold mb-0.5">
                    Official Identity
                  </span>
                  <span className="font-display font-extrabold text-base text-white block uppercase tracking-tight truncate">
                    Emirates Front Contracting
                  </span>
                  <span className="font-display text-xs text-slate-300 block truncate">
                    شركة واجهة الإمارات للمقاولات
                  </span>
                </div>
              </div>

              <div className="p-8 bg-slate-950 text-white rounded-xl shadow-xl border border-slate-800 hover-lift">
                <div className="w-10 h-10 rounded-lg bg-primary-500/15 text-primary-400 flex items-center justify-center mb-4 border border-primary-400/20">
                  <FaBullseye className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-2">
                  Our Objective
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To deliver contracting, plant hire, and on-site fuel services that meet international quality and safety benchmarks while fostering transparent, lasting partnerships with developers and project owners.
                </p>
              </div>

              <div className="p-8 bg-slate-50 text-slate-900 rounded-xl border border-slate-200/80 hover-lift">
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-900 flex items-center justify-center mb-4">
                  <FaEye className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-slate-900 mb-2">
                  Mission & Standards
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Disciplined on-site project management, certified materials, and adherence to safety mandates that ensure projects are delivered on schedule and without compromise.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Official Government Accreditations & Certificates Showcase */}
      <Section variant="alabaster" padding="default" id="certificates">
        <Container>
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 mb-3">
              <FaCheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                100% Officially Verified Government Accreditations
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">
              Official Certificates & Regulatory Accreditations
            </h2>
            <p className="font-display text-sm sm:text-base text-slate-600 font-medium mt-1">
              التراخيص والشهادات الرسمية المعتمدة لشركة واجهة الإمارات للمقاولات بالمملكة العربية السعودية
            </p>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed max-w-3xl">
              Emirates Front Contracting operates with full statutory compliance under Saudi government authorities. Review our Commercial Registration, TGA Road Freight Transport License, VAT Registration, and Certified National Address documentation below.
            </p>
          </div>

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {credentials.map((cred) => {
              const IconComp = iconMap[cred.id] || FaShieldAlt;
              return (
                <StaggerItem key={cred.id}>
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between hover-lift shadow-sm hover:border-[#0066b2]/50 hover:shadow-xl transition-all duration-300">
                    <div>
                      {/* Top Bar: Icon + Status */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                          <IconComp className="w-5 h-5 text-[#f59e0b]" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <FaCheckCircle className="w-3 h-3 text-emerald-600" />
                          <span>{cred.status}</span>
                        </span>
                      </div>

                      {/* Header Titles */}
                      <h3 className="font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight text-slate-900 mb-1 leading-snug">
                        {cred.title}
                      </h3>
                      <span className="font-display text-xs text-slate-500 font-bold block mb-4">
                        {cred.titleAr}
                      </span>

                      {/* Monospace Document Number Badge */}
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-4">
                        <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                          {cred.documentNumberLabel} ({cred.documentNumberLabelAr})
                        </span>
                        <span className="font-mono text-base font-extrabold text-[#0066b2] block mt-0.5 tracking-wide">
                          {cred.documentNumber}
                        </span>
                      </div>

                      {/* Authority */}
                      <div className="space-y-1.5 text-xs text-slate-600 mb-4 pb-4 border-b border-slate-100">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-slate-400 uppercase text-[10px]">Issuer:</span>
                          <span className="font-semibold text-slate-800 text-right">{cred.issuer}</span>
                        </div>
                        {cred.issueDate && (
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-slate-400 uppercase text-[10px]">Issue Date:</span>
                            <span className="font-mono text-slate-700">{cred.issueDate}</span>
                          </div>
                        )}
                        {cred.entityType && (
                          <div className="text-[11px] text-slate-500 pt-1">
                            <span className="font-mono text-slate-400 uppercase text-[10px] block">Entity:</span>
                            <span className="text-slate-700 font-medium">{cred.entityType}</span>
                          </div>
                        )}
                        {cred.addressSummary && (
                          <div className="text-[11px] text-slate-500 pt-1">
                            <span className="font-mono text-slate-400 uppercase text-[10px] block">Location:</span>
                            <span className="text-slate-700 font-medium">{cred.addressSummary}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-slate-600 text-xs leading-relaxed mb-6">
                        {cred.description}
                      </p>
                    </div>

                    {/* Actions: View PDF / Verify */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch gap-2.5">
                      {cred.pdfUrl ? (
                        <>
                          <a
                            href={cred.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-slate-900 hover:bg-[#0066b2] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm flex-1"
                          >
                            <FaFilePdf className="w-3.5 h-3.5 text-red-400" />
                            <span>View PDF</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => setSelectedDoc(cred)}
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-semibold transition-colors"
                            title="Inspect Certificate Details"
                          >
                            <span>Details</span>
                          </button>
                        </>
                      ) : (
                        <a
                          href={cred.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider transition-colors flex-1"
                        >
                          <FaExternalLinkAlt className="w-3 h-3 text-slate-500" />
                          <span>Code Registry</span>
                        </a>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Regulatory Citation Notice */}
          <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="w-6 h-6 text-[#0066b2] shrink-0" />
              <div>
                <span className="font-display font-bold text-slate-900 block">
                  Official Verification & Compliance Commitment
                </span>
                <span>
                  All regulatory certificates are officially registered under CR 2050172727 and Unified National No. 7036535123.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono font-bold text-[#0066b2] shrink-0">
              <a
                href="https://mc.gov.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <span>mc.gov.sa</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
              <span>·</span>
              <a
                href="https://zatca.gov.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <span>zatca.gov.sa</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
              <span>·</span>
              <a
                href="https://tga.gov.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <span>tga.gov.sa</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Document Detail Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              type="button"
              onClick={() => setSelectedDoc(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0066b2]/10 text-[#0066b2] flex items-center justify-center">
                <FaFileContract className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-emerald-600 font-bold uppercase block">
                  Official Document Verified
                </span>
                <h3 className="font-display font-extrabold text-lg uppercase text-slate-900">
                  {selectedDoc.title}
                </h3>
              </div>
            </div>

            <p className="font-display text-xs text-slate-500 font-semibold mb-4">
              {selectedDoc.titleAr}
            </p>

            <div className="space-y-3 bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs mb-6">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-mono text-slate-500 uppercase">{selectedDoc.documentNumberLabel}:</span>
                <span className="font-mono font-bold text-slate-900">{selectedDoc.documentNumber}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-mono text-slate-500 uppercase">Issuing Body:</span>
                <span className="font-semibold text-slate-800">{selectedDoc.issuer}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-mono text-slate-500 uppercase">Organization:</span>
                <span className="font-semibold text-slate-800 text-right">شركة واجهة الإمارات للمقاولات</span>
              </div>
              {selectedDoc.issueDate && (
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-mono text-slate-500 uppercase">Date of Record:</span>
                  <span className="font-mono text-slate-800">{selectedDoc.issueDate}</span>
                </div>
              )}
              {selectedDoc.shortAddress && (
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-mono text-slate-500 uppercase">Short Address:</span>
                  <span className="font-mono font-bold text-primary-600">{selectedDoc.shortAddress}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="font-mono text-slate-500 uppercase">Compliance Status:</span>
                <span className="font-mono font-bold text-emerald-600">{selectedDoc.status}</span>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed mb-6">
              {selectedDoc.description}
            </p>

            <div className="flex items-center gap-3">
              {selectedDoc.pdfUrl && (
                <a
                  href={selectedDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0066b2] hover:bg-[#005599] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <FaDownload className="w-3.5 h-3.5" />
                  <span>Download / Open PDF</span>
                </a>
              )}
              {selectedDoc.verificationUrl && (
                <a
                  href={selectedDoc.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-semibold transition-colors"
                >
                  <FaExternalLinkAlt className="w-3 h-3 text-slate-500" />
                  <span>Portal</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Late Page CTA */}
      <CTASection
        title="Discuss Your Next Project With Our Team"
        subtitle="تواصل معنا اليوم لبحث تفاصيل مشروعك القادم في الرياض"
        description="Whether preparing tender documentation or seeking an agile general contractor in Riyadh, our engineering desk is ready to assist."
      />
    </>
  );
};

export default AboutPage;
