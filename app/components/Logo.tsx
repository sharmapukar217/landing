import type { FC } from "react";
import { Link } from "@remix-run/react";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/utilities/config";

export type LogoProps = {
  href: string;
  className?: string;
};

export const Logo: FC<LogoProps> = ({ href, className }) => {
  return (
    <Link to={href} className={twMerge("", className)}>
      <h1 className="text-primary font-dancing-script">{siteConfig.title}</h1>
    </Link>
  );
};
