import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import WhatsAppButton from "../sections/WhatsAppButton.jsx";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-primary-400 selection:text-slate-950 w-full max-w-full relative">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full max-w-full flex flex-col">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
