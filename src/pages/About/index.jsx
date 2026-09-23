import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaEye, FaBullseye, FaDraftingCompass, FaTruckMoving } from "react-icons/fa";
import SEO from "../../components/seo/SEO.jsx";
import StructuredData from "../../components/seo/StructuredData.jsx";
import Section from "../../components/ui/Section.jsx";
import Container from "../../components/ui/Container.jsx";
import Breadcrumbs from "../../components/sections/Breadcrumbs.jsx";
import CTASection from "../../components/sections/CTASection.jsx";
import { credentials } from "../../data/credentials.js";
import { features } from "../../data/features.js";
import Reveal, { StaggerContainer, StaggerItem } from "../../components/motion/Reveal.jsx";

export const AboutPage = () => {
  const breadcrumbs = [{ name: "About Us", url: "/about" }];

  return (
    <>
      <SEO
        title="About Emirates Front Contracting Company | Riyadh"
        description="Learn about Emirates Front Contracting Company (شركة واجهة الامارات للمقاولات) — our mission, structural standards, and specialized building envelope capabilities in Riyadh, KSA."
        canonical="/about"
      />
      <StructuredData type="all" breadcrumbs={breadcrumbs} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header */}
      <Section variant="dark" padding="default" className="relative bg-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/95 to-primary-900/80" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-400" />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-300">
                  Company Profile · Riyadh
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4">
                ENGINEERED QUALITY. BUILT ON INTEGRITY.
              </h1>
              <p className="font-display text-base sm:text-lg text-slate-300 font-medium mb-6">
                عن شركة واجهة الامارات للمقاولات — رؤيتنا وخبراتنا في قطاع التشييد
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                Emirates Front Contracting is a Riyadh-based contractor delivering civil superstructures, electromechanical systems, and specialized building envelope engineering across the Kingdom.
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
                  Based in Riyadh, we unite structural foundations, masonry, interior fit-outs, and MEP coordination under disciplined site oversight adhering strictly to the Saudi Building Code (SBC).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="font-mono text-xs text-slate-500 font-semibold uppercase block mb-1">
                    Hub
                  </span>
                  <span className="font-display font-bold text-slate-900 text-base uppercase">
                    Riyadh Central
                  </span>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="font-mono text-xs text-slate-500 font-semibold uppercase block mb-1">
                    Speciality
                  </span>
                  <span className="font-display font-bold text-slate-900 text-base uppercase">
                    Civil · MEP · Façade
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Mission & Objective */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-slate-950 text-white rounded-xl shadow-xl border border-slate-800 hover-lift">
                <div className="w-10 h-10 rounded-lg bg-primary-500/15 text-primary-400 flex items-center justify-center mb-4 border border-primary-400/20">
                  <FaBullseye className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-2">
                  Our Objective
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To deliver contracting services that meet international quality and safety benchmarks while fostering transparent, lasting partnerships with developers and project owners.
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

      {/* Regulatory Registrations */}
      <Section variant="alabaster" padding="default">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">
              Compliance & Registrations
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">
              Institutional Registrations
            </h2>
            <p className="font-display text-sm sm:text-base text-slate-600 font-medium mt-1">
              الامتثال والتسجيل النظامي بالمملكة العربية السعودية
            </p>
          </div>

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {credentials.map((cred) => (
              <StaggerItem key={cred.id}>
                <div className="bg-white border border-slate-200/80 rounded-xl p-6 h-full flex flex-col justify-between hover-lift">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                        <FaShieldAlt className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-100 rounded">
                        {cred.status}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold uppercase text-slate-900 mb-1">
                      {cred.title}
                    </h4>
                    <span className="font-display text-xs text-slate-500 block mb-3">
                      {cred.titleAr}
                    </span>

                    <p className="font-mono text-xs text-slate-600 font-semibold uppercase mb-2">
                      {cred.issuer}
                    </p>

                    <p className="text-muted text-xs leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

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
