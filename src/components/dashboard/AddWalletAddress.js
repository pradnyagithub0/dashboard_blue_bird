import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(srNo, address, type) {
  return { srNo, address, type };
}

const rows = [
  createData(1, "0x78d84af44eb461c29d62989a73Ff364d3B31E02D", "BLBM"),
  createData(2, "0x78d84af44eb461c29d62989a73Ff364d3B31E03F", "BLBM2"),
];

const AddWalletAddress = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Profile</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Add Wallet Address</h6>
      </div>
      <div className="row mb-4">
        <div className="col-lg-7 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header">
              <h5 className="forgetPass">ADD WITHDRAWAL WALLET ADDRESS</h5>
            </div>
            <div className="card-body text-white">
              <div>
                <div className="mb-2">Select Currency</div>
                <div>
                  <select
                    name="currancy"
                    id="currancy"
                    className="customFormControl3 mb-2"
                  >
                    <option value="1">BLBM</option>
                    <option value="2">Twenty</option>
                    <option value="3">Thirty</option>
                    <option value="4">Fourty</option>
                  </select>
                </div>

                <div className="mb-2">Enter OTP</div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="customFormControl3 mb-2"
                  />
                </div>
                <div className="mb-3">
                  <button className="getOtpBtn">Get OTP</button>
                </div>
                <div className="mb-2">Address</div>
                <div>
                  <input
                    type="text"
                    placeholder="Current Password"
                    className="customFormControl3 mb-2"
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
      <div className="card">
        <div className="card-header">
          <h5 className="forgetPass">WITHDRAWAL WALLET ADDRESS DETAILS</h5>
        </div>
        <div className="card-body text-white">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="reactTable"
            >
              <TableHead className="reactTable">
                <TableRow className="tableHead reactTable">
                  <TableCell className="reactTable">Sr No.</TableCell>
                  <TableCell className="reactTable" align="left">
                    Address
                  </TableCell>
                  <TableCell className="reactTable" align="left">
                    Type
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    className="tableBody reactTable"
                    key={row.srNo}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="reactTable"
                    >
                      {row.srNo}
                    </TableCell>
                    <TableCell align="left" className="reactTable">
                      {row.address}
                    </TableCell>
                    <TableCell align="left" className="reactTable">
                      {row.type}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default AddWalletAddress;
