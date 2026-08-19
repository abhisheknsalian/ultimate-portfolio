"use client";

import Link from "next/link";

import {
  Award,
  Briefcase,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { AssistantAction } from "../types/assistant";
import { scrollToSection } from "../utils/scroll-to-section";

interface Props {
  action: AssistantAction;
}

const BUTTON_CLASS =
  "mt-4 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500";

export default function ActionButton({ action }: Props) {
  switch (action.type) {
    case "OPEN_GITHUB":
      return (
        <Link
          href="https://github.com/abhisheknsalian"
          target="_blank"
          rel="noopener noreferrer"
          className={BUTTON_CLASS}
        >
          <FaGithub size={16} />
          <span>{action.label}</span>
          <ExternalLink size={14} />
        </Link>
      );

    case "OPEN_LINKEDIN":
      return (
        <Link
          href="https://linkedin.com/in/abhishek-salian-13b3091a5"
          target="_blank"
          rel="noopener noreferrer"
          className={BUTTON_CLASS}
        >
          <FaLinkedin size={16} />
          <span>{action.label}</span>
          <ExternalLink size={14} />
        </Link>
      );

    case "OPEN_EMAIL":
      return (
        <Link
          href="mailto:abhisheknsalian@gmail.com"
          className={BUTTON_CLASS}
        >
          <Mail size={16} />
          <span>{action.label}</span>
        </Link>
      );

    case "OPEN_PROJECTS":
      return (
        <button
          type="button"
          onClick={() => scrollToSection("projects")}
          className={BUTTON_CLASS}
        >
          <FolderGit2 size={16} />
          <span>{action.label}</span>
        </button>
      );

    case "OPEN_FEATURED_PROJECT":
      return (
        <button
          type="button"
          onClick={() => scrollToSection("projects")}
          className={BUTTON_CLASS}
        >
          <FolderGit2 size={16} />
          <span>{action.label}</span>
        </button>
      );

    case "OPEN_EXPERIENCE":
      return (
        <button
          type="button"
          onClick={() => scrollToSection("experience")}
          className={BUTTON_CLASS}
        >
          <Briefcase size={16} />
          <span>{action.label}</span>
        </button>
      );

    case "OPEN_EDUCATION":
      return (
        <button
          type="button"
          onClick={() => scrollToSection("education")}
          className={BUTTON_CLASS}
        >
          <GraduationCap size={16} />
          <span>{action.label}</span>
        </button>
      );

    case "OPEN_CERTIFICATIONS":
      return (
        <button
          type="button"
          onClick={() => scrollToSection("education")}
          className={BUTTON_CLASS}
        >
          <Award size={16} />
          <span>{action.label}</span>
        </button>
      );

    case "OPEN_CONTACT":
      return (
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className={BUTTON_CLASS}
        >
          <Mail size={16} />
          <span>{action.label}</span>
        </button>
      );

    default:
      return null;
  }
}