import React from "react";
import EnterPage from "./pages/EnterPage/EnterPage";
import Routing from "./routing";
import { useSelector } from "react-redux";
import ExamModal from "./components/Modals/ExamModal";
import StudyMaterialModal from "./components/Modals/StudyMaterialModal";

const App = () => {
  const {openModal:examModal} = useSelector(state=>state.examModal)
  const {openModal:studyModal} = useSelector(state=>state.studyModal);
  return (
    <div className="app">
      {/* <EnterPage /> */}
      <Routing/>
      {examModal && <ExamModal/>}
      {studyModal && <StudyMaterialModal/>}
      
    </div>
  );
};

export default App;
