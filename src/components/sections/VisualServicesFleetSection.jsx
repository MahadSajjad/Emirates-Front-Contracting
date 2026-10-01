import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaArrowRight, FaHardHat } from "react-icons/fa";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Reveal from "../motion/Reveal.jsx";
import Button from "../ui/Button.jsx";

export const VisualServicesFleetSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const servicesData = [
    // -------------------------------------------------------------
    // 1. BUILDING CONSTRUCTION (MAIN SERVICE)
    // -------------------------------------------------------------
    {
      id: "building-construction",
      slug: "building-construction",
      tabCategory: "civil",
      categoryName: "Core Discipline · الخدمة الرئيسية",
      title: "Building Construction",
      titleAr: "أعمال بناء وتشييد المباني (الخدمة الرئيسية)",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
      alt: "Building Construction Riyadh - Emirates Front Contracting",
      badge: "Main Service · الخدمة الرئيسية",
      isMain: true,
      specs: ["Commercial, Residential & Industrial", "Turnkey Superstructures & Shell", "Saudi Building Code (SBC)"],
      description: "Our primary flagship discipline: Turnkey building construction, reinforced concrete foundations, structural framing, exterior envelopes, and architectural finishing in Riyadh.",
    },

    // -------------------------------------------------------------
    // 2. ROADS CONSTRUCTION
    // -------------------------------------------------------------
    {
      id: "roads-construction",
      slug: "roads-construction",
      tabCategory: "civil",
      categoryName: "Infrastructure · إنشاء وسفلتة الطرق",
      title: "Roads Construction",
      titleAr: "إنشاء وسفلتة الطرق والبنية التحتية",
      image: "https://images.unsplash.com/photo-1783753445203-76060b777022?w=1200&auto=format&fit=crop&q=80",
      alt: "Roads Construction and Asphalt Paving Riyadh - Emirates Front Contracting",
      badge: "Infrastructure",
      specs: ["Laser Subgrade & Base Grading", "Hot-Mix Asphalt Paving", "MOT & MOMRA Standards"],
      description: "Comprehensive road building, highway infrastructure, asphalt paving, curbstone installation, and internal compound roads adhering strictly to ministry standards.",
    },

    // -------------------------------------------------------------
    // 3. EXCAVATIONS
    // -------------------------------------------------------------
    {
      id: "excavations",
      slug: "excavations",
      tabCategory: "civil",
      categoryName: "Earthworks · أعمال الحفر والردم",
      title: "Excavations",
      titleAr: "أعمال الحفر والردم وتجهيز الأراضي",
      image: "https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=1200&auto=format&fit=crop",
      alt: "Deep Excavation and Rock Breaking Riyadh - Emirates Front Contracting",
      badge: "Earthworks",
      specs: ["Deep Multi-Level Basements", "Hydraulic Rock Breaking", "Municipality Debris Disposal"],
      description: "Bulk earthmoving, heavy limestone rock breaking, deep basement excavation, trenching, and certified site backfilling using modern hydraulic excavators.",
    },

    // -------------------------------------------------------------
    // 4. TRANSPORT
    // -------------------------------------------------------------
    {
      id: "transport",
      slug: "transport",
      tabCategory: "fleet",
      categoryName: "Logistics · خدمات النقل والشاحنات",
      title: "Transport",
      titleAr: "خدمات النقل واللوجستيات وشاحنات النقل الثقيل",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      alt: "Heavy Equipment Transport Logistics Riyadh - Emirates Front Contracting",
      badge: "TGA Licensed · نقل ثقيل",
      specs: ["TGA Freight License 11/00052742", "Lowbeds & Flatbeds Up to 100T", "Intercity & Riyadh Corridors"],
      description: "Licensed heavy freight transport, lowbed trailers for oversized machinery, 40ft flatbeds for rebar and steel, and fast commercial material haulage across KSA.",
    },

    // -------------------------------------------------------------
    // 5. RENTAL EQUIPMENT
    // -------------------------------------------------------------
    {
      id: "rental-equipment",
      slug: "rental-equipment",
      tabCategory: "fleet",
      categoryName: "Rental Fleet · تأجير أسطول معدات",
      title: "Rental Equipment",
      titleAr: "تأجير المعدات الثقيلة والآليات الإنشائية",
      image: "https://images.unsplash.com/photo-1492168732976-2676c584c675?q=80&w=1200&auto=format&fit=crop",
      alt: "Heavy Equipment Rental Fleet Riyadh - Emirates Front Contracting",
      badge: "Equipment Fleet",
      specs: ["Excavators, Dumpers & Dynas", "Mobile Cranes & Lowbeds", "Daily, Monthly & Annual Leases"],
      description: "Extensive equipment rental inventory dispatched from Exit 18, Haroon Rashid Road, Riyadh. Available bare or with certified third-party approved operators.",
    },

    // -------------------------------------------------------------
    // 6. SUPPLY CONSTRUCTION MATERIAL
    // -------------------------------------------------------------
    {
      id: "supply-construction-material",
      slug: "supply-construction-material",
      tabCategory: "supply",
      categoryName: "Materials · توريد مواد البناء",
      title: "Supply Construction Material",
      titleAr: "توريد مواد البناء والإنشاءات",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      alt: "Construction Materials Supply Riyadh - Emirates Front Contracting",
      badge: "Materials Supply",
      specs: ["Aggregates & Graded Sub-Base", "Washed Sand & Steel Rebar", "SASO & SBC Certified"],
      description: "Bulk supply of certified building materials directly to project sites throughout Riyadh: Graded aggregates, sub-base, sand, steel rebar, and masonry blocks.",
    },

    // -------------------------------------------------------------
    // 7. MANPOWER SUPPLY
    // -------------------------------------------------------------
    {
      id: "manpower-supply",
      slug: "manpower-supply",
      tabCategory: "supply",
      categoryName: "Manpower · توريد الكوادر والعمالة",
      title: "Manpower Supply",
      titleAr: "توريد الكوادر البشرية والعمالة المهنية",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      alt: "Skilled Construction Manpower Supply Riyadh - Emirates Front Contracting",
      badge: "Certified Manpower",
      specs: ["Certified Equipment Operators", "Carpenters, Steel Fixers & Masons", "Qiwa & Ajeer Statutory Compliance"],
      description: "Vetted, skilled, and certified construction workforce: Equipment operators, civil trades, MEP technicians, riggers, and site safety supervisors.",
    },

    // -------------------------------------------------------------
    // 8. SCRAP WORKS
    // -------------------------------------------------------------
    {
      id: "scrap-works",
      slug: "scrap-works",
      tabCategory: "supply",
      categoryName: "Scrap & Metal · أعمال السكراب",
      title: "Scrap Works",
      titleAr: "أعمال السكراب وشراء وإزالة مخلفات المعادن",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
      alt: "Industrial Scrap Metal Clearance and Buying Riyadh - Emirates Front Contracting",
      badge: "Recycling & Salvage",
      specs: ["Industrial Scrap Buying", "Structural Steel Dismantling", "Demolition Rebar Recovery"],
      description: "Specialized industrial scrap metal purchasing, structural steel dismantling, jobsite scrap clearance, rebar recovery, and licensed recycling haulage.",
    },

    // -------------------------------------------------------------
    // 9. PAINT WORKS
    // -------------------------------------------------------------
    {
      id: "paint-works",
      slug: "paint-works",
      tabCategory: "supply",
      categoryName: "Finishing · أعمال الدهانات والطلاء",
      title: "Paint Works",
      titleAr: "أعمال الدهانات والطلاء والتشطيبات المعمارية",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
      alt: "Architectural Painting and Epoxy Flooring Riyadh - Emirates Front Contracting",
      badge: "Finishing & Coating",
      specs: ["Interior & Exterior Coatings", "Industrial Epoxy Floor Systems", "Jotun & Jazeera Premium Specs"],
      description: "Expert architectural painting, weather-shield exterior textured profile coatings, high-durability epoxy floor systems, and anti-corrosion protective coatings.",
    },

    // -------------------------------------------------------------
    // 10. CONSTRUCTION LABORATORY WORK
    // -------------------------------------------------------------
    {
      id: "construction-laboratory-work",
      slug: "construction-laboratory-work",
      tabCategory: "supply",
      categoryName: "Testing · فحوصات المختبر الإنشائي",
      title: "Construction Laboratory Work",
      titleAr: "أعمال المختبرات وفحوصات المواد الإنشائية",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      alt: "Construction Material Testing Laboratory Riyadh - Emirates Front Contracting",
      badge: "Lab & Testing",
      specs: ["Concrete Cube Compressive Tests", "In-Situ Soil Compaction (Nuclear Gauge)", "Stamped SBC Compliance Reports"],
      description: "Certified geotechnical and material testing: Concrete crushing strength, soil Proctor density, asphalt testing, and third-party stamped engineering reports.",
    },

    // -------------------------------------------------------------
    // 11. DIESEL AND PETROL SUPPLY
    // -------------------------------------------------------------
    {
      id: "diesel-petrol-supply",
      slug: "diesel-petrol-supply",
      tabCategory: "fleet",
      categoryName: "Fuel Logistics · توريد الديزل والبنزين",
      title: "Diesel and Petrol Supply",
      titleAr: "توريد الديزل والبنزين والمحروقات للمواقع",
      image: "https://images.unsplash.com/photo-1528457616777-84ce44cc3699?w=1200&auto=format&fit=crop&q=80",
      alt: "24/7 Diesel and Petrol Fuel Supply Riyadh - Emirates Front Contracting",
      badge: "24/7 Fuel Logistics",
      specs: ["Bulk Diesel & Petrol Tankers", "Direct Machine & Generator Delivery", "Digital Metered Dispensers"],
      description: "24/7 direct jobsite fuel supply across Riyadh. Dedicated mobile bowsers and tankers refueling excavators, dumpers, generators, and fleets without downtime.",
    },

    // -------------------------------------------------------------
    // 12. CONTRACTING WORK
    // -------------------------------------------------------------
    {
      id: "contracting-work",
      slug: "contracting-work",
      tabCategory: "civil",
      categoryName: "General Contracting · مقاولات عامة",
      title: "Contracting Work",
      titleAr: "أعمال المقاولات العامة وإدارة المشاريع",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      alt: "General Contracting Work and Project Management Riyadh - Emirates Front Contracting",
      badge: "Turnkey Contracting",
      specs: ["Full Turnkey Project Management", "Civil, Structural & MEP Integration", "SBC & MOMRA Licensed Execution"],
      description: "Full-scope general contracting, civil and structural engineering, MEP infrastructure, and turnkey project management delivering projects from inception to handover.",
    },
  ];

  const filteredItems = activeTab === "all"
    ? servicesData
    : servicesData.filter((item) => item.tabCategory === activeTab);

  return (
    <section className="relative w-full bg-[#f8fafc] py-16 sm:py-24 border-b border-slate-200 overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-lines opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Minimal Text & High Visual Focus */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066b2]/10 border border-[#0066b2]/20 text-[#0066b2] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <FaHardHat className="text-[#f59e0b]" />
                <span>Our Capabilities Directory · 12 Core Services</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
                OUR SERVICES & <span className="text-[#0066b2]">CONTRACTING SCOPES</span>
              </h2>
              <p className="font-display text-base sm:text-lg font-bold text-slate-600 mt-1">
                دليل خدمات ومجالات شركة واجهة الامارات للمقاولات بالرياض
              </p>
            </Reveal>
          </div>

          {/* Interactive Visual Category Tabs */}
          <Reveal direction="up" delay={0.1}>
            <div className="flex items-center bg-white p-1.5 rounded-xl border border-slate-300 shadow-sm self-start md:self-auto overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-2 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shrink-0 ${activeTab === "all"
                  ? "bg-[#0066b2] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                All 12 Services
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("civil")}
                className={`px-3.5 py-2 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-1.5 ${activeTab === "civil"
                  ? "bg-[#f59e0b] text-slate-950 font-black shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                <span>Building & Civil</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("fleet")}
                className={`px-3.5 py-2 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-1.5 ${activeTab === "fleet"
                  ? "bg-[#0066b2] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                <span>Fleet & Fuel</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("supply")}
                className={`px-3.5 py-2 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-1.5 ${activeTab === "supply"
                  ? "bg-[#0066b2] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                <span>Supply, Lab & Paint</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Visual Cards Grid: Large Imagery, Fast Specs, WhatsApp 1-Click Action & Details Link */}
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item) => {
            const itemWhatsAppUrl = buildWhatsAppLink({
              service: item.title,
              message: `Hello Emirates Front Contracting, I am inquiring specifically about ${item.title} (${item.titleAr}) in Riyadh. Please share rates and availability.`,
            });

            return (
              <div
                key={item.id}
                className={`group h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                  item.isMain
                    ? "border-2 border-[#f59e0b] ring-2 ring-[#f59e0b]/20"
                    : "border border-slate-200/90 hover:border-[#0066b2]/50"
                }`}
              >
                {/* Visual Image Banner with Zoom Effect */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2.5 py-1 rounded text-[11px] font-mono font-black uppercase tracking-wider shadow-md ${
                          item.isMain
                            ? "bg-[#f59e0b] text-slate-950"
                            : "bg-[#0066b2] text-white"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Bottom Image Overlay Strip */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-mono text-white/90 truncate">
                      {item.categoryName}
                    </div>
                  </div>

                  {/* Card Content: Headlines & Bullet Badges */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight text-slate-900 group-hover:text-[#0066b2] transition-colors leading-snug">
                        <Link to={`/services/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="font-display text-xs sm:text-sm font-bold text-slate-600 mt-0.5">
                        {item.titleAr}
                      </p>
                    </div>

                    {/* Minimal, punchy spec pills for instant customer understanding */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] sm:text-[11px] text-slate-700 font-medium"
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer: 1-Click WhatsApp Quote + Detail link */}
                <div className="p-5 sm:p-6 pt-0 space-y-2">
                  <Button
                    href={itemWhatsAppUrl}
                    variant="cta"
                    size="sm"
                    icon={FaWhatsapp}
                    iconPosition="left"
                    className="font-bold w-full"
                  >
                    WhatsApp Us
                  </Button>
                  <Link
                    to={`/services/${item.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-1 text-xs font-mono font-bold text-slate-600 hover:text-[#0066b2] transition-colors"
                  >
                    <span>View Specifications & Scope</span>
                    <FaArrowRight className="w-2.5 h-2.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Contact Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#225F98] text-white border border-slate-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-xs text-[#f59e0b] uppercase tracking-widest font-bold">
              Haroon Rashid Road · Sulay Near Exit 18, Riyadh
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              Need custom building contracting or urgent site mobilization?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our site engineers, equipment fleet, and fuel tankers dispatch across Riyadh daily.
            </p>
          </div>

          <Button
            href={buildWhatsAppLink({
              service: "Building Contracting & Fleet Urgent Mobilization",
              message: "Hello Emirates Front Contracting, I have an urgent building contracting / equipment requirement in Riyadh.",
            })}
            variant="cta"
            size="lg"
            icon={FaWhatsapp}
            iconPosition="left"
            className="shrink-0 font-extrabold shadow-lg rounded-xl"
          >
            Direct WhatsApp Yard Line
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisualServicesFleetSection;
