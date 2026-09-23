import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Eyebrow = ({
  children,
  className = "",
  variant = "primary", // 'cta' | 'primary' | 'muted' | 'light'
  hasDot = true,
  as = "div",
  ...props
}) => {
  const Component = as;

  const variantStyles = {
    cta: "text-primary-400",
    primary: "text-slate-400",
    muted: "text-slate-500",
    light: "text-slate-300",
  };

  const dotStyles = {
    cta: "bg-primary-400",
    primary: "bg-primary-400",
    muted: "bg-slate-400",
    light: "bg-primary-400",
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
