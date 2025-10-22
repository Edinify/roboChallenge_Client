import GlobalHead from "../../components/GlobalHead/GlobalHead";
import { useDispatch } from "react-redux";
import { openExamModal, setExam } from "../../services/exams/examModalSlice";
import ExamData from "./ExamData";
const ExamPage = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openExamModal(true));
    dispatch(setExam({}));
  };

  return (
    <div className="details-page career-page ">
      <GlobalHead openModal={openModal} />
      <ExamData />
    </div>
  );
};

export default ExamPage;
