import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Sample03Recommend() {
const recommendations = [
    {
      title: "おすすめキャンペーン",
      desc: "おすすめキャンペーン：無料宿泊など豪華プレゼントが当たる！",
      img: "/no_img.svg",
    },
    {
      title: "サンプルホテルの特別な情報",
      desc: "サンプルホテルの特別な情報：エステサロン特別割引実施中！",
      img: "/no_img.svg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-900">おすすめ情報</h2>
        <a href="#" className="text-blue-700 text-sm hover:underline">
          すべて見る
        </a>
      </div>

      {/* 上部の2つのカード */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {recommendations.map((item, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="relative w-full h-56">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* 下部のクラブカード情報ブロック */}
      <div className="bg-blue-100 rounded-xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-6">
        <div className="text-blue-900 max-w-md">
          <h3 className="text-xl font-bold mb-2">
            顧客満足度No.1
            <br />
            サンプル会員カード
          </h3>
          <p className="text-sm mb-4">
            サンプルホテルをお得に利用できる会員カードです。
            <br />
            さらに今なら、新規入会でポイントプレゼント中！
          </p>
          <Button
            variant="outline"
            className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
          >
            詳しくはこちら
          </Button>
        </div>
        <div className="relative w-full md:w-1/3 h-40">
          <Image
            src="/no_img.svg"
            alt="サンプル会員カード"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}