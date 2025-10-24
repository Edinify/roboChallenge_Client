import { MdOutlineAnnouncement } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import "./style.css";
import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../services/auth/authApi";
import {
  useUpdateStudentMutation,
  useUpdateStudentPasswordMutation,
} from "../../services/student/studentApi";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { openContactModal } from "../../services/student/contactModal";
import { IoMdContact } from "react-icons/io";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { data: user } = useGetUserQuery();

  const [updateStudent] = useUpdateStudentMutation();

  const [updateStudentPassword] = useUpdateStudentPasswordMutation();

  const openModal = () => {
    dispatch(openContactModal(true));
  };

  const [loginData, setLoginData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    phone: "",
    grade: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [viewPassword, setViewPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateStudent({
        id: user._id,
        ...loginData,
      }).unwrap();
      toast("Məlumatlar yeniləndi");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Yeni şifrələr uyğun gəlmir");
      return;
    }
    try {
      await updateStudentPassword({
        oldPassword: passwordData.oldPassword,
        newPassword: passwordData.newPassword,
      }).unwrap();
      setPasswordData({});
      toast("Şifrə yeniləndi");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePasswordChange = (e) => {
    setPasswordData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (user) {
      setLoginData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        birthday: user.birthday
          ? moment(user.birthday).format("YYYY-MM-DD")
          : "",
        phone: user.phone || "",
        grade: user.grade || "",
      });
    }
  }, [user]);
  return (
    <div className="news-page profile ">
      <div className="news-page-container">
        <div className="announcements-header">
          <div className="announcement-card">
            <div className="announcement-icon">
              <MdOutlineAnnouncement size={20} />
            </div>
            <div className="announcement-content">
              <h4>Profilim</h4>
              <p>Məlumatlarını buradan dəyişə bilərsən</p>
            </div>
          </div>
        </div>
        <div className="info-container">
          <div className="personal-info-container">
            <h5>Şəxsi məlumatlar</h5>
            <form className="student-form" onSubmit={handleSubmit}>
              <div className="all-inputs-container">
                <div className="input-container">
                  <label htmlFor="firstName">Ad</label>
                  <input
                    type="text"
                    placeholder="Ad daxil edin"
                    id="firstName"
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
                    value={loginData.lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email daxil edin"
                    id="email"
                    value={loginData.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="birthday">Doğum tarixi</label>
                  <input
                    type="date"
                    id="birthday"
                    value={loginData.birthday || ""}
                    name="birthday"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="grade">Sinif daxil edin</label>
                  <input
                    type="text"
                    id="grade"
                    value={loginData.grade}
                    name="grade"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button className="save-btn" type="submit">
                Yadda saxla
              </button>
            </form>
          </div>
          <div className="update-password-container">
            <h5>Şifrəni yenilə</h5>
            <form
              className="all-passwords-container"
              onSubmit={handleSubmitPassword}
            >
              <div className="input-container">
                <label htmlFor="oldPassword">Köhnə şifrə</label>

                <div className="password-input">
                  <input
                    id="oldPassword"
                    type={viewPassword.old ? "text" : "password"}
                    placeholder="Köhnə Şifrəni daxil edin"
                    required
                    value={passwordData.oldPassword}
                    name="oldPassword"
                    onChange={handlePasswordChange}
                  />

                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() =>
                      setViewPassword((prev) => ({ ...prev, old: !prev.old }))
                    }
                  >
                    {viewPassword.old ? <IoEyeOutline /> : <IoEyeOffSharp />}
                  </button>
                </div>
              </div>

              <div className="input-container">
                <label htmlFor="newPassword">Yeni şifrə</label>

                <div className="password-input">
                  <input
                    id="newPassword"
                    type={viewPassword.new ? "text" : "password"}
                    placeholder="Yeni şifrəni daxil edin"
                    required
                    value={passwordData.newPassword}
                    name="newPassword"
                    onChange={handlePasswordChange}
                  />

                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() =>
                      setViewPassword((prev) => ({ ...prev, new: !prev.new }))
                    }
                  >
                    {viewPassword.new ? <IoEyeOutline /> : <IoEyeOffSharp />}
                  </button>
                </div>
              </div>
              <div className="input-container">
                <label htmlFor="confirmPassword">Yeni şifrə</label>

                <div className="password-input">
                  <input
                    id="confirmPassword"
                    type={viewPassword.confirm ? "text" : "password"}
                    placeholder="Yeni Şifrə daxil edin"
                    required
                    value={passwordData.confirmPassword}
                    name="confirmPassword"
                    onChange={handlePasswordChange}
                  />

                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() =>
                      setViewPassword((prev) => ({
                        ...prev,
                        confirm: !prev.confirm,
                      }))
                    }
                  >
                    {viewPassword.confirm ? (
                      <IoEyeOutline />
                    ) : (
                      <IoEyeOffSharp />
                    )}
                  </button>
                </div>
              </div>
              <div className="update-btn">
                <button type="submit">Şifrə yenilə</button>
              </div>
            </form>
          </div>
        </div>
      </div>

       <div className="contact-container" onClick={openModal}>
              <IoMdContact size={40} />
            </div>
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
