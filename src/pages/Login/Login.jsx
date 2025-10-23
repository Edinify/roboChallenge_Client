import "./style.css";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { BsPersonPlusFill } from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="switch-container">
            <div
              className={`login-switch-container ${
                location.pathname === "/login" ? "active" : ""
              } `}
              onClick={() => navigate("/login")}
            >
              <MdOutlineLogin size={20} />
              <button>Daxil ol</button>
            </div>
            <div
              className={`login-switch-container ${
                location.pathname === "/login/register" ? "active" : ""
              } `}
              onClick={() => navigate("register")}
            >
              <button>Qeydiyyat</button>
              <BsPersonPlusFill size={20} />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
