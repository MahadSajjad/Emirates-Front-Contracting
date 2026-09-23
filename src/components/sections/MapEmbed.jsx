import React from "react";
import siteConfig from "../../config/siteConfig.js";

export const MapEmbed = ({
  height = "450px",
  className = "",
  title = "Emirates Front Contracting Location Map",
}) => {
  const primaryLocation = siteConfig.locations[0];

  return (
    <div className={`relative w-full overflow-hidden rounded border border-slate-800 shadow-md bg-slate-950 ${className}`}>
      <iframe
        title={title}
        src={primaryLocation.mapEmbedSrc}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full min-h-[350px] grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
      <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white text-xs font-mono px-3 py-1.5 rounded border border-white/10 backdrop-blur-sm pointer-events-none">
        <span className="text-primary-400 mr-1.5">●</span>
        <span>Riyadh Office Coordinates</span>
      </div>
    </div>
  );
};

export default MapEmbed;
