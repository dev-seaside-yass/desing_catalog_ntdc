"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
export default function Sample02Hero() {
  const slides = [
    {
      image: "/no_img.svg",
      title: "四季を通じて快適な住まい",
      subtitle: "自然と調和するデザイン",
    },
    {
      image: "/no_img.svg",
      title: "快適でエコな暮らしを実現",
      subtitle: "高断熱・高気密の新しい基準",
    },
    {
      image: "/no_img.svg",
      title: "家族みんなが笑顔になる住まい",
      subtitle: "安心・安全・快適な毎日を",
    },
  ];

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-95"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-white/40 md:bg-white/20 backdrop-blur-sm flex flex-col justify-center px-6 md:px-20">
                <div className="max-w-3xl">
                  <div className="bg-green-600 text-white rounded-full px-4 py-2 inline-block text-sm md:text-base font-semibold mb-4">
                    {slide.subtitle}
                  </div>
                  <h2 className="text-green-700 text-3xl md:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
