import { MdOutlineLogin } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

import { useState } from "react";
import {
  useGetUserQuery,
  useLoginUserMutation,
} from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const { data: user, refetch } = useGetUserQuery(undefined, {
    skip: !localStorage.getItem("auth"),
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(loginData).unwrap();

      const userResponse = await refetch();

      const currentUser = userResponse.data;

      if (currentUser?.role === "student") {
        navigate("/myExams");
      } else if (currentUser?.role === "super-admin") {
        navigate("/exams");
      }
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
        <div className="form-header">Daxil ol</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email daxil et"
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
                placeholder="Şifrə daxil et"
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

          <div className="login-btn-container">
            <div className="login-btn">
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Daxil ol"}
              </button>
              <MdOutlineLogin color="white" size={20} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
