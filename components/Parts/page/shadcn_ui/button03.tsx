import { Button } from "@/components/ui/button"
import { GitBranch } from "lucide-react"
import { FaInstagram } from "react-icons/fa6"
import { ArrowUpIcon } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

export function Button03() {
  return (
    <>
      <div className="flex flex-col items-start gap-8 sm:flex-row">
        <Button>デフォルトボタン</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <hr className="my-2"/>
      <div className="flex flex-col items-start gap-8 sm:flex-row">
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <hr className="my-2"/>
      <div className="flex flex-col items-start gap-8 sm:flex-row">
        <Button variant="outline" size="icon">
          <FaInstagram />
        </Button>
        <Button variant="outline" size="sm">
          <GitBranch/> New Branch
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <ArrowUpIcon />
        </Button>
        <Button size="sm" variant="outline" disabled>
          <Spinner />
          Submit
        </Button>
      </div>
    </>
  )
}
