import React, { useState } from "react";
import axios from "axios";
import "../contact.css";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to your backend for processing
      const response = await axios.post("https://lost-found-serve.vercel.app/contact", formData);
      console.log(response.data);
      // Show success message or redirect
    } catch (error) {
      console.error(error.response.data);
      // Show error message
    }
  };

  return (
    <>
      <Navbar />
      <div className="lostitem_page">
        <div id="green_el"></div>
      </div>
      <div className="signup-form">
        <div className="contact-form ">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="register-form">
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" id="contact_submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function Navbar() {
  const Navigate = useNavigate();
  return (
    <div className="navbar">
      <img src="/imgs/logo.jpg" alt="Logo" />
      <nav id="menu">
        <menu onClick={() => Navigate("/register")}>Register</menu>
        <menu onClick={() => Navigate("/lost-items")}>Lost-Items</menu>
        <menu onClick={() => Navigate("/")}>Home</menu>
      </nav>
    </div>
  );
}

export default ContactForm;
