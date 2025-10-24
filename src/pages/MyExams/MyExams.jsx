import "./style.css";
import { useGetAllExamsQuery } from "../../services/exams/examsApi";
import ExamCard from "./ExamCard";
import { IoMdContact } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openContactModal } from "../../services/student/contactModal";
const MyExams = () => {
  const { data: exams } = useGetAllExamsQuery();

  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(openContactModal(true));
  };

  return (
    <div className="my-exams">
      <div className="exam-container">
        <div className="exam-cards">
          <div className="exam-card  ">
            <div className="exam-card__container details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              dolore, ad odio consectetur corporis amet omnis tempora deserunt
              maxime a! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui consequatur quos earum voluptate nobis placeat mollitia sed.
              Id esse dolor blanditiis odio quaerat doloribus odit quibusdam
              doloremque maiores ab, dolore perspiciatis, quis, aliquam nulla
              molestias iure qui laborum. Neque quam velit libero quis rem
              eligendi magni, asperiores ipsam iure tempore sed iusto,
              temporibus, officiis perspiciatis atque labore. Provident aliquam
              dolores similique atque fuga, repudiandae iure maxime mollitia
              placeat itaque animi voluptatum architecto cupiditate eum ex autem
              consectetur quas sint quaerat illum perspiciatis. Quae itaque
              corrupti atque deserunt consequuntur cumque iure, quia beatae
              porro, at debitis quaerat quibusdam molestias perspiciatis eos!
            </div>
          </div>
          {exams?.map((exam) => (
            <ExamCard key={exam._id} exam={exam} />
          ))}
        </div>
      </div>
      <div className="contact-container" onClick={openModal}>
        <IoMdContact size={40} />
      </div>
    </div>
  );
};

export default MyExams;
