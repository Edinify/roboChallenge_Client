import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login/Login";
import EnterPage from "../pages/EnterPage/EnterPage";
import Register from "../pages/Login/Register";
import LoginForm from "../pages/Login/LoginForm";
import { useGetUserQuery } from "../services/auth/authApi";
import { UserRoute } from "./UserRoute";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import AdminHeader from "../components/Header/AdminHeader";
import { useSelector } from "react-redux";
import { AdminRoute } from "./AdminRoute";
import AdminSidebar from "../components/Sidebar/AdminSidebar";

const Routing = () => {
  const location = useLocation();
  const token = localStorage.getItem("auth");

  const { loginData } = useSelector((state) => state.login);

  console.log(loginData, "login data");
  const { data: user, isFetching } = useGetUserQuery(undefined, {
    skip: !token,
  });

  console.log(user, "data");
  const isStudent = user?.role === "student";

  const isAdmin = user?.role === "super-admin";

  const hideSidebarPaths = [
    "/login",
    "/register",
    "/forgot",
    "/send",
    "/change-password",
  ];
  const shouldShowSidebar =
    !isAdmin && !hideSidebarPaths.includes(location.pathname);

  if (token && isFetching && !user) {
    return (
      <div style={{ minHeight: "50vh", display: "grid", placeItems: "center" }}>
        Yüklənir...
      </div>
    );
  }

  return (
    <div className={`main-container ${!token || location.pathname==="/" ? "user-panel-container" : ""}  `}>
      {isStudent && location.pathname !== "/" && <Sidebar />}
      {isAdmin && location.pathname !== "/" && <AdminSidebar />}
      <div className="left">
        {isStudent && location.pathname !== "/" && <Header />}
        <Routes>
          <Route path="/" element={<EnterPage />} />

          {!token && (
            <Route path="/login" element={<Login />}>
              <Route index element={<LoginForm />} />
              <Route path="register" element={<Register />} />
            </Route>
          )}
          {token && isStudent && UserRoute()}
          {token && isAdmin && AdminRoute()}
        </Routes>
      </div>
    </div>
  );
};

export default Routing;
