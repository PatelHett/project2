import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    image: null,
    objectName: "",
    location: "",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.username);
      formDataToSend.append("contact", formData.contact);
      formDataToSend.append("image", formData.image);
      formDataToSend.append("objectName", formData.objectName);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("date", formData.date);

      // console.log(formDataToSend.forEach((value, key) => console.log(key, value)) );

      const response = await axios.post("https://lost-found-serve.vercel.app/upload", formDataToSend);
      // console.log(response.data);

      // const responseData = await response.json();
     
      // Redirect or show success message
      if(!response.data.err){
        setError('Done✅')
        setTimeout(() => {window.location.href = response.data.redirectUrl}, 2000);
      }else{
        setError(response.data.err)
      }
    } catch (error) {
      console.error("---->"+error);
      // Show error message
    }
  };

  return (
    <>
      <Navbar />
    <div className="c-i-f">
      <div className="lostitem_page">
        <div id="green_el"></div>
      </div>
      <div className="img-form signup-form " >
        <div className="f1">
          <form onSubmit={handleSubmit} className="register-form">
            <input
              style={{ "margin-bottom": "30px" }}
              type="text"
              name="username"
              placeholder="Your Name"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
            />
            <input
              style={{
                position: "relative",
                left: "0px",
                "margin-top": "20px",
                width: "75%",
              }}
              type="file"
              name="image"
              onChange={handleChange}
            />
            {/* <label style={{ "margin-top": "20px" }} htmlFor="objectName">
              Object Name:
            </label> */}
            <br />
            <input
              style={{ "margin-top": "-6px" }}
              type="text"
              id="objectName"
              name="objectName"
              value={formData.objectName}
              onChange={handleChange}
              placeholder="Object Name"
              required
            />
            <br />
            {/* <label style={{ "margin-top": "-15px" }} htmlFor="location">
              Location:
            </label> */}
            <br />
            <input
              style={{ "margin-top": "-2px" }}
              type="text"
              id="location"
              name="location"
              value={formData.location}
              placeholder="Location📌"
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="date">Date (YYYY-MM-DD):</label>
            <br />
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <button
              style={{
                "margin-top": "-16px",
                width: "70%",
              }}
              type="submit"
              id="register_submit"
            >
              Register
            </button>
          </form>
          {error && <p style={{ color: "white", backgroundColor:"red" ,fontSize:'18px',padding:'0 2px',width:'fit-content'}}>{error}</p>}
        </div>
        <div className="i1">
          <img
            style={{ position: "absolute", right: "5%", top: "27%" }}
            src="../imgs/vector_img.png"
            alt="image"
          />
        </div>
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

export default RegisterForm;
