import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
const Gallery = () => {
  const navigate = useNavigate();
  const galleryImgs = [
    {
      img: "https://picsum.photos/id/1015/800/400",
    },
  
  ];
  return (
    <div className="gallery">
      <div className="gallery-container preview">
       
        {galleryImgs?.map((data, i) => (
          <div key={i} className="gallery-img-card  "  onClick={()=>{
            navigate("/gallery-all")
          }} >
            <img src={data.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
