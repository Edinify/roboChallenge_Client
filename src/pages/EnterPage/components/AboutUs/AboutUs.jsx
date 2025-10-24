import "./style.css";
import { TbWorld } from "react-icons/tb";
import { LuSchool } from "react-icons/lu";
import roadMap from "../../../../assets/imgs/roadmap.svg?react";

import { PiStudentBold } from "react-icons/pi";

const AboutUs = () => {
  const aboutData = [
    {
      id: 1,
      img: TbWorld,
      title: "Ölkələr",
      count: 42,
      color: "red",
    },
    {
      id: 2,
      img: LuSchool,
      title: "Məktəblər",
      count: "300+",
      color: "blue",
    },
    {
      id: 3,
      img: TbWorld,
      title: "Müəllimlər",
      count: "660+",
      color: "gray",
    },
    {
      id: 4,
      img: PiStudentBold,
      title: "Tələblər",
      count: "2300+",
      color: "green",
    },
  ];
  return (
    <div className="about-us">
      <div className="about-us-container">
        {aboutData?.map((data) => (
          <div className="about-context" key={data.id}>
            <data.img size={50} />
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
