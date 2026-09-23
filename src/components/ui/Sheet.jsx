import React, { useEffect } from "react";
import { clsx } from "clsx";
import { FaTimes } from "react-icons/fa";

export const Sheet = ({ isOpen, onClose, title, children, side = "right" }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet Content Panel */}
      <div
        className={clsx(
          "relative ml-auto w-full max-w-sm bg-primary-900 text-white shadow-2xl z-10 flex flex-col h-full border-l border-white/10 transform transition-transform duration-300 ease-in-out",
          side === "right" ? "animate-fade-in" : ""
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-cta tracking-widest uppercase block">
              Menu Navigation
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-tight text-white">
              {title || "Emirates Front"}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded flex items-center justify-center bg-white/10 hover:bg-cta hover:text-black text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
            aria-label="Close menu"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default Sheet;
