import React from "react";

const WhyHostSection = () => {
  return (
    <>
      <div className="mt-20 border-y py-10">
        <div className="width-container text-plum">
          <div className="flex flex-col justify-center items-center gap-5 w-[85%] mx-auto">
            <h1 className="text-3xl font-bold">
              WHY HOST A CORPORATE EVENT ANYWAY?
            </h1>
            <p className="text-center leading-7">
              Because your business deserves to shine, that&apos;s why!
              Corporate events aren&apos;t just about schmoozing over lukewarm
              coffee (though we have killer coffee, by the way). They&apos;re a
              chance to:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            <div className="border p-7 rounded-[40px]">
              <h4 className="text-xl font-semibold mb-4">Build connections</h4>
              <p className="leading-7 ">
                Whether wooing new clients or making your team feel like a squad
                of superheroes, a great event strengthens relationships.
              </p>
            </div>
            <div className="border p-7 rounded-[40px]">
              <h4 className="text-xl font-semibold mb-4">
                Showcase your brand
              </h4>
              <p className="leading-7 ">
                Roll out the red carpet, make your brand shine, and remind
                everyone why you&apos;re the best in the biz.
              </p>
            </div>
            <div className="border p-7 rounded-[40px]">
              <h4 className="text-xl font-semibold mb-4">Boost creativity</h4>
              <p className="leading-7 ">
                There’s something magical about people bouncing ideas off each
                other in a fun, energising environment.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center font-normal text-2xl">
          Basically, it’s like business but with more wow.
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyHostSection;
