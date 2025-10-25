import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { TemplateRow } from "@/lib/interfaceUtils";
import templat_list_data from "@/public/data/temp_list.json";
import type { Metadata } from "next";

// メタデータ設定
export const metadata: Metadata = {
  title: "NDC|テンプレート一覧",
  description: "デザインカタログ|テンプレートリストのページです。",
};
// テンプレートリスト一覧作成
const templat_list: TemplateRow[] = templat_list_data;
// メインコンポーネント
export default function TemplePage() {
  return (
    <main>
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">テンプレートリスト</h2>
        <p className="text-gray-500 mb-2 max-w-2xl mx-auto">
          以下は、Next.jsとTailwind CSSを使用したテンプレートの例です。
        </p>
        <p className="text-gray-500 mb-2 max-w-2xl mx-auto">
          レスポンシブデザインとモダンなUIコンポーネントを備えています。
        </p>
        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
          迅速な開発をサポートします。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templat_list.map((temp) => (
            <Link  key={temp.id} href={temp.url || "#"}>
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition">
                <CardContent className="p-0">
                  <div className="relative w-full h-64">
                    {temp.image 
                      ? <Image src={temp.image} alt={temp.title} fill className="object-cover"/>
                      : <Image src="/no_img.svg" alt={temp.title} fill className="object-cover"/>
                    }
                  </div>
                  <div className="p-4 text-left">
                    <h3 className="font-semibold text-lg">{temp.title}</h3>
                    <p className="text-sm text-gray-500">{temp.category}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
