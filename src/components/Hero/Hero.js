import React, { useState } from 'react';


 
import banana from '../../assets/image/Layer-9.png';
import leaves from '../../assets/image/Layer-4 1.png';
import strawberry from '../../assets/image/Strawberry-Big-PNG.png';
import vector from '../../assets/image/Vector 3.png';
import bananaTablet from '../../assets/image/banana-tablet.png';
import leavesTablet from '../../assets/image/lef-tablet.png';
import strawberryTablet from '../../assets/image/Strawberry-tablet.png';
import vectorTablet from '../../assets/image/vector-tableta.png';
import ModalDailyCalories from 'components/ModalDailyCalories/ModalDailyCalories';



export default function Hero() {

  const [visibleModal, setVisibleModal] = useState(false)

  const handleOnClose = () => setVisibleModal(false)
  return (
    <section className="container mx-auto px-5 static  ">
      
      <h1 className="font-OpenSans  mt-8 text-black font-bold text-2xl sm:mt-28 sm:text-4xl md:w-title md:leading-snug z-20">
        Calculate your daily calorie intake right now
      </h1>
      <div className="mt-9 sm:mt-16  z-20">
        <form className=" sm:flex ">
          <div className="flex flex-col ">
            <label className=" text-second-color hover:text-green-500 font-bold border-b-4  pb-4">
              Height *
              <input
                type="number"
                required
                className="border-none outline-none ml-4 text-black"
              ></input>
            </label>
            <label className="text-second-color  hover:text-green-500 font-bold mt-8 sm:mt-10 border-b-4 pb-4">
              Age *
              <input
                type="number"
                required
                className="border-none outline-none ml-4 text-black"
              ></input>
            </label>
            <label className=" text-second-color hover:text-green-500 font-bold  mt-8 sm:mt-10 border-b-4 pb-4">
              Curent weight *
              <input
                type="number"
                required
                className="border-none outline-none ml-4 text-black"
              ></input>
            </label>
          </div>
          <div className="flex flex-col sm:ml-8">
            <label className=" text-second-color hover:text-green-500 font-bold  mt-8  sm:mt-0 pb-4  border-b-4">
              Desired weight *
              <input
                type="number"
                required
                className="border-none outline-none ml-4 text-black"
              ></input>
            </label>
            <div className=" flex flex-col  ">
              <label className=" text-second-color hover:text-green-500 font-bold  mt-8 sm:mt-10 border-b-4 pb-4">
                Blood type *
              </label>
              <div className="flex">
                <label htmlFor="option1" className="flex items-center gap-2  ">
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    className="border-none outline-none ml-4 text-black "
                  ></input>
                  1
                </label>
                <label htmlFor="option2" className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    className="border-none outline-none ml-4 text-black   "
                  ></input>
                  2
                </label>
                <label htmlFor="option3" className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    className="border-none outline-none ml-4 text-black   "
                  ></input>
                  3
                </label>
                <label htmlFor="option4" className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="option4"
                    name="options"
                    className="border-none outline-none ml-4 text-black  "
                  ></input>
                  4
                </label>
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-10 pb-28  sm:justify-start md:justify-center lg:md:justify-center  xl:md:justify-center sm:mt-16">
          <button onClick={()=>setVisibleModal(true) } className="p-3.5 text-white font-bold bg-logo-color rounded-full font-OpenSans ">
            Start losing weight
          </button>
        </div>
      </div>
      {/* Image desktop */}
      <img
        alt=''
        src={banana}
        className=" hidden lg:block absolute top-5 right-0 "
      ></img>
      <img
         alt=''
        src={vector}
        className=" hidden lg:block absolute top-11 right-0 bg-cover -z-10 "
        width={602}
        height={816}
      ></img>
      <img
         alt=''
        src={strawberry}
        className=" hidden lg:block absolute top-504 right-0 "
      ></img>
      <img
         alt=''
        src={leaves}
        className=" hidden lg:block absolute  top-0 right-195 "
      ></img>
        {/* Image tablet */}
      <img
        alt=''
        src={bananaTablet}
        className=" hidden sm:block lg:hidden absolute    top-[820px] right-0 "
      ></img>
      <img
         alt=''
        src={vectorTablet}
        className=" hidden sm:block lg:hidden absolute top-593 right-0 bg-cover -z-10 "
        width={602}
        height={816}
      ></img>
      <img
         alt=''
        src={strawberryTablet}
        className=" hidden  sm:block  lg:hidden absolute top-[593px] right-[56px] "
      ></img>
      <img
         alt=''
        src={leavesTablet}
        className=" hidden sm:block  sm:rotate-90 absolute  lg:hidden  top-493 right-116 "
      ></img>

      <ModalDailyCalories  onClose={handleOnClose}   visible={visibleModal}></ModalDailyCalories>

    </section>
  );
}
