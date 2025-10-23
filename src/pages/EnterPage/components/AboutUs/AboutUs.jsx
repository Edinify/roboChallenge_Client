import "./style.css";
import { TbWorld } from "react-icons/tb";
import { LuSchool } from "react-icons/lu";

import { PiStudentBold } from "react-icons/pi";

const AboutUs = () => {
  const aboutData = [
    {
      id: 1,
      img: TbWorld,
      title: "countries",
      count: 42,
      color: "red",
    },
    {
      id: 2,
      img: LuSchool,
      title: "schools",
      count: "300+",
      color: "blue",
    },
    {
      id: 3,
      img: TbWorld,
      title: "teachers",
      count: "660+",
      color: "yellow",
    },
    {
      id: 4,
      img: PiStudentBold,
      title: "students",
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
            <span>more than</span>
            <h6>{data.count}</h6>
          </div>
        ))}
      </div>
      <div className="about-us-img-container">
        <img src="https://picsum.photos/id/1018/800/400" alt="/img" />
      </div>
    </div>
  );
};

export default AboutUs;
