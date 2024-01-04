import React from 'react';

export default function Register() {
  return (
    <div>
      <div className="container mx-auto px-5 ">
        <div className="flex justify-center md:justify-start">
          <p className="text-logo-color font-bold mt-10">REGISTER</p>
        </div>
        <form className="flex flex-col items-start   mt-14 gap-10">
        <label className="text-second-color hover:text-green-500 font-bold">
            Name *
            <input
              type="text"
              required
              className="border-none outline-none ml-4 text-black     "
            />
          </label>
          <label className="text-second-color hover:text-green-500 font-bold">
            Email *
            <input
              type="email"
              required
              className="border-none outline-none ml-4 text-black     "
            />
          </label>
          <label className="text-second-color hover:text-green-500 font-bold">
            Password *
            <input
              type="password"
              required
              className="border-none outline-none ml-4 text-black   "
            />
          </label>
        </form>
        <div className="flex  gap-6 flex-col md:flex-row md:gap-6  mt-16  justify-center items-center md:justify-start">
        <button className="  text-logo-color  font-OpenSans font-bold bg-withe border-2 border-logo-color rounded-full  py-3 px-37  ease-in duration-300 hover:bg-logo-color hover:text-white">
            Register
          </button>
          <button className="  text-logo-color font-OpenSans font-bold bg-withe border-2 border-logo-color rounded-full  py-3 px-51 ease-in duration-300 hover:bg-logo-color hover:text-white ">
            Login
          </button>
          
        </div>
      </div>
    </div>
  );
}
