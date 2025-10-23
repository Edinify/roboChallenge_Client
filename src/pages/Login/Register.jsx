import { MdOutlineLogin } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { useRegisterUserMutation } from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [loginData, setLoginData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: "",
    phone: "",
    grade: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(loginData).unwrap();
      console.log(data, "data");
      navigate("/login");
      setLoginData({})
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="login-form-page">
      <div className="login-form-container">
        <div className="form-header">Qeydiyyat</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="firstName">Ad</label>
            <input
              type="text"
              placeholder="Ad daxil edin"
              id="firstName"
              required
              value={loginData.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Soyad</label>
            <input
              type="text"
              placeholder="Soyad daxil edin"
              id="lastName"
              required
              value={loginData.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Sinif</label>
            <input
              type="number"
              placeholder="Sinif daxil edin"
              id="grade"
              required
              value={loginData.grade}
              name="grade"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email daxil edin"
              id="email"
              required
              value={loginData.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Şifrə</label>

            <div className="password-input">
              <input
                id="password"
                type={viewPassword ? "text" : "password"}
                placeholder="Şifrə daxil edin"
                required
                value={loginData.password}
                name="password"
                onChange={handleChange}
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {viewPassword ? <IoEyeOutline /> : <IoEyeOffSharp />}
              </button>
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="birthday">Doğum tarixi</label>
            <input
              type="date"
              placeholder="Doğum tarixi daxil edin"
              id="birthday"
              required
              value={loginData.birthday}
              name="birthday"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Əlaqə nömrəsi</label>
            <input
              type="text"
              placeholder="Ələqə nömrəsi daxil edin"
              id="phone"
              required
              value={loginData.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>

          <div className="login-btn-container">
            <div className="login-btn">
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Qeydiyyatdan keç"}
              </button>
              <MdOutlineLogin color="white" size={20} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
