import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-svh flex items-center bg-no-repeat bg-cover bg-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="/Hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 width-container text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl">BRAND ACCELERATOR</h1>
        <p className="text-2xl font-light mt-4 leading-10">
          Accelerate Your Brand. Amplify Your Success.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
