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
    default: "bg-white text-primary border border-primary/10 shadow-sm",
    dark: "bg-primary-900 text-white border border-white/10 shadow-md",
    outline: "bg-transparent border border-primary/20 text-primary",
    "outline-dark": "bg-transparent border border-white/20 text-white",
    ghost: "bg-alabaster/30 text-primary border border-alabaster-dark/20",
    elevated: "bg-white text-primary border border-primary/10 shadow-lg",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:border-cta/60 hover:shadow-xl hover:-translate-y-1"
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
