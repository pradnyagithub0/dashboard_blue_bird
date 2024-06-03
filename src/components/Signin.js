import React from "react";
import { Link } from "react-router-dom";
import favicon from "../assets/images/favicon1.png";
import logo from "../assets/images/logo.png";

import "../App.css";

const Signin = () => {
  return (
    <div className="signinContainer">
      <div className="row formDiv">
        <div className="col-lg-6 col-sm-12">
          <div className="imgDiv">
            <img src={favicon} alt="favicon" width="60%" class="favIconImg" />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="formContainer">
            <div className="text-center">
              <img
                src={logo}
                alt="favicon"
                width="60%"
                className="circular-image"
              />
              <div className="d-flex justify-content-center align-items-center mb-4">
                <Link to="/signup" className="text-danger me-2 linkStyle">
                  Home
                </Link>
                <span className="text-danger me-2">|</span>
                <Link to="signup" className="text-danger me-2 linkStyle">
                  Register
                </Link>
              </div>
              <h4 className="heading mb-4">Login</h4>
              <div className="mb-4 inputDivs">
                <input
                  type="text"
                  className="customFormControl mb-4"
                  placeholder="Enter your mail"
                />
                <input
                  type="text"
                  className="customFormControl"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <Link to="/forgetpass" className="forgetPass linkStyle">
                  Forget password?
                </Link>
              </div>
              <div>
                <Link to="/dashboard" className="linkStyle">
                  <button className="btnPrimary">
                    Login <i class="bi bi-caret-right-fill ps-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
