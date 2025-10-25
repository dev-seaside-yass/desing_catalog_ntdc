import type { Metadata } from "next";
import { GithubRepoUrl } from "@/components/Parts/git_repo_url";
import urlConfig from "@/config/propaties";
import { tv } from 'tailwind-variants';
import { Button01 } from "@/components/Parts/page/shadcn_ui/button01";
import { Button02 } from "@/components/Parts/page/shadcn_ui/button02";
import { Button03 } from "@/components/Parts/page/shadcn_ui/button03";
import { Card01 } from "@/components/Parts/page/shadcn_ui/card01";
import { Table01 } from "@/components/Parts/page/shadcn_ui/table01";
const twStayles = tv({
  variants: {
    style:{
      parts_sec:'h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden px-2 py-2',
      parts_h2:'text-lg font-bold mb-2',
    },
  },
});
// メタデータ設定
export const metadata: Metadata = {
  title: "NDC | ShadcnUiパーツ集",
  description: "NDC | ShadcnUiを使ったパーツ集のサンプルページです。",
};
// gitHubリポジトリURL
const gitHubRepoUrl = "";
// gitHubリポジトリURL
//const sampleno = '01';
//const gitHubRepoUrl = `${urlConfig.githubUrl}temple/sample${sampleno}/page.tsx`;
export default function ShadcnUiPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="py-4 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">ShadcnUiパーツ集</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
        {/* ボタンコンポーネント */}
        <div className={twStayles({style:'parts_sec'})}>
          <h2 className={twStayles({style:'parts_h2'})}>ボタンパーツ</h2>
          <Button01 />
          <hr className="my-2"/>
          <Button02 />
          <hr className="my-2"/>
          <Button03 />
        </div>
        {/* カードコンポーネント */}
        <div className={twStayles({style:'parts_sec'})}>
          <h2 className={twStayles({style:'parts_h2'})}>カードパーツ</h2>
          <Card01 />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className={twStayles({style:'parts_sec'})}>
          <h2 className={twStayles({style:'parts_h2'})}>テーブルパーツ</h2>
          <Table01 />
        </div>
      </div>
      {gitHubRepoUrl ?<GithubRepoUrl gitRepo={{ url: gitHubRepoUrl }} />: null}
    </main>
  );
}
