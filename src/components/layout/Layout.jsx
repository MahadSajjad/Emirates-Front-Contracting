import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import WhatsAppButton from "../sections/WhatsAppButton.jsx";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-primary selection:bg-cta selection:text-black">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full flex flex-col">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
