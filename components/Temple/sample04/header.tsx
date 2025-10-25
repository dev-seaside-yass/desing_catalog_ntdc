import Image from "next/image";
import Sample04Navi from "./navi";

export default function Sample04Header() {
return (
    <header className="w-full border-b border-gray-200 bg-white">
      {/* 上部ロゴエリア */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center">
            <Image
              src="/icon.png"
              alt="id+ ロゴ"
              width={80}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="text-sm leading-tight">
            <p className="font-medium">
              インテリアデザイン・建材の<br className="md:hidden" />
              トレンドを伝えるサンプルサイト
            </p>
            <p className="text-xs mt-1 text-gray-600">
              Presented by{" "}
              <span className="font-medium">サンプルデザイン</span>
            </p>
          </div>
        </div>
        {/* ナビゲーション部分 */}
        <Sample04Navi />
      </div>
    </header>
  );
}