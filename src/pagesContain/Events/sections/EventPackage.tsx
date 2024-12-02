import Image from "next/image";
import React from "react";

const EventPackage = () => {
  return (
    <>
      <div className="width-container py-10">
        <h1 className="text-3xl text-plum mb-7">Our Event Packages - Spiced Up Just for You!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative p-7 border overflow-hidden rounded-[40px] flex flex-col justify-between min-h-[180px]">
            <h4 className="text-3xl">BASIC</h4>
            <p className="flex items-center gap-5">
              BUT NEVER BORING{" "}
              <svg
                width="20"
                height="20
                   "
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92813 23.0727L23.7283 1.27249M23.7283 1.27249L23.7283 17.1272M23.7283 1.27249L7.87364 1.27249"
                  stroke="#431A40"
                  strokeWidth="2.37135"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <div className="absolute bottom-0 right-0">
              <Image src={`/basic.png`} alt="" width={100} height={100} />
            </div>
          </div>
          <div className="relative p-7 border overflow-hidden rounded-[40px] bg-[#FDFBF7] flex flex-col justify-between min-h-[180px]">
            <h4 className="text-3xl">STANDARD</h4>
            <p className="flex items-center gap-5">
              HELLO, CONFERENCE VIBES{" "}
              <svg
                width="20"
                height="20
                   "
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92813 23.0727L23.7283 1.27249M23.7283 1.27249L23.7283 17.1272M23.7283 1.27249L7.87364 1.27249"
                  stroke="#431A40"
                  strokeWidth="2.37135"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <div className="absolute bottom-0 right-0">
              <Image src={`/standard.png`} alt="" width={100} height={100} />
            </div>
          </div>
          <div className="relative p-7 border overflow-hidden bg-[#DCA791] rounded-[40px] flex flex-col justify-between min-h-[180px]">
            <h4 className="text-3xl">PREMIUM</h4>
            <p className="flex items-center gap-5">
             GO BIG OR GO HOME{" "}
              <svg
                width="20"
                height="20
                   "
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92813 23.0727L23.7283 1.27249M23.7283 1.27249L23.7283 17.1272M23.7283 1.27249L7.87364 1.27249"
                  stroke="#431A40"
                  strokeWidth="2.37135"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <div className="absolute bottom-0 right-0">
              <Image src={`/premium.png`} alt="" width={100} height={100} />
            </div>
          </div>
          <div className="relative p-7 bg-plum text-white overflow-hidden border rounded-[40px] flex flex-col justify-between min-h-[180px]">
            <h4 className="text-3xl">EXECUTIVE</h4>
            <p className="flex items-center gap-5">
              THE VIP EXPERIENCE{" "}
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 25"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92813 23.0727L23.7283 1.27249M23.7283 1.27249L23.7283 17.1272M23.7283 1.27249L7.87364 1.27249"
                  stroke="white"
                  strokeWidth="2.37135"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <div className="absolute bottom-0 right-0">
              <Image src={`/executive.png`} alt="" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPackage;
