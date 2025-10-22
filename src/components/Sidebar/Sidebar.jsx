import "./style.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={`main-sidebar user-sidebar `}>
      <ul className="sidebar-nav-list user ">
        <li>
          <NavLink to="/announcements">Announcements</NavLink>
        </li>
        <li>
          <NavLink to="/myExams">My Exams</NavLink>
        </li>
        <li>
          <NavLink to="/study-materials">Study Materials</NavLink>
        </li>
        <li>
          <NavLink to="/payments">Payments</NavLink>
        </li>
        <li>
          <NavLink to="/examResults">Exam Results</NavLink>
        </li>
        <li>
          <NavLink to="/certificates">Certificates</NavLink>
        </li>
        <li>
          <NavLink to="/olympiad">Olympiad Calendat</NavLink>
        </li>
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
         <li>
          <NavLink to="/rules">Rules</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
