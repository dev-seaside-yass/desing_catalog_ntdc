import Image from "next/image";

const conceptItems = [
    {
      id: 2,
      title: "自由設計",
      desc: "標準仕様で納得の品質",
      image: "/no_img.svg",
    },
    {
      id: 3,
      title: "中庭住宅を支える人",
      desc: "匠の志で支える品質",
      image: "/no_img.svg",
    },
    {
      id: 4,
      title: "アフターメンテナンス",
      desc: "お引渡し後の品質も維持",
      image: "/no_img.svg",
    },
    {
      id: 5,
      title: "土地探し・住宅ローン",
      desc: "周辺サポートの品質",
      image: "/no_img.svg",
    },
]

export default function Sample02Concept() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* タイトル */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide">
          CONCEPT
        </h2>
        <p className="text-sm text-gray-500 mt-1 mb-10">中庭住宅のこだわり</p>
        <div className="w-10 h-[2px] bg-green-500 mx-auto mb-10" />
        {/* === QUALITY 01 === */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* 左側：画像 */}
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/no_img.svg"
              alt="技術と工法"
              fill
              className="object-cover"
            />
          </div>
          {/* 右側：テキスト */}
          <div className="flex flex-col justify-center bg-white rounded-lg shadow-sm p-6 md:p-8 border border-green-100">
            <div className="text-left">
              <p className="text-green-600 font-semibold mb-2">QUALITY 01</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                技術と工法
              </h3>
              <p className="text-gray-600 mb-6">
                暮らしに安心と快適をもたらす品質
              </p>
              {/* テクニック4項目 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-left">
                <div className="border border-green-400 rounded-md p-3">
                  <p className="font-semibold text-green-700">
                    Technique #1
                  </p>
                  <p className="font-bold text-gray-800 mt-1">
                    耐震等級3<br />
                    <span className="text-sm font-normal">認定取得</span>
                  </p>
                </div>
                <div className="border border-green-400 rounded-md p-3">
                  <p className="font-semibold text-green-700">
                    Technique #2
                  </p>
                  <p className="font-bold text-gray-800 mt-1">
                    長期優良住宅
                    <br />
                    <span className="text-sm font-normal">
                      サンプル値<br /> 9999.0cm²/㎡
                    </span>
                  </p>
                </div>
                <div className="border border-green-400 rounded-md p-3">
                  <p className="font-semibold text-green-700">
                    Technique #3
                  </p>
                  <p className="font-bold text-gray-800 mt-1">
                    高性能断熱材
                    <br />
                    <span className="text-sm font-normal">スーパーファイバー</span>
                  </p>
                </div>
                <div className="border border-green-400 rounded-md p-3">
                  <p className="font-semibold text-green-700">
                    Technique #4
                  </p>
                  <p className="font-bold text-gray-800 mt-1">
                    サンプル認定
                    <br />
                    <span className="text-sm font-normal">国産XXXX</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* === QUALITY 02〜05 === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {conceptItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative w-full h-44">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-green-600 text-white p-4 text-left">
                <p className="text-xs font-semibold mb-1">
                  QUALITY 0{item.id}
                </p>
                <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
