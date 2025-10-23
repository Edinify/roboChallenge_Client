import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import EnterPage from "../pages/EnterPage/EnterPage";
import Register from "../pages/Login/Register";
import LoginForm from "../pages/Login/LoginForm";
import { useGetUserQuery } from "../services/auth/authApi";
import { UserRoute } from "./UserRoute";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { AdminRoute } from "./AdminRoute";
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import { useEffect } from "react";
import AboutPrivacy from "../pages/AboutPrivacy/AboutPrivacy";
import ContactPage from "../pages/ContactPage/ContactPage";
import GalleryAll from "../pages/EnterPage/components/Gallery/GalleryAll";

const Routing = () => {
  const location = useLocation();
  const token = localStorage.getItem("auth");
  const navigate = useNavigate();

  const { data: user, isFetching } = useGetUserQuery(undefined, {
    skip: !token,
  });

  console.log(user, "userrrrrrrrrrrrrrrrr");
  const isStudent = user?.role === "student";

  const isAdmin = user?.role === "super-admin";

  useEffect(() => {
    if (token && isStudent && location.pathname === "/login") {
      navigate("/announcements");
    } else if (token && isAdmin && location.pathname === "/login") {
      navigate("/exams");
    }
  }, [token, isAdmin, isStudent, location, navigate]);

  if (token && isFetching && !user) {
    return (
      <div style={{ minHeight: "50vh", display: "grid", placeItems: "center" }}>
        Yüklənir...
      </div>
    );
  }

  return (
    <div
      className={`main-container ${
        !token || location.pathname === "/" ? "user-panel-container" : ""
      }  `}
    >
      {isStudent && location.pathname !== "/" && <Sidebar />}
      {isAdmin && location.pathname !== "/" && <AdminSidebar />}
      <div className="left">
        {isStudent && location.pathname !== "/" && <Header />}
        <Routes>
          <Route path="/" element={<EnterPage />} />
          <Route path="/gallery-all" element={<GalleryAll/>} />
          <Route path="/about-privacy" element={<AboutPrivacy />} />
          <Route path="/contact" element={<ContactPage />} />

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
