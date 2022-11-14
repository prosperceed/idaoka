import React from "react";
import chat from "../assets/img/Begin-chat.png";
import social from "../assets/img/social.png";

const Hero = () => {
  return (
    <div className="max-w[43rem]">
      <div className="grid items-center py-36 md:grid-cols-2">
        <div className="">
          <h3 className="text-center text-white text-3xl md:text-4xl md:font-bold">
            Smooth. Fast. Secured Chat niche
          </h3>
          <p className="text-center text-white py-2 px-7 text-base md:text-[1.2rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            commodi ut cupiditate? Hic esse excepturi eligendi recusandae
            consectetur id labore!
          </p>
        </div>
        <div className="img-container pt-10">
          <img className="w-full" src={chat} alt="" />
        </div>
        <div className=" py-3">
          <h3 className="text-center text-3xl text-white">
            Connect with People
          </h3>
        </div>
        <div className="container flex justify-center items-center">
          <img className="w-[8rem]  py-2" src={social} alt="" />
        </div>
      </div>

      <div className="home-card relative -z-10 border border-white rounded-md w-[29.7rem] md:w-[80%] mx-auto bg-white opacity-[0.5] drop-shadow-2xl shadow-xl shadow-black">
        <div className="px-4 py-10 md:py-20">
          <h2 className="text-purple-600 text-3xl px-4 text-center -mb-4 -mt-6">
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
