import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className={`main-sidebar  `}>
      <ul className="sidebar-nav-list user ">
        <li>
          <NavLink to="/exams">Exams</NavLink>
        </li>

        <li>
          <NavLink to="/study-materials">Study Materials</NavLink>
        </li>
        <li>
          <NavLink to="/announcements">Elanlar</NavLink>
        </li>
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
