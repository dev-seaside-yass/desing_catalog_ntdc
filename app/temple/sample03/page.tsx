import type { Metadata } from "next";
import { GithubRepoUrl } from "@/components/Parts/git_repo_url";
import urlConfig from "@/config/propaties";
import Sample03Head from "@/components/Temple/sample03/Head";
import Sample03Hearo from "@/components/Temple/sample03/Hearo";
import Sample03PlanList from "@/components/Temple/sample03/PlanList";
import Sample03Recommend from "@/components/Temple/sample03/Recommend";
// メタデータ設定
export const metadata: Metadata = {
  title: "NDC|サンプル03",
  description: "デザインカタログ|ホテル系のコーポレートページです。",
};
// gitHubリポジトリURL
const gitHubRepoUrl = "";
// gitHubリポジトリURL
//const sampleno = '03';
//const gitHubRepoUrl = `${urlConfig.githubUrl}temple/sample${sampleno}/page.tsx`;
export default function SampleXX() {
  return (
    <main>
      <Sample03Head />
      <Sample03Hearo />
      <Sample03PlanList />
      <Sample03Recommend />
      {gitHubRepoUrl ?<GithubRepoUrl gitRepo={{ url: gitHubRepoUrl }} />: null}
    </main>
  );
}
