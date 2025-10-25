import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, User, Ban, Search } from "lucide-react";
export default function Sample03Hearo() {
  return (
    <section className="relative flex-1 bg-sky-300 text-white">
      <div className="absolute inset-0 bg-sky-300 bg-opacity-90"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-8">
          {/* Search Box */}
          <div className="w-full bg-white rounded-xl shadow-md p-4 text-blue-900 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-3">
            <div className="flex items-center space-x-2 w-full md:w-1/3 border rounded-md p-2">
              <Search className="w-5 h-5 text-blue-700" />
              <Input placeholder="エリアやホテル名を入力" className="border-0 focus-visible:ring-0" />
            </div>
            <div className="flex items-center space-x-2 w-full md:w-1/4 border rounded-md p-2">
              <Calendar className="w-5 h-5 text-blue-700" />
              <span className="text-sm">日程を選択</span>
            </div>
            <div className="flex items-center space-x-2 w-full md:w-1/4 border rounded-md p-2">
              <User className="w-5 h-5 text-blue-700" />
              <span className="text-sm">人数・部屋数を選択</span>
            </div>
            <div className="flex items-center space-x-2 w-full md:w-1/4 border rounded-md p-2">
              <Ban className="w-5 h-5 text-blue-700" />
              <span className="text-sm">禁煙・喫煙を選択</span>
            </div>
            <Button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 w-full md:w-auto">空室を検索</Button>
          </div>
          {/* Main Copy */}
          <div className="mt-12 md:mt-20">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug">
              メインキャッチコピー。<br />
              サブ：キャッチコピーが入ります。
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}