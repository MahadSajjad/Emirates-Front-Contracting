import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Card = ({
  children,
  className = "",
  variant = "default", // 'default' | 'dark' | 'outline' | 'ghost' | 'elevated'
  hoverEffect = true,
  as = "div",
  ...props
}) => {
  const Component = as;

  const variantStyles = {
    default: "bg-white text-slate-900 border border-slate-200 shadow-sm",
    dark: "bg-slate-900 text-white border border-slate-800 shadow-md",
    outline: "bg-transparent border border-slate-200 text-slate-900",
    "outline-dark": "bg-transparent border border-white/20 text-white",
    ghost: "bg-slate-50 text-slate-900 border border-slate-100",
    elevated: "bg-white text-slate-900 border border-slate-200 shadow-lg",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:border-slate-400 hover:shadow-xl hover:-translate-y-1"
    : "";

  return (
    <Component
      className={twMerge(
        clsx(
          "rounded overflow-hidden p-6",
          variantStyles[variant] || variantStyles.default,
          hoverStyles,
          className
        )
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
