import React from 'react';

import logo from '../../assets/image/logo.png';
import logo2 from '../../assets/image/logo (1).png';

export default function NavBar() {
  return (
    <nav className="container mx-auto p-5">
      <ul className="  flex items-center justify-between   md:justify-start md:mt-16 md:items-end">
        <div className='flex items-center '>
          <img alt=''src={logo2} className='hidden md:block'></img>
          <img src={logo} alt='' className=' visible h-11 sm:h-25 md:hidden'></img>
          <span className=' hidden sm:block ml-5 md:hidden '>Slim</span>
          <span className=" hidden sm:block text-logo-color  md:hidden">Mom</span>
        </div>
        <div className=" md:ml-5 md:border-l-4">
          <a href="http://localhost:3000/calories_app_frontend" className='text-sm text-second-color font-bold font-OpenSans md:ml-5'>LOG IN</a>
          <a href="http://localhost:3000/calories_app_frontend" className='ml-6 text-sm text-second-color  font-bold font-OpenSans'>REGISTRATION</a>
        </div>
      </ul>
    </nav>
  );
}
