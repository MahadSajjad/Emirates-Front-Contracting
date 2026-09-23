import React, { useState } from "react";
import { clsx } from "clsx";
import { FaChevronDown } from "react-icons/fa";

export const AccordionItem = ({
  title,
  subtitle,
  children,
  isOpen,
  onToggle,
  index,
}) => {
  return (
    <div className="border-b border-primary/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-4 sm:py-5 flex items-center justify-between text-left gap-4 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cta"
        aria-expanded={isOpen}
      >
        <div>
          {subtitle && (
            <span className="block font-mono text-xs text-cta uppercase mb-0.5 tracking-wider">
              {subtitle}
            </span>
          )}
          <span className="font-display font-bold text-base sm:text-lg uppercase tracking-tight text-primary group-hover:text-cta transition-colors">
            {title}
          </span>
        </div>
        <div
          className={clsx(
            "w-8 h-8 rounded shrink-0 flex items-center justify-center bg-primary-100 group-hover:bg-cta group-hover:text-black transition-all duration-200",
            isOpen ? "rotate-180 bg-cta text-black" : "text-primary"
          )}
        >
          <FaChevronDown className="w-3.5 h-3.5" />
        </div>
      </button>
      {isOpen && (
        <div className="pb-5 pt-1 text-muted-dark text-sm sm:text-base leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion = ({ items = [], allowMultiple = false, className = "" }) => {
  const [openIndexes, setOpenIndexes] = useState([0]); // First open by default

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={clsx("divide-y divide-primary/10 border-t border-b border-primary/10", className)}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          index={idx}
          title={item.title}
          subtitle={item.subtitle}
          isOpen={openIndexes.includes(idx)}
          onToggle={() => handleToggle(idx)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
