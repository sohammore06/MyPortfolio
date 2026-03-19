import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Blog,
  StarsCanvas,
  Footer,
} from "../components";

const scrollToSectionId = (id) => {
  if (!id) return;
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const PortfolioHome = () => {
  const location = useLocation();

  useEffect(() => {
    const pending = sessionStorage.getItem("pendingSectionScroll");
    if (pending) {
      sessionStorage.removeItem("pendingSectionScroll");
      const t = window.setTimeout(() => scrollToSectionId(pending), 80);
      return () => window.clearTimeout(t);
    }

    const hash = location.hash?.replace(/^#/, "");
    if (hash) {
      const t = window.setTimeout(() => scrollToSectionId(hash), 80);
      return () => window.clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Blog />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioHome;
