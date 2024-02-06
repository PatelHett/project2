import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Section1 from "./Components/section1";
import Section2 from "./Components/section2";
import Footer from "./Components/footer";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Addlist from "./Components/Addlist";
import Register from "./Components/register";
import ContactForm from "./Components/contact";


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
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/lost-items" element={<Addlist />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
