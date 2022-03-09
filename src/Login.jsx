import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const BASE_URL = "http://13.235.87.215:4000";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  console.log(showSignup);

  const loginFn = () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const data = {
      username: username.value,
      password: password.value,
    };
    axios.post(BASE_URL + "/api/v1/user/login", data).then(function(response) {
      if (response.data.success) {
        localStorage.setItem("username", response.data.data.username);
        localStorage.setItem("userId", response.data.data.userId);
        localStorage.setItem("token", response.data.data.token);
        window.location.href = "/home";
      }
    });
  };

  const signupFn = () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const data = {
      username: username.value,
      password: password.value,
    };
    axios.post(BASE_URL + "/api/v1/user/signup", data).then(function(response) {
      console.log(response);
      if (response.data.success) {
        localStorage.setItem("username", response.data.data.username);
        localStorage.setItem("userId", response.data.data.userId);
        localStorage.setItem("token", response.data.data.token);
        window.location.href = "/home";
      }
    });
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div id="loginpage">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="home-title text-center">Welcome to ecommerce</h2>
            {!showSignup ? (
              <div className="login-wrapper">
                <h4 className="text-center">Login</h4>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    id="username"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value="Login as user"
                    onClick={loginFn}
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div
                  className="signup-btn text-center text-info"
                  onClick={toggleSignup}
                >
                  Don't have a account? Sign up here
                </div>
                <div className="auth-error-msg text-danger text-center"></div>
              </div>
            ) : (
              <div className="login-wrapper">
                <h4 className="text-center">Sign Up</h4>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    id="username"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value="Signup as user"
                    onClick={signupFn}
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div
                  className="signup-btn text-center text-info"
                  onClick={toggleSignup}
                >
                  Having an account? Login here
                </div>
                <div className="auth-error-msg text-danger text-center"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
