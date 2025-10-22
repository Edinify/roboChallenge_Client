import { useNavigate } from "react-router-dom";
import "./style.css";
const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="enterpage-register">
      <div className="enterpage-register-container">
        <div className="register-context">
          <h5>Qoşul və qalib ol</h5>
        </div>
        <div
          className="register-container"
          onClick={() => navigate("/login/register")}
        >
          <button>Qeydiyyat</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
