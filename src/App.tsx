import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginView from "./view/LoginView";
import CreateAccountView from "./view/CreateAccountView/index";
import CreateAccountReview from "./view/CreateAccountReview";
import DashboardView from "./view/DashboardView";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />}></Route>
          <Route path="/CreateAccount" element={<CreateAccountView />}></Route>
          <Route
            path="/CreateAccountReview"
            element={<CreateAccountReview />}
          ></Route>
          <Route path="/DashboardView" element={<DashboardView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
