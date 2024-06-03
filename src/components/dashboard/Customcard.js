import React from "react";
import { Link } from "react-router-dom";

const Customcard = () => {
  return (
    <div className="col-lg-10 mx-auto">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="card customCard">
            <div className="card-body">
              <div className="roundDiv2 text-center">SPOT WALLET</div>
              <div className="text-center mt-3">
                <h5 className="text-white mb-5">31052.66 BLBM</h5>
                <div className="mb-4">
                  <Link to="/dashboard/withdrawal" className="listStyle">
                    <button className="cardButton">Withdrawal</button>
                  </Link>
                </div>
                <div className="mb-4">
                  <Link to="/dashboard/withdrawalHistory" className="listStyle">
                    <button className="cardButton">Withdrawal History</button>
                  </Link>
                </div>
                <div className="mb-4">
                  <Link to="/dashboard/transfer" className="listStyle">
                    <button className="cardButton">Transfer</button>
                  </Link>
                </div>
                <div className="mb-4">
                  <Link to="/dashboard/transferHistory" className="listStyle">
                    <button className="cardButton">Transfer History</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card customCard">
            <div className="card-body">
              <div className="roundDiv2 text-center">STAKING WALLET</div>
              <div className="text-center mt-3">
                <h5 className="text-white mb-5">3033.4 BLBM</h5>
                <div className="mb-4">
                  <Link to="/dashboard/stakeWallet" className="listStyle">
                    <button className="cardButton">Stake</button>
                  </Link>
                </div>
                <div className="mb-4">
                  <Link to="/dashboard/stakeHistory" className="listStyle">
                    <button className="cardButton">Stake History</button>
                  </Link>
                </div>
                <div className="mb-4">
                  <Link to="/dashboard/transferToAnother" className="listStyle">
                    <button className="cardButton">Transfer to other</button>
                  </Link>
                </div>
                <div className="mb-4">
                  <Link
                    to="/dashboard/BLBMTransferHistory"
                    className="listStyle"
                  >
                    <button className="cardButton">Transfer History</button>
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

export default Customcard;
