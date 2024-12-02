import React from "react";
import HeroSection from "./sections/HeroSection";
import HomeNavbar from "@/components/NavBar/HomeNavbar";
import SliderSection from "./sections/SliderSection";
import AuthoritySection from "./sections/AuthoritySection";
import AccordionSection from "./sections/AccordionSection";
import PlanEvent from "./sections/PlanEvent";
import Footer from "@/components/Footer/Footer";
import whiteLogo from "@/assets/whiteLogo.png";

const HomePage = () => {
  return (
    <>
      {/* Navbar  */}
      <HomeNavbar bgColor={"bg-navLinear"} textColor={"white"} logo={whiteLogo} isBorderRight={false} scrollColor={"bg-black"}/>

      {/* Hero section  */}
      <HeroSection />

      {/* slider section  */}
      <SliderSection />

      {/* authority section  */}
      <AuthoritySection/>

      {/* accordion section  */}
      <AccordionSection/>

      {/* Plan Event  */}
      <PlanEvent/>

      {/* Footer  */}
      <Footer/>
    </>
  );
};

export default HomePage;
