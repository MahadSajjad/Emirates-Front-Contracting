import React from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

/**
 * Lightweight motion wrapper using LazyMotion + domAnimation
 * Keeps bundle size minimal while providing smooth entrance animations
 */
export const Reveal = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'none'
  className = "",
  threshold = 0.15,
  once = true,
  as = "div",
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 24 };
      case "down":
        return { opacity: 0, y: -24 };
      case "left":
        return { opacity: 0, x: 24 };
      case "right":
        return { opacity: 0, x: -24 };
      case "none":
      default:
        return { opacity: 0 };
    }
  };

  const getTarget = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "none":
      default:
        return { opacity: 1 };
    }
  };

  const MotionTag = m[as] || m.div;

  return (
    <LazyMotion features={domAnimation}>
      <MotionTag
        initial={getInitial()}
        whileInView={getTarget()}
        viewport={{ once, amount: threshold }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Clean ease-out curve
        }}
        className={className}
      >
        {children}
      </MotionTag>
    </LazyMotion>
  );
};

/**
 * Stagger container for lists (e.g., the 01 / 02 / 03 expertise list)
 */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.08,
  className = "",
  as = "div",
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  const MotionTag = m[as] || m.div;

  return (
    <LazyMotion features={domAnimation}>
      <MotionTag
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: staggerDelay,
            },
          },
        }}
        className={className}
      >
        {children}
      </MotionTag>
    </LazyMotion>
  );
};

/**
 * Stagger item child
 */
export const StaggerItem = ({ children, className = "", as = "div" }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  const MotionTag = m[as] || m.div;

  return (
    <MotionTag
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
