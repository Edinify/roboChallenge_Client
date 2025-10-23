import { Route } from "react-router-dom";
import ExamPage from "../pages/ExamPage/ExamPage";
import StudyMaterialsPage from "../pages/StudyMaterialsPage/StudyMaterialsPage";
import AdminNewsPage from "../pages/AnnouncementsPage/AdminNewsPage";

export const AdminRoute = () => {
  return (
    <>
      <Route path="/exams" element={<ExamPage />} />
      <Route path="/study-materials" element={<StudyMaterialsPage />} />
      <Route path="/announcements" element={<AdminNewsPage/>} />
    </>
  );
};
