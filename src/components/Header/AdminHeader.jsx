import "./style.css";
import { logoutUser } from "../../services/auth/LoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const AdmimHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <header className="user-header">
      <div className="header-container">
        <div className="user-context"></div>
        <div className="header-btns">
          <button onClick={() => navigate("/")}>
            {" "}
            <FaHome /> Home Page
          </button>
          <button onClick={handleLogout}>
            {" "}
            <FiLogOut /> Log out
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdmimHeader;
