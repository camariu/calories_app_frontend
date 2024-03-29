import React, { useEffect, useState } from 'react';

import banana from '../../assets/image/Layer-9.png';
import leaves from '../../assets/image/Layer-4 1.png';
import strawberry from '../../assets/image/Strawberry-Big-PNG.png';
import vector from '../../assets/image/Vector 3.png';
import bananaTablet from '../../assets/image/banana-tablet.png';
import leavesTablet from '../../assets/image/lef-tablet.png';
import strawberryTablet from '../../assets/image/Strawberry-tablet.png';
import vectorTablet from '../../assets/image/vector-tableta.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/operations';
import { selectIsAuthentificated } from "../../redux/selectors.js"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch =useDispatch()
  const isAuth = useSelector(selectIsAuthentificated)
  const navigate = useNavigate()

  const handleChangeInput = event => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };


  const handleSubmit = event => {
    event.preventDefault()
    dispatch(login({ email:email, password:password}))
    
  }

  useEffect(()=>{
   if(isAuth){
    navigate("/acount")
   } 
    
  },[isAuth, navigate])

  return (
    <div className="container mx-auto px-5 ">
      <div className="flex justify-center md:justify-start">
        <p className="text-logo-color text-2xl font-bold mt-10">LOGIN IN</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-start   mt-14 gap-10">
        <label className="text-second-color text-lg hover:text-fuchsia-800 font-bold">
          Email *
          <input
            value={email}
            onChange={handleChangeInput}
            name="email"
            type="email"
            required
            className="border-none outline-none ml-4 text-black     "
          />
        </label>
        <label className="text-second-color text-lg hover:text-fuchsia-800 font-bold">
          Password *
          <input
            onChange={handleChangeInput}
            value={password}
            name="password"
            type="password"
            required
            className="border-none outline-none ml-4 text-black   "
          />
        </label>
        <div className="flex  gap-6 flex-col md:flex-row md:gap-6  mt-16  justify-center items-center md:justify-start">
        <button type='submit' className="  text-logo-color font-OpenSans font-bold bg-withe border-2 border-logo-color rounded-full  py-3 px-51 ease-in duration-300 hover:bg-logo-color hover:text-white ">
          Login
        </button>
        <Link to={'/register'}>
          <button className="  text-logo-color  font-OpenSans font-bold bg-withe border-2 border-logo-color rounded-full  py-3 px-37  ease-in duration-300 hover:bg-logo-color hover:text-white">
            Register
          </button>
        </Link>
      </div>
      </form>
      
      <img
        alt=""
        src={banana}
        className=" hidden lg:block absolute top-5 right-0 z-10"
      ></img>
      <img
        alt=""
        src={vector}
        className=" hidden lg:block absolute top-11 right-0 bg-cover -z-10 "
        width={602}
        height={816}
      ></img>
      <img
        alt=""
        src={strawberry}
        className=" hidden lg:block absolute top-504 right-0 z-10"
      ></img>
      <img
        alt=""
        src={leaves}
        className=" hidden lg:block absolute  top-0 right-195 z-10"
      ></img>
      {/* Image tablet */}
      <img
        alt=""
        src={bananaTablet}
        className=" hidden sm:block lg:hidden absolute    top-[820px] right-0 z-10"
      ></img>
      <img
        alt=""
        src={vectorTablet}
        className=" hidden sm:block lg:hidden absolute top-593 right-0 bg-cover -z-10 "
        width={602}
        height={816}
      ></img>
      <img
        alt=""
        src={strawberryTablet}
        className=" hidden  sm:block  lg:hidden absolute top-[593px] right-[56px] z-10"
      ></img>
      <img
        alt=""
        src={leavesTablet}
        className=" hidden sm:block  sm:rotate-90 absolute  lg:hidden  top-493 right-116 z-10 "
      ></img>
    </div>
  );
}
