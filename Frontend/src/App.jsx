import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from './SingUp';
import "./SingUp.css"
import SingIn from './SingIn';
import Home from './Home';
const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<SingUp/>}/>
        <Route path='/singin' element={<SingIn/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
