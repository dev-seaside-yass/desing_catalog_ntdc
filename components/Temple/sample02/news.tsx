import { Button } from "@/components/ui/button";

type NewsItem = {
  id: number;
  date: string;
  category?: string;
  title: string;
  link?: string;
};

const newsList: NewsItem[] = [
  {
    id: 1,
    date: "20XX.XX.XX",
    title:
      "【重要】年末年始休業のお知らせ",
  },
  {
    id: 2,
    date: "20XX.XX.XX",
    title: "サンプル経済レポートに掲載していただきました。",
  },
  {
    id: 3,
    date: "20XX.XX.XX",
    title:
      "「サンプル財団エコスペシャリスト」認定書をいただきました！",
  },
  {
    id: 4,
    date: "20XX.XX.XX",
    category: "メディア",
    title: "サンプル経済レポートに掲載されました！",
  },
];

export default function Sample02News() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* タイトル行 */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-wider">
              NEWS
            </h2>
            <p className="text-sm text-gray-500 mt-1">新着情報</p>
            <div className="w-10 h-[2px] bg-green-500 mt-2" />
          </div>

          <Button
            variant="outline"
            className="border-gray-400 text-gray-800 hover:bg-green-500 hover:text-white transition"
          >
            More →
          </Button>
        </div>

        {/* ニュースリスト */}
        <ul className="divide-y divide-gray-200">
          {newsList.map((news) => (
            <li key={news.id} className="py-4">
              <div className="text-sm text-gray-700">
                <span className="font-medium text-gray-800">{news.date}</span>
                {news.category && (
                  <span className="ml-3 text-gray-500">
                    [<span className="text-green-600">{news.category}</span>]
                  </span>
                )}
              </div>
              <a
                href={news.link || "#"}
                className="text-green-700 hover:underline text-base block mt-1"
              >
                {news.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
