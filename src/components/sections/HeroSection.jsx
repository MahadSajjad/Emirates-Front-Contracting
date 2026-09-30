import React from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Button from "../ui/Button.jsx";
import Reveal from "../motion/Reveal.jsx";

export const HeroSection = () => {
  const heroWhatsAppUrl = buildWhatsAppLink();

  return (
    <section className="relative w-full bg-[#225F98] text-white overflow-hidden min-h-[auto] lg:min-h-[85vh] xl:min-h-[88vh] flex items-stretch">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Column: Heading, Subtitle & Actions (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col justify-end !px-4 !md:px-6 !pb-4 !md:pd-6 pt-20 sm:pt-24 lg:pt-16 space-y-6 z-10">
          <Reveal direction="up" delay={0.15}>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.12] sm:leading-[1.08]">
              BUILDING EXCELLENCE.{" "}
              <span>SHAPING THE</span>
              <span className="text-[#f59e0b] block sm:inline"> FUTURE.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <p className="font-display text-sm sm:text-base lg:text-base xl:text-lg font-bold text-slate-200 tracking-wide leading-relaxed">
              شركة واجهة الامارات للمقاولات — حلول المقاولات العامة وتأجير المعدات والشاحنات الإنشائية
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.35}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Button
                href={heroWhatsAppUrl}
                variant="cta"
                size="md"
                icon={FaWhatsapp}
                iconPosition="right"
                className="font-bold w-full sm:w-auto shadow-xl rounded-xl justify-center text-sm sm:text-base py-3"
              >
                WhatsApp Us
              </Button>
              <Button
                to="/services"
                variant="outline-light"
                size="md"
                icon={FaArrowRight}
                iconPosition="right"
                className="border-white/30 hover:bg-white/10 text-white w-full sm:w-auto font-semibold rounded-xl justify-center text-sm sm:text-base py-3"
              >
                Explore Services
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Hero Image (7 cols on lg, 100% height, zero blue background around image) */}
        <div className="lg:col-span-7 w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-full px-5 sm:px-8 pb-10 sm:pb-12 lg:p-0 flex items-stretch">
          <div className="relative w-full h-full min-h-full overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-none shadow-2xl lg:shadow-none border border-white/10 lg:border-none aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1685708716815-94c588417c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Active Construction Site with Excavators, Tipper Trucks and Heavy Rental Fleet in Riyadh - Emirates Front Contracting"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1200"
              height="800"
            />
            {/* Subtle mobile overlay for enhanced contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent lg:hidden pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
