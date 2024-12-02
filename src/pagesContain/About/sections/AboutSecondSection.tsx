import Image from "next/image";
import React from "react";

const AboutSecondSection = () => {
  return (
    <>
      <div className="py-20 width-container">
        <h1 className="text-plum text-3xl font-medium mb-4 text-center max-w-[1000px] mx-auto">
          Our Brand Accelerator helps busy business owners nail three months of
          consistent online content in just ONE day.
        </h1>

        <div className="mt-10 border rounded-[40px] p-3 flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          <div className="w-full lg:w-1/2">
            <ul className="flex flex-col gap-7 list-disc pl-10 text-plum">
              <li className="leading-7 font-normal text-lg">
                With over eight years of experience in journalism, marketing,
                photography, and communication, we provide a simple and
                effective approach to visual content creation. Our services save
                you time, enhance your brand, and establish you as a thought
                leader in your industry within three months.
              </li>
              <li className="leading-7 font-normal text-lg">
                Ready to elevate your visual content? We’ll help you create
                engaging content that resonates with your audience and drives
                results. With our blend of journalistic integrity and marketing
                expertise, we turn your content dreams into reality. Our
                data-driven approach optimizes your content for search and
                ensures it reaches the right audience across multiple platforms.
              </li>
            
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={`/aboutImg2.webp`}
              alt="why us"
              width={1000}
              height={700}
              quality={100}
              className="w-full h-[500px] max-w-fit object-cover rounded-[50px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSecondSection;
