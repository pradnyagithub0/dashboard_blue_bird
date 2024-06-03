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

function createData(srNo, Date, UserId, UserName, Transfer_receive_Fund) {
  return { srNo, Date, UserId, UserName, Transfer_receive_Fund };
}

const TransferRows = [
  createData(1, "2/24/2024 3:27:12 PM", "abc@gmail.com", "ABC", "1000"),
];
const ReceiveRows = [
  createData(1, "2/24/2024 3:27:12 PM", "abc1@gmail.com", "ABC1", "2000"),
];

const BLBMTransferHistory = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Buy BLB</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">BLBM Transfer History</h6>
      </div>
      <div className="p-2">
        <div className="card">
          <div className="card-header">
            <h5 className="forgetPass">TRANSFER HISTORY</h5>
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
                      Date
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      UserId
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      User Name
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Transfer Fund
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {TransferRows.map((row) => (
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
                        {row.Date}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.UserId}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.UserName}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.Transfer_receive_Fund}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="card">
          <div className="card-header">
            <h5 className="forgetPass">RECEIVED HISTORY</h5>
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
                      Date
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      UserId
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      User Name
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Received Fund
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ReceiveRows.map((row) => (
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
                        {row.Date}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.UserId}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.UserName}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.Transfer_receive_Fund}
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

export default BLBMTransferHistory;
