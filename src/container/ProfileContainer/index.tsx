import profilepersonimg from "../../Components/Image/profile-person-img.png";
import locationimg from "../../Components/Image/location-img.png";
import gender from "../../Components/Image/gender-img.png";
import peopleagegrp from "../../Components/Image/people-grp.png";
import DashboardBtnComponent from "../../Components/DashboardBtnComponent";
import FollowersDataComponent from "../../Components/FollowersDataComponent";
import featurearticle1 from "../../Components/Image/feature-article1.png";
import featurearticle2 from "../../Components/Image/feature-article2.png";
import featurearticle3 from "../../Components/Image/feature-article3.png";
import PortfolioComponent from "../../Components/PortfolioComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeatureComponent from "../../Components/FeaturedArticles";
import { useState } from "react";
import "./style.css";
import { connect } from "react-redux";
let ArtDesign = "Art/Design";
let VideoProduction = "Video Production";
let Photography = "Photography";
let EditProfile = "Edit Profile";
let AddPortfolio = "Add Portfolio";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function DashboardContainer(props: any) {
  const [toggle, setToggle] = useState(false);
  let [img, setImg] = useState(" ");
  let [label, setLabel] = useState(" ");
  let [sublabel, setSubLabel] = useState("");
  function displayModal(Img: string, Label: string, Sublabel: string) {
    setImg((img = Img));
    setLabel((label = Label));
    setSubLabel((sublabel = Sublabel));

    {
      if (toggle) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    }
  }
  return (
    <div className="dashboard-bg-image">
      <div className="dashboard-profile-container">
        <div className="profile-person">
          <img className="person-photo" src={profilepersonimg} />
          <div>
            <span className="profile-person-fullname">
              {props.userData.Firstname} {props.userData.Lastname}
            </span>
            <div className="person-bio">
              <span className="person-bio">
                Creative Director, Graphic Designer & Digital Artist
              </span>
            </div>
            <div className="person-location">
              <img className="location-icon" src={locationimg} />
              <span className="location-name">Marrakesh, Morocco</span>
            </div>
          </div>
        </div>

        <div className="profile-person-data">
          <div className="aboutme-editprofile">
            <span className="about-me">About me</span>
            <DashboardBtnComponent label={EditProfile} />
          </div>

          <div className="about-me-data">
            <p>
              Creative art director, Graphic designer and digital artist based
              in Marrakech.
            </p>

            <p className="about-me-data1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <p className="about-me-data2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s.
            </p>
            <div className="aboutme-btn">
              <DashboardBtnComponent label={ArtDesign} />

              <DashboardBtnComponent label={VideoProduction} />
              <DashboardBtnComponent label={Photography} />
            </div>
            <div className="gender-agegrp">
              <div>
                <img className="gender-img" src={gender} />
                <span className="gender-type">Male</span>
              </div>

              <div>
                <img className="people-age-grp-img" src={peopleagegrp} />
                <span className="people-age-grp-type">18 - 24 Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="followers-container">
        <FollowersDataComponent />
      </div>
      <div className="articles-container">
        <Carousel responsive={responsive}>
          <FeatureComponent
            img={featurearticle1}
            label="Door of the Cosmos"
            sublabel="Door of the Cosmos"
          />
          <FeatureComponent
            img={featurearticle2}
            label="InVolo - Insieme nuovi valori"
            sublabel="Door of the Cosmos"
          />
          <FeatureComponent
            img={featurearticle3}
            label="DesignGost - Mentoring"
            sublabel="Door of the Cosmos"
          />
          <FeatureComponent
            img={featurearticle1}
            label="Door of the Cosmos"
            sublabel="Door of the Cosmos"
          />
        </Carousel>
      </div>
      <div className="add-portfolio">
        <span className="portfolio-heading">Portfolio</span>
        <DashboardBtnComponent label={AddPortfolio} />
      </div>
      <div>
        <div className="card-portfolio">
          <PortfolioComponent />
        </div>
      </div>

      <div className="footer-component">
        <p className="footer-header">© 2021 Clara</p>
      </div>
    </div>
  );
}
const mapstatetoprops = (state: any) => {
  return {
    userData: state.validationReducer.userData,
  };
};

export default connect(mapstatetoprops, null)(DashboardContainer);
