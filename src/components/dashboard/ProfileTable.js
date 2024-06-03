import React from "react";

const ProfileTable = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="forgetPass">USER TABLE</h5>
      </div>
      <div className="card-body text-white">
        <div className="row cardTableContent">
          <div className="col-4">
            <span className="fw-bold">User ID</span>
          </div>
          <div className="col-8">
            <span>abc@gmail.com</span>
          </div>
        </div>
        <div className="row cardTableContent">
          <div className="col-4">
            <span className="fw-bold">Name</span>
          </div>
          <div className="col-8">
            <span>Raghav Sharma</span>
          </div>
        </div>
        <div className="row cardTableContent">
          <div className="col-4">
            <span className="fw-bold">Mobile No</span>
          </div>
          <div className="col-8">
            <span></span>
          </div>
        </div>
        <div className="row cardTableContent">
          <div className="col-4">
            <span className="fw-bold">Email ID</span>
          </div>
          <div className="col-8">
            <span>abc@gmail.com</span>
          </div>
        </div>
        <div className="row cardTableContent">
          <div className="col-4">
            <span className="fw-bold">Country</span>
          </div>
          <div className="col-8">
            <span>India</span>
          </div>
        </div>
        <div className="row cardTableContent">
          <div className="col-4">
            <span className="fw-bold">Joining Date</span>
          </div>
          <div className="col-8">
            <span>05/4/2024</span>
          </div>
        </div>
        <div className="row cardTableContent">
          <div className="col-4">
            <span className="fw-bold">Activation Date</span>
          </div>
          <div className="col-8">
            <span> 2/14/2024 8:35:39 PM</span>
          </div>
        </div>
        <div className="row cardTableContent">
          <div className="col-4">
            <span className="fw-bold">Sponser ID</span>
          </div>
          <div className="col-8">
            <span>BLB000001</span>
          </div>
        </div>
        <div className="row cardTableContent">
          <div className="col-4">
            <span className="fw-bold">Sponser Name</span>
          </div>
          <div className="col-8">
            <span>BLB Blue Bird</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTable;
