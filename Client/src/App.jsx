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
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/lost-items" element={<Addlist />} />
    <Route path="/register" element={<Register />} />
    <Route path="/contact" element={<ContactForm />} />
  </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
