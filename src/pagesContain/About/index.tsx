import HomeNavbar from "@/components/NavBar/HomeNavbar";
import React from "react";
import whiteLogo from "@/assets/whiteLogo.png";
import AboutHeroSection from "./sections/AboutHeroSection";
import Footer from "@/components/Footer/Footer";
import PlanEvent from "../Home/sections/PlanEvent";
import AboutSecondSection from "./sections/AboutSecondSection";
import BookStudioTime from "./sections/BookStudioTime";

const AboutPage = () => {
  return (
    <>
      {/* navbar  */}
      <HomeNavbar
        bgColor={"bg-lightPurple"}
        textColor={"white"}
        logo={whiteLogo}
        isBorderRight={false}
        scrollColor={"bg-lightPurple"}
      />

      {/* hero section  */}
      <AboutHeroSection />   

      <AboutSecondSection/>

    {/* book studio time  */}
    <BookStudioTime/>
      {/* plan event  */}
      <PlanEvent />

      {/* footer  */}
      <Footer />
    </>
  );
};

export default AboutPage;
