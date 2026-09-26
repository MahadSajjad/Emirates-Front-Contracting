import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import siteConfig from "../../config/siteConfig.js";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import { serviceCategories } from "../../data/services.js";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerWhatsAppUrl = buildWhatsAppLink();

  return (
    <footer className="bg-[#f8fafc] text-slate-800 border-t border-slate-200/90 pt-16 pb-12 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 bg-white border border-slate-200 rounded-xl p-1 flex items-center justify-center shadow-sm group-hover:border-primary-500 transition-all shrink-0">
                <img
                  src="/logo.png"
                  alt="Emirates Front Contracting Company Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  width="44"
                  height="44"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg uppercase tracking-tight text-slate-900 block group-hover:text-primary-600 transition-colors">
                  Emirates Front
                </span>
                <span className="font-display text-xs font-semibold text-slate-500 tracking-wider block">
                  شركة واجهة الامارات للمقاولات
                </span>
              </div>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Riyadh-based general contracting delivering building envelopes, civil engineering superstructures, electromechanical systems, and commercial fit-outs across Saudi Arabia.
            </p>

            <div className="pt-2">
              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider hover:bg-primary-300 transition-colors shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Procurement</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Sectors & Capabilities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Contact & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Scopes (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-widest">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/services#${cat.id}`}
                    className="text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary-600 text-xs">›</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Riyadh Contact & Direct Lines (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-widest">
              Riyadh Head Office
            </h4>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                <span>Riyadh, Kingdom of Saudi Arabia</span>
              </div>

              <div className="flex items-center gap-2.5">
                <FaPhoneAlt className="w-4 h-4 text-primary-600 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.number}`}
                  className="hover:text-primary-600 transition-colors font-mono"
                >
                  {siteConfig.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <FaEnvelope className="w-4 h-4 text-primary-600 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary-600 transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-1 text-xs text-slate-500 font-mono">
                {siteConfig.workingHours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {siteConfig.name} ({siteConfig.nameAr}). All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] text-slate-500">
            <span>Riyadh · Kingdom of Saudi Arabia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
