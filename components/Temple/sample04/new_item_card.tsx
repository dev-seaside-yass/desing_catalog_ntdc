import Image from "next/image";
import sample_json from "@/public/data/sample04.json";

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  isNew?: boolean;
}

interface ArticleCardProps {
  article: Article;
  large?: boolean;
}

export default function Sample04NewItemCard({ article, large = false }: ArticleCardProps) {
  return (
    <div className="relative group">
      <div className="relative w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          width={large ? 800 : 400}
          height={large ? 600 : 250}
          className="w-full h-auto object-cover"
        />
        {article.isNew && (
          <span className="absolute bottom-0 right-0 bg-yellow-300 text-black font-bold text-sm px-3 py-1">
            NEW
          </span>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-bold text-sm md:text-base leading-snug line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs md:text-sm mt-1 font-semibold">{article.date}</p>
      </div>
    </div>
  );
}