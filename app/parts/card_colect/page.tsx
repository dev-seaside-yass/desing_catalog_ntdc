import type { Metadata } from "next";
import { GithubRepoUrl } from "@/components/Parts/git_repo_url";
import urlConfig from "@/config/propaties";
import { tv } from 'tailwind-variants';
const twStayles = tv({
  variants: {
    style:{
      parts_sec:'h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden',
      parts_h2:'text-lg font-bold mb-2',
    },
  },
});
// メタデータ設定
export const metadata: Metadata = {
  title: "NDC | Cardパーツ",
  description: "NDC | Cardパーツのサンプルページです。",
};
// gitHubリポジトリURL
const gitHubRepoUrl = "";
// gitHubリポジトリURL
//const sampleno = '01';
//const gitHubRepoUrl = `${urlConfig.githubUrl}temple/sample${sampleno}/page.tsx`;
export default function CardPartsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="py-4 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">カードパーツ集</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        <div className={twStayles({style:'parts_sec'})}>
          <h2 className={twStayles({style:'parts_h2'})}>パーツ</h2>
        </div>
        <div className={twStayles({style:'parts_sec'})}>
          <h2 className={twStayles({style:'parts_h2'})}>パーツ</h2>
        </div>
        <div className={twStayles({style:'parts_sec'})}>
          <h2 className={twStayles({style:'parts_h2'})}>パーツ</h2>
        </div>
      </div>
      {gitHubRepoUrl ?<GithubRepoUrl gitRepo={{ url: gitHubRepoUrl }} />: null}
    </main>
  );
}
