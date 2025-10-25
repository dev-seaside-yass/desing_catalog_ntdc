import type { Metadata } from "next";
import { GithubRepoUrl } from "@/components/Parts/git_repo_url";
import Sample02Header from "@/components/Temple/sample02/header";
import urlConfig from "@/config/propaties";
import Sample02Hero from "@/components/Temple/sample02/hero";
import Sample02Event from "@/components/Temple/sample02/event";
import Sample02Concept from "@/components/Temple/sample02/concept";
import Sample02News from "@/components/Temple/sample02/news";
// メタデータ設定
export const metadata: Metadata = {
  title: "NDC|サンプル02",
  description: "デザインカタログ|建築系のコーポレートページです。",
};
// gitHubリポジトリURL
//const gitHubRepoUrl = "";
// gitHubリポジトリURL
const sampleno = '02';
const gitHubRepoUrl = `${urlConfig.githubUrl}temple/sample${sampleno}/page.tsx`;
export default function Sample02() {
  return (
    <main>
      <Sample02Header />
      <Sample02Hero />
      <Sample02Event />
      <Sample02Concept />
      <Sample02News />
      {/* GitHubリポジトリURL表示 */}
      {gitHubRepoUrl ?<GithubRepoUrl gitRepo={{ url: gitHubRepoUrl }} />: null}
    </main>
  );
}
