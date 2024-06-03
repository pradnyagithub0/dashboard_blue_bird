import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProfileTable from "./ProfileTable";

const ProfileComponent = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Profile</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">My Profile</h6>
      </div>
      <div className="row">
        <div className="col-lg-7 col-md-10 col-sm-12 mx-auto">
          <ProfileTable />
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
