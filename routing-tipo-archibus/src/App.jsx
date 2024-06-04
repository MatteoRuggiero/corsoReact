import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';
import Lorenzo from './components/Lorenzo';
import Matteo from './components/Matteo';
import Mauro from './components/Mauro';
import Home from './components/Home';


function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/Lorenzo" element={<Lorenzo />} />
          <Route path="/Matteo" element={<Matteo />} />
          <Route path="/Mauro" element={<Mauro />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
