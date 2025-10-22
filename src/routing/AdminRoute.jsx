import { Route } from "react-router-dom";
import ExamPage from "../pages/ExamPage/ExamPage";
import StudyMaterialsPage from "../pages/StudyMaterialsPage/StudyMaterialsPage";

export const AdminRoute = () => {
  return (
    <>
      <Route path="/exams" element={<ExamPage />} />
      <Route path="/study-materials" element={<StudyMaterialsPage />} />
    </>
  );
};
