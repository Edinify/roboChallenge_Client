import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHandshake,
} from "react-icons/fa";

import firstLogo from "../../../../assets/logos/iria.png";
import secondLogo from "../../../../assets/logos/gencler.png";
import thirdLogo from "../../../../assets/logos/agrar.png";
import FourthLogo from "../../../../assets/logos/azercell.png";
import FifthLogo from "../../../../assets/logos/4simlogoaz.svg?react";

import "./style.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src={secondLogo} alt="logo" style={{ width: "120px" }} />
        <img src={thirdLogo} alt="logo" style={{ width: "150px" }} />
        <img src={FourthLogo} alt="logo" style={{ width: "150px" }}  />
        <img src={firstLogo} alt="logo" />
        <img src={FifthLogo} alt="logo" />
      </div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-partner">
            <FaHandshake className="partner-icon" />
            <div>
              <h3 className="partner-title">Tərəfdaş Ol!</h3>
            </div>
          </div>

          <div className="footer-social">
            <a href="#" className="social-icon fb">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon ig">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon tw">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon yt">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <div>
              <h4>HOME</h4>
              <p>Main Team Organisation GmbH</p>
              <p>Zimmersmühlenweg 62, 61440 Oberursel, Germany</p>
              <p>www.stemolympiad.org</p>
              <p>info@stemolympiad.org</p>
            </div>

            <div>
              <h4>ABOUT US</h4>
              <p>What is STEM?</p>
              <p>Organization</p>
              <p>Aim / Vision</p>
            </div>
            <div>
              <h4>INSTRUCTIONS</h4>
              <p>Exam Conditions / FEES</p>
              <p>Categories / Duration</p>
              <p>Olympiad Calendar</p>
            </div>
            <div>
              <h4>SYLLABUS</h4>
              <p>Subjects</p>
              <p>Resources</p>
              <p>Past Papers</p>
            </div>
            <div>
              <h4>CONTACT</h4>
              <p>Medals / Awards</p>
              <p>Downloads</p>
              <p>FAQ</p>
            </div>
          </div>
          <p className="footer-policy">Terms and Conditions / Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
