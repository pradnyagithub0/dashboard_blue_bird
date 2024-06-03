import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="row mt-5">
      <div className="col-lg-4 col-sm-12">
        <div className="customCard2">
          <div className="card-body">
            <Link to="/dashboard/stakeHistory" className="listStyle">
              <h5 className="mb-5">TOTAL STAKING</h5>
            </Link>
            <div class="progress">
              <div
                class="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h5 className="my-2">309786 BLBM</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="customCard2">
          <div className="card-body">
            <Link to="/dashboard/stakingReward" className="listStyle">
              <h5 className="mb-5">STAKING REWARD</h5>
            </Link>
            <div class="progress">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h5 className="my-2">30694.6 BLBM</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="customCard2">
          <div className="card-body">
            <Link to="/dashboard/referralReward" className="listStyle">
              <h5 className="mb-5">REFERRAL REWARD</h5>
            </Link>
            <div class="progress">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h5 className="my-2">30694.6 BLBM</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="customCard2">
          <div className="card-body">
            <Link to="/dashboard/royaltyReward" className="listStyle">
              <h5 className="mb-5">ROYALTY REWARD</h5>
            </Link>
            <div class="progress">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h5 className="my-2">30694.6 BLBM</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="customCard2">
          <div className="card-body">
            <Link to="/dashboard" className="listStyle">
              <h5 className="mb-5">TOTAL EARNING</h5>
            </Link>
            <div class="progress">
              <div
                class="progress-bar w-50"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h5 className="my-2">30694.6 BLBM</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
