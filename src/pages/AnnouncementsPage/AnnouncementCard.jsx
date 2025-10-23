import React from "react";
import { TfiAnnouncement } from "react-icons/tfi";


const AnnouncementCard = ({ data }) => {
  return <div className="announcement-card-container">
    <div className="announce-img-container">
        <TfiAnnouncement size={40} />
        <div className="announce-background">
            
        </div>
    </div>
    <div className="announce-data-container">
        <h5>{data.title}</h5>
        <p>{data.desc}</p>
    </div>
  </div>;
};

export default AnnouncementCard;
