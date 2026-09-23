import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";

export const WhatsAppButton = ({
  message = "Hello Emirates Front, I would like to inquire about your contracting services.",
  service = "Floating Action Inquiry",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = buildWhatsAppLink({
    service,
    message,
  });

  return (
    <aside
      aria-label="Contact via WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3 select-none pointer-events-auto"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Tooltip badge on hover/desktop */}
      <div
        className={`hidden sm:flex items-center bg-primary-900/90 text-white text-xs font-mono font-medium px-3 py-1.5 rounded shadow-lg border border-white/15 backdrop-blur-sm transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span className="text-cta mr-1.5">●</span>
        <span>Chat on WhatsApp</span>
      </div>

      {/* Pulsing button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        aria-label="Direct WhatsApp Chat with Emirates Front Contracting"
      >
        {/* Subtle radar ripple effect */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"
          style={{ animationDuration: "3s" }}
        />

        <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-transform duration-200 group-hover:scale-110" />
      </a>
    </aside>
  );
};

export default WhatsAppButton;
