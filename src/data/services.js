/**
 * Services Data Taxonomy
 * All 12 service definitions, scopes, categories, and SEO parameters.
 * Building Construction is designated as the Main Service.
 */

export const serviceCategories = [
  {
    id: "building-contracting",
    name: "Building & General Contracting",
    shortName: "Building & Contracting",
    description: "Turnkey commercial and residential building construction, structural superstructures, and general contracting delivery.",
    highlight: true,
  },
  {
    id: "infrastructure-earthworks",
    name: "Roads & Infrastructure Earthworks",
    shortName: "Roads & Excavation",
    description: "Asphalt road paving, laser-guided sub-base grading, deep basement excavation, and site enablement.",
  },
  {
    id: "logistics-transport",
    name: "Equipment Rental & Heavy Transport",
    shortName: "Rental & Transport",
    description: "Comprehensive plant machinery rental and TGA-licensed heavy freight, lowbed, and flatbed transport.",
  },
  {
    id: "energy-fuel",
    name: "Diesel & Petrol Supply",
    shortName: "Fuel Supply",
    description: "24/7 on-site bulk diesel and petrol delivery, dedicated mobile fuel bowsers, and jobsite tanker fueling.",
    highlight: true,
  },
  {
    id: "materials-manpower",
    name: "Materials & Manpower Supply",
    shortName: "Materials & Manpower",
    description: "Bulk SASO-certified building materials supply and vetted, certified skilled construction manpower deployment.",
  },
  {
    id: "technical-finishing",
    name: "Specialized, Scrap & Lab Works",
    shortName: "Lab, Scrap & Paint",
    description: "Independent construction laboratory testing, industrial scrap metal purchasing, and architectural paint works.",
  },
];

export const services = [
  // ==========================================
  // 1. Building Construction (MAIN SERVICE)
  // ==========================================
  {
    slug: "building-construction",
    title: "Building Construction",
    titleAr: "أعمال بناء وتشييد المباني (الخدمة الرئيسية)",
    isMain: true,
    category: "building-contracting",
    categoryName: "Building & General Contracting",
    icon: "FaBuilding",
    excerpt: "Comprehensive turnkey commercial, residential, and industrial building construction delivered with engineering excellence and Saudi Building Code (SBC) compliance.",
    description: "Emirates Front Contracting delivers premier building construction services across Riyadh and the Kingdom. As our flagship core discipline, we manage turnkey building projects from structural foundations to superstructure casting, architectural finishing, and full project handover. Our qualified engineering teams adhere strictly to the Saudi Building Code (SBC), civil defense safety codes, and modern project management standards to deliver residential complexes, commercial towers, corporate headquarters, and institutional facilities with unmatched precision.",
    bullets: [
      "Full-scope turnkey construction for residential, commercial, and institutional projects",
      "Reinforced concrete framing, raft footings, columns, core walls, and post-tensioned slabs",
      "Exterior building envelope, architectural blockwork, and insulated exterior masonry",
      "Advanced MEP systems integration and coordinated services rough-ins",
      "Strict compliance with Saudi Building Code (SBC) and municipal authority regulations",
      "Rigorous on-site safety management, stage-gate inspections, and quality assurance",
    ],
    specifications: [
      { label: "Structure Types", value: "Reinforced Concrete, Post-Tensioned, Steel Framing" },
      { label: "Project Scope", value: "Full Turnkey, Core & Shell, Structural Framing" },
      { label: "Standards", value: "Saudi Building Code (SBC) & MOMRA Regulations" },
      { label: "Coverage", value: "Riyadh, Central Province & All KSA Regions" },
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    metaTitle: "Building Construction Contractor Riyadh | Emirates Front Contracting",
    metaDescription: "Leading building construction company in Riyadh. Turnkey commercial, residential, and industrial construction adhering to Saudi Building Code (SBC).",
  },

  // ==========================================
  // 2. Roads Construction
  // ==========================================
  {
    slug: "roads-construction",
    title: "Roads Construction",
    titleAr: "إنشاء وسفلتة الطرق والبنية التحتية",
    isMain: false,
    category: "infrastructure-earthworks",
    categoryName: "Roads & Infrastructure Earthworks",
    icon: "FaRoad",
    excerpt: "Complete road construction, highway engineering, asphalt paving, subgrade compaction, and internal network infrastructure across Riyadh.",
    description: "Emirates Front executes end-to-end road construction and municipal infrastructure works across Riyadh and Central Saudi Arabia. From laser-guided sub-base leveling and Proctor density compaction to heavy-duty hot-mix asphalt paving, curbstone installation, and road marking, our experienced crews and modern fleet of motor graders, asphalt pavers, and vibratory rollers ensure durable transportation corridors compliant with MOT and MOMRA specifications.",
    bullets: [
      "Complete site clearing, subgrade preparation, and laser-guided grading",
      "Aggregate base course (ABC) laying, moisture conditioning, and heavy compaction",
      "Hot-mix asphalt concrete (HMAC) wearing and binder course paving",
      "Curbstone, interlock paving, and rainwater drainage culvert installation",
      "Thermoplastic road marking, reflective cat-eyes, and traffic signage erection",
      "Internal compound roads, commercial parking lots, and industrial access highways",
    ],
    specifications: [
      { label: "Paving Types", value: "Hot-Mix Asphalt Concrete (HMAC), Cold Milling & Overlay" },
      { label: "Equipment", value: "Asphalt Pavers, Heavy Tandem & Pneumatic Rollers, Motor Graders" },
      { label: "Compliance", value: "MOT (Ministry of Transport) & MOMRA Standards" },
      { label: "Density Target", value: ">98% MDD Compaction Verification" },
    ],
    image: "https://images.unsplash.com/photo-1783753445203-76060b777022?w=1200&auto=format&fit=crop&q=80",
    metaTitle: "Roads Construction & Asphalt Paving Riyadh | Emirates Front",
    metaDescription: "Professional road construction, asphalt paving, grading, and infrastructure contractor in Riyadh. MOT & MOMRA compliant road works by Emirates Front.",
  },

  // ==========================================
  // 3. Excavations
  // ==========================================
  {
    slug: "excavations",
    title: "Excavations",
    titleAr: "أعمال الحفر والردم وتجهيز الأراضي",
    isMain: false,
    category: "infrastructure-earthworks",
    categoryName: "Roads & Infrastructure Earthworks",
    icon: "FaTractor",
    excerpt: "Deep basement excavations, rock breaking, trenching, bulk earthworks, and site leveling with high-capacity crawler excavators.",
    description: "We provide professional bulk earthmoving and deep excavation services tailored to Riyadh's demanding limestone geology. Equipped with heavy 20T to 45T hydraulic excavators, high-impact hydraulic rock breakers, and high-capacity tippers, Emirates Front handles deep multi-level basement excavation, foundation pits, pipe trenching, and backfilling with licensed debris disposal in accordance with Riyadh Municipality regulations.",
    bullets: [
      "Bulk earth and rock excavation for multi-level basements and high-rise foundations",
      "Heavy hydraulic rock breaking and hard limestone trenching",
      "Laser-controlled site leveling, pad preparation, and slope stabilization",
      "Municipal-approved disposal of excavated spoils and rock debris",
      "Trenching for underground utilities, drainage pipelines, and electrical conduits",
      "Shoring and retention wall coordination for safe deep excavation perimeters",
    ],
    specifications: [
      { label: "Fleet", value: "20T - 45T Hydraulic Excavators with Heavy Rock Breakers" },
      { label: "Applications", value: "Multi-Basement Pits, Utility Trenches, Land Levelling" },
      { label: "Disposal", value: "Licensed Municipality Dumping Sites & Manifest Clearance" },
      { label: "Depth Capability", value: "Engineered Deep Foundations & Open Bulk Cuts" },
    ],
    image: "https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=1200&auto=format&fit=crop",
    metaTitle: "Bulk Excavation & Rock Breaking Contractor Riyadh | Emirates Front",
    metaDescription: "Heavy basement excavation, limestone rock breaking, trenching, and bulk earthmoving services in Riyadh by Emirates Front Contracting.",
  },

  // ==========================================
  // 4. Transport
  // ==========================================
  {
    slug: "transport",
    title: "Transport",
    titleAr: "خدمات النقل واللوجستيات وشاحنات النقل الثقيل",
    isMain: false,
    category: "logistics-transport",
    categoryName: "Equipment Rental & Heavy Transport",
    icon: "FaTruckMoving",
    excerpt: "Licensed heavy freight transport, lowbed trailers, flatbeds, and bulk tippers licensed by the Transport General Authority (TGA).",
    description: "Holding official Transport General Authority (TGA) Road Freight License No. 11/00052742, Emirates Front operates a reliable commercial transportation fleet across Riyadh and intercity Saudi corridors. We provide heavy lowbed transporters for oversized machinery, flatbed trailers for structural steel and pre-cast concrete, 3-ton Dyna trucks for rapid materials dispatch, and multi-axle tippers for aggregate haulage.",
    bullets: [
      "Officially licensed under TGA Road Freight License (11/00052742)",
      "Heavy lowbed trailer transport for oversized plant machinery and heavy equipment",
      "Flatbed trailer haulage for rebar, structural steel, and precast concrete elements",
      "High-capacity tipper trucks for bulk sand, aggregate, and sub-base transport",
      "Fast-dispatch 3-ton Dyna trucks and box pickups for localized site distribution",
      "Comprehensive GPS tracking, transit insurance, and experienced licensed drivers",
    ],
    specifications: [
      { label: "License", value: "TGA Road Freight License 11/00052742" },
      { label: "Fleet Types", value: "Lowbeds (Up to 100T), Flatbeds (40ft), 3T Dynas, Tippers" },
      { label: "Coverage", value: "Riyadh Province, Eastern Province & All Saudi Transport Hubs" },
      { label: "Service", value: "Single Trip Dispatch or Long-Term Project Logistics Contracts" },
    ],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    metaTitle: "Heavy Transport & Freight Logistics Riyadh | Emirates Front (TGA Licensed)",
    metaDescription: "TGA licensed heavy transport, lowbed trailers, flatbeds, and tipper haulage in Riyadh. Safe, reliable equipment and freight transport across KSA.",
  },

  // ==========================================
  // 5. Rental Equipment
  // ==========================================
  {
    slug: "rental-equipment",
    title: "Rental Equipment",
    titleAr: "تأجير المعدات الثقيلة والآليات الإنشائية",
    isMain: false,
    category: "logistics-transport",
    categoryName: "Equipment Rental & Heavy Transport",
    icon: "FaTruck",
    excerpt: "Comprehensive heavy plant machinery rental: Excavators, Dumpers, Dynas, Pickups, Trailers, and Mobile Cranes with flexible leases.",
    description: "Operating from our central dispatch yard near Exit 18 on Haroon Rashid Road, Al Sulay, Riyadh, Emirates Front offers an extensive rental inventory of heavy construction machinery. Available on daily, weekly, monthly, or annual contracts, our well-maintained plant fleet is available bare or with certified, experienced operators to keep your construction timeline ahead of schedule.",
    bullets: [
      "Crawler and wheel hydraulic excavators (20T-45T) with rock breakers and buckets",
      "Heavy tipper dump trucks (16m³ to 32m³) for earthmoving and site clearance",
      "Mobile hydraulic cranes (25T to 100T) and boom trucks with certified riggers",
      "Commercial 3-ton Dyna trucks and 4x4 site inspection pickups",
      "Heavy lowbed and flatbed trailers for equipment mobilization",
      "Flexible commercial lease terms: daily, monthly, and long-term project leases",
    ],
    specifications: [
      { label: "Fleet Units", value: "Excavators, Dumpers, Dynas, Pickups, Lowbeds, Cranes" },
      { label: "Rental Terms", value: "Daily, Weekly, Monthly & Multi-Year Project Leases" },
      { label: "Operator", value: "Bare Rental or With Certified Third-Party Approved Operators" },
      { label: "Yard Location", value: "Haroon Rashid Road, Exit 18, Al Sulay, Riyadh" },
    ],
    image: "https://images.unsplash.com/photo-1492168732976-2676c584c675?q=80&w=1200&auto=format&fit=crop",
    metaTitle: "Heavy Equipment Rental Riyadh | Excavators, Dumpers, Cranes & Dynas",
    metaDescription: "Comprehensive heavy equipment and vehicle rental in Riyadh. Excavators, tippers, dynas, pickups, and cranes available 24/7 by Emirates Front.",
  },

  // ==========================================
  // 6. Supply Construction Material
  // ==========================================
  {
    slug: "supply-construction-material",
    title: "Supply Construction Material",
    titleAr: "توريد مواد البناء والإنشاءات",
    isMain: false,
    category: "materials-manpower",
    categoryName: "Materials & Manpower Supply",
    icon: "FaBoxes",
    excerpt: "Direct bulk supply of SASO-certified construction materials: Aggregates, sub-base, sand, ready-mix concrete, steel rebar, and masonry blocks.",
    description: "Emirates Front provides dependable bulk supply of certified building materials directly to project sites throughout Riyadh. Leveraging direct partnerships with premier Saudi quarries, steel mills, and ready-mix batching plants, we supply graded aggregates, sub-base materials, structural steel rebar, red and concrete blocks, cement, and quality-assured ready-mix concrete on scheduled delivery manifests.",
    bullets: [
      "High-grade sub-base material (Class A & B), aggregate base course, and granular fill",
      "Washed sand, red sand, and bedding materials delivered in bulk tippers",
      "SASO-certified structural steel rebar (Grade 60) cut and bent to specifications",
      "Quality ready-mix concrete supply coordinated with certified batching plants",
      "Thermal insulated blocks, AAC lightweight blocks, and solid masonry units",
      "Timely delivery manifests and material test certifications provided with every batch",
    ],
    specifications: [
      { label: "Materials", value: "Aggregates, Sub-Base, Sand, Steel Rebar, Ready-Mix, Blocks" },
      { label: "Standards", value: "SASO & Saudi Building Code (SBC) Certified" },
      { label: "Delivery", value: "Bulk Multi-Axle Tippers, Flatbeds, and Transit Mixers" },
      { label: "Verification", value: "Complete Mill Test Certificates & Quarry Batch Sheets" },
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    metaTitle: "Construction Materials Supply Riyadh | Aggregates, Sand, Steel & Blocks",
    metaDescription: "Bulk supply of SASO certified construction materials in Riyadh: Sub-base, sand, aggregates, structural steel, and concrete blocks by Emirates Front.",
  },

  // ==========================================
  // 7. Manpower Supply
  // ==========================================
  {
    slug: "manpower-supply",
    title: "Manpower Supply",
    titleAr: "توريد الكوادر البشرية والعمالة المهنية",
    isMain: false,
    category: "materials-manpower",
    categoryName: "Materials & Manpower Supply",
    icon: "FaUsers",
    excerpt: "Certified skilled labor and technical site workforce: Equipment operators, carpenters, masons, steel fixers, electricians, and supervisors.",
    description: "Emirates Front supplies vetted, skilled, and certified construction manpower to major contractors and infrastructure projects across Riyadh. We provide certified heavy equipment operators, skilled shuttering carpenters, steel fixers, masonry workers, painters, MEP technicians, certified riggers, and site HSE officers on flexible short-term and long-term supply arrangements with complete statutory compliance.",
    bullets: [
      "Certified heavy equipment and crane operators with valid Saudi licenses",
      "Skilled civil trades: Shuttering carpenters, rebar steel fixers, and masonry craftsmen",
      "MEP technicians: Certified electricians, plumbers, duct fitters, and welders",
      "Professional site support: HSE safety officers, surveyors, and field supervisors",
      "Full statutory compliance with Saudi labor laws, Qiwa, and insurance coverage",
      "Rapid mobilization for peak construction phases, shutdowns, and fast-track schedules",
    ],
    specifications: [
      { label: "Trades", value: "Operators, Carpenters, Steel Fixers, Masons, Electricians, Riggers" },
      { label: "Compliance", value: "Qiwa Certified, Ajeer Approved, GOSI & Medical Insurance" },
      { label: "Mobilization", value: "Rapid Deployment to Greater Riyadh & Industrial Sites" },
      { label: "Terms", value: "Short-Term Shutdowns, Monthly Contracts, or Full Project Duration" },
    ],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    metaTitle: "Skilled Construction Manpower Supply Riyadh | Emirates Front",
    metaDescription: "Reliable supply of certified skilled construction labor in Riyadh. Equipment operators, carpenters, steel fixers, masons, and technicians.",
  },

  // ==========================================
  // 8. Scrap Works
  // ==========================================
  {
    slug: "scrap-works",
    title: "Scrap Works",
    titleAr: "أعمال السكراب وشراء وإزالة مخلفات المعادن",
    isMain: false,
    category: "technical-finishing",
    categoryName: "Specialized, Scrap & Lab Works",
    icon: "FaRecycle",
    excerpt: "Professional scrap metal purchasing, industrial dismantling, rebar recovery, site metal clearance, and licensed recycling disposal.",
    description: "Emirates Front provides specialized industrial scrap handling, metal purchasing, and structural demolition salvage across Riyadh. We buy and safely dismantle decommissioned steel structures, redundant pipelines, demolition rebar, machinery scrap, aluminum, copper, and industrial plant surplus. Our licensed recycling operations ensure safe site clearance and competitive market valuations for all metal assets.",
    bullets: [
      "Purchasing and haulage of ferrous and non-ferrous industrial scrap metal",
      "Demolition scrap clearance, rebar extraction, and sorting on project sites",
      "Safe dismantling and cutting of obsolete steel structures, tanks, and pipelines",
      "Modern metal cutting equipment, mobile magnet cranes, and scrap transport tippers",
      "Environmental and municipality compliant transport and recycling disposal",
      "Transparent weighing, prompt evaluation, and competitive commercial contracts",
    ],
    specifications: [
      { label: "Materials", value: "Heavy Structural Steel, Rebar, Copper, Aluminum, Industrial Plant Scrap" },
      { label: "Capabilities", value: "On-Site Oxy-Fuel Cutting, Crane Lifting, Scrap Bulk Haulage" },
      { label: "Permitting", value: "Municipality & Environmental Recycling Compliance" },
      { label: "Payment", value: "Transparent Weighbridge Verification & Prompt Settlement" },
    ],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    metaTitle: "Industrial Scrap Works & Metal Buying Riyadh | Emirates Front",
    metaDescription: "Scrap metal buying, structural steel dismantling, rebar salvage, and industrial site metal clearance in Riyadh by Emirates Front Contracting.",
  },

  // ==========================================
  // 9. Paint Works
  // ==========================================
  {
    slug: "paint-works",
    title: "Paint Works",
    titleAr: "أعمال الدهانات والطلاء والتشطيبات المعمارية",
    isMain: false,
    category: "technical-finishing",
    categoryName: "Specialized, Scrap & Lab Works",
    icon: "FaPaintRoller",
    excerpt: "Interior and exterior architectural painting, exterior textured profile coatings, epoxy flooring, and industrial protective coatings.",
    description: "Emirates Front delivers expert architectural painting and surface coating solutions for commercial buildings, residential developments, and industrial facilities. Utilizing certified premium coatings from leading brands like Jotun and Jazeera, our skilled painters apply multi-coat interior emulsions, weather-resistant exterior textured coatings, high-durability epoxy floor systems, and anti-corrosive industrial coatings engineered for Saudi Arabia's climate.",
    bullets: [
      "Comprehensive interior surface preparation, skimming, putty, and emulsion topcoats",
      "Weatherproof exterior profile and textured acrylic coatings (graffiato, heritage)",
      "Heavy-duty epoxy floor coatings for warehouses, workshops, and parking garages",
      "Anti-carbonation and protective sealants for exposed civil concrete structures",
      "Fire-retardant (intumescent) and anti-corrosive coatings for structural steelwork",
      "Color consultation, sample mock-ups, and flawless airless spray application",
    ],
    specifications: [
      { label: "Coatings", value: "Interior Emulsion, Exterior Texture, Epoxy Flooring, Intumescent" },
      { label: "Brands", value: "Jotun, Jazeera Paints, National Paints (SASO Approved)" },
      { label: "Surface Prep", value: "Mechanical Grinding, Pressure Washing, Crack Repair, Primer" },
      { label: "Applications", value: "Towers, Villas, Showrooms, Warehouses & Car Parks" },
    ],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
    metaTitle: "Architectural Painting & Epoxy Coating Contractors Riyadh | Emirates Front",
    metaDescription: "Professional interior painting, exterior texture coatings, and industrial epoxy flooring services in Riyadh by Emirates Front Contracting.",
  },

  // ==========================================
  // 10. Construction Laboratory Work
  // ==========================================
  {
    slug: "construction-laboratory-work",
    title: "Construction Laboratory Work",
    titleAr: "أعمال المختبرات وفحوصات المواد الإنشائية",
    isMain: false,
    category: "technical-finishing",
    categoryName: "Specialized, Scrap & Lab Works",
    icon: "FaFlask",
    excerpt: "Independent geotechnical and construction material testing: Concrete cube crushing, soil compaction, asphalt quality, and SASO certification.",
    description: "Quality and structural integrity depend on rigorous empirical verification. Emirates Front provides on-site field testing and certified laboratory material analysis for construction projects across Riyadh. We conduct slump tests, concrete compressive strength cube crushing (7 & 28-day), soil Proctor compaction tests, plate load tests, asphalt density checks, and aggregate sieve grading to ensure full compliance with the Saudi Building Code (SBC) and project specifications.",
    bullets: [
      "Fresh concrete sampling, slump testing, and certified temperature monitoring",
      "Laboratory compressive strength cube crushing tests (at 7, 14, and 28 days)",
      "In-situ soil compaction testing using nuclear density gauges and sand cone methods",
      "Standard and Modified Proctor compaction and plate load testing (MDD > 95%)",
      "Asphalt core extraction, asphalt density analysis, and bitumen content testing",
      "Comprehensive formal test reports stamped for consultant and municipal approvals",
    ],
    specifications: [
      { label: "Testing Scopes", value: "Concrete, Soil, Sub-Base, Asphalt, Steel Rebar, Aggregates" },
      { label: "Standards", value: "ASTM, AASHTO, SASO, and Saudi Building Code (SBC)" },
      { label: "Deliverables", value: "Certified Third-Party Stamped Test Certificates" },
      { label: "Field Testing", value: "On-Site Slump & Nuclear Density Field Units Available" },
    ],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    metaTitle: "Construction Material Testing & Laboratory Services Riyadh | Emirates Front",
    metaDescription: "Certified construction laboratory testing in Riyadh: Concrete cube testing, soil compaction, asphalt analysis, and SASO compliance reports.",
  },

  // ==========================================
  // 11. Diesel and Petrol Supply
  // ==========================================
  {
    slug: "diesel-petrol-supply",
    title: "Diesel and Petrol Supply",
    titleAr: "توريد الديزل والبنزين والمحروقات للمواقع",
    isMain: false,
    category: "energy-fuel",
    categoryName: "Diesel & Petrol Supply",
    icon: "FaGasPump",
    excerpt: "24/7 on-site bulk diesel and petrol delivery, dedicated mobile fuel bowsers, and tanker logistics powering project machinery with zero downtime.",
    description: "Emirates Front provides dependable, round-the-clock on-site fuel supply and certified petroleum logistics across Riyadh and surrounding industrial zones. Operating certified fuel bowsers and high-capacity road tankers, we deliver Aramco-specification diesel and petrol directly to your jobsite, refueling excavators, dumpers, generators, cranes, and vehicle fleets with metered accuracy, eliminating equipment downtime and maximizing productivity.",
    bullets: [
      "24/7 direct jobsite bulk diesel and petrol delivery across Riyadh projects",
      "High-capacity mobile fuel bowsers and certified road tankers (10,000L to 32,000L)",
      "Direct top-up of site power generators, tower lights, and stationary plant machinery",
      "SASO-compliant fuel quality verification and certified digital metered dispensers",
      "Scheduled daily or weekly contracted fuel delivery routes for major developments",
      "Emergency rapid-dispatch fuel mobilization from our yard near Exit 18, Al Sulay",
    ],
    specifications: [
      { label: "Delivery Fleet", value: "Mobile Fuel Bowsers, 10,000L - 32,000L Certified Road Tankers" },
      { label: "Fuel Grades", value: "Saudi Aramco Spec Diesel & High-Grade Commercial Petrol" },
      { label: "Metering", value: "Calibrated Digital Flow Meters with Verified Delivery Slips" },
      { label: "Availability", value: "24/7 Rapid Mobilization & Scheduled Contract Routes" },
    ],
    image: "https://images.unsplash.com/photo-1528457616777-84ce44cc3699?w=1200&auto=format&fit=crop&q=80",
    metaTitle: "On-Site Diesel & Petrol Supply Riyadh | Emirates Front (24/7 Fuel Logistics)",
    metaDescription: "24/7 direct jobsite diesel and petrol supply in Riyadh. Certified fuel bowsers and tankers refueling heavy machinery, generators, and fleets without downtime.",
  },

  // ==========================================
  // 12. Contracting Work
  // ==========================================
  {
    slug: "contracting-work",
    title: "Contracting Work",
    titleAr: "أعمال المقاولات العامة وإدارة المشاريع",
    isMain: false,
    category: "building-contracting",
    categoryName: "Building & General Contracting",
    icon: "FaHardHat",
    excerpt: "Full-scope general contracting, civil and structural engineering, MEP infrastructure, and turnkey project management across Saudi Arabia.",
    description: "As a licensed Saudi general contracting company, Emirates Front undertakes comprehensive turnkey contracting packages across civil, structural, electromechanical, and infrastructure disciplines. We coordinate site mobilization, engineering submittals, procurement, structural execution, MEP rough-ins, architectural fit-outs, and authority sign-offs under a unified, accountable management structure that delivers on time and within budget.",
    bullets: [
      "End-to-end general contracting and comprehensive turnkey project execution",
      "Project planning, engineering submittals, shop drawings, and authority approvals",
      "Civil and structural execution from deep foundations to structural superstructure",
      "Integrated MEP engineering: Electrical distribution, HVAC, plumbing, and low-current",
      "Specialized industrial facility construction, warehouses, and structural expansions",
      "Transparent project reporting, BOQ pricing, and dedicated site supervision",
    ],
    specifications: [
      { label: "Scope", value: "Turnkey General Contracting, Core & Shell Packages, Civil & MEP" },
      { label: "Classification", value: "Certified Saudi General Contracting Firm (CR: 2050172727)" },
      { label: "Standards", value: "Saudi Building Code (SBC) & MOMRA Municipal Guidelines" },
      { label: "Sectors", value: "Commercial, Residential, Industrial, Infrastructure & Logistics" },
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    metaTitle: "General Contracting & Turnkey Civil Engineering Riyadh | Emirates Front",
    metaDescription: "Turnkey general contracting and project management in Riyadh. Comprehensive civil, structural, MEP, and industrial contracting by Emirates Front.",
  },
];

export const getServiceBySlug = (slug) => {
  return services.find((s) => s.slug === slug);
};

export const getServicesByCategory = (categoryId) => {
  return services.filter((s) => s.category === categoryId);
};

export default services;
