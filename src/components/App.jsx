 
import { Routes, Route, } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Hero from './Hero/Hero';
import NavBar from './NavBar/NavBar';
 

export const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
       <Route path='/' element={<Hero></Hero>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element ={<Register></Register>}></Route>
      </Routes>
    </div>
  );
};
