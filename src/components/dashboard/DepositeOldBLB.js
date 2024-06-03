import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import barcode from "../../assets/images/barcode.png";

const DepositeOldBLB = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Deposit BLB</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Deposit OLD BLB</h6>
      </div>
      <div className="row">
        <div className="col-lg-7 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header">
              <h5 className="forgetPass">BARCODE AND ADDRESS</h5>
            </div>
            <div className="card-body text-white">
              <div className="d-flex justify-content-center align-items-center">
                <img src={barcode} alt="barcode img" className="barcodeImg" />
              </div>
              <div className="text-center my-4">
                <p>0xEf2eff91D508dDfA9669c7e01A74E7Ef3bC6C76A</p>
              </div>
              <div>
                <div className="mb-2">Enter BLB</div>
                <div>
                  <input
                    type="text"
                    id="blb"
                    name="blb"
                    placeholder="0"
                    className="customFormControl3 mb-2"
                  />
                </div>
                <div className="mb-2">Transaction Hash</div>
                <div>
                  <input
                    type="text"
                    id="transactionId"
                    name="transactionId"
                    placeholder="Transaction ID"
                    className="customFormControl3 mb-2"
                  />
                </div>
                <div className="mb-2">Upload Transaction Screenshoot</div>
                <div>
                  <input
                    type="file"
                    id="transctionFile"
                    name="transctionFile"
                    className="customFormControl3 mb-2 p-0"
                  />
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

export default DepositeOldBLB;
