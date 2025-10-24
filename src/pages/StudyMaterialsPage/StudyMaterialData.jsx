import "./style.css";
import { useGetStudyMaterialsQuery } from "../../services/studyMaterials/studyMaterialsApi";
import MaterialCard from "./MaterialCard";
import { openContactModal } from "../../services/student/contactModal";
import { useDispatch } from "react-redux";
import { IoMdContact } from "react-icons/io";

const StudyMaterialData = () => {
  const dispatch = useDispatch();
  const { data: studyMaterials } = useGetStudyMaterialsQuery();
  const openModal = () => {
    dispatch(openContactModal(true));
  };

  return (
    <div className="study-material-cards">
      {studyMaterials?.map((material) => (
        <MaterialCard key={material?._id} material={material} />
      ))}

      <div className="contact-container" onClick={openModal}>
        <IoMdContact size={40} />
      </div>
    </div>
  );
};

export default StudyMaterialData;
