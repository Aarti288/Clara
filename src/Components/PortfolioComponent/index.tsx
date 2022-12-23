import "../PortfolioComponent/style.css";
import portfolioeditimg from "../Image/portfolio-edit-img.png";
import editportfolio from "../Image/edit-portfolio.png";
import ViewPortfolioModal from "../ViewPortfolioModal";
import featurearticle1 from "../../Components/Image/feature-article1.png";
import featurearticle2 from "../../Components/Image/feature-article2.png";
import featurearticle3 from "../../Components/Image/feature-article3.png";
import featurearticle4 from "../../Components/Image/feature-article4.png";
import featurearticle5 from "../../Components/Image/feature-article5.png";
import featurearticle6 from "../../Components/Image/feature-article6.png";
import featurearticle7 from "../../Components/Image/feature-article7.png";
import featurearticle8 from "../../Components/Image/feature-article8.png";
import { useState } from "react";
const portfolio_data = [
  {
    img: featurearticle1,
    label: "Door of the Cosmos",
    subLabel: "Art/Design",
  },

  {
    img: featurearticle2,
    label: "InVolo - Insieme nuovi valori",
    subLabel: "Video Production",
  },

  {
    img: featurearticle3,
    label: "DesignGost - Mentoring",
    subLabel: "Acting",
  },

  {
    img: featurearticle4,
    label: "Door of the Cosmos",
    subLabel: "Photography",
  },

  {
    img: featurearticle5,
    label: "DesignGost - Mentoring",
    subLabel: "Photography",
  },
  {
    img: featurearticle6,
    label: "InVolo - Insieme nuovi valori",
    subLabel: "Video Production",
  },
  {
    img: featurearticle7,
    label: "Door of the Cosmos",
    subLabel: "Art/Design",
  },
  {
    img: featurearticle8,
    label: "Door of the Cosmos",
    subLabel: "Photography",
  },
];
function PortfolioComponent() {
  const [toggle, setToggle] = useState(false);
  let [img, setImg] = useState(" ");
  let [label, setLabel] = useState(" ");
  let [sublabel, setSubLabel] = useState(" ");
  function displayModal(element: {
    img: string;
    label: string;
    subLabel: string;
  }) {
    setImg((img = element.img));
    setLabel((label = element.label));
    setSubLabel((sublabel = element.subLabel));
    {
      if (toggle) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    }
  }

  let portfolio = portfolio_data.map((element, key) => {
    return (
      <div
        className="portfolio-data"
        key={key}
        onClick={() => displayModal(element)}
      >
        <img className="portfolio-img" src={element.img} />
        <div className="label-sublabel">
          <div className="label-edit-img">
            <div>
              <span className="portfolio-label">{element.label}</span>
              <img src={portfolioeditimg} />
            </div>
            <div>
              <img className="edit-profile-img" src={editportfolio} />
            </div>
          </div>

          <div className="label-edit-img">
            <span className="portfolio-sub-label">{element.subLabel}</span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="portfolio-component">
      {portfolio}
      {toggle ? (
        <ViewPortfolioModal img={img} label={label} sublabel={sublabel} />
      ) : (
        " "
      )}
    </div>
  );
}
export default PortfolioComponent;
