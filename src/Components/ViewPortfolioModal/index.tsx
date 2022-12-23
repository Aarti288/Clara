import "../ViewPortfolioModal/style.css";
import CardComponent from "../CardComponent";
import featurearticle1 from "../Image/feature-article1.png";
import DashboardBtnComponent from "../DashboardBtnComponent";
import editportfolio from "../Image/portfolio-edit-img.png";
import crossImg from "../Image/cross-img.png";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import Portfoliomodal_data from "../../Components/Portfoliomodal_data";
import { useState } from "react";
let ArtDesign = "Art/Design";
function ViewPortfolioModal(props: {
  img: string;
  sublabel: string;
  label: string;
}) {
  const [displayTransactionModal, setTransactionModal] = useState(false);

  function transctionModalToggle() {
    console.log("FFFFFFFFFf");
    if (displayTransactionModal) {
      setTransactionModal(false);
    } else {
      setTransactionModal(true);
    }
  }

  return (
    <>
      {displayTransactionModal ? (
        ""
      ) : (
        <div className="portfolio-container">
          <div className="view-portfolio-img">
            <span className="view-portfolio">View Portfolio</span>
            <img onClick={transctionModalToggle} src={crossImg} />
          </div>

          <div className="view-portfolio-modal">
            <div className="portfolio-data">
              <div>
                <div className="feature-img-container">
                  <img className="feature-img" src={props.img} />
                </div>
                <DashboardBtnComponent label={props.sublabel} />
              </div>
            </div>
            <div>
              <div className="portfolio-heading-img">
                <Portfoliomodal_data portfoliolabel={props.label} />
              </div>
              <div className="portfolio-lorem">
                <p className="about-me-data1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="about-me-data2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ViewPortfolioModal;
