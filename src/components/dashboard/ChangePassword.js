import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ChangePassword = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Profile</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Change Password</h6>
      </div>
      <div className="row">
        <div className="col-lg-7 col-md-10 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header">
              <h5 className="forgetPass">CHANGE PASSWORD</h5>
            </div>
            <div className="card-body text-white">
              <div>
                <div className="mb-2">Current Password</div>
                <div>
                  <input
                    type="text"
                    id="currentPass"
                    name="currentPass"
                    placeholder="Current Password"
                    className="customFormControl3 mb-2"
                  />
                </div>
                <div className="mb-2">New Password</div>
                <div>
                  <input
                    type="text"
                    placeholder="New Password"
                    className="customFormControl3 mb-2"
                  />
                </div>
                <div className="mb-2">Confirm Password</div>
                <div>
                  <input
                    type="text"
                    id="confirmPass"
                    name="confirmPass"
                    placeholder="Confirm Password"
                    className="customFormControl3 mb-2"
                  />
                </div>
                <div className="mb-2">Enter OTP</div>
                <div>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    placeholder="Enter OTP"
                    className="customFormControl3 mb-2"
                  />
                </div>
                <div className="mb-3">
                  <button className="getOtpBtn">Get OTP</button>
                </div>
                <div>
                  <button className="submitBtn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
