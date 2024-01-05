import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/image/logo.png';
import logo2 from '../../assets/image/logo (1).png';

export default function NavBar() {
  
  const navigate = useNavigate ()

  const redirectToLogin = () => {
    navigate("/login")
  }

  const redirectToRegister = () =>{
    navigate("/register")
  }


  return (
    <nav className="container mx-auto p-5">
      <ul className="  flex items-center justify-between   md:justify-start md:mt-16 md:items-end">
        <Link to={"/"}>
        <div className='flex items-center '>
          <img alt=''src={logo2} className='hidden md:block'></img>
          <img src={logo} alt='' className=' visible h-11 sm:h-25 md:hidden'></img>
          <span className=' hidden sm:block ml-5 md:hidden '>Slim</span>
          <span className=" hidden sm:block text-logo-color  md:hidden">Mom</span>
        </div>
        </Link>
        <div className=" md:ml-5 md:border-l-4">
          <button onClick={redirectToLogin}     className='text-lg text-second-color font-bold font-OpenSans md:ml-5 hover:text-logo-color ease-in-out duration-400' >LOG IN</button>
          <button onClick={redirectToRegister}   className='ml-6 text-lg text-second-color  font-bold font-OpenSans   hover:text-logo-color ease-in-out duration-400'>REGISTRATION</button>
        </div>
      </ul>
    </nav>
  );
}
