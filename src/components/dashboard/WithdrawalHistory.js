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

function createData(srNo, Date, payoutAmt, deductAmt, paidAmt, Status) {
  return { srNo, Date, payoutAmt, deductAmt, paidAmt, Status };
}

const rows = [
  createData(1, "2/24/2024 3:27:12 PM", 10, 1, 9, "rejected"),
  createData(2, "2/24/2024 3:27:12 PM", 10, 1, 9, "rejected"),
];

const WithdrawalHistory = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Withdrawal</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Withdrawal History</h6>
      </div>
      <div className="p-2">
        <div className="card">
          <div className="card-header">
            <h5 className="forgetPass">WITHDRAWAL HISTORY</h5>
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
                      Payout Amount
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Deduct Amount
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Paid Amount
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Status
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
                        {row.Date}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.payoutAmt}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.deductAmt}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.paidAmt}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.Status}
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

export default WithdrawalHistory;
