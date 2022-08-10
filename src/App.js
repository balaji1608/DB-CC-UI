import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Sidebar from "./components/Sidebar";
import Table from "./components/table";
import TradeTable from "./components/trade";
import Form from "./components/form";
import SecurityTable from "./components/security";
import SecurityUserDetails from "./components/security_userid";
import Matured from "./components/matured";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/tradeTable" element={<TradeTable />} />
          <Route path="/form" element={<Form />} />
          <Route path="/security" element={<SecurityTable />} />
          <Route path="/securityUserID" element={<SecurityUserDetails />} />
          <Route path="/matured" element={<Matured/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
