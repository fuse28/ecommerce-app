import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
  const [showSignup, setShowSignup] = useState(false);
  console.log(showSignup);

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
                    classname="form-control"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    classname="form-control btn btn-primary"
                    value="Login as user"
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
                    classname="form-control"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    classname="form-control btn btn-primary"
                    value="Signup as user"
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
