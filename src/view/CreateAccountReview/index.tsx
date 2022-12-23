import React from "react";
import "../LoginView/style.css";
import "../CreateAccountReview/style.css";
import ActionComponent from "../../Components/ActionComponent";
import InputLabelComponent from "../../Components/InputLabelComponent";
import ButtonComponent from "../../Components/ButtonComponent";
import CardComponent from "../../Components/CardComponent";
import verifiedaccount from "../../Components/Image/verified-account.png";
import { Navigate, useNavigate } from "react-router-dom";

let label = "Your profile is being reviewed!";
let sidelabel = "New user?";
let emaillabel = "Email";
let passwordlabel = "Password";
let AnyAction = "Create an Account";
let type = "email;";
let buttonlabel = "Logout";
let reviewcontent =
  "To keep Clara safe and authentic, we manually review every profile. You will receive access within 24 hours.Thanks for your patience!";

function CreateAccountView() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="main-wrapper">
      <span className="clara-main-heading">Clara</span>
      <span className="clara-sub-main-heading">
        a community of creators changing
      </span>
      <span className="clara-sun-main-heading2">the future of brand deals</span>
      <div className="sub-main-wrapper">
        <CardComponent>
          <div className="inner-card">
            <img className="verified-img" src={verifiedaccount}></img>
            <ActionComponent style={{ marginTop: "12px" }} label={label} />
            &nbsp;
            <ActionComponent
              style={{ marginTop: "-112px" }}
              sidelabel={reviewcontent}
            />
            <ButtonComponent label={buttonlabel} onClick={handleClick} />
          </div>
        </CardComponent>
      </div>
    </div>
  );
}

export default CreateAccountView;
