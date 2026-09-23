import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/index.jsx";
import AboutPage from "../pages/About/index.jsx";
import ServicesPage from "../pages/Services/index.jsx";
import ServiceDetailPage from "../pages/ServiceDetail/index.jsx";
import SectorsPage from "../pages/Sectors/index.jsx";
import ContactPage from "../pages/Contact/index.jsx";
import NotFoundPage from "../pages/NotFound/index.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />
      <Route path="/sectors" element={<SectorsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
