import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/index.jsx";

// Route-level code splitting for enhanced Core Web Vitals (LCP, FCP, INP)
const AboutPage = lazy(() => import("../pages/About/index.jsx"));
const ServicesPage = lazy(() => import("../pages/Services/index.jsx"));
const ServiceDetailPage = lazy(() => import("../pages/ServiceDetail/index.jsx"));
const SectorsPage = lazy(() => import("../pages/Sectors/index.jsx"));
const ContactPage = lazy(() => import("../pages/Contact/index.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFound/index.jsx"));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
      <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
        Loading View...
      </span>
    </div>
  </div>
);

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/sectors" element={<SectorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
