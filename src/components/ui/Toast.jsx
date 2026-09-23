import React, { useEffect } from "react";
import { clsx } from "clsx";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";

export const Toast = ({
  message,
  type = "success", // 'success' | 'error' | 'info'
  isOpen,
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const typeConfig = {
    success: {
      bg: "bg-emerald-900 border-emerald-500/50 text-white",
      icon: <FaCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />,
    },
    error: {
      bg: "bg-rose-950 border-rose-500/50 text-white",
      icon: <FaExclamationCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    },
    info: {
      bg: "bg-slate-900 border-primary-500/50 text-white",
      icon: <FaInfoCircle className="w-5 h-5 text-primary-400 shrink-0" />,
    },
  };

  const currentType = typeConfig[type] || typeConfig.success;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-6 z-50 max-w-md w-full px-4 pointer-events-auto">
      <div
        className={clsx(
          "flex items-start gap-3 p-4 rounded border shadow-2xl backdrop-blur-md animate-fade-up",
          currentType.bg
        )}
        role="alert"
      >
        {currentType.icon}
        <div className="flex-1 text-sm font-medium leading-snug">{message}</div>
        <button
          type="button"
          onClick={onClose}
          className="text-white/60 hover:text-white p-1 transition-colors"
          aria-label="Dismiss notification"
        >
          <FaTimes className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
