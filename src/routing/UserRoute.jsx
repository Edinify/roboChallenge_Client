import { Route } from "react-router-dom";
import AnnouncementsPage from "../pages/AnnouncementsPage/AnnouncementsPage";
import MyExams from "../pages/MyExams/MyExams";
import RulesPage from "../pages/RulesPage/RulesPage";
import StudyMaterialsPage from "../pages/StudyMaterialsPage/StudyMaterialsPage";
import StudyMaterialData from "../pages/StudyMaterialsPage/StudyMaterialData";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

export const UserRoute = () => {
  return (
    <>
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/myExams" element={<MyExams/>} />
      <Route path="/rules" element={<RulesPage/>} />
      <Route path="/study-materials" element={<StudyMaterialData/>} />
      <Route path="/profile" element={<ProfilePage/>} />
    </>
  );
};
