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
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 uppercase tracking-wider rounded disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 active:scale-[0.98] select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-800 active:bg-primary-900 border border-transparent shadow-sm",
    cta:
      "bg-cta text-black hover:bg-cta-hover active:bg-cta-dark border border-transparent shadow-md hover:shadow-lg font-bold",
    secondary:
      "bg-alabaster text-primary hover:bg-alabaster-dark active:bg-alabaster border border-alabaster-dark/40",
    outline:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
    "outline-light":
      "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 text-white",
    "outline-cta":
      "bg-transparent text-cta border border-cta hover:bg-cta hover:text-black",
    ghost:
      "bg-transparent text-primary hover:bg-primary/10 border border-transparent",
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
