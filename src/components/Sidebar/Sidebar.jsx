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
          <NavLink to="/announcements">Announcements</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/myExams">My Exams</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/study-materials">Study Materials</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/payments">Payments</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/examResults">Exam Results</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/certificates">Certificates</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/olympiad">Olympiad Calendat</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink to="/rules">Rules</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
