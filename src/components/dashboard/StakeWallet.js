import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import logo from "../../assets/images/logo.png";

const StakeWallet = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Staking / Staking BLBM Wallet</h6>
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Staking BLBM Wallet</h6>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-10 col-sm-12 mx-auto">
          <div className="card stakeCard mt-4">
            <div className="card-header text-center">
              <h6 className="my-2 text-white">
                BLBM Staking Wallet Balance : 3033.4
              </h6>
              <img
                src={logo}
                alt="logoImage"
                className="circular-image-header1 my-4"
              />
            </div>
            <div className="card-body text-white">
              <div className="row cardTableContent">
                <div className="col-5">
                  <span className="stakeContent">Min</span>
                </div>
                <div className="col-7 text-end">
                  <span className="stakeContent">500 BLBM</span>
                </div>
              </div>
              <div className="row cardTableContent">
                <div className="col-5">
                  <span className="stakeContent">Max</span>
                </div>
                <div className="col-7 text-end">
                  <span className="stakeContent">6500 BLBM</span>
                </div>
              </div>
              <div className="row cardTableContent">
                <div className="col-5">
                  <span className="stakeContent">Enter UserID</span>
                </div>
                <div className="col-7 text-end">
                  <input
                    type="text"
                    className="customFormControl3"
                    placeholder="Enter UserID"
                  />
                </div>
              </div>
              <div className="row cardTableContent">
                <div className="col-5">
                  <span className="stakeContent">User Name</span>
                </div>
                <div className="col-7 text-end">
                  <input
                    type="text"
                    className="customFormControl3"
                    placeholder="User name"
                  />
                </div>
              </div>
              <div className="row cardTableContent">
                <div className="col-5">
                  <span className="stakeContent">Enter BLBM</span>
                </div>
                <div className="col-7 text-end">
                  <input
                    type="text"
                    className="customFormControl3"
                    placeholder="500"
                  />
                </div>
              </div>
              <div className="row cardTableContent">
                <div className="col-5">
                  <span className="stakeContent">Total Stake + Reward</span>
                </div>
                <div className="col-7 text-end">
                  <input
                    type="text"
                    className="customFormControl3"
                    placeholder="1000"
                    readOnly
                  />
                </div>
              </div>
              <div className="mt-4 cardTableContent">
                <p>
                  The release of your Staked tokens (Stake + Reward) will be
                  release gradually over a period of time.
                </p>
              </div>
              <div className="row cardTableContent">
                <span className="stakeContent">3rd Month: 5%</span>
              </div>
              <div className="row cardTableContent">
                <span className="stakeContent">6th Month: 10%</span>
              </div>
              <div className="row cardTableContent">
                <span className="stakeContent">9th Month: 20%</span>
              </div>
              <div className="row cardTableContent">
                <span className="stakeContent">12th Month: 30%</span>
              </div>
              <div className="row cardTableContent">
                <span className="stakeContent">15th Month: 35%</span>
              </div>
              <div className="mt-4 cardTableContent">
                <p>These released tokens can be traded on the market.</p>
              </div>
              <div className="text-center">
                <button className="submitBtn2">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeWallet;
