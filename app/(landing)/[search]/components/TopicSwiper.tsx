"use client";

import dynamic from "next/dynamic";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel } from "swiper/modules";
import { useRouter } from "next/navigation";

const Button = dynamic(() => import("@/components/Button/Button"));

interface TopicSwiperProps {
  list: string[];
}

const TopicSwiper: FC<TopicSwiperProps> = ({ list }) => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center py-[29.36px] lg:px-[33.97px dark:bg-[#323232] bg-[#F5F5F5]">
      <div className="max-w-[1280px] w-full h-full">
        <Swiper
          modules={[Autoplay, Mousewheel]}
          loop={false}
          autoplay={{
            delay: 8000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={8}
          breakpoints={{
            301: {
              slidesPerView: 2,
            },
            453: {
              slidesPerView: 3,
            },
            605: {
              slidesPerView: 4,
            },
            756: {
              slidesPerView: 5,
            },
            907: {
              slidesPerView: 6,
            },
            1058: {
              slidesPerView: 7,
            },
            1220: {
              slidesPerView: 8,
            },
          }}
          mousewheel={{
            forceToAxis: true,
            thresholdDelta: 70,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {list.map((str, i) => (
            <SwiperSlide key={i}>
              <Button
                onClick={() => {
                  router.push(str);
                }}
                variant="secondary"
              >
                {str}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopicSwiper;
