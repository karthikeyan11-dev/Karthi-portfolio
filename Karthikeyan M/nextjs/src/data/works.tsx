import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"} className="bg-emerald-500 hover:bg-emerald-600 text-white border-none flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Live
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </Link>
      {repo && repo !== "Coming Soon" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Work = {
  id: string;
  title: string;
  subtitle?: string;
  role?: string;
  company: string;
  duration: string;
  description: string;
  image: string;
  skills: string[];
  live: string;
  github?: string;
  current?: boolean;
  type: string;
  content: ReactNode;
  techStack?: {
    frontend: string[];
    backend: string[];
  };
};

const works: Work[] = [
  {
    id: "genniral",
    title: "GenNiral Association Club Website",
    role: "Full Stack developer",
    subtitle: "Event & Association Management Platform",
    company: "GenNiral Association",
    duration: "Oct 2025 - Nov 2025",
    description: "Built a production-grade Event and Association Management System designed for managing campus associations, clubs, leadership workflows, and event lifecycles through a scalable full-stack architecture.",
    image: "/personal/genniral_profile.png",
    skills: ["Node.js", "Express.js", "MongoDB", "Redis", "React 19", "TypeScript", "Tailwind CSS"],
    live: "https://geniral.vercel.app/",
    github: "https://github.com/geniralkpriet-07/Geniral",
    type: "project",
    techStack: {
        frontend: [
            "React 19", "TypeScript", "Vite 7", "Tailwind CSS", "Ant Design", "Framer Motion", "React Router", "Swiper", "React Slick"
        ],
        backend: [
            "Node.js", "Express.js", "MongoDB", "Mongoose", "Upstash Redis", "JWT", "Bcrypt.js", "Nodemailer"
        ]
    },
    content: (
        <div>
            <TypographyP className="font-mono">
                GenNiral is a production-grade Event and Association Management System designed to coordinate activities between administrative bodies, student associations, and campus clubs using a scalable full-stack architecture.
            </TypographyP>
            <ProjectsLinks live="https://geniral.vercel.app/" repo="https://github.com/geniralkpriet-07/Geniral" />
            
            <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
            <ul className="list-disc ml-6 font-mono space-y-4">
                <li>
                    <strong>Role-Based Access Control (RBAC):</strong> Multi-level hierarchical role management, granular permissions, leadership and club-based authorization.
                </li>
                <li>
                    <strong>Event Lifecycle Management:</strong> Event drafting and approval workflows, public event publishing, registration tracking, and participant management.
                </li>
                <li>
                    <strong>Dashboard Ecosystem:</strong> Dedicated dashboards for Super Admin, Leadership, and Club Leaders.
                </li>
                <li>
                    <strong>Authentication & Security:</strong> JWT Authentication, secure middleware protection, OTP-based password reset system, rate limiting, and Helmet security.
                </li>
                <li>
                    <strong>Performance Optimization:</strong> Redis-based caching, optimized event retrieval, and scalable backend architecture.
                </li>
            </ul>

            <TypographyH3 className="my-4 mt-8">Working Flow</TypographyH3>
            <ul className="list-disc ml-6 font-mono space-y-2">
                <li><strong>Frontend:</strong> React frontend communicates with the Express backend through authenticated API requests.</li>
                <li><strong>Backend:</strong> Express controllers process business logic and interact with MongoDB through Mongoose models.</li>
                <li><strong>Caching:</strong> Redis caching is used for frequently accessed event and registration data.</li>
                <li><strong>Notifications:</strong> Automated email notifications are triggered for registrations and approval workflows.</li>
            </ul>
        </div>
    )
  },
  {
    id: "campus-os",
    title: "CampusOS",
    role: "Full Stack Developer",
    subtitle: "AI-Powered Smart Campus Management Platform",
    company: "CampusOS",
    duration: "Jan 2024 - Present",
    description: "AI-powered Smart Campus Management Platform designed to manage campus workflows, hostel operations, digital gatepass systems, grievances, resources, analytics, and intelligent automation through a scalable full-stack architecture.",
    image: "/personal/campusos.png",
    skills: ["Next.js", "Node.js", "PostgreSQL", "Redis", "GROQ LLaMA"],
    live: "https://campus-os-phi.vercel.app/",
    github: "https://github.com/karthikeyan11-dev/CampusOS",
    type: "project",
    techStack: {
        frontend: [
            "Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "Radix UI", "Zustand", "Framer Motion", "Axios"
        ],
        backend: [
            "Node.js", "Express.js", "PostgreSQL", "Upstash Redis", "Groq SDK (Llama/Mixtral)", "JWT", "bcryptjs", "Firebase Admin"
        ]
    },
    content: (
        <div>
            <TypographyP className="font-mono">
                CampusOS is a scalable Smart Campus Management Platform built with a modern full-stack architecture designed to streamline campus administration, digital services, hostel management, gatepass workflows, grievances, analytics, and intelligent automation.
            </TypographyP>
            <ProjectsLinks live="https://campus-os-phi.vercel.app/" repo="https://github.com/karthikeyan11-dev/CampusOS" />
            
            <TypographyH3 className="my-4 mt-8">Core Modules</TypographyH3>
            <ul className="list-disc ml-6 font-mono space-y-4">
                <li>
                    <strong>Identity & Access Management:</strong> RBAC system, Faculty and student management, Secure authentication workflow.
                </li>
                <li>
                    <strong>Digital Gatepass System:</strong> Approval-based gatepass workflow, QR verification, Security tracking and logs.
                </li>
                <li>
                    <strong>Smart Hostel Management:</strong> Room allocation system, Occupancy tracking, Warden dashboard.
                </li>
                <li>
                    <strong>Resource & Complaint Management:</strong> Campus resource booking, Anonymous grievance system.
                </li>
                <li>
                    <strong>Smart Services:</strong> Lost & Found platform, Intelligent notification system, Campus analytics.
                </li>
                <li>
                    <strong>AI Services:</strong> Groq-powered intelligent automation, Smart categorization, Predictive analytics, Automated notifications.
                </li>
            </ul>

            <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
            <ul className="list-disc ml-6 font-mono space-y-2">
                <li>Modular monorepo-style architecture</li>
                <li>PostgreSQL migration system</li>
                <li>Audit logging middleware</li>
                <li>Redis caching layer</li>
                <li>API rate limiting</li>
                <li>Secure JWT authentication</li>
                <li>Scalable domain-based module structure</li>
            </ul>

            <TypographyH3 className="my-4 mt-8">Workflow</TypographyH3>
            <ul className="list-disc ml-6 font-mono space-y-4">
                <li><strong>Frontend:</strong> Next.js frontend communicates with Express APIs through authenticated Axios requests.</li>
                <li><strong>Backend:</strong> Express controllers process business workflows and interact with PostgreSQL through modular service layers.</li>
                <li><strong>Caching & Realtime:</strong> Redis caching improves response speed and scalability.</li>
                <li><strong>AI Layer:</strong> Groq LLaMA/Mixtral models power intelligent automation and smart campus services.</li>
            </ul>
        </div>
    )
  }
];

export default works;
