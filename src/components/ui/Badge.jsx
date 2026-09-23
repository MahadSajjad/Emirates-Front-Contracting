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
    default: "bg-slate-100 text-slate-800 border border-slate-200",
    cta: "bg-primary-500/15 text-primary-400 font-semibold border border-primary-400/30",
    outline: "bg-transparent text-slate-700 border border-slate-300",
    dark: "bg-slate-900 text-white border border-slate-700",
    success: "bg-slate-100 text-slate-800 border border-slate-300",
    placeholder: "bg-slate-100 text-slate-700 border border-slate-300 font-mono",
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
