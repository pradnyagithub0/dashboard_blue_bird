import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import CleanHandsOutlinedIcon from "@mui/icons-material/CleanHandsOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const SidebarList = (props) => {
  const { value = "dashboard", icon, open } = props;
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <List className="sidebarContainer">
      <ListItem
        disablePadding
        sx={{ display: "block" }}
        className={`listHover ${value === "dashboard" ? "selectedItem" : ""}`}
      >
        <Link to="/dashboard" className="linkStyle">
          <ListItemButton
            className="p-0"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              alignContent: "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : "auto",
                justifyContent: "center",
              }}
            >
              <OtherHousesIcon className="heading2" />
            </ListItemIcon>
            <ListItemText
              className="p-2"
              primary="Dashboard"
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }} className="listHover">
        <ListItemButton
          className="p-0"
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            alignContent: "center",
            px: 2.5,
          }}
        >
          {icon ? (
            <Accordion
              className="accordianBg"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="accArrow" />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="p-0"
                sx={{ width: "100%" }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardIcon className="heading2" />
                </ListItemIcon>
                <Typography className="listHeading" variant="body1">
                  Profile
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accListBg">
                <Link to="/dashboard/profile" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "profile" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> My Profile
                  </Typography>
                </Link>
                <Link to="/dashboard/changePassword" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "changePassword" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Change Password
                  </Typography>
                </Link>
                <Link to="/dashboard/addWalletAddress" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "addWalletAddress" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Add Wallet
                    Address
                  </Typography>
                </Link>
              </AccordionDetails>
            </Accordion>
          ) : (
            <>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon className="heading2" />
              </ListItemIcon>
            </>
          )}
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }} className="listHover">
        <ListItemButton
          className="p-0"
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            alignContent: "center",
            px: 2.5,
          }}
        >
          {icon ? (
            <Accordion
              className="accordianBg"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="accArrow" />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="p-0"
                sx={{ width: "100%" }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <RepeatIcon className="heading2" />
                </ListItemIcon>
                <Typography variant="body1" className="listHeading">
                  Deposite BLBM
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accListBg">
                <Link to="/dashboard/depositeBLBM" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "depositeBLBM" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Deposite BLBM
                  </Typography>
                </Link>
                <Link to="/dashboard/depositeHistory" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "depositeHistory" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Deposite
                    History
                  </Typography>
                </Link>
              </AccordionDetails>
            </Accordion>
          ) : (
            <>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <RepeatIcon className="heading2" />
              </ListItemIcon>
            </>
          )}
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }} className="listHover">
        <ListItemButton
          className="p-0"
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            alignContent: "center",
            px: 2.5,
          }}
        >
          {icon ? (
            <Accordion
              className="accordianBg"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="accArrow" />}
                aria-controls="panel3-content"
                id="panel3-header"
                className="p-0"
                sx={{ width: "100%" }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ShoppingCartOutlinedIcon className="heading2" />
                </ListItemIcon>

                <Typography variant="body1" className="listHeading">
                  Referral Report
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accListBg">
                <Link to="/dashboard/directRefferal" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "directRefferal" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Direct Referral
                  </Typography>
                </Link>
                <Link to="/dashboard/teamReferral" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "teamReferral" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Team Referral
                  </Typography>
                </Link>
              </AccordionDetails>
            </Accordion>
          ) : (
            <>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <ShoppingCartOutlinedIcon className="heading2" />
              </ListItemIcon>
            </>
          )}
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }} className="listHover">
        <ListItemButton
          className="p-0"
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            alignContent: "center",
            px: 2.5,
          }}
        >
          {icon ? (
            <Accordion
              className="accordianBg"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="accArrow" />}
                aria-controls="panel4-content"
                id="panel4-header"
                className="p-0"
                sx={{ width: "100%" }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AssessmentOutlinedIcon className="heading2" />
                </ListItemIcon>
                <Typography variant="body1" className="listHeading">
                  Report
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accListBg">
                <Link to="/dashboard/stakingReward" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "stakingReward" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Staking Reward
                  </Typography>
                </Link>
                <Link to="/dashboard/referralReward" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "referralReward" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i>
                    Referral Reward
                  </Typography>
                </Link>
                <Link to="/dashboard/royaltyReward" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "royaltyReward" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i>
                    Royalty Reward
                  </Typography>
                </Link>
              </AccordionDetails>
            </Accordion>
          ) : (
            <>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <AssessmentOutlinedIcon className="heading2" />
              </ListItemIcon>
            </>
          )}
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }} className="listHover">
        <ListItemButton
          className="p-0"
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            alignContent: "center",
            px: 2.5,
          }}
        >
          {icon ? (
            <Accordion
              className="accordianBg"
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="accArrow" />}
                aria-controls="panel5-content"
                id="panel5-header"
                className="p-0"
                sx={{ width: "100%" }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AddBusinessOutlinedIcon className="heading2" />
                </ListItemIcon>
                <Typography variant="body1" className="listHeading">
                  Withdrawal
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accListBg">
                <Link to="/dashboard/withdrawalHistory" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "withdrawalHistory" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Withdrawal
                    History
                  </Typography>
                </Link>
              </AccordionDetails>
            </Accordion>
          ) : (
            <>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <AddBusinessOutlinedIcon className="heading2" />
              </ListItemIcon>
            </>
          )}
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }} className="listHover">
        <ListItemButton
          className="p-0"
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            alignContent: "center",
            px: 2.5,
          }}
        >
          {icon ? (
            <Accordion
              className="accordianBg"
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="accArrow" />}
                aria-controls="panel6-content"
                id="panel6-header"
                className="p-0"
                sx={{ width: "100%" }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <CleanHandsOutlinedIcon className="heading2" />
                </ListItemIcon>
                <Typography variant="body1" className="listHeading">
                  Deposite OLD BLB
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accListBg">
                <Link to="/dashboard/depositeOldBLB" className="linkStyle">
                  <Typography
                    className={`listSubItems ${
                      value === "depositeOldBLB" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Deposite OLD
                    BLB
                  </Typography>
                </Link>
                <Link
                  to="/dashboard/depositeOldBLBHistory"
                  className="linkStyle"
                >
                  <Typography
                    className={`listSubItems ${
                      value === "depositeOldBLBHistory" ? "selectedItem" : ""
                    }`}
                  >
                    <i class="bi bi-arrow-right-short pe-2"></i> Deposite
                    History
                  </Typography>
                </Link>
              </AccordionDetails>
            </Accordion>
          ) : (
            <>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                <CleanHandsOutlinedIcon className="heading2" />
              </ListItemIcon>
            </>
          )}
        </ListItemButton>
      </ListItem>

      <ListItem
        disablePadding
        sx={{ display: "block" }}
        className={`listHover ${value === "support" ? "selectedItem" : ""}`}
      >
        <Link to="/dashboard/support" className="linkStyle">
          <ListItemButton
            className="p-0"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              alignContent: "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : "auto",
                justifyContent: "center",
              }}
            >
              <HeadsetMicOutlinedIcon className="heading2" />
            </ListItemIcon>
            <ListItemText
              className="p-2"
              primary="Support"
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }} className="listHover">
        <ListItemButton
          className="p-0"
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            alignContent: "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 2 : "auto",
              justifyContent: "center",
            }}
          >
            <AccountCircleOutlinedIcon className="heading2" />
          </ListItemIcon>
          <ListItemText
            className="p-2"
            primary="Logout"
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SidebarList;
