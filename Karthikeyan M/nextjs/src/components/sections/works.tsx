"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

// Animation variants
const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        duration: 1.25,
        delay: delay || 0,
      },
    },
  };
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  }),
};

import Link from "next/link";
import works, { Work } from "@/data/works";

const Works = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentIndex = ((page % works.length) + works.length) % works.length;
  const currentWork = works[currentIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section id="works" className="relative w-full py-10 md:py-20 bg-transparent overflow-hidden px-4 sm:px-6">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        className="text-center mb-8 md:mb-16 px-2"
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin text-brand leading-tight">
          My <span className="text-zinc-500">Experience & Work</span>
        </h2>
        <motion.p
          variants={textVariant(0.2)}
          className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg font-thin text-zinc-500 max-w-3xl mx-auto px-2"
        >
          Professional experience, internships, and freelance projects showcasing real-world application development
        </motion.p>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 text-zinc-900 hover:bg-zinc-100/50 transition-all duration-300 flex items-center justify-center shadow-md hover:scale-110 -translate-x-2 sm:-translate-x-4"
            aria-label="Previous work"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 text-zinc-900 hover:bg-zinc-100/50 transition-all duration-300 flex items-center justify-center shadow-md hover:scale-110 translate-x-2 sm:translate-x-4"
            aria-label="Next work"
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slider Content */}
          <div className="relative h-[600px] sm:h-[500px] md:h-[550px] flex items-center justify-center px-12 sm:px-10 md:px-16">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
              >
                <div className="relative group max-w-[300px] mx-auto sm:max-w-none">
                  <Link href={`/work/${currentWork.id}`} className="block">
                    <div className="relative bg-white/80 backdrop-blur-lg border border-zinc-200 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden hover:border-brand/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-brand/5 group-hover:-translate-y-1">
                      <div className="p-4 sm:p-6 md:p-8">
                        {/* Header with Image and Title */}
                        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-6 mb-4 md:mb-6">
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-zinc-200 flex-shrink-0 shadow-md">
                            <Image
                              src={currentWork.image}
                              alt={currentWork.company}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="96px"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-thin text-zinc-900 mb-1 md:mb-2 group-hover:text-brand transition-colors duration-300">
                              {currentWork.title}
                            </h3>
                            {currentWork.role && (
                              <p className="text-xs sm:text-sm md:text-base mb-1 uppercase tracking-wider font-bold">
                                <span className="text-zinc-900">Role : </span>
                                <span className="text-brand">{currentWork.role}</span>
                              </p>
                            )}
                            <p className="text-zinc-500 font-semibold text-xs sm:text-sm md:text-base">{currentWork.company}</p>
                            <p className="text-zinc-500 text-xs sm:text-sm mt-0.5 md:mt-1">{currentWork.duration}</p>
                            {currentWork.current && (
                              <span className="inline-block mt-2 px-2 sm:px-3 py-1 bg-brand/10 text-brand border border-brand/20 text-xs rounded-full font-medium">
                                ⭐ Current Position
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-500 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-3xl">
                          {currentWork.description}
                        </p>

                        {/* View Details Link */}
                        <div className="mb-6 flex items-center gap-4">
                          <span className="text-xs font-bold uppercase tracking-widest text-brand group-hover:tracking-[0.2em] transition-all duration-300 flex items-center gap-2">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {currentWork.skills.map((skill: string) => (
                            <span
                              key={skill}
                              className="px-2 sm:px-3 py-1 md:py-2 bg-zinc-100/50 border border-zinc-200 text-zinc-600 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > currentIndex ? 1 : -1])}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? "w-8 h-2 bg-brand shadow-[0_0_8px_rgba(255,0,0,0.4)]"
                  : "w-2 h-2 bg-zinc-200 hover:bg-zinc-300"
                  }`}
                aria-label={`Go to work ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
