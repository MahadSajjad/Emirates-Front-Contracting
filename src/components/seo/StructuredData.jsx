import React from "react";
import { Helmet } from "react-helmet-async";
import siteConfig from "../../config/siteConfig.js";
import services from "../../data/services.js";

export const StructuredData = ({ type = "business", breadcrumbs = [], service = null }) => {
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: [
      siteConfig.nameAr,
      "شركة واجهة الإمارات للمقاولات شركة شخص واحد",
      "Emirates Front Contracting",
      "واجهة الامارات للمقاولات",
    ],
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/images/og-cover.png`,
    telephone: siteConfig.phone.number,
    email: siteConfig.email,
    taxID: siteConfig.vatNumber,
    vatID: siteConfig.vatNumber,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Commercial Registration (CR)",
        value: siteConfig.crNumber,
      },
      {
        "@type": "PropertyValue",
        name: "Unified National Number",
        value: siteConfig.unifiedNationalNumber,
      },
      {
        "@type": "PropertyValue",
        name: "TGA Road Freight License",
        value: siteConfig.tgaLicenseNumber,
      },
      {
        "@type": "PropertyValue",
        name: "Saudi National Address Short Code",
        value: siteConfig.nationalAddress.shortAddress,
      },
    ],
    priceRange: "$$$",
    description:
      "Specialized on-site fuel supply & diesel logistics, full fleet vehicle and machinery rental (excavators, dumpers, 3-ton dynas, trailers, cranes), and comprehensive general contracting services across Riyadh and Saudi Arabia.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Building 3305, Al Hawtah Street, Al Sulay District, Secondary No. 6325",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      postalCode: "14322",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.6197,
      longitude: 46.8339,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Riyadh",
      },
      {
        "@type": "AdministrativeArea",
        name: "Eastern Province",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Emirates Front Contracting Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.excerpt,
          url: `${siteConfig.url}/services/${s.slug}`,
        },
      })),
    },
  });

  const getWebSiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    alternateName: siteConfig.nameAr,
    inLanguage: ["en", "ar"],
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  });

  const getBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url.startsWith("http") ? crumb.url : `${siteConfig.url}${crumb.url}`,
      })),
    };
  };

  const getServiceSchema = (serviceData) => {
    if (!serviceData) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceData.title,
      alternateName: serviceData.titleAr,
      description: serviceData.description,
      provider: {
        "@type": "GeneralContractor",
        name: siteConfig.name,
        url: `${siteConfig.url}/`,
        logo: `${siteConfig.url}/logo.png`,
      },
      areaServed: {
        "@type": "City",
        name: "Riyadh",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: serviceData.categoryName,
      },
    };
  };

  const schemas = [];

  if (type === "business" || type === "all") {
    schemas.push(getOrganizationSchema());
    schemas.push(getWebSiteSchema());
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = getBreadcrumbSchema();
    if (breadcrumbSchema) schemas.push(breadcrumbSchema);
  }

  if (service) {
    const serviceSchema = getServiceSchema(service);
    if (serviceSchema) schemas.push(serviceSchema);
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;
