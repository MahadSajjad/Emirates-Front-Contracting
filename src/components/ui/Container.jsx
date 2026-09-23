import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Container = ({
  children,
  className = "",
  size = "default", // 'default' | 'narrow' | 'wide' | 'full'
  as = "div",
  ...props
}) => {
  const Component = as;

  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={twMerge(
        clsx(
          "w-full mx-auto px-4 sm:px-6 lg:px-8",
          sizeClasses[size] || sizeClasses.default,
          className
        )
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
