import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  srNo,
  username,
  sponserName,
  TotalStake,
  joiningDate,
  activationDate,
  levelNo
) {
  return {
    srNo,
    username,
    sponserName,
    TotalStake,
    joiningDate,
    activationDate,
    levelNo,
  };
}

const rows = [
  createData(
    1,
    "Balaraju D",
    "RANGANATH D S",
    28208,
    "6/2/2022",
    "Jan 23 2024 11:18PM",
    1
  ),
  createData(
    2,
    "Balaraju D",
    "RANGANATH D S",
    28208,
    "6/2/2022",
    "Jan 23 2024 11:18PM",
    1
  ),
  createData(
    3,
    "Balaraju D",
    "RANGANATH D S",
    28208,
    "6/2/2022",
    "Jan 23 2024 11:18PM",
    1
  ),
  createData(
    4,
    "Balaraju D",
    "RANGANATH D S",
    28208,
    "6/2/2022",
    "Jan 23 2024 11:18PM",
    1
  ),
];

const TeamReferral = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">My Referral</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Team Referral</h6>
      </div>
      <div className="p-2">
        <div className="card">
          <div className="card-header">
            <h5 className="forgetPass">TEAM REFERRAL</h5>
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
                    <TableCell className="reactTable">#</TableCell>
                    <TableCell className="reactTable" align="left">
                      User Name
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Sponser Name
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Total Stake
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Joining Date
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Activation Date
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Level No
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
                        {row.username}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.sponserName}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.TotalStake}
                      </TableCell>

                      <TableCell align="left" className="reactTable">
                        {row.joiningDate}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.activationDate}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.levelNo}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamReferral;
