import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Transfer = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">BLBM Wallet</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Transfer</h6>
      </div>
      <div className="row">
        <div className="col-lg-7 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <h5 className="forgetPass">TRANSFER</h5>
              <div className="my-2 text-danger">
                Available Balance : <span> 31148.8</span>
              </div>
            </div>
            <div className="card-body text-white">
              <div>
                <div>
                  <div className="mb-2 pe-2">Amount</div>
                  <div>
                    <input
                      type="text"
                      id="blb"
                      name="blb"
                      placeholder="Enter Amount"
                      className="customFormControl3 mb-2"
                    />
                    <div className="my-2 text-danger">
                      Note : 3% deduction on transaction.
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-baseline">
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

export default Transfer;
