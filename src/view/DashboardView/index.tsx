import "../DashboardView/style.css";
import NavbarComponent from "../../Components/NavbarComponent";
import profilepersonimg from "../../Components/Image/profile-person-img.png";
import locationimg from "../../Components/Image/location-img.png";
import gender from "../../Components/Image/gender-img.png";
import peopleagegrp from "../../Components/Image/people-grp.png";
import DashboardBtnComponent from "../../Components/DashboardBtnComponent";
import FollowersDataComponent from "../../Components/FollowersDataComponent";
import FeaturedArticles from "../../Components/FeaturedArticles";
import CardComponent from "../../Components/CardComponent";
import ProfileContainer from "../../container/ProfileContainer";
import { useState } from "react";
import HomeContainer from "../../container/HomeContainer";
import ViewPortfolioModal from "../../Components/ViewPortfolioModal";
import { connect } from "react-redux";
let ArtDesign = "Art/Design";
let VideoProduction = "Video Production";
let Photography = "Photography";
let EditProfile = "Edit Profile";

function DashboardView(props: any) {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home-nav");
  function handleDashboard(e: any) {
    console.log(e.target.id);
    setActive(e.target.id);
  }
  return (
    <div className="dashboard-view-wrappper">
      <NavbarComponent onClick={handleDashboard} active={active} />
      {active === "home-nav" ? (
        <HomeContainer />
      ) : active === "profile-nav" ? (
        <ProfileContainer />
      ) : (
        ""
      )}
    </div>
  );
}
export default DashboardView;
