import Image from "next/image";
import React from "react";

const WhyUsSection = () => {
  return (
    <>
      <div className="py-20 width-container">
        <h1 className="text-plum text-3xl font-medium mb-2">Why US?</h1>
        <p className="text-plum text-lg ">
          Because We Do Events Like No One Else!{" "}
        </p>
        <div className="mt-10 border rounded-[40px] p-3 flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          <div className="w-full lg:w-1/2">
            <ul className="flex flex-col gap-7 list-disc pl-10">
              <li className="leading-7 font-normal text-lg">
                From the moment you ask for help to the final guest’s smile, our
                event pros handle everything—planning, coordinating, and
                executing—so you can focus on celebrating and sealing the deal!
              </li>
              <li className="leading-7 font-normal text-lg">
                Corporate events don’t have to be dull! Want a beachside BBQ or
                a themed gala with live music and custom cocktails? We’ve got
                you. We specialize in bringing your wildest ideas to life!
              </li>
              <li className="leading-7 font-normal text-lg">
                Business is serious, but your event doesn’t have to be! We bring
                the perfect mix of professionalism and fun-amazing catering,
                vibrant décor, live entertainment, and tech that’ll impress
                everyone, even the least tech-savvy execs!
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={`/whyEvent.webp`}
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

export default WhyUsSection;
