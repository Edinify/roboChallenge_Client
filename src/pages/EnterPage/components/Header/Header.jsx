import { useNavigate } from "react-router-dom";
import "./style.css";
const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("auth");

  console.log(token, "token");

  const handleNavigate = () => {
    if (token) {
      navigate("/announcements");
    } else {
      navigate("/login");
    }
  };
  return (
    <header className="enterpage-header">
      <div className="header-container">
        <div className="header-logo-container">
          <div className="header-logo">
            <img src="/" alt="/logo" />
          </div>
          <div className="logo-context">
            <h6>
              INTERNATIONAL <br /> STEAM OLIMPIAD
            </h6>
          </div>
        </div>
        <ul className="header-navbar">
          <li>
            <a href="#home">Əsas</a>
          </li>
          <li>
            <a href="#about">Haqqımızda</a>
          </li>
          <li>
            <a href="#rules">Qaydalar</a>
          </li>
          <li>
            <a href="#categories">Kateqoriyalar</a>
          </li>
          <li>
            <a href="#announcement">Elanlar</a>
          </li>
          <li>
            <a href="#contact">Əlaqə</a>
          </li>
          <li onClick={() => handleNavigate()}>Daxil ol</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
