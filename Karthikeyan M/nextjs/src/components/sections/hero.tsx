import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { config } from "@/data/config";


const HeroSection = () => {
  return (
    <section id="hero" className={cn("relative w-full min-h-fit md:min-h-screen md:h-screen md:mb-0")}>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div
          className={cn(
            "md:h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "flex flex-col justify-start md:justify-center items-start text-left",
            "pt-32 sm:pt-40 md:pt-0 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-40"
          )}
        >
          <div className="flex flex-col items-start">
            <BlurIn delay={0.7} as="div">
              <p
                className={cn(
                  "mt-2 sm:mt-4 font-thin text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500 ml-1",
                  "cursor-default font-display bg-clip-text"
                )}
              >
                Hey, I am
              </p>
            </BlurIn>
            <BlurIn delay={1} as="div">
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <h1
                    className={cn(
                      "font-thin text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-brand whitespace-nowrap",
                      "cursor-default font-display leading-tight"
                    )}
                  >
                    {config.author}
                  </h1>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-white text-zinc-900 text-xs md:text-sm border border-zinc-200"
                >
                  theres something waiting for you in devtools
                </TooltipContent>
              </Tooltip>
            </BlurIn>
            <BlurIn delay={1.2} as="div">
              <p
                className={cn(
                  "mt-2 sm:mt-4 font-thin text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-500 ml-1",
                  "cursor-default font-display bg-clip-text"
                )}
              >
                Full Stack Developer | AI | Cloud 
              </p>
            </BlurIn>
            <BlurIn delay={1.4} as="div">
              <div
                className={cn(
                  "mt-4 sm:mt-6 font-thin text-sm sm:text-base md:text-lg text-zinc-400 ml-1 max-w-2xl leading-relaxed",
                  "cursor-default font-display"
                )}
              >
                Full Stack Engineer with strong expertise in building AI-powered systems, focused on cloud-native & scalable applications.
                <div className="mt-2 text-brand/80 font-medium text-xs sm:text-sm md:text-base">
                  AWS Certified (Solutions Architect - Associate, Cloud Practitioner)
                </div>
              </div>
            </BlurIn>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-col items-start gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
            <Link
              href={"/resume.pdf"}
              target="_blank"
              className="w-fit"
            >
              <BoxReveal delay={2} width="fit-content" >
                <Button className="flex items-center justify-center gap-3 w-full sm:w-auto text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-6">
                  <File size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  <p>Resume</p>
                </Button>
              </BoxReveal>
            </Link>
            <div className="flex gap-3 sm:gap-4 md:gap-4 w-full justify-start">
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Link href={"#contact"} className="w-fit">
                    <Button
                      variant={"outline"}
                      className="flex items-center justify-center w-full md:w-auto overflow-hidden text-xs sm:text-sm md:text-base px-6 sm:px-8 md:px-10 py-3 sm:py-4"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </TooltipTrigger>
              </Tooltip>
              <Link
                href={config.social.github}
                target="_blank"
                className="w-fit"
              >
                <Button variant={"outline"} className="w-full md:w-auto px-4 sm:px-5 md:px-6 py-3 sm:py-4">
                  <SiGithub size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </Button>
              </Link>
              <Link
                href={config.social.linkedin}
                target="_blank"
                className="w-fit"
              >
                <Button variant={"outline"} className="w-full md:w-auto px-4 sm:px-5 md:px-6 py-3 sm:py-4">
                  <SiLinkedin size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </Button>
              </Link>
              <Link
                href={config.social.leetcode}
                target="_blank"
                className="w-fit"
              >
                <Button variant={"outline"} className="w-full md:w-auto px-4 sm:px-5 md:px-6 py-3 sm:py-4">
                  <SiLeetcode size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Right side space reserved for later purpose */}
        <div className="hidden md:block col-span-1" />
      </div>
      <div className="hidden md:block absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section >
  );
};

export default HeroSection;
