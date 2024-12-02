import Image from "next/image";
import React from "react";

const PlanEvent = () => {
  return (
    <>
      <div className="width-container border rounded-[40px] mb-20 p-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full flex justify-center lg:w-1/2" >
            <Image src={`/eventImg.webp`} alt='Plan Your Event' width={648} height={580} quality={100} className="w-[648px] h-auto object-contain"/>
        </div>
        <div className="flex flex-col justify-center gap-8 w-full lg:w-1/2 max-w-[515px] ">
          <h3 className="text-plum text-4xl text-center">
            Plus Up your Business with a corporate event!
          </h3>
          <p className="text-center text-plum leading-9 text-lg w-5/6 mx-auto">
            Are you looking to host an event for your business but don’t want to
            handle any of the annoying planning? We’ve got you covered!
          </p>
          <button className="bg-lightPurple text-white rounded-[50px] p-4 w-fit mx-auto">
            Let’s Plan Your Event!{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default PlanEvent;
