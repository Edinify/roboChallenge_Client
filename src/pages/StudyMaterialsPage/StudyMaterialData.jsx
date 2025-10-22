import "./style.css";
import { useGetStudyMaterialsQuery } from "../../services/studyMaterials/studyMaterialsApi";
import MaterialCard from "./MaterialCard";

const StudyMaterialData = () => {
  const { data: studyMaterials } = useGetStudyMaterialsQuery();

  console.log(studyMaterials, "study material");
  return (
    <div className="study-material-cards">
      {studyMaterials?.map((material) => (
        <MaterialCard key={material?._id} material={material} />
      ))}
    </div>
  );
};

export default StudyMaterialData;
