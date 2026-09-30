import React from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Button from "../ui/Button.jsx";
import Reveal from "../motion/Reveal.jsx";

export const HeroSection = () => {
  const heroWhatsAppUrl = buildWhatsAppLink();

  return (
    <section className="relative w-full bg-[#225F98] text-white overflow-hidden min-h-[100vh] sm:min-h-[100vh] lg:min-h-[85vh] xl:min-h-[88vh] flex items-center lg:items-stretch">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Column: Heading, Subtitle & Actions */}
        <div className="w-full lg:col-span-5 flex flex-col justify-end px-6 sm:px-10 lg:pl-8 lg:pr-8 pt-[120px] pb-4 sm:pt-20 lg:pt-16 space-y-6 z-10">
          <Reveal direction="up" delay={0.15}>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.12] sm:leading-[1.08]">
              BUILDING EXCELLENCE.{" "}
              <br />
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
                className="font-bold w-full sm:w-auto shadow-xl rounded-xl justify-center text-sm sm:text-base py-3.5"
              >
                WhatsApp Us
              </Button>
              <Button
                to="/services"
                variant="outline-light"
                size="md"
                icon={FaArrowRight}
                iconPosition="right"
                className="border-white/30 hover:bg-white/10 text-white w-full sm:w-auto font-semibold rounded-xl justify-center text-sm sm:text-base py-3.5"
              >
                Explore Services
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Hero Image (Visible ONLY on lg+ screens: 100% height, col-span-7, zero blue background) */}
        <div className="hidden lg:flex lg:col-span-7 w-full h-full min-h-full p-0 m-0 items-stretch">
          <div className="relative w-full h-full min-h-full overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
