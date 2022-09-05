import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className=" bg-gray-600 bg-opacity-70 w-96 h-82 px-4 py-4 rounded-md ml-auto mr-auto mt-32">
      <form>
        <div className="">
          <h1 className="text-center font-bold text-2xl p-4 capitalize text-green-300 ">
            Welcome to Uzi
          </h1>
          <div className="bg-white bg-opacity-40 p-2 rounded-md flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Full Name"
              required
              className="bg-white bg-opacity-30 rounded-sm p-2 w-full border-none placeholder-slate-900"
            />
          </div>
          <div className="bg-white bg-opacity-40 p-2 rounded-md flex mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-12 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              className="bg-white bg-opacity-30 rounded-sm p-2 w-full border-none placeholder-slate-900"
            />
          </div>
          <div className="bg-white bg-opacity-40 p-2 rounded-md flex mt-4 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <input
              type={visible === false ? "password" : "text"}
              name="password"
              placeholder="Enter Password"
              className="bg-white bg-opacity-30 rounded-sm p-2 w-full border-0 placeholder-slate-900"
              required
            />
            {visible === false ? (
              <AiFillEyeInvisible
                className="w-16 h-8 absolute top-3 right-2 cursor-pointer"
                onClick={handleToggle}
              />
            ) : (
              <AiFillEye
                className="w-16 h-8 absolute top-3 right-2 cursor-pointer"
                onClick={handleToggle}
              />
            )}
          </div>
          <div>
            <div>
              <button className="btn-text mt-2 text-green-400 cursor-pointer w-18 p-2 rounded-sm justify-center hover:bg-white hover:text-green-500 text-xl uppercase">
                Register
              </button>
            </div>
            <div className="flex justify-center mt-4 ">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="btn-text text-green-400 cursor-pointer w-18 p-2 rounded-sm justify-center hover:bg-white hover:text-green-500 text-xl uppercase"
              >
                login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
