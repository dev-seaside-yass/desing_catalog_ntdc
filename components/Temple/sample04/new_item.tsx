import sample_json from "@/public/data/sample04.json";
import Sample04NewItemCard from "./new_item_card";

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  isNew?: boolean;
}
const articles: Article[] = sample_json;

export default function Sample04NewItem() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* タイトル */}
      <div className="relative mb-10 text-center">
        <div className="border-t border-black w-full absolute top-1/2 left-0" />
        <h2 className="relative inline-block bg-white px-6 text-xl md:text-2xl font-bold">
          新着
        </h2>
      </div>
      {/* 記事レイアウト */}
      <div className="grid grid-cols-1 gap-8">
        {/* 最上段（1列で大きく） */}
        <Sample04NewItemCard article={articles[0]} large />
        {/* それ以降（2列レイアウト） */}
        <div className="grid sm:grid-cols-2 gap-8">
          {articles.slice(1).map((a) => (
            <Sample04NewItemCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}