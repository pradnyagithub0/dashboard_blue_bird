import React from "react";
import { Link } from "react-router-dom";
import favicon from "../assets/images/favicon1.png";

const Error = () => {
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
              <h4 className="heading mb-5">Registration Failed !</h4>
              <div className="mb-4 inputDivs">
                <div className="errorBox">
                  Entered SPONSER ID not available in system.
                </div>
                <div className="errorBox">
                  <Link to="/signup" className="linkStyle">
                    Try again for Registration.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
