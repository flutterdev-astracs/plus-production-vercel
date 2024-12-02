import React from "react";

const EventChat = () => {
  return (
    <>
      <div className="width-container my-10 min-h-[600px] bg-cover flex  justify-center items-center bg-center rounded-[40px] text-white bg-[url('/eventChat.webp')]">
        <div className="w-[80%] mx-auto flex  justify-center items-center flex-col gap-8">
          <h4 className="text-4xl text-center">Let’s Make Your Event Unforgettable</h4>
          <p className="text-xl leading-7 text-center">
            Ready to plan the event your company deserves? Whether it’s a small
            gathering or a multi-day bash, we’ll turn your vision into something
            unforgettable. Let’s stop talking and start planning - your epic
            event is just a click away!
          </p>
          <button className="bg-[#F7F3E3] text-plum py-3 px-6 rounded-full">Let&apos;s Chat</button>
        </div>
      </div>
    </>
  );
};

export default EventChat;
