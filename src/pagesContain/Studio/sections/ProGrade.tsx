import Image from "next/image";
import React from "react";

const ProGrade = () => {
  return (
    <>
      <div className="width-container flex flex-col rounded-[50px] gap-7 bg-darkBlue p-10 text-white my-20">
         <p className="text-2xl leading-8">
         Experience top-tier audio recording with our recording studio hire
          package, featuring the RØDECaster Pro II and up to four premium RØDE
          microphones, expertly set up by our skilled audio engineer. Our studio
          is ideal for vocal recording, podcasts, voiceovers, audiobooks, and
          content creation, providing a comfortable and inspiring environment
          for your creative flow. Only 10 minutes from the Adelaide CBD and
          includes free WIFI, toilets, and a kitchen, as well as free, secure
          car parking onsite.
        </p>
        <div className="flex items-center gap-7">
          <Image
            src={`/circleLogo.png`}
            alt="Plus Production"
            width={100}
            height={100}
          />
          <h1 className="text-2xl md:text-3xl">Plus Production</h1>
        </div>
      </div>
    </>
  );
};

export default ProGrade;
