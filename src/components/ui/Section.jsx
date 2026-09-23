import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Section = ({
  children,
  className = "",
  variant = "white", // 'white' | 'alabaster' | 'dark' | 'black' | 'grid'
  id,
  padding = "default", // 'none' | 'sm' | 'default' | 'lg'
  hairline = "none", // 'none' | 'top' | 'bottom' | 'both'
  as = "section",
  ...props
}) => {
  const Component = as;

  const variantStyles = {
    white: "bg-white text-primary",
    alabaster: "bg-alabaster/40 text-primary",
    "alabaster-solid": "bg-alabaster text-primary",
    dark: "bg-primary text-white",
    black: "bg-black text-white",
    navy: "bg-primary-900 text-white",
    grid: "bg-white text-primary bg-grid-pattern",
    "grid-dark": "bg-primary-900 text-white bg-grid-dark",
  };

  const paddingStyles = {
    none: "py-0",
    sm: "py-8 md:py-12",
    default: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  const hairlineStyles = {
    none: "",
    top: variant.includes("dark") || variant.includes("black") || variant.includes("navy") ? "hairline-dark-t" : "hairline-t",
    bottom: variant.includes("dark") || variant.includes("black") || variant.includes("navy") ? "hairline-dark-b" : "hairline-b",
    both: variant.includes("dark") || variant.includes("black") || variant.includes("navy") ? "hairline-dark-t hairline-dark-b" : "hairline-t hairline-b",
  };

  return (
    <Component
      id={id}
      className={twMerge(
        clsx(
          "relative w-full overflow-hidden",
          variantStyles[variant] || variantStyles.white,
          paddingStyles[padding],
          hairlineStyles[hairline],
          className
        )
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Section;
