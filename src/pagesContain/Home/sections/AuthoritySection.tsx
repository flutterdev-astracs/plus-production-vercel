import Image from "next/image";
import React from "react";

const AuthoritySection = () => {
  return (
    <>
      <div className="width-container bg-lightPurple border rounded-[50px] p-8  lg:p-4  gap-7 grid grid-cols-1 lg:grid-cols-[25rem_1fr] grid-rows-1 lg:grid-rows-2 items-center">
       
        <div className="flex flex-col items-center lg:items-start gap-5 w-full  px-4 grid-">
          <p className="text-2xl">
            Fast-track your brand in one day with the Brand Accelerator.
          </p>
          <p className="text-2xl">
            Transform your identity, strategy, and presence with impactful
            results.
          </p>
        </div>

        <div className=" w-full lg:row-span-2">
          <Image
            src={`/authorityImg.webp`}
            alt=""
            width={1000}
            height={600}
            quality={100}
            className="w-full h-[350px]  lg:h-[500px]  object-cover  rounded-[40px]"
          />
        </div>

        <div className="bg-white -mt-20 w-[90%] mx-auto lg:mt-4  lg:w-[130%]  z-0  xl:z-10  rounded-[20px]  shadow-[0px_0px_15px_0px_#00000040] ">
          <div
            className="bg-white rounded-[20px] p-6   text-plum 
       w-fit x"
          >
            <p className="font-semibold">Become The</p>
            <h4 className="text-3xl xl:text-5xl my-4 font-bold">
              #1 Authority
            </h4>
            <p className="font-semibold">In Your Niche In The Next 90 Days!</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default AuthoritySection;
