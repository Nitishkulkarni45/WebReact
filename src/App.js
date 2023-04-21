import './App.css';
import React from 'react';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
