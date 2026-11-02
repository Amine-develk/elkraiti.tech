import { cn } from "../utils";
import GithubIcon from "./icons/Github";
import LinkedInIcon from "./icons/LinkedIn";
import { FaHackerrank } from "react-icons/fa";

import React from "react";

const BootDevIcon = ({ className }: { className: string }) => (
  <img src="https://www.boot.dev/favicon.ico" alt="" className={className} />
);

const SocialLinkIcon: React.FC<{
  to: string;
  icon: (props: any) => React.ReactElement;
  className: string;
  label: string;
}> = ({ to, icon: Icon, className, label }) => (
  <a href={to} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <Icon
      className={cn(
        "h-10 w-10 hover:scale-105 transition-all active:scale-90 active:brightness-100 hover:brightness-90 dark:hover:brightness-150",
        className,
      )}
    />
  </a>
);

export const SocialLinks: React.FC = () => (
  <footer className="flex gap-7">
    <SocialLinkIcon
      to="https://github.com/amine-develk"
      icon={GithubIcon}
      className="fill-[#6e5494]"
      label="GitHub"
    />
    <SocialLinkIcon
      to="https://www.linkedin.com/in/amine-el-kraiti/"
      icon={LinkedInIcon}
      className="fill-[#0077b5]"
      label="LinkedIn"
    />
    <SocialLinkIcon
      to="https://www.hackerrank.com/profile/elkraitia"
      icon={FaHackerrank}
      className="fill-[#00a86b]"
      label="HackerRank"
    />
    <SocialLinkIcon
      to="https://www.boot.dev/u/boilingairport72"
      icon={BootDevIcon}
      className="fill-[#f7c948]"
      label="Boot.dev"
    />
  </footer>
);
