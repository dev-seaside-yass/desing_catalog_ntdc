import Image from "next/image";

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "NIHON BED／日本ベッド",
    date: "20XX.XX.XX",
    image: "/img/vertical/v_img01.jpg",
  },
  {
    id: 2,
    title: "【PR】サンプルカンパニー〜未来のデザインを創造する",
    date: "20XX.XX.XX",
    image: "/img/vertical/v_img02.jpg",
  },
  {
    id: 3,
    title: "【PR】サンプルデザイン株式会社～革新的なデザインソリューションを提供～",
    date: "20XX.XX.XX",
    image: "/img/vertical/v_img03.jpg",
  },
  {
    id: 4,
    title: "20XX年XX月のオススメ照明",
    date: "20XX.XX.XX",
    image: "/img/vertical/v_img01.jpg",
  },
];
export default function Sample04Article() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* タイトル */}
      <div className="relative mb-10 text-center">
        <div className="border-t border-black w-full absolute top-1/2 left-0" />
        <h2 className="relative inline-block bg-white px-6 text-xl md:text-2xl font-bold">
          記事
        </h2>
      </div>
      {/* 記事グリッド */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {articles.map((article) => (
          <div key={article.id} className="group">
            <div className="relative w-full overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={250}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <h3 className="font-bold text-sm md:text-base leading-snug line-clamp-2">
                {article.title}
              </h3>
              <p className="text-xs md:text-sm mt-1 font-semibold">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}