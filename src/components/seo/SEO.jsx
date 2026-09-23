import React from "react";
import { Helmet } from "react-helmet-async";
import siteConfig from "../../config/siteConfig.js";

export const SEO = ({
  title,
  description,
  canonical,
  ogImage = "/images/og-cover.jpg",
  ogType = "website",
  noIndex = false,
}) => {
  const siteTitle = siteConfig.name;
  const fullTitle = title
    ? `${title} | ${siteTitle}`
    : `${siteTitle} | شركة واجهة الامارات للمقاولات | Riyadh Contracting`;

  const metaDescription =
    description ||
    "Emirates Front Contracting Company (شركة واجهة الامارات للمقاولات) — Building Envelope & Façade, Civil, Structural, and MEP Contracting Services in Riyadh, Saudi Arabia.";

  const canonicalUrl = canonical
    ? `${siteConfig.url}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
    : siteConfig.url;

  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteConfig.url}${ogImage}`;

  return (
    <Helmet>
      {/* HTML Language tag */}
      <html lang="en" />
      
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

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
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Geographic / Local SEO Meta */}
      <meta name="geo.region" content="SA-01" />
      <meta name="geo.placename" content="Riyadh" />
      <meta name="geo.position" content="24.6197;46.8339" />
      <meta name="ICBM" content="24.6197, 46.8339" />
    </Helmet>
  );
};

export default SEO;
