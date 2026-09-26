/**
 * Site Configuration
 * All core contact info, company details, and location data.
 * NOTE: All draft/unconfirmed items carry explicit comments per project specifications.
 */

export const siteConfig = {
  name: "Emirates Front Contracting Company",
  nameAr: "شركة واجهة الامارات للمقاولات",
  tagline: "Building Excellence. Shaping the Future.",
  // Production domain for SEO and structured data
  url: "https://emiratesfront.site",
  logo: "/logo.png",
  ogImage: "/images/og-cover.png",
  phone: {
    number: "+966590146337",
    rawWhatsApp: "966590146337",
    display: "059 014 6337",
    whatsapp: true,
  },
  email: "emiratesfront@gmail.com",
  locations: [
    {
      city: "Riyadh",
      country: "Kingdom of Saudi Arabia",
      label: "Head Office",
      address: "Haroon Rashid Road, As Sulay, Near Exit 18, Riyadh, Saudi Arabia",
      addressAr: "طريق هارون الرشيد، حي السلي، بالقرب من مخرج 18، الرياض، المملكة العربية السعودية",
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
