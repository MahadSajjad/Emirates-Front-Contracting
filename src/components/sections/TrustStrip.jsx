import React from "react";
import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { trustFacts } from "../../data/features.js";
import Reveal from "../motion/Reveal.jsx";

export const TrustStrip = () => {
  return (
    <Section variant="dark" padding="sm" className="bg-primary-900 border-t border-b border-white/10 relative">
      <Container>
        <Reveal direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {trustFacts.map((fact, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center"
              >
                <span className="font-mono text-[10px] sm:text-xs text-cta uppercase tracking-widest block mb-1 font-semibold">
                  {fact.label}
                </span>
                <span className="font-display text-base sm:text-2xl font-extrabold uppercase text-white tracking-tight block mb-1">
                  {fact.value}
                </span>
                <span className="text-white/70 text-[11px] sm:text-sm leading-snug">
                  {fact.caption}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
};

export default TrustStrip;
