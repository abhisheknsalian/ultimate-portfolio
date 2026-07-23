import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link href="#projects">
        <Button size="lg" className="px-6">
          Explore My Work
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
      </Link>

      <Link href="/resume/resume.pdf">
        <Button variant="outline" size="lg" className="px-6">
          <Download className="mr-2 h-6 w-6" />
          Resume
        </Button>
      </Link>
    </div>
  );
}