import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Withdrawal = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Withdrawal</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Withdrawal</h6>
      </div>
      <div className="row">
        <div className="col-lg-7 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <h5 className="forgetPass">WITHDRAWAL</h5>
            </div>
            <div className="card-body text-white">
              <div>
                <h5 className="forgetPass mb-3">WALLET BALANCE: 31168.8</h5>
                <div className="mb-2">Enter BLBM</div>
                <div>
                  <input
                    type="text"
                    id="blb"
                    name="blb"
                    placeholder="Enter BLBM"
                    className="customFormControl3 mb-2"
                  />
                </div>
                <div className="mb-2">Enter Address</div>
                <div>
                  <select
                    name="address"
                    id="address"
                    className="customFormControl3 mb-2"
                  >
                    <option value="">Select Address</option>
                    <option value="2">
                      BLBM : ttgshdshj788bnbt667hbbt66tgvg
                    </option>
                  </select>
                  <div className="my-2 text-danger">
                    10% Transaction & Services charges
                  </div>
                </div>
                <div className="mb-2">Enter OTP</div>
                <div>
                  <input
                    type="text"
                    id="OTP"
                    name="OTP"
                    placeholder="Enter OTP"
                    className="customFormControl3 mb-2"
                  />
                </div>

                <div className="d-flex justify-content-start align-items-baseline">
                  <button className="getOtpBtn me-2">Get OTP</button>
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

export default Withdrawal;
