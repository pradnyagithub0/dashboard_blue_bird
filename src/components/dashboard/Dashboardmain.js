import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import Customcard from "./Customcard";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import ProfileTable from "./ProfileTable";

const Dashboardmain = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <h5 className="nameDashboard">Dashboard</h5>
        <OtherHousesIcon className="forgetPass ms-2" />
      </div>

      {/* moving text */}
      <div className="moving-text-container">
        <div className="moving-text">
          <div className="d-flex">
            <div className="me-2 d-flex">
              <BrightnessHighIcon className="pe-2" />
              <span className="text-primary pe-2">Litecoin</span>
              <span className="text-primary pe-2">[ZEC]</span>
              <h6 className="pe-2 mb-0">$17.92</h6>
              <span className="text-success pe-2">+2.84%</span>
            </div>
            <div className="me-2 d-flex">
              <BrightnessHighIcon className="pe-2" />
              <span className="text-primary pe-2">Litecoin</span>
              <span className="text-primary pe-2">[ZEC]</span>
              <h6 className="pe-2 mb-0">$17.92</h6>
              <span className="text-success pe-2">+2.84%</span>
            </div>
            <div className="me-2 d-flex">
              <BrightnessHighIcon className="pe-2" />
              <span className="text-primary pe-2">Litecoin</span>
              <span className="text-primary pe-2">[ZEC]</span>
              <h6 className="pe-2 mb-0">$17.92</h6>
              <span className="text-success pe-2">+2.84%</span>
            </div>
            <div className="me-2 d-flex">
              <BrightnessHighIcon className="pe-2" />
              <span className="text-primary pe-2">Litecoin</span>
              <span className="text-primary pe-2">[ZEC]</span>
              <h6 className="pe-2 mb-0">$17.92</h6>
              <span className="text-success pe-2">+2.84%</span>
            </div>
            <div className="me-2 d-flex">
              <BrightnessHighIcon className="pe-2" />
              <span className="text-primary pe-2">Litecoin</span>
              <span className="text-primary pe-2">[ZEC]</span>
              <h6 className="pe-2 mb-0">$17.92</h6>
              <span className="text-success pe-2">+2.84%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="emptyDiv"></div>

      <div className="row mt-5">
        <div className="col-lg-9 mx-auto">
          <div className="roundDiv">
            <h5 className="text-center">OLD BLB WALLET</h5>
            <div className="d-flex justify-content-between align-items-center">
              <div>O BLB</div>
              <div>
                <button className="convertButton">CONVERT TO STAKE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* custom cards */}
      <div className="row mt-5">
        <Customcard />
      </div>

      {/* cards section */}
      <Cards />

      {/* Table section */}
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12">
          <ProfileTable />
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="forgetPass">News</h5>
            </div>
            <div className="card-body cardBodyHt"></div>
          </div>
          <div className="card">
            <div className="card-body text-white">
              <h4>Refferal Link</h4>
              <Link to="#">
                bluebirdm.info/signup.asp?code=hindustanrds@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardmain;
