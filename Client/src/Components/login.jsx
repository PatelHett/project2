import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="blur-container">
        <LoginForm />
      </div>
    </div>
  );
}

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const [error, setErr] = useState();

  const postData = async () => {
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://lostfoundserver.onrender.com/login", {
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
      if (responseData.redirectUrl) {
        window.location.href = responseData.redirectUrl;
      }
      // Check if there is a redirectUrl in the response data
      else if (responseData.err) {
        setErr(<h4 className="error">{responseData.err}</h4>);
      } 
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(email + "  " + password);
    if (!email || !password ) {
      setErr(<h4 className="error_re">⚠️All fields are required.</h4>);
      return;
    }
    postData();
    navigate("/");
  };
  const Navigate = useNavigate();

  return (
    <div className="main">
      <section className="signup">
        <div id="green_el"></div>
        <div className="container">
          <div className="signup-content">
            <div className="login-image">
              <figure>
                <img
                  src="./imgs/login_vector.png"
                  alt="login image"
                  id="login-img"
                />
              </figure>
            </div>
            <div className="signup-form">
              <form method="POST" className="register-form" id="login-form">
                <h2 className="form-title">Login</h2>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
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
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                {error}
                <a onClick={()=>{Navigate('/signup')}} className="signup-image-link">
                  don't have account
                </a>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Login"
                    onClick={handleLogin}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
