import Image from "next/image";
import React from "react";

const EventHeroSection = () => {
  return (
    <>
      <div className="bg-lightPurple mt-20">
        <div className="width-container pt-14 pb-28 gap- grid grid-cols-1 lg:grid-cols-[30rem_1fr] grid-rows-1 lg:grid-rows-2 items-center">
       
          <div className="bg-white -mb-5 w-[80%] mx-auto lg:mt-4  lg:w-[110%]  z-0  xl:z-10  rounded-[20px]  shadow-[0px_0px_15px_0px_#00000040] ">
            <div
              className="bg-white rounded-[20px] p-6   text-plum 
       w-fit "
            >
              <p className="font-semibold">Host Your Next </p>
              <h4 className="text-3xl xl:text-5xl my-4 font-bold">
                Corporate Event
              </h4>
              <p className="font-semibold">Business Should Be Fun!</p>
            </div>
          </div>


          <div className=" w-full lg:row-span-2">
            <Image
              src={`/eventHeroImg.webp`}
              alt=""
              width={1000}
              height={600}
              quality={100}
              className="w-full h-[350px]  lg:h-[500px]  object-cover  rounded-[40px]"
            />
          </div>


          <div className="flex flex-col mt-5 lg:mt-0 items-center text-plum lg:items-start gap-5 w-full  px-4 grid-">
            <p className="text-2xl">
              Planning a corporate event? Let’s skip the boring stuff and make
              it epic. At Plus Production, we blend business with fun.{" "}
            </p>
            <p className="text-2xl">
              Whether it&apos;s a conference, networking event, or product
              launch, we&apos;ve got the perfect package to make you shine!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHeroSection;
