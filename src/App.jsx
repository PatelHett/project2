import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import "./App.css";
import { Components } from "react";
import Section1 from "./Components/section1";
import Section2 from "./Components/section2";
import Footer from "./Components/footer";
import Login from "./Components/login";
import Signup from "./Components/signup";


const Layout = ({ children }) => (
  <div>
    <Section1 />
    <Section2 />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout />} />

          <Route path="/" element={<Footer />} /> 
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
