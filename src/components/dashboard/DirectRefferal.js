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

function createData(srNo, UserID, Name, TotalStake, Date, TeamBussiness) {
  return { srNo, UserID, Name, TotalStake, Date, TeamBussiness };
}

const rows = [
  createData(
    1,
    "balarajud3344@gmail.com",
    "Balaraju D",
    28208,
    "6/2/2022",
    "7195081"
  ),
  createData(
    2,
    "balarajud3344@gmail.com",
    "Balaraju D",
    28208,
    "6/2/2022",
    "7195081"
  ),
  createData(
    3,
    "balarajud3344@gmail.com",
    "Balaraju D",
    28208,
    "6/2/2022",
    "7195081"
  ),
  createData(
    4,
    "balarajud3344@gmail.com",
    "Balaraju D",
    28208,
    "6/2/2022",
    "7195081"
  ),
];

const DirectRefferal = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Referral Report</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Direct Referral Report</h6>
      </div>
      <div className="p-2">
        <div className="card">
          <div className="card-header">
            <h5 className="forgetPass">DIRECT REFERRAL</h5>
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
                      User ID
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Name
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Total Stake
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Date
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Team Business
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
                        {row.UserID}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.Name}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.TotalStake}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.Date}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.TeamBussiness}
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

export default DirectRefferal;
