import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register pt-[10rem] max-w[20rem] flex justify-center items-center">
      <div className="bg-slate-300 border shadow-md shadow-black opacity-[0.8] border-white py-6 rounded-[12px]">
        <h2 className="py-2 text-black text-2xl text-center font-bold">
          Create A New Account
        </h2>
        <form>
          <div className="input-group px-10 my-3">
            <input
              type="text"
              className="py-2 w-full px-2 outline-none rounded-md"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="input-group px-10 my-3">
            <input
              type="email"
              className="py-2 w-full px-2 outline-none rounded-md"
              placeholder="Enter Email"
            />
          </div>
          <div className="input-group px-10 my-3">
            <input
              type="Enter Password"
              className="py-2 w-full px-2 outline-none rounded-md"
              placeholder="Enter Password"
            />
          </div>
          <div className="input-group px-10 my-3">
            <p className="py-1 text-blue-800">choose profile picture</p>
            <input
              type="file"
              className="outline-none text-white bg-purple-700"
            />
          </div>
          <div className="btn px-10 flex items-center justify-left">
            <button className="py-3 px-5 bg-blue-300">Submit</button>
            <p className="text-blue-800 px-4">
              Already registered?{" "}
              <Link className="text-purple-600" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="circle-1"></div>
    </div>
  );
};

export default Register;
