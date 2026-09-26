import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import SEO from "../../components/seo/SEO.jsx";
import Section from "../../components/ui/Section.jsx";
import Container from "../../components/ui/Container.jsx";
import Button from "../../components/ui/Button.jsx";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";

export const NotFoundPage = () => {
  const quickWhatsAppUrl = buildWhatsAppLink({
    service: "404 Page Assistant",
    message: "Hello Emirates Front, I was looking for information on your website.",
  });

  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you requested could not be found. Return to Emirates Front Contracting homepage."
        noIndex={true}
      />

      <Section variant="dark" padding="lg" className="min-h-[75vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Link to="/" className="inline-block group focus-visible:outline-none">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-slate-900 border border-slate-700/80 p-2.5 flex items-center justify-center shadow-xl group-hover:border-primary-400 group-hover:scale-105 transition-all">
                <img
                  src="/logo.png"
                  alt="Emirates Front Contracting"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
                  width="80"
                  height="80"
                />
              </div>
            </Link>

            <span className="font-mono text-5xl sm:text-7xl font-extrabold text-primary-400 block tracking-widest">
              404
            </span>

            <h1 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
              Page Not Found / الصفحة غير موجودة
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The contracting scope or page you are looking for might have been relocated or is temporarily unavailable. Use the links below to navigate back.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/"
                variant="cta"
                size="md"
                icon={FaHome}
                iconPosition="left"
              >
                Return to Homepage
              </Button>
              <Button
                to="/services"
                variant="outline-light"
                size="md"
              >
                Browse Services Catalog
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <span className="font-mono text-xs text-white/50 block mb-3">
                Need immediate engineering assistance?
              </span>
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase text-primary-400 hover:text-primary-300 hover:underline"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat directly with Emirates Front on WhatsApp</span>
                <FaArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NotFoundPage;
