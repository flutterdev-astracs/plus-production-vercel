import Image from "next/image";
import React from "react";

const AboutHeroSection = () => {
  return (
    <>
      <div className="bg-lightPurple mt-20">
        <div className="width-container py-14 flex flex-col-reverse lg:flex-row items-center gap-6 justify-between ">
          <div className="w-full lg:w-1/2">
            <p className="leading-7 text-xl mb-6">
              I&apos;m Jenna, Director and Founder of Plus Production & Plus
              Studio. Our growing team focuses on accelerating brand online
              presence with visual content to attract dream clients and
              providing top-notch studio spaces for hire.
            </p>
            <p className="leading-7 text-xl">
              With a background in journalism and marketing, our passion lies in
              crafting captivating visual content that fosters genuine
              connections. We help amplify your unique message, convert
              strangers into loyal customers, and achieve your business goals
              seamlessly. We remove unnecessary stress from your content
              creation process and help build a loyal and thriving community to
              elevate your brand.
            </p>
          </div>
          <div className="relative w-full lg:w-1/2">
            <Image
              src={`/aboutImg.webp`}
              alt=""
              width={1000}
              height={600}
              className="w-full object-cover h-[500px] rounded-[60px]"
            />
            <div className="absolute text-white right-5 -top-12 ">
                <Image src={`/bannerBadge.svg`} alt='' width={400} height={300} className="w-[250px] md:w-[400px]"/>
              <div className=" absolute inset-0 flex flex-col justify-center gap-4 items-center rotate-6">
                <h1 className="text-2xl md:text-4xl">Welcome to Plus</h1>
                <h1 className="text-2xl md:text-4xl">Production!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeroSection;
