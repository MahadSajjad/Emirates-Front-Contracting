import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Eyebrow from "./Eyebrow.jsx";
import Reveal from "../motion/Reveal.jsx";

export const SectionHeading = ({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  description,
  align = "left", // 'left' | 'center' | 'right'
  theme = "light", // 'light' | 'dark'
  className = "",
  maxWidth = "max-w-3xl",
}) => {
  const isDark = theme === "dark";

  // Helper to highlight a specific word in Safety Orange
  const renderTitle = () => {
    if (!highlightWord || !title) return title;

    const parts = title.split(new RegExp(`(${highlightWord})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={index} className="text-cta">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <Reveal direction="up" className={twMerge(clsx("flex flex-col mb-12 md:mb-16", alignClasses[align], maxWidth, className))}>
      {eyebrow && (
        <Eyebrow
          variant={isDark ? "cta" : "cta"}
          className="mb-3"
        >
          {eyebrow}
        </Eyebrow>
      )}

      {title && (
        <h2
          className={clsx(
            "font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-[1.1]",
            isDark ? "text-white" : "text-primary"
          )}
        >
          {renderTitle()}
        </h2>
      )}

      {subtitle && (
        <p
          className={clsx(
            "font-display text-lg sm:text-xl font-medium mt-2 tracking-normal",
            isDark ? "text-alabaster/70" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg leading-relaxed mt-4",
            isDark ? "text-alabaster/80" : "text-muted-dark"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
