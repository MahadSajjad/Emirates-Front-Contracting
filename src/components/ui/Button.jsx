import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  icon: Icon,
  iconPosition = "right",
  fullWidth = false,
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 uppercase tracking-wider rounded disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 active:scale-[0.98] select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-slate-950 text-white hover:bg-slate-800 active:bg-black border border-transparent shadow-sm font-bold",
    cta:
      "bg-primary-400 text-slate-950 hover:bg-primary-300 active:bg-primary-500 border border-transparent shadow-md hover:shadow-lg font-bold",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-100 border border-slate-200",
    outline:
      "bg-transparent text-slate-900 border-2 border-slate-800 hover:bg-slate-900 hover:text-white",
    "outline-light":
      "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 text-white",
    "outline-cta":
      "bg-transparent text-primary-400 border border-primary-400 hover:bg-primary-400 hover:text-slate-950",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-100 border border-transparent",
    "ghost-light":
      "bg-transparent text-white hover:bg-white/15 border border-transparent",
  };

  const combinedClasses = twMerge(
    clsx(
      baseStyles,
      sizeStyles[size] || sizeStyles.md,
      variantStyles[variant] || variantStyles.primary,
      fullWidth && "w-full",
      className
    )
  );

  const renderContent = () => (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || (href.startsWith("http") || href.startsWith("https://wa.me") ? "_blank" : undefined)}
        rel={rel || (target === "_blank" || href.startsWith("http") ? "noopener noreferrer" : undefined)}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
