import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { siteConfig } from "@/data/site";

// p-2 -m-2 expands the tappable area for touch targets without
// shifting the icon's visual position (the negative margin cancels
// the padding's layout impact).
const ICON_LINK_CLASS =
  "-m-2 rounded-md p-2 text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50";

export default function HeroSocials() {
  return (
    <div className="mt-8 flex items-center gap-6">
      <Link
        href={`https://github.com/${siteConfig.github}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={ICON_LINK_CLASS}
      >
        <FaGithub className="h-5 w-5" />
      </Link>

      <Link
        href={`https://linkedin.com/in/${siteConfig.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={ICON_LINK_CLASS}
      >
        <FaLinkedin className="h-5 w-5" />
      </Link>

      <Link
        href={`mailto:${siteConfig.email}`}
        aria-label="Email"
        className={ICON_LINK_CLASS}
      >
        <MdEmail className="h-5 w-5" />
      </Link>
    </div>
  );
}