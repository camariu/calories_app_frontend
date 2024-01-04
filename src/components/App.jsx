import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom';
 

export const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       </Routes>
    </div>
  );
};
