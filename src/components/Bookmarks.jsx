import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Mousewheel, Autoplay]}
      slidesPerView={6}
      spaceBetween={10}
      mousewheel={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false, // Don't stop autoplay on interaction
      }}
      breakpoints={{
        0: {
          slidesPerView: 4,
        },
        450: {
          slidesPerView: 5,
        },
        790: {
          slidesPerView: 6,
        },
      }}
    >
      {[...Array(10)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="custom_container">
            <div className="image_container">
              <div className="inner_slider">
                <img src="/public/google.webp" />
              </div>
              <p className="text-center slider_title">Google</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiperComponent;
