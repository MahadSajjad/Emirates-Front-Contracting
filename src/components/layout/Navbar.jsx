import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { FaWhatsapp, FaBars, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import siteConfig from "../../config/siteConfig.js";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Button from "../ui/Button.jsx";
import Sheet from "../ui/Sheet.jsx";
import { serviceCategories } from "../../data/services.js";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services", hasDropdown: true },
    { name: "Sectors", to: "/sectors" },
    { name: "Contact", to: "/contact" },
  ];

  const quickWhatsAppUrl = buildWhatsAppLink();

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-primary-900/95 backdrop-blur-md shadow-lg py-3.5 border-b border-white/10"
            : "bg-primary py-4 border-b border-white/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded p-1"
          >
            <div className="w-10 h-10 bg-primary-800 border border-cta/60 rounded-lg flex items-center justify-center text-cta font-mono font-bold text-base group-hover:bg-cta group-hover:text-black transition-all shadow-md group-hover:rotate-3">
              EF
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg uppercase tracking-tight text-white group-hover:text-cta transition-colors leading-tight">
                Emirates Front
              </span>
              <span className="font-display text-[11px] font-medium text-cta tracking-wider leading-none">
                شركة واجهة الامارات للمقاولات
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        clsx(
                          "px-3.5 py-2 rounded-md text-xs xl:text-sm font-display font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cta",
                          isActive
                            ? "text-cta bg-white/10"
                            : "text-white/90 hover:text-white hover:bg-white/5"
                        )
                      }
                    >
                      <span>{link.name}</span>
                      <FaChevronDown
                        className={clsx(
                          "w-2.5 h-2.5 transition-transform duration-200",
                          servicesDropdownOpen ? "rotate-180 text-cta" : "text-white/50"
                        )}
                      />
                    </NavLink>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-primary-900 border border-white/15 rounded-xl shadow-2xl py-3 px-2 z-50 animate-fade-in backdrop-blur-md">
                        <div className="px-3 py-1.5 border-b border-white/10 mb-2">
                          <span className="font-mono text-[10px] text-cta uppercase tracking-widest block">
                            Contracting Disciplines
                          </span>
                        </div>
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/services#${cat.id}`}
                            className="block px-3 py-2 rounded-lg text-xs text-white/80 hover:text-white hover:bg-white/10 transition-colors font-display font-semibold"
                          >
                            <span className="text-cta mr-1.5 font-mono">›</span>
                            {cat.name}
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-white/10 px-3">
                          <Link
                            to="/services"
                            className="text-xs font-mono text-cta hover:underline flex items-center justify-between"
                          >
                            <span>View All Scopes</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    clsx(
                      "px-3.5 py-2 rounded-md text-xs xl:text-sm font-display font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cta",
                      isActive
                        ? "text-cta bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/5"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Phone + WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.number}`}
              className="hidden xl:flex items-center gap-2 text-xs font-mono text-white/80 hover:text-cta transition-colors px-2 py-1"
            >
              <FaPhoneAlt className="w-3 h-3 text-cta" />
              <span>{siteConfig.phone.display}</span>
            </a>

            <Button
              href={quickWhatsAppUrl}
              variant="cta"
              size="sm"
              icon={FaWhatsapp}
              iconPosition="left"
              className="shadow-glow-cta font-bold"
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Button
              href={quickWhatsAppUrl}
              variant="cta"
              size="sm"
              icon={FaWhatsapp}
              className="px-2.5 py-1.5 text-xs shadow-md"
            >
              WhatsApp
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg bg-primary-800 text-white hover:text-cta border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
              aria-label="Open mobile navigation"
            >
              <FaBars className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Sheet) */}
      <Sheet
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title="Emirates Front"
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  "px-4 py-3 rounded-lg text-base font-display font-bold uppercase tracking-wider transition-colors",
                  isActive ? "bg-cta text-black font-extrabold" : "text-white hover:bg-white/10"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Services Quick Categories in Mobile */}
        <div className="pt-4 border-t border-white/10">
          <span className="font-mono text-xs text-cta uppercase tracking-widest block mb-3">
            Core Scopes
          </span>
          <div className="space-y-1.5 pl-2">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/services#${cat.id}`}
                className="block text-sm text-white/70 hover:text-white py-1"
              >
                • {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Direct Contact in Mobile Drawer */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <span className="font-mono text-xs text-cta uppercase tracking-widest block">
            Direct Line
          </span>
          <a
            href={`tel:${siteConfig.phone.number}`}
            className="flex items-center gap-3 text-sm text-white hover:text-cta"
          >
            <FaPhoneAlt className="w-4 h-4 text-cta" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-cta text-black font-display font-bold uppercase tracking-wider rounded-lg text-sm shadow-md"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Instant WhatsApp Chat</span>
          </a>
        </div>
      </Sheet>
    </>
  );
};

export default Navbar;
