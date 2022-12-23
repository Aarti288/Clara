import twitter from "../Image/twitter.png";
import youtube from "../Image/youtube.png";
import ghostsnap from "../Image/Ghost-snap.png";
import tiktok from "../Image/tiktok.png";
import instagram from "../Image/instagram.png";
import pinterest from "../Image/pinterest.png";
import facebook from "../Image/facebook.png";

import "../FeaturedArticles/style.css";
function FeatureComponent(
  props: {
    img: string;
    label: string;
    sublabel: string;
  },
  { className = "" }
) {
  return (
    <div className={`featured-container${className}`}>
      <img src={props.img} />
      <div className="feature-label-sublabel">
        <div>
          <span className="feature-label">{props.label}</span>
        </div>
        <div>
          <span className="feature-sub-label">{props.sublabel}</span>
        </div>
      </div>
    </div>
  );
}
export default FeatureComponent;
