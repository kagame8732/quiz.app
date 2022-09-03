import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" bg-gray-600 bg-opacity-70 w-96 h-80 px-4 py-4 rounded-md ml-auto mr-auto mt-32">
      <form>
        <div className="">
          <h1 className="text-center font-bold text-2xl p-4 capitalize text-green-300 ">
            Welcome to Uzi
          </h1>
          <div className="bg-white bg-opacity-40 p-2 rounded-md flex">
            <input
              type="text"
              name="fullname"
              placeholder="Enter FullName"
              required
              className="bg-white bg-opacity-30 rounded-sm p-2 w-full border-none placeholder-slate-900"
            />
          </div>
          <div className="bg-white bg-opacity-40 p-2 rounded-md flex">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              className="bg-white bg-opacity-30 rounded-sm p-2 w-full border-none placeholder-slate-900"
            />
          </div>
          <div className="bg-white bg-opacity-40 p-2 rounded-md flex mt-4 relative">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="bg-white bg-opacity-30 rounded-sm p-2 w-full border-0 placeholder-slate-900"
              required
            />
          </div>
          <div>
            <div className="flex justify-center mt-4 ">
              <Link
                to={"/quiz"}
                className="btn-text text-green-400 cursor-pointer w-18 p-2 rounded-sm justify-center hover:bg-white hover:text-green-500 text-xl uppercase"
              >
                login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
