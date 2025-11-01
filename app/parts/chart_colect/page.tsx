import type { Metadata } from "next";
import { GithubRepoUrl } from "@/components/Parts/git_repo_url";
import urlConfig from "@/config/propaties";
import Chart01 from "@/components/Parts/page/chart_ui/chart01";
import { tv } from 'tailwind-variants';
import Chart02 from "@/components/Parts/page/chart_ui/chart02";
import Chart03 from "@/components/Parts/page/chart_ui/chart03";
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
  title: "NDC | Chartパーツ",
  description: "NDC | Chartパーツのサンプルページです。",
};
// gitHubリポジトリURL
const gitHubRepoUrl = "";
// gitHubリポジトリURL
//const sampleno = '01';
//const gitHubRepoUrl = `${urlConfig.githubUrl}temple/sample${sampleno}/page.tsx`;
export default function FormPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="py-4 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">チャートパーツ集（recharts）</h1>
      </div>
      <div className="grid grid-cols-1">
        <div className={twStayles({style:'parts_sec'})}>
          <h2 className={twStayles({style:'parts_h2'})}>折れ線グラフ</h2>
          <Chart01 />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-5">
        <div className={twStayles({style:'parts_sec'})}>
          <h2 className={twStayles({style:'parts_h2'})}>折れ線グラフ（複数）</h2>
          <Chart03 />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-5">
        <div className={twStayles({style:'parts_sec'})}>
          <h2 className={twStayles({style:'parts_h2'})}>棒グラフ</h2>
          <Chart02 />
        </div>
      </div>
      {gitHubRepoUrl ?<GithubRepoUrl gitRepo={{ url: gitHubRepoUrl }} />: null}
    </main>
  );
}
