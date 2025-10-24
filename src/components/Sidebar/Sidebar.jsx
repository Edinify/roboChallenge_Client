import { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`main-sidebar user-sidebar `}>
      <button
        className="sidebar-fab"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <ul className={`sidebar-nav-list user ${open ? "open" : ""} `}>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/announcements">Elanlar</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/myExams">İmtahanlarım</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/study-materials">Dərs materialları</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/payments">Ödənişlər</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/examResults">İmtahan nəticələri</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/certificates">Sertifikatlar</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/olympiad">Olimpiad Kalendar</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/profile">Profilim</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/rules">Qaydalar</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
