import { TooltipProvider } from "@radix-ui/react-tooltip";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";

interface PropsSocialLink {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5"></Youtube>,
  },
  {
    title: "Github",
    href: "https://www.youtube.com",
    icon: <Github className="w-5 h-5"></Github>,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com",
    icon: <Linkedin className="w-5 h-5"></Linkedin>,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com",
    icon: <Facebook className="w-5 h-5"></Facebook>,
  },
  {
    title: "Slack",
    href: "https://www.youtube.com",
    icon: <Slack className="w-5 h-5"></Slack>,
  },
];

const SocialMedia = ({
  className,
  iconClassName,
  tooltipClassName,
}: PropsSocialLink) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener norefferer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-white",
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={
                (cn("bg-white text-dark font-semibold"), tooltipClassName)
              }
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
