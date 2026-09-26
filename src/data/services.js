/**
 * Services Data Taxonomy
 * All service definitions, scopes, categories, and SEO parameters.
 * 
 * NOTE: All service scopes and descriptions are DRAFT — confirm with client.
 * Building Envelope & Façade is given prominent hierarchy reflecting the company's Arabic name (واجهة).
 */

export const serviceCategories = [
  {
    id: "fleet-fuel",
    name: "Fleet Rental & Fuel Supply",
    shortName: "Fleet & Fuel Supply",
    description: "24/7 on-site diesel logistics and full fleet rental (excavators, dumpers, pickups, 3-ton dynas, trailers & cranes).",
    highlight: true,
  },
  {
    id: "facade",
    name: "Building Envelope & Façade",
    shortName: "Façade & Cladding",
    description: "Architectural envelope engineering, curtain walls, modern ACP cladding, and weatherproofing.",
    highlight: true, // Prominence flag
  },
  {
    id: "civil",
    name: "Civil & Structural",
    shortName: "Civil & Structural",
    description: "Robust structural foundations, reinforced concrete, masonry, and full-scale expansions.",
  },
  {
    id: "mep",
    name: "MEP Engineering",
    shortName: "MEP Solutions",
    description: "Integrated mechanical, electrical, plumbing, and low-current infrastructure systems.",
  },
  {
    id: "finishing",
    name: "Finishing & Fit-Out",
    shortName: "Fit-Out & Finishing",
    description: "High-spec architectural finishes, interior drywall, flooring, and turnkey commercial fit-outs.",
  },
  {
    id: "earthworks",
    name: "Earthworks & Site Logistics",
    shortName: "Earthworks & Logistics",
    description: "Bulk excavation, land grading, soil compaction, and site enablement operations.",
  },
  {
    id: "industrial",
    name: "Industrial & Maintenance",
    shortName: "Industrial & Maintenance",
    description: "Pre-engineered steel structures, industrial facilities, and ongoing civil maintenance.",
  },
];

export const services = [
  // ==========================================
  // Primary Focus: Fuel Supply & Full Fleet Rental
  // ==========================================
  {
    slug: "fuel-supply-diesel-logistics",
    title: "On-Site Fuel Supply & Diesel Logistics",
    titleAr: "توريد الديزل والوقود للمواقع الإنشائية والمشاريع",
    category: "fleet-fuel",
    categoryName: "Fleet Rental & Fuel Supply",
    icon: "FaTruck",
    excerpt: "Direct jobsite diesel delivery, mobile fuel bowsers, and dedicated fuel tankers fueling heavy equipment without project downtime.",
    description: "Emirates Front delivers uninterrupted on-site fuel supply and certified diesel logistics across Riyadh and Saudi Arabia. Our dedicated fuel bowsers and high-capacity tankers supply heavy plant machinery, power generators, tippers, and vehicle fleets directly at the project site.",
    bullets: [
      "24/7 direct jobsite bulk diesel delivery and fueling",
      "High-capacity mobile fuel bowsers and certified road tankers",
      "Direct generator and plant machinery top-ups with zero downtime",
      "SASO-compliant fuel quality verification and certified metered pumps",
      "Scheduled daily/weekly fuel delivery routes across Riyadh projects",
      "Emergency fuel dispatch from our central yard near Exit 18, As Sulay",
    ],
    specifications: [
      { label: "Delivery Fleet", value: "Mobile Fuel Bowsers, 10,000L - 32,000L Road Tankers" },
      { label: "Fuel Grade", value: "SASO Certified High-Grade Saudi Aramco Spec Diesel" },
      { label: "Coverage", value: "Greater Riyadh, Industrial Cities & Remote KSA Corridors" },
      { label: "Availability", value: "24/7 Rapid Mobilization & Scheduled Contract Routes" },
    ],
    image: "https://images.unsplash.com/photo-1528457616777-84ce44cc3699?w=800&auto=format&fit=crop&q=80",
    metaTitle: "On-Site Fuel Supply & Diesel Delivery Riyadh | Emirates Front",
    metaDescription: "24/7 direct jobsite fuel supply, bulk diesel delivery, and mobile tanker fueling for heavy equipment in Riyadh by Emirates Front.",
  },
  {
    slug: "fleet-vehicle-rental-hiring",
    title: "Full Fleet Vehicle Rental & Equipment Hiring",
    titleAr: "تأجير أسطول المعدات والآليات والشاحنات الكامل",
    category: "fleet-fuel",
    categoryName: "Fleet Rental & Fuel Supply",
    icon: "FaTruck",
    excerpt: "Comprehensive vehicle and heavy plant equipment rental: Excavators, Dumpers, 3-Ton Pickups, Trailers, and Cranes.",
    description: "Emirates Front operates an extensive, modern vehicle and heavy machinery rental fleet based at our yard on Haroon Rashid Road, Exit 18, Riyadh. We offer hydraulic excavators, heavy tipper dumpers, 3-ton pickups and Dyna box trucks, lowbed trailers, and 25T-100T mobile cranes on daily, monthly, or annual operational contracts.",
    bullets: [
      "Crawler & wheel hydraulic excavators (20T to 45T) with rock breakers",
      "Heavy tipper dump trucks (16m³ to 32m³) for earth clearance & backfill",
      "Commercial 3-ton Dyna trucks and flatbeds for fast materials distribution",
      "Field utility pickups (4x4 single/double cab) for site engineers and crews",
      "Heavy lowbed transporters and flatbed trailers for oversized machinery",
      "Certified 25T to 100T mobile hydraulic cranes with certified riggers",
    ],
    specifications: [
      { label: "Fleet Lineup", value: "Excavators, Dumpers, 3T Dynas, Pickups, Lowbeds, Cranes" },
      { label: "Rental Terms", value: "Daily, Weekly, Monthly & Annual Project Leases" },
      { label: "Crew Option", value: "Bare Equipment or With Certified Experienced Operators" },
      { label: "Mobilization", value: "Immediate Dispatch from Haroon Rashid Road, Exit 18 Yard" },
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    metaTitle: "Equipment & Vehicle Rental Fleet Riyadh | Emirates Front Contracting",
    metaDescription: "Heavy equipment and vehicle rental in Riyadh: Excavators, Dumpers, 3-Ton Dynas, Pickups, Trailers, and Cranes by Emirates Front.",
  },

  // ==========================================
  // Category 1: Building Envelope & Façade
  // ==========================================
  {
    slug: "curtain-wall-cladding",
    title: "Curtain Wall & Cladding",
    titleAr: "أنظمة واجهات الزجاج والكلادينج",
    category: "facade",
    categoryName: "Building Envelope & Façade",
    icon: "FaBuilding",
    excerpt: "Engineered architectural curtain wall systems and high-durability exterior cladding engineered for Riyadh's climate.",
    // DRAFT — confirm with client
    description: "Emirates Front delivers architectural curtain wall installations and building envelope cladding. From unitized glass facades to exterior rainscreens, our envelope solutions are engineered to withstand extreme thermal variations, solar radiation, and wind loads common in central Saudi Arabia.",
    bullets: [
      "Unitized and stick curtain wall system assembly",
      "Thermally broken aluminum sub-frame engineering",
      "High-performance low-E and acoustic glazing integration",
      "Exterior ventilated rainscreen installations",
      "Complete perimeter flashing and silicone weather sealing",
      "Compliance with Saudi Building Code (SBC) energy standards",
    ],
    specifications: [
      { label: "Applications", value: "Commercial Towers, Corporate HQs, Retail Centers" },
      { label: "Glazing Types", value: "Double/Triple Glazed Low-E, Laminated, Tinted" },
      { label: "Sub-structure", value: "Extruded Aluminum 6063-T6 / Galvanized Steel" },
      { label: "Quality Standard", value: "ASTM & SBC compliant structural testing" },
    ],
    image: "/images/services/curtain-wall.jpg",
    metaTitle: "Curtain Wall & Architectural Cladding in Riyadh | Emirates Front",
    metaDescription: "Professional curtain wall and exterior cladding contracting in Riyadh. Energy-efficient glass facades and premium building envelopes by Emirates Front.",
  },
  {
    slug: "glass-facade-systems",
    title: "Glass Façade Systems",
    titleAr: "أنظمة الواجهات الزجاجية",
    category: "facade",
    categoryName: "Building Envelope & Façade",
    icon: "FaLayerGroup",
    excerpt: "Frameless, spider, and structural glass assemblies delivering expansive transparency and clean architectural lines.",
    // DRAFT — confirm with client
    description: "Specialized glass facade engineering offering spider-fitting glass walls, tension-rod systems, and point-fixed structural glazing. Designed to maximize natural daylight while optimizing thermal insulation in commercial and institutional developments.",
    bullets: [
      "Spider-fitting point-supported glass facades",
      "Structural silicone glazed (SSG) curtain systems",
      "Suspended glass walls and skylight canopies",
      "Tempered, heat-strengthened, and laminated safety glass",
      "Sun-shading louvers and integrated brise-soleil",
    ],
    specifications: [
      { label: "System Types", value: "Point-Fixed, Spider, 2-Sided / 4-Sided SSG" },
      { label: "Hardware", value: "Grade 316 Stainless Steel Castings & Tension Rods" },
      { label: "Safety Rating", value: "Impact resistant & thermal safety compliant" },
    ],
    image: "/images/services/glass-facade.jpg",
    metaTitle: "Glass Façade Systems Contracting Riyadh | Emirates Front",
    metaDescription: "Structural glass facades, spider-glazing systems, and architectural glass canopies engineered for commercial properties in Riyadh.",
  },
  {
    slug: "aluminum-composite-panels",
    title: "Aluminum & Composite Panels (ACP)",
    titleAr: "ألواح الألمنيوم المركبة (الكلادينج)",
    category: "facade",
    categoryName: "Building Envelope & Façade",
    icon: "FaThLarge",
    excerpt: "Fire-rated ACP cladding, solid aluminum cassettes, and custom perforated decorative facade panels.",
    // DRAFT — confirm with client
    description: "Supply and precision installation of fire-rated (Class A2/B1) Aluminum Composite Panels (ACP) and solid sheet aluminum rainscreens. Ideal for modern commercial facades, showroom refurbishments, and industrial frontages requiring crisp finishes and low maintenance.",
    bullets: [
      "Fire-resistant mineral core ACP (FR/A2 rated)",
      "PVDF multi-layer surface coatings with UV resistance",
      "CNC grooving, routing, and precision corner folding",
      "Hidden fastener and hung-tray installation systems",
      "Custom laser-cut perforated decorative screens and mashrabiyas",
    ],
    specifications: [
      { label: "Panel Thickness", value: "4mm – 6mm with 0.5mm aluminum skin" },
      { label: "Fire Rating", value: "Class A2 / B1 compliant (Civil Defense approved)" },
      { label: "Coating", value: "70% Kynar 500 / PVDF resin finish" },
    ],
    image: "/images/services/acp-cladding.jpg",
    metaTitle: "Aluminum Composite Panel (ACP) Cladding Riyadh | Emirates Front",
    metaDescription: "Fire-rated ACP panel installation and aluminum facade cladding in Riyadh. Quality fabrication and installation by Emirates Front Contracting.",
  },
  {
    slug: "waterproofing-systems",
    title: "Waterproofing & Envelope Sealing",
    titleAr: "العزل المائي والحراري للمباني",
    category: "facade",
    categoryName: "Building Envelope & Façade",
    icon: "FaShieldAlt",
    excerpt: "Comprehensive roof membrane systems, basement tanking, and structural joint weatherproofing.",
    // DRAFT — confirm with client
    description: "Multi-tier waterproofing and thermal barrier solutions for building envelopes, foundations, wet areas, and flat roofs. We apply bituminous, cementitious, liquid polyurethane, and EPDM membrane systems to safeguard structural longevity.",
    bullets: [
      "SBS and APP modified bituminous torch-applied membranes",
      "Polyurethane liquid elastomeric roof coatings",
      "Sub-structure foundation tanking and damp-proofing",
      "Expansion joint sealants and waterstops",
      "Extruded polystyrene (XPS) rigid thermal roof insulation",
    ],
    specifications: [
      { label: "Membranes", value: "Torch-on Bitumen (4mm), PVC, EPDM, Liquid PU" },
      { label: "Testing", value: "48-72 hour flood testing prior to handover" },
      { label: "Warranty Focus", value: "Long-term membrane integrity protection" },
    ],
    image: "/images/services/waterproofing.jpg",
    metaTitle: "Waterproofing & Roof Insulation Contractor Riyadh | Emirates Front",
    metaDescription: "Commercial and residential waterproofing, roof membrane insulation, and foundation damp-proofing in Riyadh.",
  },

  // ==========================================
  // Category 2: Civil & Structural
  // ==========================================
  {
    slug: "civil-construction",
    title: "Civil Work & General Contracting",
    titleAr: "أعمال المقاولات العامة والإنشاءات المدنية",
    category: "civil",
    categoryName: "Civil & Structural",
    icon: "FaHardHat",
    excerpt: "Comprehensive turnkey civil engineering and structural execution for residential, commercial, and institutional projects.",
    // DRAFT — confirm with client
    description: "Emirates Front oversees end-to-end civil contracting operations in Riyadh. From setting out and foundations to superstructure delivery, we coordinate site execution with strict adherence to local building regulations, safety standards, and project schedules.",
    bullets: [
      "Complete site mobilization and temporary utility setup",
      "Excavation, backfilling, and sub-base preparation",
      "Cast-in-situ concrete foundations and retaining walls",
      "Superstructure concrete framing and masonry",
      "Civil defense and municipality regulatory coordination",
    ],
    specifications: [
      { label: "Scope", value: "Turnkey General Contracting & Shell Package" },
      { label: "Standard", value: "Saudi Building Code (SBC) Standards" },
      { label: "Project Types", value: "Commercial, Residential, Light Industrial" },
    ],
    image: "/images/services/civil-works.jpg",
    metaTitle: "Civil Contracting & General Construction Riyadh | Emirates Front",
    metaDescription: "Reliable civil contracting, foundations, and turnkey general construction services across Riyadh and Central KSA.",
  },
  {
    slug: "concrete-structural-work",
    title: "Concrete & Structural Work",
    titleAr: "الأعمال الخرسانية والإنشائية",
    category: "civil",
    categoryName: "Civil & Structural",
    icon: "FaCube",
    excerpt: "Reinforced concrete foundations, raft footings, columns, core walls, and post-tensioned / solid slab systems.",
    // DRAFT — confirm with client
    description: "Heavy structural concrete execution utilizing modern formwork systems and quality-controlled ready-mix batches. We construct isolated footings, combined rafts, concrete columns, lift cores, retaining structures, and suspended slabs.",
    bullets: [
      "Raft and isolated foundation reinforcement and casting",
      "Heavy rebar cutting, bending, and placement per structural drawings",
      "System formwork (timber, steel, and aluminum modular shutters)",
      "Strict temperature-controlled hot-weather concreting procedures",
      "Third-party slump and compressive strength cube test management",
    ],
    specifications: [
      { label: "Concrete Grades", value: "C25 to C50 Ready-Mix with certified additives" },
      { label: "Rebar", value: "High-yield deformed steel bars (Grade 60)" },
      { label: "Quality Check", value: "Independent 7 & 28-day laboratory cube testing" },
    ],
    image: "/images/services/concrete-structural.jpg",
    metaTitle: "Reinforced Concrete & Structural Work Riyadh | Emirates Front",
    metaDescription: "Expert reinforced concrete, raft foundations, and superstructure casting in Riyadh. Reliable structural execution.",
  },
  {
    slug: "block-work-masonry",
    title: "Block Work & Brick Masonry",
    titleAr: "أعمال البلوك والمباني",
    category: "civil",
    categoryName: "Civil & Structural",
    icon: "FaBorderAll",
    excerpt: "High-precision hollow, solid, insulated, and AAC block masonry for internal partitions and exterior perimeter walls.",
    // DRAFT — confirm with client
    description: "Systematic masonry construction using insulated thermal blocks, standard hollow concrete blocks, lightweight Autoclaved Aerated Concrete (AAC), and sound-dampening acoustic bricks, complete with lintels, ties, and wire mesh reinforcement.",
    bullets: [
      "Thermal insulated blockwork for exterior envelope efficiency",
      "AAC lightweight block wall construction for interior divisions",
      "Galvanized block ties, ladder mesh, and expansion gap installation",
      "Precast and cast-in-place reinforced concrete lintels and stiffeners",
      "Perimeter boundary walls and security fencing foundations",
    ],
    specifications: [
      { label: "Block Types", value: "Insulated Thermal, Hollow Concrete, AAC, Solid" },
      { label: "Reinforcement", value: "Galvanized wire mesh every two courses" },
    ],
    image: "/images/services/block-work.jpg",
    metaTitle: "Block Work & Masonry Contractors Riyadh | Emirates Front",
    metaDescription: "Precision block work, thermal insulated exterior masonry, and internal partitioning contractor in Riyadh.",
  },
  {
    slug: "renovations-extensions",
    title: "Renovations & Structural Extensions",
    titleAr: "الترميم والتوسعات الإنشائية",
    category: "civil",
    categoryName: "Civil & Structural",
    icon: "FaTools",
    excerpt: "Structural retrofits, building modernizations, mezzanine additions, and spatial floor reconfigurations.",
    // DRAFT — confirm with client
    description: "Specialized renovation contracting that extends building lifespans and adapts spaces to new commercial demands. We execute carbon-fiber structural strengthening, steel mezzanine insertion, facade modernization, and spatial layout overhauls.",
    bullets: [
      "Structural assessment and load-bearing alterations",
      "Steel mezzanine platform fabrication and installation",
      "Old facade removal and contemporary recladding",
      "Concrete repair, crack injection, and spall rehabilitation",
      "Fast-track phasing to minimize operational downtime",
    ],
    specifications: [
      { label: "Sectors", value: "Corporate Offices, Retail Outlets, Private Estates" },
      { label: "Methods", value: "Steel framing, CFRP strengthening, selective demolition" },
    ],
    image: "/images/services/renovations.jpg",
    metaTitle: "Commercial & Residential Renovations Riyadh | Emirates Front",
    metaDescription: "Turnkey building renovations, structural extensions, and facade modernization contractor in Riyadh.",
  },

  // ==========================================
  // Category 3: MEP Engineering
  // ==========================================
  {
    slug: "mechanical-hvac-services",
    title: "Mechanical & HVAC Solutions",
    titleAr: "أنظمة التكييف والتهوية الميكانيكية",
    category: "mep",
    categoryName: "MEP Engineering",
    icon: "FaFan",
    excerpt: "Central HVAC, package units, VRF systems, chilled water piping, and mechanical ventilation installations.",
    // DRAFT — confirm with client
    description: "Full-scale mechanical engineering services for commercial, industrial, and high-end residential applications. We install and commission ducted split, VRF/VRV, package, and central chiller HVAC plants tailored to high-ambient conditions.",
    bullets: [
      "VRF / VRV and ducted split system sizing and installation",
      "Rooftop package units and air handling units (AHU / FCU)",
      "GI and PIR ductwork fabrication with acoustic lining",
      "Smoke extract, stairwell pressurization, and fresh air systems",
      "Testing, adjusting, and air balancing (TAB) with certified reports",
    ],
    specifications: [
      { label: "Systems", value: "VRF/VRV, Ducted Split, Chillers, Package Units" },
      { label: "Duct Material", value: "Galvanized Iron (GI) to SMACNA, Pre-insulated PIR" },
      { label: "Standard", value: "ASHRAE & SASO compliance" },
    ],
    image: "/images/services/hvac-mep.jpg",
    metaTitle: "HVAC & Mechanical Contracting Riyadh | Emirates Front",
    metaDescription: "Commercial HVAC installation, central air conditioning, and ventilation systems in Riyadh by Emirates Front.",
  },
  {
    slug: "electrical-solutions",
    title: "Electrical Solutions & Low-Current",
    titleAr: "الأعمال والحلول الكهربائية والتيار الخفيف",
    category: "mep",
    categoryName: "MEP Engineering",
    icon: "FaBolt",
    excerpt: "Main distribution boards, conduit routing, cable pulling, lighting design, and low-current network integration.",
    // DRAFT — confirm with client
    description: "Certified electrical installation services covering primary LV distribution, MDBs/SMDBs, wiring devices, architectural LED lighting, grounding systems, and low-current data/CCTV cabling for commercial and residential facilities.",
    bullets: [
      "Main and sub-main electrical distribution panel assembly",
      "Cable tray routing, ladder racks, and fire-resistant cabling",
      "Indoor, outdoor, and architectural facade lighting systems",
      "Earthing, grounding pits, and lightning protection systems",
      "Structured cabling, CCTV conduits, and access control pre-wiring",
    ],
    specifications: [
      { label: "Voltage", value: "Low Voltage (LV) 220V/380V distribution" },
      { label: "Standards", value: "SEC (Saudi Electricity Company) approved materials" },
    ],
    image: "/images/services/electrical.jpg",
    metaTitle: "Electrical & Low-Current Contractors Riyadh | Emirates Front",
    metaDescription: "Commercial electrical installation, MDB panel boards, lighting, and low-current systems in Riyadh.",
  },
  {
    slug: "plumbing-sanitary-work",
    title: "Plumbing & Sanitary Networks",
    titleAr: "أعمال السباكة والشبكات الصحية",
    category: "mep",
    categoryName: "MEP Engineering",
    icon: "FaWater",
    excerpt: "PPR water supply networks, UPVC drainage stacks, booster pump sets, and sanitary fixture fitments.",
    // DRAFT — confirm with client
    description: "Reliable hydraulic and sanitary engineering for reliable domestic water pressure and gravity drainage. We install PPR potable water lines, silent drainage stacks, sump pits, greywater management, and booster pump sets.",
    bullets: [
      "Hot and cold PPR / PEX water supply piping networks",
      "Acoustic insulated UPVC / HDPE drainage and soil stacks",
      "Variable speed booster and transfer pump station setup",
      "Roof storage tanks and water filtration system integration",
      "Sanitary fixture rough-in and trim installation",
    ],
    specifications: [
      { label: "Supply Pipes", value: "PPR PN16/PN20, Cross-linked Polyethylene (PEX)" },
      { label: "Drainage", value: "Class 4 UPVC, HDPE, Sound-dampened pipes" },
    ],
    image: "/images/services/plumbing.jpg",
    metaTitle: "Plumbing & Sanitary Contracting Riyadh | Emirates Front",
    metaDescription: "Commercial and residential plumbing, water supply networks, and drainage piping contracting in Riyadh.",
  },
  {
    slug: "ducting-cable-trays",
    title: "Ducting & Cable Tray Infrastructure",
    titleAr: "تمديدات مجاري الهواء وحوامل الكابلات",
    category: "mep",
    categoryName: "MEP Engineering",
    icon: "FaCogs",
    excerpt: "Galvanized sheet metal duct fabrication, perforated cable trays, and containment raceways.",
    // DRAFT — confirm with client
    description: "Industrial containment and airflow pathways engineered for longevity. We supply and erect heavy-duty perforated cable trays, cable ladders, wire mesh baskets, and SMACNA-standard galvanized ductwork for large facilities.",
    bullets: [
      "Custom sheet metal duct fabrication in line with SMACNA specs",
      "Hot-dip galvanized (HDG) cable ladders and perforated trays",
      "Seismic supports, unistrut channeling, and threaded rod hangers",
      "Thermal fiberglass and elastomeric rubber insulation wrapping",
      "Fire damper and motorized volume control damper integration",
    ],
    specifications: [
      { label: "Tray Finish", value: "Pre-galvanized, Hot-Dip Galvanized to BS EN ISO 1461" },
      { label: "Duct Gauge", value: "24 to 18 gauge galvanized steel" },
    ],
    image: "/images/services/ducting.jpg",
    metaTitle: "Ducting & Cable Tray Contracting Riyadh | Emirates Front",
    metaDescription: "Galvanized air ducting and heavy cable tray containment installation services across Riyadh.",
  },

  // ==========================================
  // Category 4: Finishing & Fit-Out
  // ==========================================
  {
    slug: "gypsum-board-partitions",
    title: "Gypsum Ceilings & Drywall Partitions",
    titleAr: "أعمال الجبس بورد والقواطع الجدارية",
    category: "finishing",
    categoryName: "Finishing & Fit-Out",
    icon: "FaThLarge",
    excerpt: "False ceilings, cove lighting bulkheads, moisture-resistant board, and fire-rated drywall divisions.",
    // DRAFT — confirm with client
    description: "High-standard interior drywalling and false ceiling execution. We create acoustic partitioned offices, shadow-line perimeter details, decorative drop ceilings with recessed lighting slots, and moisture-resistant installations for wet areas.",
    bullets: [
      "Suspended false ceilings with shadow gap perimeter trims",
      "Fire-rated (Type X) and moisture-resistant (Green Board) partitions",
      "Curved bulkheads, indirect LED cove lighting troughs",
      "Acoustic insulation batts insertion for soundproofing",
      "Seamless tape, joint compound, and skim coating to Level 4/5 finish",
    ],
    specifications: [
      { label: "Board Types", value: "Regular, Moisture Resistant (MR), Fire Resistant (FR)" },
      { label: "Framing", value: "Galvanized lightweight steel studs and tracks (0.55mm+)" },
    ],
    image: "/images/services/gypsum.jpg",
    metaTitle: "Gypsum Board & False Ceiling Contractor Riyadh | Emirates Front",
    metaDescription: "Quality gypsum board partitions, false ceilings, and acoustic drywall installation in Riyadh.",
  },
  {
    slug: "painting-coatings",
    title: "Architectural Painting & Coatings",
    titleAr: "أعمال الدهانات والتشطيبات الخارجية والداخلية",
    category: "finishing",
    categoryName: "Finishing & Fit-Out",
    icon: "FaPaintRoller",
    excerpt: "Interior emulsion, decorative stuccos, exterior acrylic textures, and epoxy protective coatings.",
    // DRAFT — confirm with client
    description: "Interior and exterior surface coating solutions delivering durable, flawless aesthetics. From multi-coat washable interior paints to heavy textured exterior coatings and chemical-resistant epoxy floors for commercial workshops and car parks.",
    bullets: [
      "Interior surface preparation, putty application, and topcoats",
      "Exterior weather-shield acrylic texture and profile painting",
      "Epoxy floor coatings and polyurethane sealers",
      "Decorative finishes: Stucco, velvet, and metallic textures",
      "Anti-fungal and antibacterial coatings for sensitive facilities",
    ],
    specifications: [
      { label: "Brands", value: "Jotun, Jazeera, National Paints or client-specified" },
      { label: "Surface Prep", value: "Mechanical sanding, primer, 2x putty, 2-3 topcoats" },
    ],
    image: "/images/services/painting.jpg",
    metaTitle: "Painting & Coating Contractors Riyadh | Emirates Front",
    metaDescription: "Professional interior painting, exterior texture coatings, and industrial epoxy floors in Riyadh.",
  },
  {
    slug: "marble-tiles-flooring",
    title: "Marble, Granite & Ceramic Tiling",
    titleAr: "أعمال الرخام والجرانيت والسيراميك",
    category: "finishing",
    categoryName: "Finishing & Fit-Out",
    icon: "FaTh",
    excerpt: "Natural marble laying, large-format porcelain slabs, exterior interlock pavers, and granite staircases.",
    // DRAFT — confirm with client
    description: "Precision stone and tile masonry for lobbies, corridors, executive suites, and external hardscaping. We execute bookmatched marble flooring, large format porcelain slabs (up to 320x160cm), anti-slip ceramic tiles, and heavy interlock pavers.",
    bullets: [
      "Natural marble and granite dry/wet installation and polishing",
      "Large-format porcelain and ceramic wall and floor tiling",
      "Stair treads, risers, and skirtings with chamfered edges",
      "High-adhesion modified thinset mortars and epoxy grouting",
      "Exterior interlock, curbstone, and parking pavement installation",
    ],
    specifications: [
      { label: "Materials", value: "Italian/Omani Marble, Large Porcelain, Exterior Interlock" },
      { label: "Grouting", value: "Stain-resistant Epoxy / Polymer-modified Grout" },
    ],
    image: "/images/services/marble-tiling.jpg",
    metaTitle: "Marble & Tile Installation Riyadh | Emirates Front Contracting",
    metaDescription: "Commercial marble flooring, porcelain tile laying, and external interlock paving in Riyadh.",
  },
  {
    slug: "interior-fitout",
    title: "Commercial & Office Fit-Out",
    titleAr: "التشطيب الداخلي والديكور التجاري",
    category: "finishing",
    categoryName: "Finishing & Fit-Out",
    icon: "FaDraftingCompass",
    excerpt: "Turnkey fit-out solutions transforming core-and-shell spaces into high-functioning corporate and retail environments.",
    // DRAFT — confirm with client
    description: "End-to-end interior fit-out execution combining partitions, glass doors, custom joinery, flooring, MEP tie-ins, and final finishes. We execute corporate offices, retail stores, food & beverage outlets, and clinic fit-outs.",
    bullets: [
      "Complete core & shell to turnkey fit-out execution",
      "Frameless glass office partitions with acoustic seals",
      "Coordination of electrical floor boxes, access points, and data",
      "Integrated architectural lighting and custom joinery fitment",
      "Handover with snag-free punch list and authority approvals",
    ],
    specifications: [
      { label: "Scope", value: "Turnkey Design-to-Build Execution" },
      { label: "Project Types", value: "Offices, Retail, F&B, Clinics, Showrooms" },
    ],
    image: "/images/services/interior-fitout.jpg",
    metaTitle: "Turnkey Office & Commercial Fit-Out Riyadh | Emirates Front",
    metaDescription: "Corporate office fit-out, retail shopfitting, and commercial interior contracting services in Riyadh.",
  },

  // ==========================================
  // Category 5: Earthworks & Site Logistics
  // ==========================================
  {
    slug: "excavation-demolition",
    title: "Bulk Excavation & Demolition",
    titleAr: "أعمال الحفر والردم والهدم",
    category: "earthworks",
    categoryName: "Earthworks & Site Logistics",
    icon: "FaTractor",
    excerpt: "Deep basement excavation, rock breaking, controlled demolition, and authorized debris disposal.",
    // DRAFT — confirm with client
    description: "Heavy earthmoving and structural demolition operations across Riyadh's diverse terrain. Equipped with hydraulic excavators, rock breakers, and dump trucks, we handle rock excavation, foundation pits, and selective building demolition.",
    bullets: [
      "Bulk earth excavation for multi-level basements and foundations",
      "Hydraulic rock breaking and hard limestone excavation",
      "Controlled structural demolition with safety perimeter fencing",
      "Muncipality-licensed transport and disposal of construction debris",
      "Shoring support coordination and slope stabilization",
    ],
    specifications: [
      { label: "Machinery", value: "20T-40T Excavators, Rock Hammers, 24m3 Tipper Trucks" },
      { label: "Compliance", value: "Municipality dumping permits & safety standards" },
    ],
    image: "/images/services/excavation.jpg",
    metaTitle: "Excavation & Demolition Contractors Riyadh | Emirates Front",
    metaDescription: "Basement excavation, rock breaking, and controlled demolition services in Riyadh by Emirates Front.",
  },
  {
    slug: "grading-backfilling",
    title: "Grading & Soil Compaction",
    titleAr: "التسوية والدك وضبط المناسيب",
    category: "earthworks",
    categoryName: "Earthworks & Site Logistics",
    icon: "FaMountain",
    excerpt: "Engineered backfilling, laser-guided level grading, sub-base compaction, and proctor density testing.",
    // DRAFT — confirm with client
    description: "Sub-base preparation and compaction services for building pads, parking lots, and access roads. We lay approved fill material in compacted layers with verified field density testing to guarantee unyielding structural support.",
    bullets: [
      "Layer-by-layer backfilling with clean granular A-1-a/A-1-b fill",
      "Heavy vibratory roller compaction and moisture conditioning",
      "Laser-guided motor grader land leveling and slope formation",
      "Plate load and nuclear gauge compaction testing (95%+ MDD)",
      "Preparation of road base and asphalt foundation subgrades",
    ],
    specifications: [
      { label: "Testing", value: "Standard/Modified Proctor (ASTM D1557) > 95%" },
      { label: "Layers", value: "Lift thicknesses not exceeding 25-30cm per layer" },
    ],
    image: "/images/services/grading.jpg",
    metaTitle: "Grading & Soil Compaction Riyadh | Emirates Front Contracting",
    metaDescription: "Land grading, engineered backfilling, and soil compaction testing services in Riyadh.",
  },
  {
    slug: "site-preparation",
    title: "Site Preparation & Enablement",
    titleAr: "تجهيز الموقع والخدمات اللوجستية",
    category: "earthworks",
    categoryName: "Earthworks & Site Logistics",
    icon: "FaTruck",
    excerpt: "Boundary hoardings, site clearance, temporary access roads, and early-stage utility connections.",
    // DRAFT — confirm with client
    description: "Enabling works and site logistics to establish a safe, organized, and compliant construction site. We clear debris, erect corrugated perimeter hoarding, build temporary access tracks, and establish on-site engineer offices.",
    bullets: [
      "Site clearing, grubbing, and leveling of natural ground",
      "Corrugated GI perimeter hoarding and access gate erection",
      "Stabilized temporary haul roads for heavy machinery access",
      "Site office porta-cabins, security guardhouses, and welfare facilities",
      "Temporary power generator and water supply infrastructure",
    ],
    specifications: [
      { label: "Deliverables", value: "Turnkey Site Enablement & Hoarding" },
      { label: "Safety", value: "Compliant with Ministry of Municipal Affairs guidelines" },
    ],
    image: "/images/services/site-prep.jpg",
    metaTitle: "Site Preparation & Hoarding Contractor Riyadh | Emirates Front",
    metaDescription: "Site clearing, hoarding erection, and construction logistics enablement services in Riyadh.",
  },

  // ==========================================
  // Category 6: Industrial & Maintenance
  // ==========================================
  {
    slug: "industrial-construction",
    title: "Industrial & Steel Structures",
    titleAr: "المنشآت الصناعية والهياكل المعدنية",
    category: "industrial",
    categoryName: "Industrial & Maintenance",
    icon: "FaIndustry",
    excerpt: "Pre-Engineered Buildings (PEB), steel portal frames, industrial warehouse construction, and cladding.",
    // DRAFT — confirm with client
    description: "Construction of industrial warehouses, logistics hubs, workshops, and commercial sheds. We install primary anchor bolts, steel structural frames, crane gantries, insulated sandwich roof panels, and heavy-duty industrial concrete slab floors.",
    bullets: [
      "Anchor bolt casting and structural steel portal frame erection",
      "Pre-Engineered Building (PEB) assembly and bracing",
      "Insulated sandwich panel roof and wall cladding (PIR/PU core)",
      "High-load laser-screeded industrial concrete floor slabs with hardeners",
      "Overhead crane beam installation and industrial roll-up doors",
    ],
    specifications: [
      { label: "Applications", value: "Warehouses, Logistics Hubs, Factories, Workshops" },
      { label: "Steel Grades", value: "ASTM A36 / S275 / S355 Structural Steel" },
    ],
    image: "/images/services/industrial-steel.jpg",
    metaTitle: "Industrial Warehouse & Steel Structure Contractors Riyadh",
    metaDescription: "PEB warehouse construction, structural steel erection, and industrial building contracting in Riyadh.",
  },
  {
    slug: "facility-maintenance-operations",
    title: "Facility Maintenance & Operations",
    titleAr: "أعمال الصيانة والتشغيل للمباني",
    category: "industrial",
    categoryName: "Industrial & Maintenance",
    icon: "FaWrench",
    excerpt: "Preventive and corrective civil, MEP, and facade maintenance contracts for corporate and commercial properties.",
    // DRAFT — confirm with client
    description: "Post-handover and operational support ensuring buildings maintain their aesthetic appeal and operational performance. We offer civil repairs, MEP upkeep, facade inspection, sealant replacement, and emergency restoration works.",
    bullets: [
      "Annual Maintenance Contracts (AMC) for civil and MEP assets",
      "Routine facade sealant inspection, cleaning access, and reglazing",
      "HVAC filter servicing, coil cleaning, and electrical panel thermography",
      "Emergency plumbing repairs and roof waterproofing leak rectification",
      "Planned preventative maintenance (PPM) logging and reporting",
    ],
    specifications: [
      { label: "Contracts", value: "AMC, Call-out, Planned Preventative Maintenance" },
      { label: "Response", value: "Priority commercial SLA response times" },
    ],
    image: "/images/services/maintenance.jpg",
    metaTitle: "Building Maintenance & Civil Operations Riyadh | Emirates Front",
    metaDescription: "Corporate facility maintenance, MEP upkeep, and facade restoration contracting in Riyadh.",
  },
];

export const getServiceBySlug = (slug) => {
  return services.find((s) => s.slug === slug);
};

export const getServicesByCategory = (categoryId) => {
  return services.filter((s) => s.category === categoryId);
};

export default services;
