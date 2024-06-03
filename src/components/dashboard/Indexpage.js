import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import logo from "../../assets/images/logo.png";

import Dashboardmain from "./Dashboardmain";
import ProfileComponent from "./ProfileComponent";
import ChangePassword from "./ChangePassword";
import { Link } from "react-router-dom";
import AddWalletAddress from "./AddWalletAddress";
import DepositeBLBM from "./DepositeBLBM";
import DepositeHistory from "./DepositeHistory";
import DirectRefferal from "./DirectRefferal";
import TeamReferral from "./TeamReferral";
import StakingReward from "./StakingReward";
import ReferralReward from "./ReferralReward";
import RoyaltyReward from "./RoyaltyReward";
import WithdrawalHistory from "./WithdrawalHistory";
import DepositeOldBLB from "./DepositeOldBLB";
import DepositeOldBLBHistory from "./DepositeOldBLBHistory";
import Support from "./Support";
import Withdrawal from "./Withdrawal";
import Transfer from "./Transfer";
import TransferHistory from "./TransferHistory";
import StakeWallet from "./StakeWallet";
import StakeHistory from "./StakeHistory";
import TransferToAnother from "./TransferToAnother";
import BLBMTransferHistory from "./BLBMTransferHistory";
import Footer from "./Footer";
import MobileSidebar from "./MobileSidebar";
import SidebarList from "./SidebarList";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Indexpage = (props) => {
  const { value = "dashboard" } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [icon, setIcon] = React.useState(true);
  const [visible, setVisible] = React.useState(false);

  const [mobileSidebar, setMobileSidebar] = React.useState(false);
  const ToggleSidebar = () => {
    mobileSidebar === true ? setMobileSidebar(false) : setMobileSidebar(true);
  };

  useEffect(() => {
    function handleResize() {
      const isDesktopOrLaptop = window.matchMedia(
        "(min-width: 1024px)"
      ).matches;
      setOpen(isDesktopOrLaptop);
    }

    // Set initial state based on screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
    setIcon(true);
    setVisible(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setIcon(false);
    setVisible(true);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar className="headerMainContainer">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className="d-none d-lg-block"
              edge="start"
              style={{ opacity: visible ? 1 : 0 }}
              sx={{
                marginRight: 5,
                ...(open && { display: "block" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={ToggleSidebar}
              className="d-sm-block d-lg-none ms-2"
              edge="start"
              // style={{ opacity: visible ? 1 : 0 }}
              sx={{
                marginRight: 5,
                ...(open && { display: "block" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography noWrap component="div">
              <div className="headerRightContainer">
                <Link to="/dashboard" className="linkStyle">
                  <img
                    src={logo}
                    alt="favicon"
                    width="60%"
                    className="circular-image-header me-3"
                  />
                </Link>
                <div className="d-lg-block d-none">
                  <p className="mb-0 text-dark">hindustanrds@gmail.com</p>
                  <p className="mb-0 text-light">RANGNATH DS</p>
                </div>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader className="headerContainer">
            <div className="d-flex justify-content-start align-items-center">
              <Link to="/dashboard" className="linkStyle">
                <img
                  src={logo}
                  alt="favicon"
                  width="60%"
                  className="circular-image-header me-2"
                />
              </Link>
              <h6 className="heading mb-0">Blue Bird</h6>
            </div>
            <IconButton onClick={handleDrawerClose} className="heading2">
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <SidebarList value={value} open={open} icon={icon} />
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          <div className="mainContainer">
            {value === "dashboard" && <Dashboardmain />}
            {value === "profile" && <ProfileComponent />}
            {value === "changePassword" && <ChangePassword />}
            {value === "addWalletAddress" && <AddWalletAddress />}
            {value === "depositeBLBM" && <DepositeBLBM />}
            {value === "depositeHistory" && <DepositeHistory />}
            {value === "directRefferal" && <DirectRefferal />}
            {value === "teamReferral" && <TeamReferral />}
            {value === "stakingReward" && <StakingReward />}
            {value === "referralReward" && <ReferralReward />}
            {value === "royaltyReward" && <RoyaltyReward />}
            {value === "withdrawalHistory" && <WithdrawalHistory />}
            {value === "depositeOldBLB" && <DepositeOldBLB />}
            {value === "depositeOldBLBHistory" && <DepositeOldBLBHistory />}
            {value === "support" && <Support />}
            {value === "withdrawal" && <Withdrawal />}
            {value === "transfer" && <Transfer />}
            {value === "transferHistory" && <TransferHistory />}
            {value === "stakeWallet" && <StakeWallet />}
            {value === "stakeHistory" && <StakeHistory />}
            {value === "transferToAnother" && <TransferToAnother />}
            {value === "BLBMTransferHistory" && <BLBMTransferHistory />}

            <Footer />
          </div>
        </Box>
      </Box>

      <MobileSidebar
        value={value}
        theme={theme}
        mobileSidebar={mobileSidebar}
        ToggleSidebar={ToggleSidebar}
      />
    </div>
  );
};

export default Indexpage;
