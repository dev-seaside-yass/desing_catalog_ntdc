import { Button } from "@/components/ui/button";
export default function Sample03Head() {
  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-800">サンプルホテル</span>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-blue-900">
            <a href="#" className="hover:text-blue-600">空室検索・宿泊予約</a>
            <a href="#" className="hover:text-blue-600">ピックアップ</a>
            <a href="#" className="hover:text-blue-600">ホテル一覧</a>
          </nav>
          {/* Right links */}
          <div className="hidden md:flex items-center space-x-4 text-sm text-blue-900">
            <a href="#" className="hover:text-blue-600">サンプルホテルについて</a>
            <a href="#" className="hover:text-blue-600">法人のお客様</a>
            <a href="#" className="hover:text-blue-600">よくあるご質問</a>
            <Button className="bg-blue-700 text-white rounded-md px-4 py-1 hover:bg-blue-800">ログイン</Button>
          </div>
        </div>
      </header>
    </>
  );
}