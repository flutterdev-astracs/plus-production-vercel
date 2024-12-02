import Image from "next/image";
import React from "react";

const StudioForm = () => {
  return (
    <>
      <div className="width-container flex flex-col lg:flex-row justify-between gap-10 my-20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={`/studioImg.webp`}
            alt=""
            width={900}
            height={400}
            quality={100}
            className="w-full max-h-[600px] object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-2xl w-full outline-none border"
            />
            <div className="p-3 rounded-2xl w-full border flex items-center gap-3">
              <svg
                width="22"
                height="21"
                viewBox="0 0 26 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M2.00662 18.8438L8.69012 10.8236M23.3938 18.8438L16.7103 10.8236M0.669922 5.47678L10.3276 11.9151C11.1851 12.4868 11.6138 12.7728 12.0772 12.8837C12.4868 12.9819 12.9137 12.9819 13.3233 12.8837C13.7867 12.7728 14.2154 12.4868 15.0729 11.9151L24.7305 5.47678M4.94736 20.1805H20.4531C21.9503 20.1805 22.699 20.1805 23.2709 19.8891C23.7739 19.6328 24.1829 19.2238 24.4391 18.7208C24.7305 18.149 24.7305 17.4003 24.7305 15.903V5.74412C24.7305 4.24688 24.7305 3.49825 24.4391 2.92638C24.1829 2.42334 23.7739 2.01436 23.2709 1.75806C22.699 1.46667 21.9503 1.46667 20.4531 1.46667H4.94736C3.45012 1.46667 2.70149 1.46667 2.12963 1.75806C1.62658 2.01436 1.21761 2.42334 0.961309 2.92638C0.669922 3.49825 0.669922 4.24686 0.669922 5.74412V15.903C0.669922 17.4003 0.669922 18.149 0.961309 18.7208C1.21761 19.2238 1.62658 19.6328 2.12963 19.8891C2.70149 20.1805 3.45011 20.1805 4.94736 20.1805Z"
                  stroke="black"
                  strokeOpacity="0.5"
                  strokeWidth="1.20303"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type="email"
                placeholder="Your email"
                className=" outline-none flex-1"
              />
            </div>

            <input
              type="number"
              placeholder="Phone Number"
              className="p-3 rounded-2xl w-full outline-none border"
            />
            <select
              name=""
              id=""
              className="p-3 rounded-2xl w-full outline-none border"
            >
              <option value="events" hidden>
                Event Type
              </option>
              <option value="events">Event</option>
              <option value="events">Event</option>
            </select>

            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="date"
                className="p-3 rounded-2xl w-full outline-none border"
              />
              <select
                name=""
                id=""
                className="p-3 rounded-2xl w-full outline-none border"
              >
                <option value="0" hidden>
                  Number of Attendees
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>

            <textarea
              rows={4}
              placeholder="Special Requirements"
              className="p-3 rounded-2xl w-full outline-none border"
            />
            <button className="bg-plum text-white rounded-[36px] py-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudioForm;
