import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../styles/output.css";
import "../styles/all.css";

function Login() {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };
  return (
    <div className=" bg-gray-600 bg-opacity-70 w-96 h-80 px-4 py-4 rounded-md ml-auto mr-auto mt-32">
      <form>
        <div className="">
          <h1 className="text-center font-bold text-2xl p-4 capitalize text-green-300 ">
            Welcome to Uzi
          </h1>
          <div className="bg-white bg-opacity-40 p-2 rounded-md flex">
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

          <div className="flex justify-evenly mt-4 ">
            <button
              className="btn-text text-green-400 cursor-pointer w-18 p-2 rounded-sm justify-center hover:bg-white hover:text-green-500 text-xl uppercase"
              onClick={() => {
                navigate("/home");
              }}
            >
              login
            </button>

            <button
              className="btn-text text-green-400 cursor-pointer w-18 p-2 rounded-sm justify-center hover:bg-white hover:text-green-500 text-xl uppercase"
              onClick={() => {
                navigate("/register");
              }}
            >
              register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
