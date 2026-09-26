import React from "react";
import { Helmet } from "react-helmet-async";
import siteConfig from "../../config/siteConfig.js";
import services from "../../data/services.js";

export const StructuredData = ({ type = "business", breadcrumbs = [], service = null }) => {
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.nameAr,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/images/og-cover.png`,
    telephone: siteConfig.phone.number,
    email: siteConfig.email,
    priceRange: "$$$",
    description:
      "General Contracting Company in Riyadh providing Building Envelope & Façade, Civil & Structural, MEP, and Commercial Fit-out works.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      addressCountry: "SA",
      streetAddress: "Riyadh, Saudi Arabia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.6197,
      longitude: 46.8339,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Riyadh",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Contracting Services",
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
      description: serviceData.description,
      provider: {
        "@type": "GeneralContractor",
        name: siteConfig.name,
        url: siteConfig.url,
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
