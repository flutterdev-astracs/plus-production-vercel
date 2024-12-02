import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[url('/heroBg.webp')] min-h-svh flex items-center  bg-no-repeat bg-cover  bg-center overlay">
        <div className="width-container text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl ">BRAND ACCELERATOR</h1>
          <p className="text-2xl font-light mt-4 leading-10">
            Accelerate Your Brand. Amplify Your Success.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
