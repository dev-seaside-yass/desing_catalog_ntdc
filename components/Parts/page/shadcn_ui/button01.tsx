import { Button } from "@/components/ui/button"
import { ImInstagram } from "react-icons/im";

export function Button01(){
  return(
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ImInstagram />
      </Button>
    </div>
  );
}