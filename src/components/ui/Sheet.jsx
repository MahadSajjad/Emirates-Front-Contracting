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
          "relative ml-auto w-full max-w-sm bg-black text-white shadow-2xl z-10 flex flex-col h-full border-l border-neutral-800 transform transition-transform duration-300 ease-in-out",
          side === "right" ? "animate-fade-in" : ""
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-3.5">
            <img
              src="/logo.png"
              alt="Emirates Front Contracting Logo"
              className="h-16 w-auto object-contain shrink-0 filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
              width="64"
              height="64"
            />
            <div>
              <span className="font-mono text-[10px] text-[#f59e0b] tracking-widest uppercase block font-bold">
                Menu Navigation
              </span>
              <span className="font-display text-base font-extrabold uppercase tracking-tight text-white block">
                {title || "Emirates Front"}
              </span>
              <span className="font-display text-[11px] font-medium text-slate-400 block leading-tight">
                شركة واجهة الامارات للمقاولات
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-900 border border-neutral-700 hover:bg-[#f59e0b] hover:text-slate-950 hover:border-[#f59e0b] text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]"
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
