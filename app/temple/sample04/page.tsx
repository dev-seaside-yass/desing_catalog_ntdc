import type { Metadata } from "next";
import { GithubRepoUrl } from "@/components/Parts/git_repo_url";
import urlConfig from "@/config/propaties";
import Sample04Header from "@/components/Temple/sample04/header";
import Sample04Hero from "@/components/Temple/sample04/hero";
import Sample04NewItem from "@/components/Temple/sample04/new_item";
import Sample04Article from "@/components/Temple/sample04/article";
import Sample04SNS from "@/components/Temple/sample04/sns";
// メタデータ設定
export const metadata: Metadata = {
  title: "NDC|サンプル04",
  description: "デザインカタログ|インテリデザイン系のコーポレートページです。",
};

// gitHubリポジトリURL
const sampleno = '04';
const gitHubRepoUrl = `${urlConfig.githubUrl}temple/sample${sampleno}/page.tsx`;
export default function Sample04() {
  return (
    <main>
      <Sample04Header />
      <Sample04Hero />
      <Sample04NewItem />
      <Sample04Article />
      <Sample04SNS />
      {gitHubRepoUrl ?<GithubRepoUrl gitRepo={{ url: gitHubRepoUrl }} />: null}
    </main>
  );
}
