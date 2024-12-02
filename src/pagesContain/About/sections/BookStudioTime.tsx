import Image from "next/image";
import React from "react";

const BookStudioTime = () => {
  return (
    <>
      <div className="bg-plum ">
        <div className="width-container   mb-20 p-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full flex justify-center lg:w-1/2">
            <Image
              src={`/authorityImg.webp`}
              alt="Book Studio Time"
              width={648}
              height={580}
              quality={100}
              className="w-[648px] h-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center gap-8 w-full lg:w-1/2 max-w-[515px] ">
            <h3 className="text-[#F7F3E3] text-4xl text-center">
              Walk in, hit record & podcast!
            </h3>
            <h3 className="text-[#F7F3E3] text-4xl text-center">
              It&apos;s your time to shine!
            </h3>
            <button className="bg-lightPurple font-bold mt-6 text-plum rounded-[50px] p-4 w-fit mx-auto">
              Book Studio Time
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookStudioTime;
