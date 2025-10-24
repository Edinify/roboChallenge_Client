import "./style.css";
import { TbWorld } from "react-icons/tb";
import { LuSchool } from "react-icons/lu";
import roadMap from "../../../../assets/imgs/roadmap.svg?react";
import countryImg from "../../../../assets/imgs/countries.png"
import teacherImg from "../../../../assets/imgs/teachers.png"
import studentImg from "../../../../assets/imgs/students.png"
import schoolImg from "../../../../assets/imgs/schools.png"




import { PiStudentBold } from "react-icons/pi";

const AboutUs = () => {
  const aboutData = [
    {
      id: 1,
      img: countryImg,
      title: "Ölkələr",
      count: 42,
      color: "red",
    },
    {
      id: 2,
      img: schoolImg,
      title: "Məktəblər",
      count: "300+",
      color: "blue",
    },
    {
      id: 3,
      img: teacherImg,
      title: "Müəllimlər",
      count: "660+",
      color: "red",
    },
    {
      id: 4,
      img: studentImg,
      title: "Tələblər",
      count: "2300+",
      color: "blue",
    },
  ];
  return (
    <div className="about-us">
      <div className="about-us-container">
        {aboutData?.map((data) => (
          <div className="about-context" key={data.id}>
            <img src={data.img} alt="" />
            <h6 style={{ color: data.color }}>{data.title}</h6>
            <span>daha çox</span>
            <h6>{data.count}</h6>
          </div>
        ))}
      </div>
      <div className="about-us-img-container">
        <img src={roadMap} alt="/img" />
      </div>
    </div>
  );
};

export default AboutUs;
