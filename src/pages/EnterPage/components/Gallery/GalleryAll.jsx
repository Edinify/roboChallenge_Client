import { useNavigate } from "react-router-dom";
import "./style.css";

const GalleryAll = () => {
  const navigate = useNavigate();
  const galleryImgs = [
    { img: "https://picsum.photos/id/1015/800/400" },
    { img: "https://picsum.photos/id/1016/800/400" },
    { img: "https://picsum.photos/id/1018/800/400" },
    { img: "https://picsum.photos/id/1020/800/400" },
    { img: "https://picsum.photos/id/1021/800/400" },
    { img: "https://picsum.photos/id/1022/800/400" },
    { img: "https://picsum.photos/id/1023/800/400" },
    { img: "https://picsum.photos/id/1024/800/400" },
    { img: "https://picsum.photos/id/1025/800/400" },
  ];

  return (
    <div className="gallery">
      <button className="back-btn" onClick={() => navigate("/")}>
        Geri
      </button>
      <h1 className="gallery-title">Qalereya</h1>
      <div className="gallery-container">
        {galleryImgs.map((data, i) => (
          <div key={i} className="gallery-img-card">
            <img src={data.img} alt={`Gallery ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAll;
