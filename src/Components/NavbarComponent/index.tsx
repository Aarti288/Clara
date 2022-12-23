import "../NavbarComponent/style.css";
import claraNavbarimg from "../Image/C.png";
import arrowicon from "../Image/arrow-icon.png";
import { connect } from "react-redux";
import { useState } from "react";
import LogoutModal from "../LogoutModal";

function NavbarComponent(props: any) {
  const [displayModal, setDisplayModal] = useState(false);
  function handleModal() {
    console.log("fbb");
    if (displayModal) {
      setDisplayModal(false);
    } else {
      setDisplayModal(true);
    }
  }
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left">
          <div>
            <button className="claraimg">
              <span className="C-text">C</span>
            </button>
            <span className="clara-text">Clara</span>
          </div>
          <div className="home-brands-profile">
            <div
              className={`home-container ${
                props.active === "home-nav" ? "active active-round-border" : " "
              }`}
              id="home-nav"
            >
              <p id="home-nav" className="home-nav" onClick={props.onClick}>
                Home
              </p>
            </div>

            <div
              className={`brand-container ${
                props.active === "brands-nav"
                  ? "active active-round-border"
                  : " "
              }`}
              id="brands-nav"
            >
              <p id="brands-nav" className="brands-nav" onClick={props.onClick}>
                Brands
              </p>
            </div>

            <div
              className={`profile-container ${
                props.active === "profile-nav"
                  ? "active active-round-border"
                  : " "
              }`}
              id="profile-nav"
            >
              <p
                id="profile-nav"
                className="profile-nav"
                onClick={props.onClick}
              >
                Profile
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <button className="profile-btn">
            <span className="profile-name">{props.userData.Firstname[0]}</span>
          </button>

          <img className="arrow-icon" onClick={handleModal} src={arrowicon} />
        </div>
      </div>
      <div className="display-modal">{displayModal ? <LogoutModal /> : ""}</div>
    </>
  );
}
const mapstatetoprops = (state: any) => {
  return {
    userData: state.validationReducer.userData,
  };
};
export default connect(mapstatetoprops, null)(NavbarComponent);
