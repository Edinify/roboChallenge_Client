import { useDispatch } from "react-redux";
import {
  openStudyMaterialModal,
  setStudyMaterial,
} from "../../services/studyMaterials/studyModal";
import GlobalHead from "../../components/GlobalHead/GlobalHead";
import StudyMaterialData from "./StudyMaterialData";
const StudyMaterialsPage = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openStudyMaterialModal(true));
    dispatch(setStudyMaterial({}));
  };
  return (
    <div className="details-page career-page ">
      <GlobalHead openModal={openModal} />
      <StudyMaterialData />
    </div>
  );
};

export default StudyMaterialsPage;
