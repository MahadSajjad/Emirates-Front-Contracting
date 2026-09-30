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
  FaBuilding,
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Col: The Emirates Front Approach */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#0066b2]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700">
                    The Emirates Front Approach · منهجية العمل
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
                  Unified Contracting & Façade Craftsmanship
                </h2>
                <p className="font-display text-xs sm:text-sm text-slate-500 font-semibold mt-1.5">
                  حلول متكاملة في المقاولات العامة والواجهات المعمارية ودعم المشاريع بالرياض
                </p>
              </div>

              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  General contracting is the core of our capability. Our registered Arabic name — <strong className="text-slate-900 font-bold">واجهة</strong> (façade / front) — reflects our specialized mastery in architectural building envelopes, curtain walls, structural glazing, and composite cladding systems that define the landmark aesthetics of modern developments across the Kingdom.
                </p>
                <p>
                  Headquartered in the central industrial hub of Riyadh, we unite structural foundations, masonry, interior fit-outs, heavy fleet mobilization, on-site fuel logistics, and MEP coordination under disciplined site oversight adhering strictly to the Saudi Building Code (SBC) and Vision 2030 standards.
                </p>
              </div>

              {/* 4-Pillar Operational Capability Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {/* Hub & Logistics */}
                <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-[#0066b2]/40 transition-colors shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0066b2]/10 text-[#0066b2] flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Hub & Logistics
                    </span>
                  </div>
                  <span className="font-display font-extrabold text-slate-900 text-sm sm:text-base uppercase block tracking-tight">
                    Riyadh Central (Al Sulay)
                  </span>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">
                    Strategic industrial depot for rapid equipment & material dispatch.
                  </p>
                </div>

                {/* Core Speciality */}
                <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-amber-500/40 transition-colors shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                      <FaBuilding className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Core Speciality
                    </span>
                  </div>
                  <span className="font-display font-extrabold text-slate-900 text-sm sm:text-base uppercase block tracking-tight">
                    Civil · Fleet · Fuel · Façade
                  </span>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">
                    Turnkey groundworks to complex building envelope craftsmanship.
                  </p>
                </div>

                {/* Compliance & SBC */}
                <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-emerald-500/40 transition-colors shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <FaShieldAlt className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Compliance Standard
                    </span>
                  </div>
                  <span className="font-display font-extrabold text-slate-900 text-sm sm:text-base uppercase block tracking-tight">
                    Saudi Building Code (SBC)
                  </span>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">
                    Certified structural safety, seismic integrity & fire-stopping norms.
                  </p>
                </div>

                {/* Site Readiness */}
                <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-indigo-500/40 transition-colors shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                      <FaTruckMoving className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Site Readiness
                    </span>
                  </div>
                  <span className="font-display font-extrabold text-slate-900 text-sm sm:text-base uppercase block tracking-tight">
                    24/7 Fleet & Fuel Support
                  </span>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">
                    On-demand heavy machinery hire & direct bulk diesel site bunkering.
                  </p>
                </div>
              </div>

              {/* Bottom verified registration bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-mono text-[11px] font-bold text-slate-700">
                    CR: 2050172727 · Lic: 11/00052742
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  National Address: RQYC3305
                </span>
              </div>
            </div>

            {/* Right Col: Corporate Emblem, Objective & Mission */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              {/* Corporate Identity & Verified Emblem */}
              <div className="p-5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-xl shadow-xl border border-slate-800 flex items-center justify-between gap-4 hover-lift">
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src="/logo.png"
                    alt="Emirates Front Contracting Company Corporate Seal and Brand Identity"
                    className="h-14 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,102,178,0.5)] shrink-0"
                    width="56"
                    height="56"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-mono text-[10px] text-[#f59e0b] uppercase tracking-widest font-bold">
                        Official Identity
                      </span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">
                        Verified
                      </span>
                    </div>
                    <span className="font-display font-extrabold text-base text-white block uppercase tracking-tight truncate">
                      Emirates Front Contracting
                    </span>
                    <span className="font-display text-xs text-slate-300 block truncate">
                      شركة واجهة الإمارات للمقاولات
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end shrink-0 pl-2">
                  <span className="font-mono text-[10px] text-slate-400 uppercase font-semibold">Kingdom of Saudi Arabia</span>
                  <span className="font-mono text-xs text-amber-400 font-bold">المملكة العربية السعودية</span>
                </div>
              </div>

              {/* Our Objective */}
              <div className="p-6 bg-slate-950 text-white rounded-xl shadow-xl border border-slate-800 hover-lift relative overflow-hidden flex-1 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center border border-amber-400/20 shrink-0">
                      <FaBullseye className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold text-amber-400/90 tracking-widest bg-amber-400/10 px-2 py-0.5 rounded">
                      Corporate Objective
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white mb-2">
                    Our Objective · هدفنا المؤسسي
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    To deliver general contracting, heavy plant hire, and on-site fuel solutions that adhere to the highest international quality, structural reliability, and HSE safety benchmarks while fostering transparent, lasting partnerships with developers and government authorities.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-4 mt-3 border-t border-slate-850 text-[11px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">ISO-Aligned Quality</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Transparent Partnerships</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Turnkey Delivery</span>
                </div>
              </div>

              {/* Mission & Standards */}
              <div className="p-6 bg-slate-50 text-slate-900 rounded-xl border border-slate-200/90 hover-lift shadow-sm relative overflow-hidden flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0066b2]/10 text-[#0066b2] flex items-center justify-center shrink-0">
                      <FaEye className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold text-[#0066b2] tracking-widest bg-[#0066b2]/10 px-2 py-0.5 rounded">
                      Mission & Quality
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-slate-900 mb-2">
                    Mission & Standards · المهمة والمعايير
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Disciplined on-site project management, certified Saudi Building Code compliant materials, and rigorous adherence to safety mandates that ensure commercial and civil projects are delivered on schedule and without compromise.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-4 mt-3 border-t border-slate-200 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Strict SBC Adherence</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Zero-Compromise HSE</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">On-Time Milestones</span>
                </div>
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
