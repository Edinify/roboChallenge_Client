import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  const imageData = [
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
    <div className="enterpage-home">

    <div className="home-container">

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper"
      >
        {imageData?.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item.img} alt={`Slide ${i + 1}`}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="about-register-time">
      <h5>Qeydiyyat hal hazırda davam edir</h5>
    </div>
    </div>

  );
};

export default Home;
