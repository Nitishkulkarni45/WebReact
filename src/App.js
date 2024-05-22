import './App.css';
import React from 'react';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import { Route, Routes } from "react-router-dom";
import Hotels from './components/Hotels';
import GullyEats from './Routes/GullyEats';
import GullyAdventure from './Routes/GullyAdventure';
import Login from './Routes/Login';
import SignUp from './Routes/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/GullyEats" element={<GullyEats />} />
        <Route path="/GullyAdventure" element={<GullyAdventure />} />
      </Routes>
    </div>
  );
}

export default App;
