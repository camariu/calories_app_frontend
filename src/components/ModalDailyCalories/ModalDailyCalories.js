import React from 'react';
import { Link } from 'react-router-dom';

export default function ModalDailyCalories({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className=" mt-[81px] sm:mt-0 fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center">
      <div className=" min-w-full min-h-full sm:min-w-[672px] sm:min-h-[572px] bg-white ">
        <div className=" bg-slate-400 h-[40px] sm:bg-white flex justify-start sm:justify-end">
          <button onClick={onClose} className="pr-[15px] hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={onClose} className="pl-[15px] block sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
        </div>

        <div className='mt-[24px] flex justify-start sm:justify-center px-5'>
          <h2 className='font-OpenSans font-bold text-[26px]    '>Your recommended daily calorie intake is</h2>
        </div>
        <div className='flex justify-center items-center'>
          <span className='font-bold text-[48px] text-[#264061]'>2800</span>
          <span className=' ml-3 font-bold   text-[#264061]'>kcal</span>
        </div>

        <div className="flex flex-col  justify-center  items-center bg-white">
          <div className="flex justify-center mt-10">
            <Link to={'/login'}>
              <button className="p-3.5 text-white font-bold bg-logo-color rounded-full ">
                Start losing weight
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
