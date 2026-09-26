/**
 * Sectors & Market Capabilities Data
 * Outlines company contracting capabilities across key client sectors.
 * 
 * NOTE: All descriptions are DRAFT — confirm with client. No client names are invented.
 */

export const sectors = [
  {
    id: "fleet-fuel-logistics",
    title: "Heavy Fleet Rental & On-Site Fuel Supply",
    titleAr: "تأجير أساطيل المعدات والشاحنات وتوريد الوقود",
    subtitle: "Excavators, Dumpers, 3-Ton Pickups, Trailers, Cranes & Jobsite Diesel",
    description: "Powering major civil, industrial, and infrastructure project sites across Saudi Arabia with complete vehicle and machinery fleet rentals alongside 24/7 scheduled diesel delivery. We keep heavy equipment running at 100% capacity.",
    capabilities: [
      "Rapid dispatch of excavators, tipper dumpers, 3-ton dynas & cranes",
      "Direct on-site diesel delivery and scheduled mobile fuel bowser service",
      "Comprehensive maintenance, emergency replacement & certified operators",
      "Customized daily, monthly, and multi-year project fleet hiring agreements",
    ],
    image: "/images/sectors/fleet-fuel.jpg",
  },
  {
    id: "commercial",
    title: "Commercial & Corporate",
    titleAr: "القطاع التجاري والشركات",
    subtitle: "Office Towers, Corporate HQs, Retail Outlets & Showrooms",
    // DRAFT — confirm with client
    description: "Delivering modern commercial environments that elevate corporate presence in Riyadh. We execute high-spec building envelopes, premium glass curtain walls, efficient MEP installations, and turnkey interior fit-outs tailored for fast-paced commercial tenancy.",
    capabilities: [
      "Modern corporate office fit-outs and space planning",
      "Architectural glass facades and showroom storefronts",
      "Integrated energy-efficient HVAC and smart lighting controls",
      "Fast-track scheduling to minimize commercial revenue delays",
    ],
    image: "/images/sectors/commercial.jpg",
  },
  {
    id: "residential",
    title: "Residential & Private Estates",
    titleAr: "القطاع السكني والفلل الفاخرة",
    subtitle: "Private Villas, Compounds & Multi-Family Residential Developments",
    // DRAFT — confirm with client
    description: "Constructing high-end private villas, housing compounds, and residential buildings built with durability and refined detailing. We balance structural integrity with aesthetic facade finishes, sound insulation, and thermal envelope efficiency.",
    capabilities: [
      "Turnkey villa construction from foundation to final key handover",
      "Custom facade cladding combining stone, ACP, and architectural glazing",
      "High-durability waterproofing and acoustic plumbing networks",
      "Boundary wall construction and exterior landscape hardscaping",
    ],
    image: "/images/sectors/residential.jpg",
  },
  {
    id: "industrial",
    title: "Industrial & Logistics",
    titleAr: "القطاع الصناعي والمستودعات",
    subtitle: "Logistics Hubs, Storage Warehouses & Pre-Engineered Facilities",
    // DRAFT — confirm with client
    description: "Robust civil and structural contracting for Saudi Arabia's expanding supply chain and industrial zones. We construct pre-engineered steel warehouses, heavy-load floor slabs, and security boundary perimeters engineered for demanding operational loads.",
    capabilities: [
      "Pre-Engineered Building (PEB) steel structural erection",
      "Heavy-duty laser-guided industrial floor slab casting",
      "Insulated sandwich panel envelope installation",
      "Large-scale site grading, drainage, and yard paving",
    ],
    image: "/images/sectors/industrial.jpg",
  },
];

export default sectors;
