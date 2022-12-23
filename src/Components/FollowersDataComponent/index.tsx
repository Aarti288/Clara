import twitter from "../Image/twitter.png";
import youtube from "../Image/youtube.png";
import ghostsnap from "../Image/Ghost-snap.png";
import tiktok from "../Image/tiktok.png";
import instagram from "../Image/instagram.png";
import pinterest from "../Image/pinterest.png";
import facebook from "../Image/facebook.png";
import "../FollowersDataComponent/style.css";
function FollowersDataComponent() {
  const FollowersData = [
    {
      img: twitter,
      emailid: "@danielsmith",
      Followers: "242",
      name: "FOLLOWERS",
    },
    {
      img: youtube,
      emailid: "@danielsmith",
      Followers: "242",
      name: "FOLLOWERS",
    },
    {
      img: ghostsnap,
      emailid: "@danielsmith",
      Followers: "242",
      name: "FOLLOWERS",
    },
    {
      img: tiktok,
      emailid: "@danielsmith",
      Followers: "242",
      name: "FOLLOWERS",
    },
    {
      img: instagram,
      emailid: "@danielsmith",
      Followers: "242",
      name: "FOLLOWERS",
    },
    {
      img: pinterest,
      emailid: "@danielsmith",
      Followers: "242",
      name: "FOLLOWERS",
    },
    {
      img: facebook,
      emailid: "@danielsmith",
      Followers: "242",
      name: "FOLLOWERS",
    },
  ];

  const Followers = FollowersData.map((element) => {
    return (
      <div className="followers-data">
        <div className="follower-img">
          <img className="follower-img" src={element.img} />
        </div>
        <div className="follower-data">
          <div className="follower-emailid">{element.emailid}</div>
          <div className="follower">{element.Followers}</div>
          <div className="follower-name">{element.name}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="follower-details">
      <div className="followers">{Followers}</div>
    </div>
  );
}
export default FollowersDataComponent;
