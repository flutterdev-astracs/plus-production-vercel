"use client";
import React, { useRef } from "react";

interface accordionType {
  title: string;
  content: string;
  id: number;
  open: boolean;
  handleOpenAccordion: (id: number) => void;
}

const Accordion = ({
  title,
  content,
  id,
  handleOpenAccordion,
  open,
}: accordionType) => {
  const contentRef = useRef<HTMLDivElement | null>(null); // Typed ref

  return (
    <div
      className={`${
        open
          ? "border border-[#DCA791] rounded-[35px]"
          : "border-b border-b-[#00000008]"
      } px-5 py-11 transition-all duration-300`}
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => handleOpenAccordion(id)}
      >
        <p
          className={`text-2xl   ${
            open ? "text-[#DCA791]" : "text-plum text-opacity-65 font-light"
          }`}
        >
          {title}
        </p>
        <span>
          {open ? (
            <svg
              width="25"
              height="25"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.42972 2.43063L30.714 30.7149L2.42972 2.43063ZM30.714 30.7149L10.1436 30.7149L30.714 30.7149ZM30.714 30.7149L30.714 10.1445L30.714 30.7149Z"
                fill="#DCA791"
              />
              <path
                d="M2.42972 2.43063L30.714 30.7149M30.714 30.7149L10.1436 30.7149M30.714 30.7149L30.714 10.1445"
                stroke="#DCA791"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="25"
              height="25"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.42966 29.5694L29.7139 1.28516M29.7139 1.28516L29.7139 21.8555M29.7139 1.28516L9.14355 1.28515"
                stroke="#431A40"
                strokeWidth="2.37"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </div>
      <div
        ref={contentRef} // Reference the content div
        className={`overflow-hidden transition-all duration-300`}
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className="text-plum mt-3 text-xl leading-10">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
