import HomeNavbar from "@/components/NavBar/HomeNavbar";
import React from "react";
import whiteLogo from "@/assets/whiteLogo.png";
import EventHeroSection from "./sections/EventHeroSection";
import WhyHostSection from "./sections/WhyHostSection";
import WhyUsSection from "./sections/WhyUsSection";
import Footer from "@/components/Footer/Footer";
import EventPackage from "./sections/EventPackage";
import EventChat from "./sections/EventChat";
const EventPage = () => {
  return (
    <>
      {/* Navbar  */}
      <HomeNavbar
        bgColor={"bg-lightPurple"}
        textColor={"white"}
        logo={whiteLogo}
        isBorderRight={false}
        scrollColor={"bg-lightPurple"}
      />

      {/* Hero Section  */}   
      <EventHeroSection />  

      {/* why host section  */}
      <WhyHostSection />

      {/* why us section  */}
      <WhyUsSection />

      {/* events package  */}

      <EventPackage />

      {/* chat event  */}
      <EventChat />
      {/* footer  */}
      <Footer />
    </>
  );
};

export default EventPage;
