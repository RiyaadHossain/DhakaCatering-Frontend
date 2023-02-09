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
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
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
                className="h-full max-w-4xl mx-auto"
                style={{ backgroundImage: `url(${img}), linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))` }}
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
