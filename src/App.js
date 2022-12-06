import React from "react";
import "./index.css"; 
import About from "./Routes/about";
import Contact from "./Routes/contact";
import Home from "./Routes/home";
import Project from "./Routes/projects";
import {Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
