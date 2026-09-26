import React from "react";
import SEO from "../../components/seo/SEO.jsx";
import StructuredData from "../../components/seo/StructuredData.jsx";
import HeroSection from "../../components/sections/HeroSection.jsx";
import CraneLiftSection from "../../components/animations/CraneLiftSection.jsx";
import ArchitecturalFeatureSection from "../../components/sections/ArchitecturalFeatureSection.jsx";
import VisualServicesFleetSection from "../../components/sections/VisualServicesFleetSection.jsx";
import WhyUsSection from "../../components/sections/WhyUsSection.jsx";
import TrustStrip from "../../components/sections/TrustStrip.jsx";
import SectorsPreview from "../../components/sections/SectorsPreview.jsx";
import CTASection from "../../components/sections/CTASection.jsx";

export const HomePage = () => {
  return (
    <>
      <SEO
        title="General Contracting & Façade Specialists in Riyadh"
        description="Emirates Front Contracting Company (شركة واجهة الامارات للمقاولات) — Building Envelope & Façade, Civil Superstructures, MEP, and Turnkey Commercial Fit-outs in Riyadh, Saudi Arabia."
        canonical="/"
      />
      <StructuredData type="business" />

      {/* 1. Hero Section with Ambient Construction Infinity Loop */}
      <HeroSection />

      {/* 2. Interactive Scroll-Driven Tower Crane Lifting Section */}
      <CraneLiftSection />

      {/* 3. Signature Architectural Feature Band */}
      <ArchitecturalFeatureSection
        headline="Craftsmanship & Integrity,"
        highlightedText="our standard in contracting"
        headlineAr="الكفاءة والنزاهة والشفافية — معاييرنا الثابتة في إدارة وتنفيذ المشاريع"
        description="A dedicated, honest, and tailored engineering approach driven by the capabilities of our experienced contracting team in Riyadh."
        linkTo="/about"
        linkText="About Our Firm"
      />

      {/* 4. Visual Fleet & Contracting Services Showcase (Images First) */}
      <VisualServicesFleetSection />

      {/* 5. Honest Non-Numeric Trust Strip */}
      <TrustStrip />

      {/* 6. Why Choose Us (6 Value Props) */}
      <WhyUsSection />

      {/* 7. Sectors / Market Capabilities Preview */}
      <SectorsPreview />

      {/* 8. Late-Page Full-Bleed CTA Band */}
      <CTASection
        title="Start Your Project With Emirates Front"
        subtitle="شركة واجهة الامارات للمقاولات — شريكك الموثوق في البناء والتشييد بالرياض"
        description="Reach out directly to our estimating team for prompt scope evaluation, technical bill of quantities (BOQ) review, and transparent contracting proposals."
      />
    </>
  );
};

export default HomePage;
