import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const SwiperButton = ({ children, next = true }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`absolute top-1/2 w-[30px] h-[30px] rounded-full bg-white text-secondary-500 text-[1.3rem]  z-50 -translate-y-1/2 flex items-center justify-center ${
        next ? "right-[10px]" : "left-[10px]"
      }`}
      onClick={() => (next ? swiper.slideNext() : swiper.slidePrev())}
    >
      {children}
    </button>
  );
};
const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full"
      >
        <SwiperButton next>
          <MdOutlineArrowForwardIos className="text-secondary-500  bg-white rounded-full flex items-center justify-center" />
        </SwiperButton>
        <SwiperButton next={false}>
          <MdArrowBackIos className="text-secondary-500  bg-white rounded-full flex items-center justify-center" />
        </SwiperButton>

        <SwiperSlide>
          <img src="/house.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/house.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/house.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/house.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/house.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/house.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
