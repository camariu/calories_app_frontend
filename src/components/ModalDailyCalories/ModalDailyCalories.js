import React from 'react';

export default function ModalDailyCalories() {
  return (
    <section className="container mx-auto bg-blue-200 z-10 h-hmodal w-wmodal  ">
      <div className="flex flex-col  justify-center  items-center ">
        <div className="  flex flex-col justify-center items-center border-b-4">
          <h2 className="font-OpenSans font-bold text-2xl sm:text-2xl mt-10 mb-11">
            Your recommended daily calorie intake is
          </h2>
          <p className="font-OpenSans font-bold text-5xl text-number-calorie-color  pb-8">
            2800 kcal
          </p>
        </div>
        <div className="flex flex-col items-start  ">
          <h3 className="font-OpenSans font-bold text-lg ">
            Foods you should not eat
          </h3>
          <ol className="list-decimal flex flex-col items-start  ">
            <li>Flour products</li>
            <li>Milk</li>
            <li> Red meat</li>
            <li>Smoked meats</li>
          </ol>
        </div>
        <div className="flex justify-center mt-10">
          <button className="p-3.5 text-white font-bold bg-logo-color rounded-full ">
            Start losing weight
          </button>
        </div>
      </div>
    
    </section>
  );
}
