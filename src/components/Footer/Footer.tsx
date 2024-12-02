import Image from "next/image";
import Link from "next/link";
import React from "react";
import originalLogo from "@/assets/originalLogo.png"
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <div className="border-t rounded-t-[80px] py-10">
        <div className="width-container flex flex-col md:flex-row gap-8 items-center justify-between text-xl text-plum">
         <Link href={'/'}>
         
         <Image
            src={originalLogo}
            alt="plus production"
            width={200}
            height={93}
          />

         </Link>
         
          <Link href={"/studio"}>Studio</Link>
          <Link href={"/events"}>Events</Link>

          <Link href={"/about"}>About</Link>
          <p>Follow Us</p>
        </div>
        <div className="flex items-center gap-5 width-container justify-center mt-8 md:mt-0 md:justify-end">
          {/* <Image
            src={`/instagram.png`}
            alt="instagram"
            width={40}
            height={50}
          />
          <Image src={`/linkedin.png`} alt="linkedin" width={35} height={35} /> */}
          
          <IoLogoInstagram className="text-3xl" />
          <IoLogoLinkedin className="text-3xl" />


                  </div>
      </div>
    </>
  );
};

export default Footer;
