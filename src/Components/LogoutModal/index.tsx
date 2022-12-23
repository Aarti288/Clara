import React from "react";
import logoutimg from "../Image/logout-img.png";
import "../LogoutModal/style.css";
import { useNavigate } from "react-router-dom";
function LogoutModal() {
  var isLogin = localStorage.getItem("isLogin");
  const navigate = useNavigate();
  function navigateToLogin() {
    localStorage.setItem("isLogin", "0");
    if (isLogin == "0") {
      localStorage.removeItem("firstname");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      navigate("/");
    }
  }
  return (
    <div className="logout-component">
      <div className="logoutbtn-img">
        <img className="logout-img" src={logoutimg} />
        <div className="link" onClick={navigateToLogin}>
          Logout
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
