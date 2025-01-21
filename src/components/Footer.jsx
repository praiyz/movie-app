import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid bg-green-500 align-center justify-center grid-direction-column grid-cols-3 relative pl-44">
      <div className="">
        <h1>Logo</h1>
        <p>Copyright c Praiyz-movie-app .All Right Reserved</p>
        <div className="grid grid-direction-column grid-cols-3 text-bold text-3xl" >
          <FaTwitter />
          <FaTelegram />
          <FaRocketchat />
        </div>
      </div>
      <div className="">
        <h2>Help</h2>
        <ul>
          <li>Contact</li>
          <li>FAQ</li>
          <li> Praiyz-movie-app</li>
        </ul>
      </div>
      <div>
        <h2>Links</h2>
        <ul>
          <li>A-Z lists</li>
          <li>Upcoming</li>
          <li> Most popular</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
