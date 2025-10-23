import { useGetAllNewsQuery } from "../../services/news/newsApi";
import AnnouncementCard from "./AnnouncementCard";
import "./style.css";
import { MdOutlineAnnouncement } from "react-icons/md";

const AnnouncementsPage = () => {
  const { data: news } = useGetAllNewsQuery();

  console.log(news, "news");
  return (
    <div className="news-page">
      <div className="news-page-container">
        <div className="announcements-header">
          <div className="announcement-card">
            <div className="announcement-icon">
              <MdOutlineAnnouncement size={20} />
            </div>
            <div className="announcement-content">
              <h4>Elanlar</h4>
              <p>Bütün elanları buradan görə bilərsiniz.</p>
            </div>
          </div>
          <div className="announcement-cards-container">
            {news?.map((data) => (
              <AnnouncementCard key={data._id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
