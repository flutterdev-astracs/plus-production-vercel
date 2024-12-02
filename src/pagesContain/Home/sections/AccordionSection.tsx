"use client";

import Accordion from "@/components/Accordion";
import Image from "next/image";
import React, { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "01 IDEA GENERATION",
    content:
      "Say goodbye to creative blocks and hello to a clear, focused content strategy! We’ll generate a treasure trove of concepts tailored specifically to your niche and ideal customer, ensuring your content resonates powerfully with your audience.",
  },
  {
    id: 2,

    title: "02 PROFESSIONAL FILMING",
    content:"Imagine creating 40 high-quality videos in less than 8 hours—without lifting a finger! We handle all the filming, using top-notch equipment, so you can focus on what you do best while we capture your brand’s essence. We can capture your content at our podcast recording studio or come to you!"
  },
  {
    id: 3,

    title: "03 CREATIVE EDITING",
    content:"Editing can be daunting, but not for us. Our expert editors will craft your footage into 40 engaging videos that captivate your audience. In just 7 business days, you’ll have a 3-month content library ready to impress."
  },
  {
    id: 4,

    title: "04 CRAFTING CAPTIONS",
    content:"Not sure what to say online? We’ll craft compelling captions in your unique tone of voice, ensuring that every post is on brand and resonates with your target audience."
 
  },
  {
    id: 5,

    title: "05 CONTENT GOES LIVE",
    content:"Consistency is the secret to success. While others might leave you hanging, we’ll ensure your brand stays in the spotlight by posting 3 times a week"
  },
  {
    id: 6,

    title: "06 LEAD GENERATION",
    content:"With your brand’s new online presence, it’s time to turn attention into action. We’ll set up a lead generation campaign to convert your new online presence into booked calls and tangible results."
 
  },
];

const AccordionSection = () => {
  const [accordionId, setAccordionId] = useState<number | null>(3);

  const handleOpenAccordion = (id: number | null): void => {
    setAccordionId(accordionId === id ? 3 : id);
  };

  
  return (
    <>
      <div className="width-container flex justify-between gap-10 pt-32 pb-20 items-center">
        <div className="hidden  lg:flex">
          <Image
            src={`/accordion.webp`}
            alt=""
            width={780}
            height={600}
            className="w-full  rounded-[80px] object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2  flex flex-col ">
          {accordionData?.map((data, index) => (
            <Accordion
              title={data.title}
              content={data.content}
              id={data.id}
              handleOpenAccordion={handleOpenAccordion}
              key={index}
              open={accordionId === data.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AccordionSection;
