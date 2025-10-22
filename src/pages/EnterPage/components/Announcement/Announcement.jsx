import "./style.css";
import { GrAnnounce } from "react-icons/gr";
import { PiNotepad } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";



const Announcement = () => {
  const icons = [
    {
      icon: GrAnnounce,
      title: "Elanlar",
      color: "red",
    },
    {
      icon: PiNotepad,
      title: "Qaydalar",
      color: "red",
    },
    {
      icon: BiCategory,
      title: "Kateqoriyalar",
      color: "red",
    },
    {
      icon: GrAnnounce,
      title: "RC.Code",
      color: "red",
    },
    {
      icon: GrAnnounce,
      title: "Statistika",
      color: "red",
    },
  ];
  return (
    <div className="announcement">
      <div className="announcement-container">
        <div className="announcement-icons">
          {icons?.map((data, i) => (
            <div key={i} className="icon-container">
              <div className="icon-card" style={{ background: data.color }}>
                <data.icon size={30} />
              </div>
              <span>{data.title}</span>
            </div>
          ))}
        </div>
        <div className="announcement-video-container">
          <video
            controls
            autoPlay
            loop
            muted
            className="announcement-video"
          />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
