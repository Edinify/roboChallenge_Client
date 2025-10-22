import "./style.css";
import { useGetAllExamsQuery } from "../../services/exams/examsApi";
import ExamCard from "./ExamCard";
const MyExams = () => {
  const { data: exams } = useGetAllExamsQuery();

  return (
    <div className="my-exams">
      <div className="exam-container">
        <div className="exam-cards">
          {exams?.map((exam) => (
            <ExamCard key={exam._id} exam={exam} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExams;
