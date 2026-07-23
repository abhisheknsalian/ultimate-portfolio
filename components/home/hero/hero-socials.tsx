import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { siteConfig } from "@/data/site";

export default function HeroSocials() {
  return (
    <div className="mt-8 flex items-center gap-6">
      <Link
        href={`https://github.com/${siteConfig.github}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        <FaGithub className="h-5 w-5" />
      </Link>

      <Link
        href={`https://linkedin.com/in/${siteConfig.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        <FaLinkedin className="h-5 w-5" />
      </Link>

      <Link
        href={`mailto:${siteConfig.email}`}
        aria-label="Email"
        className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        <MdEmail className="h-5 w-5" />
      </Link>
    </div>
  );
}