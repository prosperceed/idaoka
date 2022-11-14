import React, { useState, useEfect, useEffect } from "react";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="w-screen z-10 navbar h-[80px] bg-zinc-200 fixed drop-shadow-sm shadow-md opacity-[0.8] shadow-black">
      <div className="px-3 flex justify-between items-center h-full w-full">
        <div className="flex items-center">
          <h2 className="brand font-bold text-3xl sm:4xl mr-4">
            <Link to="/">IDAOKA</Link>
          </h2>
          <ul className="hidden md:flex">
            <li className="list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-item">
              <Link>About</Link>
            </li>
            <li className="list-item">
              <Link to="chat">Chats</Link>
            </li>
          </ul>
        </div>
        <div className="account hidden md:flex pr-3">
          <Link
            className="py-2 px-4 bg-blue-300 rounded-sm mr-3 hover:bg-zinc-200 hover:border border-blue-300"
            to="register"
          >
            Sign Up
          </Link>
          <Link
            className="py-2 px-4 bg-transparent border border-blue-300 hover:bg-blue-300"
            to="login"
          >
            Sign In
          </Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          {nav ? (
            <BiMenuAltRight className="text-3xl" />
          ) : (
            <BiMenuAltLeft className="text-3xl" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : " top-[5rem] z-10 h-[80rem] flex flex-col items-center bg-zinc-200 w-[10rem]"
        }
      >
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link>About</Link>
        </li>
        <li className="list-item">
          <Link to="chats">Chats</Link>
        </li>
        <div className="flex flex-col my-3">
          <Link
            className="py-2 px-4 bg-blue-300 rounded-sm hover:bg-zinc-200 hover:border border-blue-300 mb-4"
            to="register"
          >
            Sign Up
          </Link>
          <Link
            className="py-2 px-4 bg-transparent border border-blue-300 hover:bg-blue-300"
            to="login"
          >
            Sign In
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
