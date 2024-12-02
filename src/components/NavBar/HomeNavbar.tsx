"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import OffCanvasMenu from "./OffCanvasMenu";
import Link from "next/link";

interface navbarProps{
  bgColor:string
  textColor:string
  logo:StaticImageData
  isBorderRight:boolean
  scrollColor:string

}

const HomeNavbar = ({ bgColor, textColor, logo,isBorderRight,scrollColor }:navbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [showColor, setShowColor] = useState(false);
  const addColor = () => {
    if (typeof window !== "undefined" && window.scrollY >= 70) {
      setShowColor(true);
    } else {
      setShowColor(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", addColor);
    }
  }, []);
  return (
    <>
      <nav
        className={`${
          showColor ? scrollColor: bgColor
        } z-50 backdrop-blur-md  fixed top-0 right-0 left-0 text-${textColor}`}
      >
        <div className="width-container py-4 flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={logo}
              alt=""
              width={300}
              height={100}
              className="w-[200px] max-w-fit h-auto"
            />
          </Link>
          <div className="hidden md:flex">
            <ul className="flex  text-lg">
              <li className={`${isBorderRight&&"border-r-2 border-r-plum"} px-14`}>
                <Link href={"/studio"}>Studio</Link>
              </li>
              <li className={`${isBorderRight&&"border-r-2 border-r-plum"} px-14`}>
                <Link href={"/events"}>Events</Link>
              </li>
              <li className={`pl-20`}>
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="flex md:hidden cursor-pointer">
            <CgMenuLeft
              className="text-4xl  "
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </nav>
      <OffCanvasMenu isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default HomeNavbar;
