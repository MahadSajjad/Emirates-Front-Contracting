/**
 * Site Configuration
 * All core contact info, company details, and location data.
 * NOTE: All draft/unconfirmed items carry explicit comments per project specifications.
 */

export const siteConfig = {
  name: "Emirates Front Contracting Company",
  nameAr: "شركة واجهة الامارات للمقاولات",
  // DRAFT — confirm with client: deliberate play on واجهة (façade / front)
  tagline: "Your Trusted Front in Construction",
  // CONFIRM — no domain supplied yet; using placeholder for canonical and structured data
  url: "https://emiratesfront.com",
  phone: {
    number: "+966590146337",
    rawWhatsApp: "966590146337",
    display: "059 014 6337",
    whatsapp: true,
  },
  // CONFIRM — a company-domain email reads more credibly to procurement buyers than @gmail.com
  email: "emiratesfront@gmail.com",
  locations: [
    {
      city: "Riyadh",
      country: "Kingdom of Saudi Arabia",
      label: "Head Office",
      // CONFIRM — only a map pin was supplied, no street address text
      address: "Riyadh, Kingdom of Saudi Arabia",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3627.1143131071153!2d46.831296575363254!3d24.619744678087205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM3JzExLjEiTiA0NsKwNTAnMDEuOSJF!5e0!3m2!1sen!2s!4v1790160637681!5m2!1sen!2s",
      approxCoords: { lat: 24.6197, lng: 46.8339 }, // decoded from embed, approximate
      primary: true,
    },
  ],
  // CONFIRM — none supplied, ship as placeholders
  social: {
    linkedin: "",
    instagram: "",
    x: "",
  },
  workingHours: "Sunday – Thursday: 8:00 AM – 6:00 PM (KSA)",
};

export default siteConfig;
