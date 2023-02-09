import React from "react";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const slide_img = [
  "https://plus.unsplash.com/premium_photo-1675237625123-46d7ffd6b1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
];

export default function Slieder() {
  return (
    <div className="mt-4 px-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        grabCursor={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-96 w-full"
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                className="h-full max-w-4xl mx-auto bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: `url(${img}), linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`,
                }}
              >
                <div className="flex flex-col justify-end h-full">
                  <div className="text-center glass py-2 pb-3 flex justify-between px-4 items-center text-white">
                    <h3 className="font-semibold text-lg">Title is here</h3>
                    <p className=" font-normal text-sm">20 Jan 2023</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
