import "./style.css";
const Gallery = () => {
  const galleryImgs = [
    {
      img: "https://picsum.photos/id/1015/800/400",
    },
    {
      img: "https://picsum.photos/id/1016/800/400",
    },
    {
      img: "https://picsum.photos/id/1018/800/400",
    },
    {
      img: "https://picsum.photos/id/1015/800/400",
    },
    {
      img: "https://picsum.photos/id/1016/800/400",
    },
    {
      img: "https://picsum.photos/id/1018/800/400",
    },
    {
      img: "https://picsum.photos/id/1015/800/400",
    },
    {
      img: "https://picsum.photos/id/1016/800/400",
    },
    {
      img: "https://picsum.photos/id/1018/800/400",
    },
  ];
  return (
    <div className="gallery">
      <div className="gallery-container">
        {galleryImgs?.map((data, i) => (
          <div key={i} className="gallery-img-card">
            <img src={data.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
