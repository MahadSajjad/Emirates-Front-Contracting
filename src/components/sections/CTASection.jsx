import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import siteConfig from "../../config/siteConfig.js";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../motion/Reveal.jsx";

export const CTASection = ({
  title = "Ready to Build Your Project Front in Riyadh?",
  subtitle = "جاهزون للبدء في مشروعك — تواصل مباشرة مع فريقنا الهندسي",
  description = "Connect with our procurement and estimating team today for direct consultations, scope reviews, and transparent pricing across civil, MEP, and façade packages.",
}) => {
  const ctaWhatsAppUrl = buildWhatsAppLink();

  return (
    <section className="relative w-full bg-primary-950 text-white overflow-hidden py-20 md:py-28">
      {/* Background with lighter slate-blue gradient overlay & blueprint lines */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/95 to-primary-900/90" />
        <div className="absolute inset-0 bg-steel-truss opacity-30" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-cta" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-white/90">
                Direct Procurement Access
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4">
              {title}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="font-display text-base sm:text-lg text-cta font-medium mb-6">
              {subtitle}
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
              {description}
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
              <Button
                href={ctaWhatsAppUrl}
                variant="cta"
                size="lg"
                icon={FaWhatsapp}
                iconPosition="left"
                className="w-full sm:w-auto shadow-glow-cta hover:scale-105 transition-transform"
              >
                Inquire via WhatsApp
              </Button>
              <Button
                to="/contact"
                variant="outline-light"
                size="lg"
                className="w-full sm:w-auto"
              >
                Request Scope Call
              </Button>
            </div>
          </Reveal>

          {/* Direct channels */}
          <Reveal direction="up" delay={0.6}>
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-white/70 font-mono">
              <a
                href={`tel:${siteConfig.phone.number}`}
                className="flex items-center gap-2 hover:text-cta transition-colors"
              >
                <FaPhoneAlt className="w-3.5 h-3.5 text-cta" />
                <span>{siteConfig.phone.display}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-cta transition-colors"
              >
                <FaEnvelope className="w-3.5 h-3.5 text-cta" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
