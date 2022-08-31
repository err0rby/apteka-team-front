import React from 'react';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <Routes>
      <Route path='/auth' element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/' element={<Home />}></Route>
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default App;
