/**
 * Sectors & Market Capabilities Data
 * Outlines company contracting capabilities across key client sectors.
 * 
 * NOTE: All descriptions are DRAFT — confirm with client. No client names are invented.
 */

export const sectors = [
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
  {
    id: "government",
    title: "Government & Institutional",
    titleAr: "القطاع الحكومي والمؤسسي",
    subtitle: "Municipal Facilities, Institutional Complexes & Public Infrastructure",
    // DRAFT — confirm with client
    description: "Executing public sector and institutional contracting works aligned with the Saudi Building Code, civil defense guidelines, and municipal procurement standards. Focused on safety, transparency, compliance, and methodical quality assurance.",
    capabilities: [
      "Strict compliance with Saudi Building Codes and safety mandates",
      "Systematic QA/QC documentation and stage-gate inspection readiness",
      "Durable architectural materials suited for heavy public footfall",
      "Dedicated HSE supervision across all project phases",
    ],
    image: "/images/sectors/government.jpg",
  },
];

export default sectors;
