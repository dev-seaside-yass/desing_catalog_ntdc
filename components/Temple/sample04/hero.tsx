"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Sample04Hero() {
  const images = [
    "/img/vertical/v_img01.jpg",
    "/img/vertical/v_img02.jpg",
    "/img/vertical/v_img03.jpg",
  ];
  const [current, setCurrent] = useState(0);
  // 5秒ごとに画像を切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 背景画像群 */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Hero background ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/20" />
      {/* テキストコンテンツ */}
      <div className="relative z-10 px-4 md:px-8 max-w-5xl text-center text-white">
        <p className="text-sm md:text-lg font-semibold tracking-wide mb-2 md:mb-4">
          Sample&Desing
        </p>
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
          Sample&Desing GUIDE 20XX-20XX
        </h1>
        <p className="text-xs md:text-base leading-relaxed font-medium">
          サンプル誌「this home and campas life.」が推奨する、シンプルなデザインと暮らしを実現するためのインテリアショップ、<br className="hidden md:block" />
          ショールームガイド「Sample&Desing GUIDE 20XX-20XX」。家具、建材、照明、キッチン、サニタリー、雑貨など、今年注目のショップやショールームの詳細情報、各ショップが扱う新製品情報を一堂に集めました。
        </p>
      </div>
      {/* ページネーション（現在の画像を示す） */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-3 rounded-full transition-colors duration-300 ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}