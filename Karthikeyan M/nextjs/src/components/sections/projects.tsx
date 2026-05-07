"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ProjectsSection = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const tipY = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" className="w-full md:max-w-7xl md:mx-auto px-6 sm:px-6 md:px-0 py-20">
      <div className="mb-20">
        <Link href={"#projects"}>
          <h2 className="text-brand font-thin text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
            Things <span className="text-zinc-500">I&apos;ve Built</span>
          </h2>
          <p className="mt-8 text-zinc-500 text-sm md:text-lg font-thin max-w-3xl leading-relaxed">
            From AI-driven platforms to scalable cloud applications, these projects reflect my approach to building modern software systems.
          </p>
        </Link>
      </div>

      <div ref={containerRef} className="relative w-full">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-32 w-[2px] bg-zinc-100 -translate-x-1/2 z-0">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 left-0 w-full h-full bg-brand shadow-[0_0_15px_rgba(255,0,0,0.5)]"
          />
          {/* Glowing Tip */}
          <motion.div
            style={{ top: tipY }}
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-brand rounded-full shadow-[0_0_20px_#ff0000,0_0_40px_#ff0000]"
          >
            <div className="absolute inset-0 animate-ping bg-brand rounded-full opacity-75" />
          </motion.div>
        </div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "relative flex flex-col md:flex-row items-center w-full",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Connector Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-brand -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(255,0,0,0.3)]" />

      {/* Card Side */}
      <div className={cn(
        "w-full md:w-1/2 pl-12 md:pl-0",
        isEven ? "md:pr-12 lg:pr-20" : "md:pl-12 lg:pl-20"
      )}>
        <motion.div
          initial={{ x: isEven ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href={`/projects/${project.id}`}
            className="relative block w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden border border-zinc-200 hover:border-brand/50 transition-all duration-500 group shadow-md hover:shadow-xl"
          >
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              src={project.src}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-1/2">
              <h3 className="text-xl md:text-2xl font-thin text-zinc-900 group-hover:text-brand transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <span className="text-[10px] md:text-xs bg-zinc-100 text-zinc-800 rounded-full px-3 py-1 font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-[10px] md:text-xs bg-zinc-50 text-zinc-500 rounded-full px-3 py-1 border border-zinc-100">
                  {project.date}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Description Side (Opposite) */}
      <div className={cn(
        "hidden md:flex md:w-1/2 flex-col justify-center",
        isEven ? "md:pl-12 lg:pl-20 items-start" : "md:pr-12 lg:pr-20 items-end text-right"
      )}>
        <motion.div
          initial={{ 
            opacity: 0, 
            x: isEven ? -20 : 20,
            clipPath: isEven ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" 
          }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            clipPath: "inset(0 0 0 0)" 
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a cinematic feel
            delay: 0.4 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-md"
        >
          <p className="text-zinc-500 text-sm md:text-base lg:text-lg font-thin leading-relaxed">
            {project.description}
          </p>
          <div className={cn(
            "mt-6 flex items-center gap-4",
            isEven ? "justify-start" : "justify-end"
          )}>
            <div className="h-[1px] w-12 bg-zinc-200" />
            <Link 
              href={`/projects/${project.id}`}
              className="text-xs font-bold uppercase tracking-widest text-brand hover:tracking-[0.2em] transition-all duration-300"
            >
              Explore Project
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
