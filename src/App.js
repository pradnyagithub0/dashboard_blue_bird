import "./App.css";
import "./assets/css/sidebar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Forgetpass from "./components/Forgetpass";
import Indexpage from "./components/dashboard/Indexpage";
import Error from "./components/Error";
import Success from "./components/Success";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/error" element={<Error />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Indexpage />} />

        {/* profile routes */}
        <Route
          path="/dashboard/profile"
          element={<Indexpage value="profile" />}
        />
        <Route
          path="/dashboard/changePassword"
          element={<Indexpage value="changePassword" />}
        />
        <Route
          path="/dashboard/addWalletAddress"
          element={<Indexpage value="addWalletAddress" />}
        />

        {/* deposite BLBM routes */}
        <Route
          path="/dashboard/depositeBLBM"
          element={<Indexpage value="depositeBLBM" />}
        />
        <Route
          path="/dashboard/depositeHistory"
          element={<Indexpage value="depositeHistory" />}
        />

        {/* Referral Routes */}
        <Route
          path="/dashboard/directRefferal"
          element={<Indexpage value="directRefferal" />}
        />
        <Route
          path="/dashboard/teamReferral"
          element={<Indexpage value="teamReferral" />}
        />

        {/* reports routes */}
        <Route
          path="/dashboard/stakingReward"
          element={<Indexpage value="stakingReward" />}
        />
        <Route
          path="/dashboard/referralReward"
          element={<Indexpage value="referralReward" />}
        />
        <Route
          path="/dashboard/royaltyReward"
          element={<Indexpage value="royaltyReward" />}
        />

        {/* withdrawal routes */}
        <Route
          path="/dashboard/withdrawalHistory"
          element={<Indexpage value="withdrawalHistory" />}
        />

        {/* deposite old BLB routes */}
        <Route
          path="/dashboard/depositeOldBLB"
          element={<Indexpage value="depositeOldBLB" />}
        />
        <Route
          path="/dashboard/depositeOldBLBHistory"
          element={<Indexpage value="depositeOldBLBHistory" />}
        />

        {/* other pages routes*/}
        <Route
          path="/dashboard/support"
          element={<Indexpage value="support" />}
        />
        <Route
          path="/dashboard/withdrawal"
          element={<Indexpage value="withdrawal" />}
        />
        <Route
          path="/dashboard/transfer"
          element={<Indexpage value="transfer" />}
        />
        <Route
          path="/dashboard/transferHistory"
          element={<Indexpage value="transferHistory" />}
        />
        <Route
          path="/dashboard/stakeWallet"
          element={<Indexpage value="stakeWallet" />}
        />
        <Route
          path="/dashboard/stakeHistory"
          element={<Indexpage value="stakeHistory" />}
        />
        <Route
          path="/dashboard/transferToAnother"
          element={<Indexpage value="transferToAnother" />}
        />
        <Route
          path="/dashboard/BLBMTransferHistory"
          element={<Indexpage value="BLBMTransferHistory" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
