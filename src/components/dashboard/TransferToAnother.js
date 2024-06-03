import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TransferToAnother = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">BLBM Wallet</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Transfer to Others</h6>
      </div>
      <div className="row">
        <div className="col-lg-7 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <h5 className="forgetPass">TRANSFER TO OTHERS</h5>
              <div className="my-2 text-danger">
                Available Balance : <span> 33728</span>
              </div>
            </div>
            <div className="card-body text-white">
              <div>
                <div>
                  <div className="mb-2 pe-2">User ID</div>
                  <div>
                    <input
                      type="text"
                      id="userID"
                      name="userID"
                      placeholder="Enter User ID"
                      className="customFormControl3 mb-2"
                    />
                  </div>
                  <div className="mb-2 pe-2">Amount</div>
                  <div>
                    <input
                      type="text"
                      id="amount"
                      name="amount"
                      placeholder="Enter Amount"
                      className="customFormControl3 mb-2"
                    />
                  </div>
                  <div className="mb-2 pe-2">OTP</div>
                  <div>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      placeholder="Enter otp"
                      className="customFormControl3 mb-2"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-baseline">
                  <button className="getOtpBtn me-2">Get OTP</button>
                  <button className="submitBtn2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferToAnother;
