import React from "react";
import chat from "../assets/img/Begin-chat.png";

const Hero = () => {
  return (
    <div className="max-w[43rem] text-center py-12">
      <div className="grid items-center gap-x-0 md:grid-cols-2">
        <div className="img-container pt-10">
          <img className="w-full" src={chat} alt="" />
        </div>
        <div className="">
          <h2 className="text-white text-4xl text-center">Chat Fast</h2>
        </div>
      </div>
      <div className="home-card relative border border-white rounded-md w-[29.7rem] mx-auto bg-white opacity-[0.5] drop-shadow-2xl shadow-xl shadow-black">
        <div className="px-4 py-10">
          <h2 className="text-purple-600 text-3xl text-center mb-2">
            About Us
          </h2>

          <div className="mt-2">
            <p className="text-base py-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              quis, quisquam fuga minima natus excepturi aliquam non corporis
              illum modi adipisci. Voluptate explicabo sint mollitia
              consequuntur voluptatem eaque aliquam excepturi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
