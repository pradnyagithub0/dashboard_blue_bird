import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import barcode from "../../assets/images/barcode.png";

const DepositeBLBM = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Deposite BLBM</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Deposite BLBM</h6>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5 className="forgetPass">BARCODE AND ADDRESS</h5>
            </div>
            <div className="card-body text-white">
              <div className="d-flex justify-content-center align-items-center">
                <img src={barcode} alt="barcode img" className="barcodeImg" />
              </div>
              <div className="text-center mt-3">
                <p>0xEf2eff91D508dDfA9669c7e01A74E7Ef3bC6C76A</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="forgetPass">HOW TO DEPOSITE BLBM ?</h5>
            </div>
            <div className="card-body text-white">
              <ul>
                <li className="mb-3">STEP 1: Click on Deposit BLBM.</li>
                <li className="mb-3">
                  STEP 2: Copy the above BLBM Polygon ERC20 Address.
                </li>
                <li className="mb-3">
                  STEP 3:Go to your Decentralized Wallet or Exchange.
                </li>
                <li className="mb-3">
                  STEP 4: Click on Withdrawal in your Decentralized Wallet or
                  Exchange.
                </li>
                <li className="mb-3">
                  STEP 5: Paste the Copied BLBM Polygon ERC20 Address.
                </li>
                <li className="mb-3">
                  STEP 6: Select the Network as Polygon ERC20.
                </li>
                <li className="mb-3">STEP 7: Enter the BLBM Amount.</li>
                <li className="mb-3">STEP 8: Confirm your Withdrawal.</li>
                <li className="mb-3">
                  STEP 9: After confirmation, Copy your TXID and take a
                  Screenshot.
                </li>
                <li className="mb-3">
                  STEP 10: Come back to Blue Bird dashboard / Deposit BLBM Tab
                  and Enter your exact BLBM amount.
                </li>
                <li className="mb-3">
                  STEP 11: Paste your TXID, upload the screenshot and SUBMIT.
                </li>
                <li className="mb-3">
                  STEP 12: Once submitted kindly wait for approval. The status
                  can be checked in BLBM Deposit History Tab.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5 className="forgetPass">ADD BLBM</h5>
            </div>
            <div className="card-body text-white">
              <div>
                <div className="mb-2">Enter BLBM</div>
                <div>
                  <input
                    type="text"
                    id="blbm"
                    name="blbm"
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

export default DepositeBLBM;
