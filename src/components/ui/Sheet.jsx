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
    <div className="fixed inset-0 z-[60] flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet Content Panel (Dark Sidebar) */}
      <div
        className={clsx(
          "relative ml-auto w-full max-w-sm bg-slate-950 text-white shadow-2xl z-10 flex flex-col h-full border-l border-slate-800 transform transition-transform duration-300 ease-in-out",
          side === "right" ? "animate-fade-in" : ""
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/80 bg-slate-900/40">
          <div>
            <span className="font-mono text-xs text-primary-400 tracking-widest uppercase block font-semibold">
              Menu Navigation
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-tight text-white">
              {title || "Emirates Front"}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900 border border-slate-700/60 hover:bg-primary-400 hover:text-slate-950 hover:border-primary-400 text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
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
