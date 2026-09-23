import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Eyebrow = ({
  children,
  className = "",
  variant = "cta", // 'cta' | 'primary' | 'muted' | 'light'
  hasDot = true,
  as = "div",
  ...props
}) => {
  const Component = as;

  const variantStyles = {
    cta: "text-cta",
    primary: "text-primary",
    muted: "text-muted",
    light: "text-white/80",
  };

  const dotStyles = {
    cta: "bg-cta",
    primary: "bg-primary",
    muted: "bg-muted",
    light: "bg-cta",
  };

  return (
    <Component
      className={twMerge(
        clsx(
          "inline-flex items-center gap-2 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase select-none",
          variantStyles[variant] || variantStyles.cta,
          className
        )
      )}
      {...props}
    >
      {hasDot && (
        <span
          className={clsx(
            "w-2 h-2 rounded-[1px] inline-block shrink-0",
            dotStyles[variant] || dotStyles.cta
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </Component>
  );
};

export default Eyebrow;
