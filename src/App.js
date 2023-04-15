import './App.css';
import React from 'react';
import Home from './Routes/Home';
import Navbar from './components/Navbar';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    {/* <div className="content">Hi there how are you?</div> */}
    
    </div>
  );
}

export default App;
