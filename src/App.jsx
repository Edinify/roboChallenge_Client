import Routing from "./routing";
import { useSelector } from "react-redux";
import ExamModal from "./components/Modals/ExamModal";
import StudyMaterialModal from "./components/Modals/StudyMaterialModal";
import NewsModal from "./components/Modals/NewsModal/NewsModal";
import ContactModal from "./components/Modals/ContactModal/ContactModal";

const App = () => {
  const { openModal: examModal } = useSelector((state) => state.examModal);
  const { openModal: studyModal } = useSelector((state) => state.studyModal);
  const { openModal: newsModal } = useSelector((state) => state.newsModal);
  const {openModal:contactModal} = useSelector(state=>state.contactModal);
  return (
    <div className="app">
      <Routing />
      {examModal && <ExamModal />}
      {studyModal && <StudyMaterialModal />}
      {newsModal && <NewsModal />}
      {contactModal && <ContactModal/>}
    </div>
  );
};

export default App;
