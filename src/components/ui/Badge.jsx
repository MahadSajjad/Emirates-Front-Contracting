import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Badge = ({
  children,
  variant = "default", // 'default' | 'cta' | 'outline' | 'dark' | 'success' | 'placeholder'
  size = "md",
  className = "",
  ...props
}) => {
  const variantStyles = {
    default: "bg-primary-100 text-primary border border-primary/20",
    cta: "bg-cta/15 text-black font-semibold border border-cta/30",
    outline: "bg-transparent text-primary border border-primary/30",
    dark: "bg-primary-800 text-white border border-white/20",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-300",
    placeholder: "bg-amber-50 text-amber-900 border border-amber-300/80 font-mono",
  };

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5 tracking-wider",
    md: "text-xs px-2.5 py-1 tracking-wider",
    lg: "text-sm px-3.5 py-1.5 tracking-wider",
  };

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1.5 font-mono uppercase rounded-[2px] font-medium select-none",
          variantStyles[variant] || variantStyles.default,
          sizeStyles[size] || sizeStyles.md,
          className
        )
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
