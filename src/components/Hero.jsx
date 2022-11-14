import React from "react";
import chat from "../assets/img/Begin-chat.png";

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
      </div>

      {/* <div className="py-4 grid  items-center md:grid-cols-2">
        <div className="head-container -z-10   drop-shadow-2xl text-center px-4">
          <div className="img-container flex justify-center px-5">
                        <img className="w-full" src={chat} alt="" />

          </div>
        </div>

        <div className="head-container text-center px-4">
          <h3 className="text-center text-2xl">Smooth, Relible Message</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            commodi ut cupiditate? Hic esse excepturi eligendi recusandae
            consectetur id labore!
          </p>
          <div className="img-container px-5">
                        <img className="w-full" src={chat} alt="" />

          </div>
        </div>
      </div> */}

      <div className="home-card relative -z-10 border border-white rounded-md w-[29.7rem] mx-auto bg-white opacity-[0.5] drop-shadow-2xl shadow-xl shadow-black">
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
