import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error,setErr] = useState('')

  // const postData = async()=>{
  //   const data = {
  //     name:name,
  //     email:email,
  //     password:password
  //   }

  //   await post('http://localhost:4000/registerdata',data).then(res => console.log(res.data))
  // }
  const postData = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:4000/registerdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response) {
        throw new Error("Response is undefined or null");
      }

      const responseData = await response.json();
      console.log(responseData);

      // Check if there is a redirectUrl in the response data
      if (responseData.redirectUrl) {
        window.location.href = responseData.redirectUrl;
      }
      else{
        if(responseData.err)
        setErr(<h4 className="error">User Already Exsist</h4>)
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email + " | " + name + " | " + password + " | " + terms);
    if (!name || !email || !password || !terms) {
      setErr(<h4 className="error_re">⚠️All fields are required.</h4>);
      return;
    }
    postData();
  };
  return (
    <div className="main">
      <section className="signup">
        <div id="green_el"></div>
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <form method="POST" className="register-form" id="register-form">
                <h2 className="form-title">Sign up</h2>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    required
                    placeholder="Repeat your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error}
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    required
                    className="agree-term"
                    onChange={(e) => setTerms(e.target.value)}
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="#" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    
                    className="form-submit"
                    value="Register"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="./imgs/signup.jpg" alt="sign up image" />
              </figure>
              <a href="login" className="signup-image-link">
                I am already a member
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpForm;
