import Link from "next/link";
//型定義
type GitRepo = {
  url: string;
};

export function GithubRepoUrl({ gitRepo }: { gitRepo: GitRepo }) {
  return(
    <div className="border-t bg-gray-300">
          <div className="text-1xl text-gray-600 md:flex-row text-center">
            <Link href={gitRepo.url} target="_blank" rel="noopener noreferrer">【コードを確認する】</Link>
          </div>
      </div>
  );
}