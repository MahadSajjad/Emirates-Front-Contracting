import React from "react";
import { Helmet } from "react-helmet-async";
import siteConfig from "../../config/siteConfig.js";

export const SEO = ({
  title,
  description,
  canonical,
  ogImage = siteConfig.ogImage || "/images/og-cover.png",
  ogType = "website",
  noIndex = false,
}) => {
  const siteTitle = siteConfig.name;
  
  // Format title without duplicating brand name if already provided
  let fullTitle = `${siteTitle} | Fuel Supply, Fleet Vehicle Rental & Contracting | Riyadh`;
  if (title) {
    if (title.toLowerCase().includes("emirates front")) {
      fullTitle = title;
    } else {
      fullTitle = `${title} | ${siteTitle}`;
    }
  }

  const metaDescription =
    description ||
    "Emirates Front Contracting Company (شركة واجهة الامارات للمقاولات) — 24/7 On-Site Fuel Supply, Full Fleet Vehicle Rental & Machinery Hiring (Excavators, Dumpers, 3-Ton Pickups, Trailers, Cranes) and Comprehensive Contracting in Riyadh, Saudi Arabia.";

  // Normalize canonical URL (root always ends with slash, subpages do not)
  let canonicalUrl = `${siteConfig.url}/`;
  if (canonical && canonical !== "/") {
    const cleanPath = canonical.startsWith("/") ? canonical : `/${canonical}`;
    canonicalUrl = `${siteConfig.url}${cleanPath.replace(/\/+$/, "")}`;
  }

  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteConfig.url}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

  return (
    <Helmet>
      {/* HTML Language tag */}
      <html lang="en" />
      
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon & App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:secure_url" content={fullOgImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Emirates Front Contracting Company - Heavy Rental Fleet, Fuel Supply and General Contracting in Riyadh" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_SA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content="Emirates Front Contracting Company Riyadh" />

      {/* Geographic / Local SEO Meta */}
      <meta name="geo.region" content="SA-01" />
      <meta name="geo.placename" content="Riyadh" />
      <meta name="geo.position" content="24.6197;46.8339" />
      <meta name="ICBM" content="24.6197, 46.8339" />
    </Helmet>
  );
};

export default SEO;
