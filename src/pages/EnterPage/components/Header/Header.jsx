import { useNavigate } from "react-router-dom";
import "./style.css";
import { useGetUserQuery } from "../../../../services/auth/authApi";
import { useState } from "react";
import Logo from "../../../../assets/logos/logo-2.png"
const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("auth");

  const { data: user } = useGetUserQuery();

  const [open, setOpen] = useState(false);

  console.log(token, "token");

  const handleNavigate = () => {
    if (token && user.role === "student") {
      navigate("/announcements");
    } else if (token && user.role === "super-admin") {
      navigate("/exams");
    } else {
      navigate("/login");
    }
  };
  return (
    <header className="enterpage-header">
      <div className="header-container">
        <div className="header-logo-container">
          <div>
            <button
              className={`burger ${open ? "is-open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="header-logo">
              <img src={Logo} alt="/logo" />
            </div>
            <div className="logo-context">
              <h6>
                INTERNATIONAL <br /> STEAM OLIMPIAD
              </h6>
            </div>
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
          <button className="login-btn" onClick={() => handleNavigate()}>Daxil ol</button>
        </ul>

        <div className={`mobile-drawer ${open ? "show" : ""}`}>
          <ul onClick={() => setOpen(false)}>
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
            <button onCbuttonck={handleNavigate} className="login-btn">
              Daxil ol
            </button>
          </ul>
        </div>
        {open && <div className="backdrop" onClick={() => setOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;
