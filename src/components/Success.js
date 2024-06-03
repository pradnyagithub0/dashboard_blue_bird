import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Success = () => {
  return (
    <div className="successContainer">
      <div className="row formDiv">
        <div className="col-lg-12 col-sm-12 mx-auto">
          <div className="formContainer1">
            <div className="text-center">
              <h2 className="heading mb-3 text-dark">Welcome to Blue Bird !</h2>
              <div className="mb-3 inputDivs">
                <div className="mb-3">
                  <CheckCircleIcon className="text-success fs-success" />
                </div>
                <div className="heading mb-3 text-dark">
                  <h4>Registration Successfull.</h4>
                </div>
                <div className="">
                  <Link to="/dashboard" className="linkStyle">
                    <button className="convertButton border-0">
                      Go to Dashboard
                    </button>
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

export default Success;
