import "./style.css";
import { logoutUser } from "../../services/auth/loginSlice";
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: user } = useGetUserQuery();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <header className="user-header">
      <div className="header-container">
        <div className="user-context">
          <p>{`${user?._id} - ${user?.firstName} ${user?.lastName} `}</p>
        </div>
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

export default Header;
