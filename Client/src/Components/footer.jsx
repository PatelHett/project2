import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useNavigate,Link } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();

  return (
    <footer className="text-dark">
      <div className="container1 d-flex flex-wrap justify-content-between align-items-start">
        <div className="flex-column mb-4 pl-100">
          <h2 className="logo text-white d-flex align-items-center justify-content-center mb-4">
            <img
              src="/imgs/logo.jpg"
              alt="logo"
              className="img-fluid"
              style={{ width: "110px", height: "110px" }}
            />
          </h2>
          <p className="pl-3 pl-md-5 pl-lg-4">
            Helping you find lost items and reunite with your belongings.
          </p>
        </div>

        <div className="mb-4">
          <h2>Developers</h2>
          <ul className="list-unstyled">
            <li>Dev Maurya</li>
            <li>Het Patel</li>
            <li>Yash Parmar</li>
            <li>Keyur Harsora</li>
            <li>Jeel Patel</li>
          </ul>
        </div>

        <div className="flex-column mb-4">
          <h2>Quick Links</h2>
          <ul className="list-unstyled">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/lost-items">Lost Items</Link>
            </li>
            <li>
              <Link to="/contact">Contacts of team members</Link>
            </li>
          </ul>
        </div>

        <div className="flex-column mb-4">
          <h2>Contact Information</h2>
          <p>
            <span>Email:</span> lostfound.lf@lostandfound.com
          </p>
          {/* Add more contact information as needed */}
        </div>
      </div>

      <div className="bg-secondary text-center p-2">
        <p className="m-0 text-white">
          &copy; 2024 Lost&amp;Found. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
