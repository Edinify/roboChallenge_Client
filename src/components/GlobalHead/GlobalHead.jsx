import { useDispatch } from "react-redux";
import "./style.css";
import { logoutUser } from "../../services/auth/LoginSlice";
import { FiLogOut } from "react-icons/fi";
const GlobalHead = ({ openModal }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="details-header">
      <div className="container">
        <div className="logout-btn">
          <button onClick={handleLogout}>
            {" "}
            <FiLogOut /> Log out
          </button>{" "}
        </div>
        <div
          className="lesson-table-add-btn"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button className="add-detail" onClick={openModal}>
            Əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalHead;
