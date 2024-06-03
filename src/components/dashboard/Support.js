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

function createData(srNo, Date, Subject, Message) {
  return { srNo, Date, Subject, Message };
}

const rows_outbox = [createData(1, "2/24/2024 3:27:12 PM", "a", "b")];
const rows_inbox = [createData(1, "2/24/2024 3:27:12 PM", "c", "d")];

const Support = () => {
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h5 className="nameDashboard">Support</h5>
        <OtherHousesIcon className="forgetPass mx-2" />
        <span>
          <ArrowForwardIosIcon className="listHeading mx-2" />
        </span>
        <h6 className="forgetPass mb-0">Support</h6>
      </div>
      <div className="row my-4">
        <div className="col-lg-7 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header">
              <h5 className="forgetPass">COMPOSE</h5>
            </div>
            <div className="card-body text-white">
              <div>
                <div className="mb-2">Subject</div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                    className="customFormControl3 mb-2"
                  />
                </div>
                <div className="mb-2">Message</div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="customFormControl3 mb-2"
                  ></textarea>
                </div>

                <div>
                  <button className="submitBtn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="card mb-4">
          <div className="card-header">
            <h5 className="forgetPass">OUTBOX</h5>
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
                      Subject
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Message
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows_outbox.map((row) => (
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
                        {row.Subject}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.Message}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">
            <h5 className="forgetPass">INBOX</h5>
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
                      Subject
                    </TableCell>
                    <TableCell className="reactTable" align="left">
                      Message
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows_inbox.map((row) => (
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
                        {row.Subject}
                      </TableCell>
                      <TableCell align="left" className="reactTable">
                        {row.Message}
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

export default Support;
