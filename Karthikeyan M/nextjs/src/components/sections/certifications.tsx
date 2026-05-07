"use client"

import type React from "react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaAward, FaMedal, FaFilePdf, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    description:
      "Foundational certification that validates understanding of AWS Cloud concepts, services, security, architecture, pricing, and support. Demonstrates knowledge of core AWS services and use cases.",
    tags: [
      { name: "AWS", color: "text-yellow-400" },
      { name: "Cloud", color: "text-[#00BFFF]" },
      { name: "Infrastructure", color: "text-[#1E90FF]" },
    ],
    image: "/com/aws_cp.jpeg",
    source_code_link: "/com/aws_cp.pdf",
    live_demo_link: "https://aws.amazon.com/verification",
    issuer: "Amazon Web Services",
    date: "April 20, 2026",
    borderColor: "#FF9900",
    gradient: "linear-gradient(195deg, #FF9900, #151030)"
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    description:
      "Intermediate certification that validates technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. Demonstrates advanced knowledge of architectural best practices and cost-optimization strategies.",
    tags: [
      { name: "AWS", color: "text-yellow-400" },
      { name: "Architecture", color: "text-[#00BFFF]" },
      { name: "Cloud Design", color: "text-[#1E90FF]" },
    ],
    image: "/com/aws_saa.jpeg",
    source_code_link: "/com/aws_saa.pdf",
    live_demo_link: "https://aws.amazon.com/verification",
    issuer: "Amazon Web Services",
    date: "April 30, 2026",
    borderColor: "#FF9900",
    gradient: "linear-gradient(210deg, #FF9900, #151030)"
  },
  {
    name: "Red Hat Certified System Administrator (RHCSA)",
    description:
      "Industry-recognized certification that validates the skills needed to manage and configure Red Hat Enterprise Linux systems. Covers system administration, storage configuration, and security management. Certification ID: 250-190-782",
    tags: [
      { name: "Linux", color: "text-red-500" },
      { name: "System Administration", color: "text-yellow-400" },
      { name: "Red Hat", color: "text-[#EE0000]" },
    ],
    image: "/com/rhcsa.jpeg",
    source_code_link: "/com/rhcsa.pdf",
    live_demo_link: "https://www.credly.com/badges/07896670-08ca-45d9-9d4f-741d6f01a19b",
    issuer: "Red Hat",
    date: "December 15, 2025",
    borderColor: "#EE0000",
    gradient: "linear-gradient(145deg, #EE0000, #151030)"
  },
  {
    name: "Cloud Computing (NPTEL)",
    description:
      "Advanced course on Cloud Computing provided by NPTEL and IIT Kharagpur. Covers virtualization, cloud architecture, and service models. Awarded with Elite + Silver certificate (Score: 75%).",
    tags: [
      { name: "Cloud", color: "text-blue-500" },
      { name: "Virtualization", color: "text-green-500" },
      { name: "NPTEL", color: "text-yellow-500" },
    ],
    image: "/com/nptel.jpeg",
    source_code_link: "/com/nptel.pdf",
    live_demo_link: "https://nptel.ac.in/",
    issuer: "NPTEL",
    date: "Jul-Oct 2025",
    borderColor: "#FFA500",
    gradient: "linear-gradient(135deg, #FFA500, #151030)"
  },
  {
    name: "Web Development Internship (Applifiles)",
    description:
      "Completed a virtual internship at Applifiles Technology Solutions, focusing on building responsive web applications using modern technologies. Developed projects including a personal portfolio and interactive landing pages. Certificate ID: APPLIFILESINTERNJUN017",
    tags: [
      { name: "Web Development", color: "text-blue-400" },
      { name: "Frontend", color: "text-green-400" },
      { name: "Applifiles", color: "text-royal-blue" },
    ],
    image: "/com/internship.jpg",
    source_code_link: "/com/internship.jpg",
    live_demo_link: "https://applifiles.com/",
    issuer: "Applifiles Technology Solutions",
    date: "Jun-Jul 2025",
    borderColor: "#4169E1",
    gradient: "linear-gradient(135deg, #4169E1, #151030)"
  },
  {
    name: "Technology Strategy & Innovation Virtual Experience (Deloitte)",
    description:
      "Completed a virtual experience program at Deloitte, focusing on technology strategy, digital transformation, and innovation. Gained insights into consulting frameworks and technology-driven business solutions through real-world simulation tasks.",
    tags: [
      { name: "Strategy", color: "text-blue-400" },
      { name: "Innovation", color: "text-green-400" },
      { name: "Deloitte", color: "text-[#86BC25]" },
    ],
    image: "/com/deloitte.jpeg",
    source_code_link: "/com/deloitte.jpeg",
    live_demo_link: "https://www.theforage.com/",
    issuer: "Forage",
    date: "Dec 28, 2025",
    borderColor: "#86BC25",
    gradient: "linear-gradient(135deg, #86BC25, #151030)"
  },
  {
    name: "Problem Solving (Basic)",
    description:
      "Certified by HackerRank for demonstrating proficiency in data structures (arrays, linked lists) and algorithms (sorting, searching). Validates core problem-solving skills and technical competency in algorithmic thinking.",
    tags: [
      { name: "Algorithms", color: "text-blue-400" },
      { name: "Data Structures", color: "text-green-400" },
      { name: "Problem Solving", color: "text-yellow-400" },
    ],
    image: "/com/hackerrank_ps.png",
    source_code_link: "/com/hackerrank_ps.pdf",
    live_demo_link: "https://www.hackerrank.com/certificates/",
    issuer: "HackerRank",
    date: "Jan 31, 2026",
    borderColor: "#2EC866",
    gradient: "linear-gradient(135deg, #2EC866, #151030)"
  }
]

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

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [[page, direction], setPage] = useState([0, 0]);

  const categories = [
    { id: "all", label: "All Certifications", count: certifications.length },
    { id: "cloud", label: "Cloud & Infrastructure", count: certifications.filter(p => p.issuer.includes("Amazon Web Services") || p.issuer.includes("Red Hat") || p.issuer.includes("Google Cloud")).length },
    { id: "internship", label: "Internship", count: certifications.filter(p => p.issuer.includes("Applifiles") || p.issuer.includes("Deloitte") || p.issuer.includes("CodeSoft") || p.issuer.includes("Forage")).length },
    { id: "problem-solving", label: "Problem Solving", count: certifications.filter(p => p.issuer.includes("HackerRank")).length },
    { id: "nptel", label: "NPTEL", count: certifications.filter(p => p.issuer.includes("NPTEL")).length }
  ];

  const filteredCerts = activeCategory === "all"
    ? certifications
    : activeCategory === "cloud"
      ? certifications.filter(p => p.issuer.includes("Amazon Web Services") || p.issuer.includes("Red Hat") || p.issuer.includes("Google Cloud"))
      : activeCategory === "internship"
        ? certifications.filter(p => p.issuer.includes("Applifiles") || p.issuer.includes("Deloitte") || p.issuer.includes("CodeSoft") || p.issuer.includes("Forage"))
      : activeCategory === "problem-solving"
        ? certifications.filter(p => p.issuer.includes("HackerRank"))
      : certifications.filter(p => p.issuer.includes("NPTEL"));

  const currentIndex = ((page % filteredCerts.length) + filteredCerts.length) % filteredCerts.length;
  const currentCert = filteredCerts[currentIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  // Reset page when category changes
  useEffect(() => {
    setPage([0, 0]);
  }, [activeCategory]);

  return (
    <>
      <section id="certifications" className="relative w-full py-20 bg-transparent overflow-hidden px-4 sm:px-6">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-12">
          {/* Header section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 mb-12 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <FaMedal className="text-2xl md:text-3xl text-zinc-500" />
              <p className="text-zinc-500 font-thin lg:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px] uppercase tracking-wider">
                My achievements
              </p>
            </div>
            <h2 className="text-brand font-thin md:text-7xl lg:text-8xl sm:text-[50px] xs:text-[40px] text-[30px]">
              Certifications & <span className="text-zinc-500">Credentials</span>
            </h2>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 lg:gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 border-2 text-xs md:text-sm lg:text-base ${activeCategory === category.id
                  ? "bg-brand/10 text-brand border-brand shadow-lg shadow-brand/10"
                  : "bg-zinc-100/50 text-zinc-500 border-zinc-200 hover:border-brand/50 hover:text-brand"
                  }`}
              >
                {category.label}
                <span className={`ml-2 text-xs ${activeCategory === category.id ? "bg-zinc-200/50" : "bg-zinc-200"} px-2 py-0.5 rounded-full`}>
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Slider Container */}
          <div className="relative w-full max-w-6xl mx-auto">
            {filteredCerts.length > 0 && (
              <div className="relative">
                {/* Navigation Buttons */}
                <button
                  onClick={() => paginate(-1)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 text-zinc-900 hover:bg-zinc-100/50 transition-all duration-300 flex items-center justify-center shadow-md hover:scale-110 -translate-x-2 sm:-translate-x-4 md:-translate-x-6"
                  aria-label="Previous certification"
                >
                  <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={() => paginate(1)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 text-zinc-900 hover:bg-zinc-100/50 transition-all duration-300 flex items-center justify-center shadow-md hover:scale-110 translate-x-2 sm:translate-x-4 md:translate-x-6"
                  aria-label="Next certification"
                >
                  <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Slider Content */}
                <div className="relative h-[700px] sm:h-[550px] md:h-[550px] flex items-center justify-center px-6 sm:px-10 md:px-16 overflow-visible">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={page}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute w-full px-4"
                    >
                      <div className="relative group max-w-[320px] mx-auto sm:max-w-4xl md:max-w-none">
                        <div className="relative bg-white/80 backdrop-blur-lg border border-zinc-200 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden hover:border-zinc-200 transition-all duration-300 shadow-sm">
                          <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
                            {/* Certificate Image Container */}
                            <div
                              className="relative w-full h-[220px] sm:h-[240px] md:w-[350px] md:h-[240px] lg:w-[450px] lg:h-[300px] rounded-lg sm:rounded-xl overflow-hidden border border-zinc-200 flex-shrink-0 shadow-md group/img cursor-pointer"
                              onClick={() => setSelectedCert(currentCert)}
                            >
                              <Image
                                src={currentCert.image}
                                alt={currentCert.name}
                                fill
                                className="object-cover w-full h-full group-hover/img:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, 450px"
                                quality={90}
                              />
                              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                                <div className="text-zinc-900 text-center">
                                  <FaAward className="text-2xl md:text-3xl mb-2 mx-auto" />
                                  <p className="font-semibold text-xs md:text-sm">Click to Expand</p>
                                </div>
                              </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="flex-1 flex flex-col justify-center py-2">
                              <div className="mb-4">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin text-zinc-900 mb-2 group-hover:text-zinc-400 transition-colors leading-tight">
                                  {currentCert.name}
                                </h3>
                                <div className="flex items-center gap-3">
                                  <p className="text-zinc-500 font-semibold text-sm sm:text-base">{currentCert.issuer}</p>
                                  <span className="w-1 h-1 bg-zinc-700 rounded-full hidden sm:block"></span>
                                  <p className="text-zinc-500 text-sm sm:text-base font-medium">{currentCert.date}</p>
                                </div>
                              </div>

                              <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-2xl line-clamp-3 md:line-clamp-none">
                                {currentCert.description}
                              </p>

                              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                {currentCert.tags.map((tag: any) => (
                                  <span
                                    key={tag.name}
                                    className={`px-3 py-1 bg-zinc-100/50 border border-zinc-200 rounded-full text-xs font-semibold ${tag.color}`}
                                  >
                                    #{tag.name}
                                  </span>
                                ))}
                              </div>

                              <div className="flex flex-wrap items-center gap-4">
                                <button
                                  onClick={() => setSelectedCert(currentCert)}
                                  className="w-full sm:w-auto py-3 px-6 bg-brand text-black rounded-lg text-sm md:text-base font-bold hover:bg-brand/80 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,0,0,0.2)]"
                                >
                                  <FaAward />
                                  View Certificate
                                </button>
                                {currentCert.source_code_link && (
                                  <a
                                    href={currentCert.source_code_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto py-3 px-6 bg-zinc-100/50 text-zinc-900 rounded-lg text-sm md:text-base font-bold hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 border border-zinc-200 shadow-sm"
                                  >
                                    <FaFilePdf />
                                    Download PDF
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-10">
                  {filteredCerts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setPage([index, index > currentIndex ? 1 : -1])}
                      className={`transition-all duration-300 rounded-full ${index === currentIndex
                        ? "w-10 h-2.5 bg-brand shadow-[0_0_8px_rgba(255,0,0,0.4)]"
                        : "w-2.5 h-2.5 bg-zinc-200 hover:bg-zinc-300"
                        }`}
                      aria-label={`Go to certification ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {filteredCerts.length === 0 && (
              <div className="text-center py-20 flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-zinc-100/50 rounded-full flex items-center justify-center border border-zinc-200">
                  <FaAward className="text-zinc-500 text-3xl" />
                </div>
                <p className="text-zinc-500 text-xl font-medium">No certifications found in this category.</p>
                <button
                  onClick={() => setActiveCategory("all")}
                  className="px-6 py-2 bg-zinc-100/50 hover:bg-zinc-200 text-zinc-900 rounded-lg transition-colors border border-zinc-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-white/80 border border-zinc-200 rounded-3xl p-8 text-center hover:border-zinc-200 transition-all duration-300 group shadow-sm">
              <div className="text-4xl lg:text-5xl font-black text-zinc-900 mb-3 group-hover:scale-110 transition-transform duration-300">{certifications.length}</div>
              <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs">Total Credentials</p>
            </div>
            <div className="bg-white/80 border border-zinc-200 rounded-3xl p-8 text-center hover:border-zinc-200 transition-all duration-300 group shadow-sm">
              <div className="text-4xl lg:text-5xl font-black text-zinc-900 mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
              <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs">Technology Domains</p>
            </div>
            <div className="bg-white/80 border border-zinc-200 rounded-3xl p-8 text-center hover:border-zinc-200 transition-all duration-300 group shadow-sm">
              <div className="text-4xl lg:text-5xl font-black text-zinc-900 mb-3 group-hover:scale-110 transition-transform duration-300">2025 - 26</div>
              <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs">Achievement Span</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-md p-4"
            onClick={closeCertModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white border border-zinc-200 rounded-2xl max-w-5xl w-full max-h-[90vh] shadow-2xl overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeCertModal}
                className="absolute top-4 right-4 z-[110] p-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-zinc-900 rounded-full transition-all duration-300 border border-red-500/20"
              >
                <FaTimes />
              </button>

              <div className="flex-1 bg-white/50 p-4 md:p-8 flex items-center justify-center">
                <div className="relative w-full h-full aspect-[1.414/1] max-h-[70vh]">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    fill
                    className="object-contain"
                    priority
                    sizes="60vw"
                  />
                </div>
              </div>

              <div className="w-full md:w-[350px] p-8 border-l border-zinc-200 flex flex-col overflow-y-auto">
                <h3 className="text-zinc-900 text-2xl font-bold mb-4">{selectedCert.name}</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">Issuer</p>
                    <p className="text-zinc-900 font-semibold">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">Date Assigned</p>
                    <p className="text-zinc-900 font-semibold">{selectedCert.date}</p>
                  </div>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                  {selectedCert.description}
                </p>

                <div className="flex flex-col gap-3">
                  {selectedCert.source_code_link && (
                    <a
                      href={selectedCert.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-xl font-bold hover:bg-zinc-200 transition-all duration-300 w-full"
                    >
                      <FaFilePdf />
                      Download Certificate
                    </a>
                  )}
                  <button
                    onClick={closeCertModal}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100/50 text-zinc-900 rounded-xl font-bold hover:bg-zinc-200 transition-all duration-300 w-full border border-zinc-200"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Certifications;
