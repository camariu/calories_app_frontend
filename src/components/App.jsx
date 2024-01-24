 
import { Routes, Route, } from 'react-router-dom';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Hero from './Hero/Hero';
import NavBar from './NavBar/NavBar';
import AcountPage from './AcountPage/AcountPage';
 

export const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
       <Route path='/' element={<Hero></Hero>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element ={<Register></Register>}></Route>
       <Route path='/acount' element={<AcountPage></AcountPage>}></Route>
      </Routes>
    </div>
  );
};
