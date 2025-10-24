import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { useGetUserQuery } from "../../../../services/auth/authApi";
import { useEffect, useState } from "react";
import Logo from "../../../../assets/logos/logo-2.png";
const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("auth");

  const { data: user,error } = useGetUserQuery(undefined, {
    skip:!token,
  });

  useEffect(() => {
  if (error && token) {
    localStorage.removeItem("auth");
    // Navigate etməyə ehtiyac yoxdur, Routing komponenti edəcək
  }
}, [error, token]);

  const [open, setOpen] = useState(false);

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
                <span>R</span>OBOT <span>C</span>HALLENGE <br />
                2026 / AZERBAIJAN
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
            <NavLink to="/about-privacy">Haqqında və məxfilik</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Əlaqə</NavLink>
          </li>
          <button className="login-btn" onClick={() => handleNavigate()}>
            Daxil ol
          </button>
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
              <NavLink to="/contact">Əlaqə</NavLink>
            </li>
            <li>
              <NavLink to="/about-privacy">Haqqında və məxfilik</NavLink>
            </li>
            <button onClick={handleNavigate} className="login-btn">
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
