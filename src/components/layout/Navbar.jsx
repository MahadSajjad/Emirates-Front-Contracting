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
          "fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 border-b border-white/10",
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
            : "bg-slate-950"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded p-1 shrink-0"
          >
            <div className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-primary-400 font-mono font-bold text-base group-hover:bg-primary-400 group-hover:text-slate-950 transition-all shadow-md group-hover:rotate-3">
              EF
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg uppercase tracking-tight text-white group-hover:text-primary-400 transition-colors leading-tight">
                Emirates Front
              </span>
              <span className="font-display text-[11px] font-medium text-slate-400 tracking-wider leading-none">
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
                          "px-3.5 py-2 rounded-md text-xs xl:text-sm font-display font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400",
                          isActive
                            ? "text-primary-400 bg-white/10"
                            : "text-white/90 hover:text-white hover:bg-white/5"
                        )
                      }
                    >
                      <span>{link.name}</span>
                      <FaChevronDown
                        className={clsx(
                          "w-2.5 h-2.5 transition-transform duration-200",
                          servicesDropdownOpen ? "rotate-180 text-primary-400" : "text-white/50"
                        )}
                      />
                    </NavLink>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl py-3 px-2 z-50 animate-fade-in backdrop-blur-md">
                        <div className="px-3 py-1.5 border-b border-white/10 mb-2">
                          <span className="font-mono text-[10px] text-primary-400 uppercase tracking-widest block">
                            Contracting Disciplines
                          </span>
                        </div>
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/services#${cat.id}`}
                            className="block px-3 py-2 rounded-lg text-xs text-white/80 hover:text-white hover:bg-white/10 transition-colors font-display font-semibold"
                          >
                            <span className="text-primary-400 mr-1.5 font-mono">›</span>
                            {cat.name}
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-white/10 px-3">
                          <Link
                            to="/services"
                            className="text-xs font-mono text-primary-400 hover:underline flex items-center justify-between"
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
                      "px-3.5 py-2 rounded-md text-xs xl:text-sm font-display font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400",
                      isActive
                        ? "text-primary-400 bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/5"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Phone + WhatsApp CTA + Tablet/Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Phone (Desktop xl only) */}
            <a
              href={`tel:${siteConfig.phone.number}`}
              className="hidden xl:flex items-center gap-2 text-xs font-mono text-white/80 hover:text-primary-400 transition-colors px-2 py-1"
            >
              <FaPhoneAlt className="w-3 h-3 text-primary-400" />
              <span>{siteConfig.phone.display}</span>
            </a>

            {/* WhatsApp CTA (Visible on Tablet and Desktop, hidden on Mobile) */}
            <div className="hidden sm:block">
              <Button
                href={quickWhatsAppUrl}
                variant="cta"
                size="sm"
                icon={FaWhatsapp}
                iconPosition="left"
                className="font-bold"
              >
                WhatsApp Us
              </Button>
            </div>

            {/* Menu Button (Visible on Mobile AND Tablet: lg:hidden) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 text-white hover:text-primary-400 border border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 flex items-center gap-1.5"
              aria-label="Open navigation menu"
            >
              <FaBars className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-mono font-bold uppercase tracking-wider text-white/80">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Natural document flow spacer for fixed header (strictly constant 72px) */}
      <div className="h-[72px] w-full shrink-0" aria-hidden="true" />

      {/* Mobile Menu Drawer (Sheet) */}
      <Sheet
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title="Emirates Front"
      >
        <div className="flex flex-col gap-1.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                clsx(
                  "px-4 py-3 rounded-lg text-base font-display font-bold uppercase tracking-wider transition-all",
                  isActive
                    ? "bg-primary-400 text-slate-950 font-extrabold shadow-md"
                    : "text-slate-200 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Services Quick Categories in Mobile */}
        <div className="pt-4 border-t border-slate-800">
          <span className="font-mono text-xs text-primary-400 uppercase tracking-widest block mb-3 font-semibold">
            Core Scopes
          </span>
          <div className="space-y-1.5 pl-2">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/services#${cat.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-300 hover:text-white py-1 transition-colors"
              >
                • {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Direct Contact in Mobile Drawer */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <span className="font-mono text-xs text-primary-400 uppercase tracking-widest block font-semibold">
            Direct Line
          </span>
          <a
            href={`tel:${siteConfig.phone.number}`}
            className="flex items-center gap-3 text-sm text-slate-200 hover:text-primary-400 transition-colors"
          >
            <FaPhoneAlt className="w-4 h-4 text-primary-400" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary-400 text-slate-950 font-display font-bold uppercase tracking-wider rounded-lg text-sm shadow-md hover:bg-primary-300 transition-colors"
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
