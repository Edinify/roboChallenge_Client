import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className={`main-sidebar  `}>
      <ul className="sidebar-nav-list user ">
        <li>
          <NavLink to="/exams">İmtahanlar</NavLink>
        </li>

        <li>
          <NavLink to="/study-materials">Dərs materialları</NavLink>
        </li>
        <li>
          <NavLink to="/announcements">Elanlar</NavLink>
        </li>
        {/* <li>
          <NavLink to="/profile">Hesabım</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
