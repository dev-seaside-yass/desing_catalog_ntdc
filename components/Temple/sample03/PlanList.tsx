import Image from "next/image";
export default function Sample03PlanList() {
    const plans = [
    {
      title: "サンプルシンプルプラン",
      desc: "誰でもいつでも10%OFF！",
      img: "/no_img.svg",
    },
    {
      title: "サンプルタイムセール",
      desc: "お早めの予約でご宿泊がよりお得に！",
      img: "/no_img.svg",
    },
    {
      title: "サンプル特別プラン",
      desc: "お部屋と快適設備、充実なサービスプラン。",
      img: "/no_img.svg",
    },
    {
      title: "サンプル応援プラン",
      desc: "応援したい方におすすめプラン。",
      img: "/no_img.svg",
    },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-900">お得なプラン</h2>
          <a href="#" className="text-blue-700 text-sm hover:underline">すべて見る</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="relative w-full h-48">
                <Image src={plan.img} alt={plan.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-700">{plan.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}