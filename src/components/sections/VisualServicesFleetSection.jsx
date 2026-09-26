import React, { useState } from "react";
import { FaWhatsapp, FaArrowRight, FaTruck, FaHardHat, FaCheckCircle, FaFilter } from "react-icons/fa";
import { buildWhatsAppLink } from "../../lib/leadCapture.js";
import Reveal from "../motion/Reveal.jsx";
import Button from "../ui/Button.jsx";

export const VisualServicesFleetSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const servicesData = [
    // -------------------------------------------------------------
    // PRIORITY 1: ON-SITE FUEL SUPPLY & DIESEL LOGISTICS
    // -------------------------------------------------------------
    {
      id: "fuel-supply",
      category: "rental",
      categoryName: "Fuel Logistics · توريد المحروقات والديزل",
      title: "On-Site Fuel Supply & Diesel Logistics",
      titleAr: "توريد الديزل والوقود للمواقع الإنشائية والمشاريع",
      image: "https://images.unsplash.com/photo-1528457616777-84ce44cc3699?w=800&auto=format&fit=crop&q=80",
      alt: "On-Site Fuel Supply and Diesel Logistics Riyadh - Emirates Front Contracting",
      badge: "Primary Service · توريد محروقات",
      specs: ["Bulk Diesel & Fuel Tankers", "Direct Machine & Generator Delivery", "24/7 Rapid Riyadh Mobilization"],
      description: "Direct jobsite diesel delivery, mobile fuel bowsers, and dedicated tankers fueling excavators, dumpers, generators, and vehicle fleets without project downtime.",
    },
    // -------------------------------------------------------------
    // PRIORITY 2: FULL FLEET VEHICLE RENTAL & HIRING
    // -------------------------------------------------------------
    {
      id: "full-fleet",
      category: "rental",
      categoryName: "Rental Fleet · تأجير أسطول متكامل",
      title: "Full Fleet Vehicle Rental & Equipment Hiring",
      titleAr: "تأجير أسطول المعدات والآليات والشاحنات الكامل",
      image: "https://images.unsplash.com/photo-1492168732976-2676c584c675?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Full Fleet Vehicle Rental and Equipment Hiring Riyadh - Emirates Front Contracting",
      badge: "Top-Tier Fleet · أسطول متكامل",
      specs: ["Excavators, Dumpers & Pickups", "3-Ton Dynas, Trailers & Cranes", "Daily, Monthly & Annual Contracts"],
      description: "Comprehensive vehicle and heavy plant equipment rental fleet across Riyadh and KSA. Certified machinery supplied with or without expert operators on flexible commercial terms.",
    },
    // -------------------------------------------------------------
    // RENTAL FLEET (CAR & TRUCK RENTALS)
    // -------------------------------------------------------------
    {
      id: "excavators",
      category: "rental",
      categoryName: "Rental Fleet · تأجير معدات",
      title: "Crawler & Wheel Excavators",
      titleAr: "حفارات جنزير وبوكلاين ثقيل",
      image: "https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Excavator Rental in Riyadh - Emirates Front Contracting",
      badge: "Heavy Machinery",
      specs: ["20T to 45T Crawlers", "With Certified Operator", "Daily & Monthly Leases"],
      description: "Hydraulic crawler excavators and rock breakers for deep foundation digging, trenching, and site bulk excavation in Riyadh.",
    },
    {
      id: "dumpers",
      category: "rental",
      categoryName: "Rental Fleet · تأجير معدات",
      title: "Heavy Dump Trucks & Tippers",
      titleAr: "قلابات وشاحنات نقل الردميات",
      image: "https://images.unsplash.com/photo-1622645636770-11fbf0611463?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Dump Truck Fleet Rental Riyadh - Emirates Front Contracting",
      badge: "Heavy Transport",
      specs: ["16m³ to 32m³ Capacity", "Multi-Axle Heavy Haulers", "Bulk Earth Clearance"],
      description: "High-volume dumpers and tippers for bulk soil removal, backfilling haulage, and site aggregate clearance across Riyadh projects.",
    },
    {
      id: "pickups-3ton",
      category: "rental",
      categoryName: "Rental Fleet · تأجير معدات",
      title: "3-Ton Pickups & Dyna Trucks",
      titleAr: "شاحنات دينا ونقل خفيف 3 طن",
      image: "data:image/jpeg;base64,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",
      alt: "3 Ton Pickup Dyna Fleet Riyadh - Emirates Front Contracting",
      badge: "Commercial Logistics",
      specs: ["3-Ton Load Capacity", "Flatbed & Box Dynas", "Rapid Riyadh Mobilization"],
      description: "Fast-dispatch commercial 3-ton trucks and Dynas for rapid jobsite materials, tools, and MEP distribution inside Riyadh.",
    },
    {
      id: "pickups-site",
      category: "rental",
      categoryName: "Rental Fleet · تأجير معدات",
      title: "Jobsite Pickups & Utility Fleet",
      titleAr: "سيارات بيك اب ومواقع ميدانية",
      image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&q=80",
      alt: "Pickups and Field Utility Fleet Riyadh - Emirates Front Contracting",
      badge: "Field Vehicles",
      specs: ["Single & Double Cabs", "4x4 Heavy Duty", "Site Crew & Inspection"],
      description: "Dedicated pickup vehicles for engineers, surveying crews, and fast tool transit across industrial and civil project sites.",
    },
    {
      id: "trailers",
      category: "rental",
      categoryName: "Rental Fleet · تأجير معدات",
      title: "Heavy Trailers & Lowbed Transporters",
      titleAr: "تريلات وسطحات ولوبد لنقل المعدات",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
      alt: "Heavy Equipment Trailer Lowbed Riyadh - Emirates Front Contracting",
      badge: "Heavy Haulage",
      specs: ["Lowbeds & Flatbed Trailers", "Oversized Load Capable", "Intercity Transport KSA"],
      description: "Specialized lowbeds and heavy flatbed trailers designed for safe transport of plant machinery, pre-cast units, and steel.",
    },
    {
      id: "cranes",
      category: "rental",
      categoryName: "Rental Fleet · تأجير معدات",
      title: "Mobile & Tower Cranes",
      titleAr: "كرينات ورافعات هيدروليكية وبرجية",
      image: "https://images.unsplash.com/photo-1677354371002-7a6c38c992e6?q=80&w=760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Mobile Crane Rental Riyadh - Emirates Front Contracting",
      badge: "Lifting Plant",
      specs: ["25T to 100T Mobile Cranes", "Boom Trucks & Tower Cranes", "Certified Rigger Teams"],
      description: "Yellow hydraulic mobile cranes and tower cranes for precision high-rise erection, heavy cassette glazing, and structural lifting.",
    },

    // -------------------------------------------------------------
    // PROFESSIONAL CONTRACTING SERVICES
    // -------------------------------------------------------------
    {
      id: "road-building",
      category: "contracting",
      categoryName: "Contracting Scope · مقاولات عامة",
      title: "Road Building & Asphalt Paving",
      titleAr: "إنشاء وسفلتة الطرق والبنية التحتية",
      image: "https://images.unsplash.com/photo-1783753445203-76060b777022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fFJvYWQlMjBCdWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Road Construction and Asphalt Paving Riyadh - Emirates Front Contracting",
      badge: "Infrastructure",
      specs: ["Laser Sub-Base Grading", "Asphalt Laying & Rollers", "Traffic Signs & Marking"],
      description: "Full-scope road construction, subgrade compaction, asphalt laying, and internal compound roads adhering strictly to MOT / MOMRA standards.",
    },
    {
      id: "villas",
      category: "contracting",
      categoryName: "Contracting Scope · مقاولات عامة",
      title: "Villa & Residential Complexes",
      titleAr: "إنشاء الفلل والقصور السكنية والمجمعات",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury Villa Construction Riyadh - Emirates Front Contracting",
      badge: "Turnkey Civil",
      specs: ["Structural Superstructure", "Turnkey Finishing & Fit-Out", "Saudi Building Code (SBC)"],
      description: "End-to-end villa construction from excavation and raft foundations to high-end architectural façades and interior fit-outs in Riyadh.",
    },
    {
      id: "street-lights",
      category: "contracting",
      categoryName: "Contracting Scope · مقاولات عامة",
      title: "Street Lighting & Electrical Works",
      titleAr: "شبكات إنارة الشوارع وتمديدات الكهرباء",
      image: "https://images.unsplash.com/photo-1597502310092-31cdaa35b46d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Street Light and Electrical Contracting Riyadh - Emirates Front Contracting",
      badge: "Electromechanical",
      specs: ["High-Mast Lighting Poles", "Underground Cabling & Ducts", "Distribution Feeders & LED"],
      description: "Complete electrical infrastructure, street light pole erection, highway lighting networks, and low-voltage distribution panels.",
    },
    {
      id: "concrete",
      category: "contracting",
      categoryName: "Contracting Scope · مقاولات عامة",
      title: "Civil Concrete & Superstructures",
      titleAr: "الأعمال الخرسانية والهياكل الإنشائية",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Civil Concrete Superstructures Riyadh - Emirates Front Contracting",
      badge: "Civil Engineering",
      specs: ["Reinforced Footings & Slabs", "Retaining Walls & Basements", "SASO Certified Ready-Mix"],
      description: "Engineered reinforced concrete casting, post-tensioned slabs, structural shear walls, and commercial foundations with certified testing.",
    },

  ];

  const filteredItems = activeTab === "all"
    ? servicesData
    : servicesData.filter((item) => item.category === activeTab);

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
                <span>Visual Fleet & Scope Directory</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
                OUR FLEET & <span className="text-[#0066b2]">CONTRACTING SCOPES</span>
              </h2>
              <p className="font-display text-base sm:text-lg font-bold text-slate-600 mt-1">
                دليل المعدات والشاحنات وخدمات المقاولات العامة بالرياض
              </p>
            </Reveal>
          </div>

          {/* Interactive Visual Category Tabs */}
          <Reveal direction="up" delay={0.1}>
            <div className="flex items-center bg-white p-1.5 rounded-xl border border-slate-300 shadow-sm self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-2 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${activeTab === "all"
                  ? "bg-[#0066b2] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                All Scopes ({servicesData.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("rental")}
                className={`px-3.5 py-2 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${activeTab === "rental"
                  ? "bg-[#f59e0b] text-slate-950 font-black shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                <span>Fleet Rentals & Fuel Supply</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("contracting")}
                className={`px-3.5 py-2 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${activeTab === "contracting"
                  ? "bg-[#0066b2] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                <span>Contracting Works</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Visual Cards Grid: Large Imagery, Fast Specs, WhatsApp 1-Click Action */}
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item) => {
            const itemWhatsAppUrl = buildWhatsAppLink({
              service: item.title,
              message: `Hello Emirates Front Contracting, I am inquiring specifically about ${item.title} (${item.titleAr}) in Riyadh. Please share rates and availability.`,
            });

            const isRental = item.category === "rental";

            return (
              <div
                key={item.id}
                className="group h-full bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#0066b2]/50 transition-all duration-300 flex flex-col justify-between"
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
                        className={`px-2.5 py-1 rounded text-[11px] font-mono font-black uppercase tracking-wider shadow-md ${isRental
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
                        {item.title}
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

                {/* Card Action Footer: 1-Click WhatsApp Quote */}
                <div className="p-5 sm:p-6 pt-0">
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
              Need custom machinery or urgent project mobilization?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our yard fleet and site supervisors dispatch excavators, dumpers, trailers, and crews across Riyadh daily.
            </p>
          </div>

          <Button
            href={buildWhatsAppLink({
              service: "Fleet & Contracting Urgent Mobilization",
              message: "Hello Emirates Front Contracting, I have an urgent machinery rental / contracting requirement in Riyadh.",
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
    </section >
  );
};

export default VisualServicesFleetSection;
