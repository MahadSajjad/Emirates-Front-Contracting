/**
 * Site Configuration
 * All core contact info, company details, and location data.
 * NOTE: All draft/unconfirmed items carry explicit comments per project specifications.
 */

export const siteConfig = {
  name: "Emirates Front Contracting Company",
  legalName: "شركة واجهة الإمارات للمقاولات شركة شخص واحد",
  nameAr: "شركة واجهة الامارات للمقاولات",
  tagline: "Building Excellence. Shaping the Future.",
  // Production domain for SEO and structured data
  url: "https://emiratesfront.com",
  logo: "/logo.png",
  ogImage: "/images/og-cover.png",
  crNumber: "2050172727",
  unifiedNationalNumber: "7036535123",
  vatNumber: "311814159600003",
  tgaLicenseNumber: "11/00052742",
  nationalAddress: {
    proofNumber: "1094365047",
    customerAccount: "31328194107",
    shortAddress: "RQYC3305",
    buildingNumber: "3305",
    street: "Al Hawtah Street",
    streetAr: "شارع الحوطه",
    secondaryNumber: "6325",
    district: "Al Sulay Dist.",
    districtAr: "حي السلي",
    postalCode: "14322",
    city: "Riyadh",
    cityAr: "الرياض",
    country: "Kingdom of Saudi Arabia",
    countryAr: "المملكة العربية السعودية",
  },
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
      address: "Building 3305, Al Hawtah Street, Al Sulay District, Secondary No. 6325, Riyadh 14322, Saudi Arabia",
      addressAr: "مبنى 3305، شارع الحوطه، حي السلي، الرقم الفرعي 6325، الرياض 14322، المملكة العربية السعودية",
      shortAddress: "RQYC3305",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3627.1143131071153!2d46.831296575363254!3d24.619744678087205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM3JzExLjEiTiA0NsKwNTAnMDEuOSJF!5e0!3m2!1sen!2s!4v1790160637681!5m2!1sen!2s",
      approxCoords: { lat: 24.6197, lng: 46.8339 }, // decoded from embed
      primary: true,
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/emirates-front-contracting",
    instagram: "",
    x: "",
  },
  workingHours: "Sunday – Thursday: 8:00 AM – 6:00 PM (KSA)",
};

export default siteConfig;
