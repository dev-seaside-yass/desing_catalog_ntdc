import Image from "next/image";
import { Button } from "@/components/ui/button";

type Event = {
  id: number;
  date: string;
  category: string;
  title: string;
  image: string;
  link?: string;
};

const events: Event[] = [
  {
    id: 1,
    date: "20XX.XX.XX",
    category: "見学会",
    title: "【予約制👋】オーロラのある暮らし。完成見学会開催します！",
    image: "/no_img.svg",
  },
  {
    id: 2,
    date: "20XX.XX.XX",
    category: "見学会",
    title: "【予約制👋】“物がない、シンプルで自然を演出した家 完成見学会開催！",
    image: "/no_img.svg",
  },
  {
    id: 3,
    date: "20XX.XX.XX",
    category: "見学会",
    title: "【随時開催👋】さんぷる・デザインハウス 随時見学会を開催中！",
    image: "/no_img.svg",
  },
  {
    id: 4,
    date: "20XX.XX.XX",
    category: "見学会",
    title: "【開催終了】アウトドアリビングのある暮らし 完成見学会開催します！",
    image: "/no_img.svg",
  },
  {
    id: 5,
    date: "20XX.XX.XX",
    category: "見学会",
    title: "【開催終了】和モダンテイストの平屋完成見学会開催します！",
    image: "/no_img.svg",
  },
  {
    id: 6,
    date: "20XX.XX.XX",
    category: "見学会",
    title: "【開催終了】ワンちゃんと一緒に見学会開催！花火イベントも同時開催しました🎆",
    image: "/no_img.svg",
  },
];

export default function Sample02Event() {
  return (
    <section className="py-20 relative bg-gradient-to-b from-sky-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* タイトル */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide">
          EVENT
        </h2>
        <p className="text-sm text-gray-500 mt-1 mb-10">イベント情報</p>
        <div className="w-10 h-[2px] bg-green-500 mx-auto mb-10" />
        {/* イベントカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="text-left">
              <div className="relative w-full h-56 md:h-48 overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">{event.date}</span>{" "}
                  <span className="mx-1">｜</span>
                  <span className="text-green-700">[{event.category}]</span>
                </div>
                <p className="mt-1 text-base text-gray-800 font-medium leading-snug hover:underline cursor-pointer">
                  {event.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Moreボタン */}
        <div className="mt-12">
          <Button
            variant="outline"
            className="text-gray-800 border-gray-400 hover:bg-green-500 hover:text-white transition"
          >
            More →
          </Button>
        </div>
      </div>
    </section>
  );
}
