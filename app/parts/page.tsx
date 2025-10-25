import type { Metadata } from "next";
import { GithubRepoUrl } from "@/components/Parts/git_repo_url";
import urlConfig from "@/config/propaties";
import PartsPageCardSec from "@/components/Parts/page/card_block";
// メタデータ設定
export const metadata: Metadata = {
  title: "NDC | パーツページ",
  description: "デザインカタログ|パーツのサンプルページです。",
};
// gitHubリポジトリURL
const gitHubRepoUrl = "";
// gitHubリポジトリURL
//const sampleno = '01';
//const gitHubRepoUrl = `${urlConfig.githubUrl}temple/sample${sampleno}/page.tsx`;
export default function PartsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="py-4 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">UIパーツリスト</h1>
        <p className="text-gray-500 mb-2 max-w-2xl mx-auto">
          以下は、ShadcnUiを中心にUIパーツ集になります。
        </p>
      </div>
      <PartsPageCardSec />
      {gitHubRepoUrl ?<GithubRepoUrl gitRepo={{ url: gitHubRepoUrl }} />: null}
    </main>
  );
}
