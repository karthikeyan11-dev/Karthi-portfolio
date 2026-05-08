import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpencv,
  SiJupyter,
  SiRedis,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            View
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <>
          {repo === "Coming Soon" ? (
            <Button variant={"outline"} size={"sm"} disabled className="cursor-not-allowed">
              GitHub - Coming Soon
            </Button>
          ) : (
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
        </>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  tsx: {
    title: "TypeScript (TSX)",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  scikitlearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  jupyter: {
    title: "Jupyter",
    bg: "black",
    fg: "white",
    icon: <SiJupyter />,
  },
  c: {
    title: "C",
    bg: "black",
    fg: "white",
    icon: <span className="text-2xl font-bold">C</span>,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xl font-bold">FastAPI</span>,
  },
  jenkins: {
    title: "Jenkins",
    bg: "black",
    fg: "white",
    icon: <span className="text-xl font-bold">Jenkins</span>,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <span className="text-xl font-bold">K8s</span>,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <span className="text-xl font-bold">AWS</span>,
  },
  esp32: {
    title: "ESP32",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  iot: {
    title: "IoT",
    bg: "black",
    fg: "white",
    icon: <span className="text-xl font-bold">IoT</span>,
  },
  ml: {
    title: "Machine Learning",
    bg: "black",
    fg: "white",
    icon: <span className="text-xl font-bold">ML</span>,
  },
  microservices: {
    title: "Microservices",
    bg: "black",
    fg: "white",
    icon: <span className="text-xl font-bold">μS</span>,
  },
  gemini: {
    title: "Gemini AI",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold tracking-tighter">Gemini</span>,
  },
  groq: {
    title: "Groq LLaMA",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold tracking-tighter">Groq</span>,
  },
  bullmq: {
    title: "BullMQ",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold tracking-tighter">BullMQ</span>,
  },
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold tracking-tighter">Zustand</span>,
  },
  celery: {
    title: "Celery",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold tracking-tighter">Celery</span>,
  },
  mlflow: {
    title: "MLflow",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold tracking-tighter">MLflow</span>,
  },
  optuna: {
    title: "Optuna",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold tracking-tighter">Optuna</span>,
  },
  xgboost: {
    title: "XGBoost",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold tracking-tighter">XGBoost</span>,
  },
  shap: {
    title: "SHAP",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold tracking-tighter">SHAP</span>,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "prism-ai",
    category: "AutoML & Intelligent Data Preprocessing Platform",
    title: "Prism-AI",
    description: "Production-grade AutoML platform designed for intelligent preprocessing, automated model training, hyperparameter optimization, explainability analysis, and MLOps-driven monitoring workflows.",
    date: "2025",
    src: "/personal/prism-ai.png",
    screenshots: [],
    live: "",
    github: "https://github.com/karthikeyan11-dev/Prism-AI",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.vite, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.postgres, PROJECT_SKILLS.redis, PROJECT_SKILLS.celery, PROJECT_SKILLS.docker],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Prism-AI is a production-grade AutoML and intelligent data preprocessing platform designed to automate the machine learning lifecycle including data cleaning, feature engineering, model benchmarking, hyperparameter tuning, explainability analysis, and MLOps monitoring workflows.
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            The platform uses a distributed architecture to handle computationally intensive ML operations asynchronously while maintaining a highly responsive frontend experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-4">
            <li>
              <strong>Intelligent Data Preprocessing:</strong> Automatic missing value detection, outlier handling, data type analysis, feature transformation pipelines, and imbalanced data handling.
            </li>
            <li>
              <strong>AutoML Benchmarking:</strong> Multi-model parallel training, automated hyperparameter tuning using Optuna, benchmark comparison workflows, and performance leaderboard generation.
            </li>
            <li>
              <strong>Explainability & Analysis:</strong> SHAP-based explainability, feature importance visualization, model comparison dashboards, and prediction transparency.
            </li>
            <li>
              <strong>Distributed Task Processing:</strong> Celery-based background ML jobs with Redis queue orchestration for non-blocking asynchronous workflows.
            </li>
            <li>
              <strong>MLOps Integration:</strong> MLflow experiment tracking, artifact management, model versioning, and drift analysis.
            </li>
            <li>
              <strong>Production Inference Pipeline:</strong> Unified transformation pipelines and real-time prediction APIs with portable deployment packaging.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Workflow</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-4">
            <li><strong>Data Ingestion:</strong> Users upload datasets through the frontend upload workflow supporting CSV and Excel formats.</li>
            <li><strong>Preprocessing Engine:</strong> The backend preprocessing services automatically analyze dataset quality and apply intelligent transformations.</li>
            <li><strong>Training Pipeline:</strong> Model training tasks are distributed through Celery workers while Optuna performs automated hyperparameter optimization.</li>
            <li><strong>Experiment Tracking:</strong> MLflow logs metrics, artifacts, and training history in real time.</li>
            <li><strong>Explainability:</strong> SHAP-based analysis provides interpretable model insights and feature contribution explanations.</li>
            <li><strong>Production Deployment:</strong> Unified pipelines package preprocessing and model logic for scalable inference APIs and monitoring workflows.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <TypographyP className="font-mono mb-4">
            Key architectural components include:
          </TypographyP>
          <ul className="list-disc ml-6 font-mono">
            <li>API layer for routing and REST endpoints (FastAPI)</li>
            <li>Services layer containing ML logic and orchestration</li>
            <li>Celery task workers for distributed processing</li>
            <li>Redis queue infrastructure</li>
            <li>Docker-based multi-container orchestration</li>
            <li>MLflow experiment management system</li>
          </ul>
        </div>
      );
    },
  },
  { // CloudShell Lab
    id: "cloudshell-lab",
    category: "DevOps & Cloud",
    title: "CloudShell Lab",
    description: "Designed and built a custom cloud-native lab environment for provisioning on-demand, browser-based cloud shells using K8s.",
    date: "2025",
    src: "/assets/cloud.webp",
    screenshots: [],
    live: "https://www.linkedin.com/posts/karthikeyan-b-613539308_aws-cloudcomputing-awscertified-activity-7437358626337533953-k2Dv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5jry8BHksmUcTmvZInbeJPbRfc93ss_5Y",
    github: "https://www.linkedin.com/posts/karthikeyan-b-613539308_aws-cloudcomputing-awscertified-activity-7437358626337533953-k2Dv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5jry8BHksmUcTmvZInbeJPbRfc93ss_5Y",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.docker, PROJECT_SKILLS.kubernetes, PROJECT_SKILLS.aws, PROJECT_SKILLS.microservices],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Designed and built a custom cloud-native lab environment for practitioners to provision on-demand,
            browser-based cloud shells. The platform leverages Docker and Kubernetes to orchestrate pods for
            popular databases and tools like Redis, MongoDB, and MySQL, with integrated auto-scaling and
            robust session management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Achievements</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Built a private cloud lab for on-demand practice environments</li>
            <li>Orchestrated Redis, MongoDB, and MySQL instances using Kubernetes pods</li>
            <li>Implemented dynamic auto-scaling to handle concurrent practice sessions</li>
            <li>Integrated session management for persistent state across browser-based terminals</li>
            <li>Reduced environment setup time for developers by 90%</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "careerlens-ai",
    category: "AI Resume Analysis & Job Matching Platform",
    title: "CareerLens AI Platform",
    description: "Production-grade AI platform for resume analysis, ATS scoring, semantic job matching, and skill gap detection using LLMs, embeddings, and scalable asynchronous processing.",
    date: "2024",
    src: "/personal/careerlens.png",
    screenshots: [],
    live: "",
    github: "https://github.com/karthikeyan11-dev/AI_Resume_Analyser",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.zustand, PROJECT_SKILLS.reactQuery],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.postgres, PROJECT_SKILLS.redis, PROJECT_SKILLS.gemini, PROJECT_SKILLS.groq, PROJECT_SKILLS.bullmq, PROJECT_SKILLS.docker],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            CareerLens AI Platform is a production-grade AI-powered recruitment system designed to automate resume analysis, ATS scoring, semantic job matching, and skill-gap detection using advanced LLMs, vector embeddings, and scalable asynchronous processing pipelines.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-4">
            <li>
              <strong>AI Resume Processing Engine:</strong> PDF resume upload system, OCR support for scanned resumes, automated skill and experience extraction, and vector embedding generation.
            </li>
            <li>
              <strong>ATS Compatibility Scoring:</strong> AI-driven ATS evaluation, resume improvement suggestions, and a compatibility scoring system.
            </li>
            <li>
              <strong>Semantic Job Matching:</strong> Embedding-based candidate-job similarity using cosine similarity matching and an intelligent ranking system.
            </li>
            <li>
              <strong>Skill Gap Analysis:</strong> Missing skill detection, personalized learning recommendations, and AI-powered career guidance.
            </li>
            <li>
              <strong>Recruiter Job Management:</strong> Job posting workflows, automated requirement extraction, and intelligent candidate matching.
            </li>
            <li>
              <strong>Real-Time Processing Workflow:</strong> BullMQ asynchronous processing, live status updates, and a queue-based scalable architecture.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Workflow</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-4">
            <li><strong>Authentication:</strong> Users authenticate using JWT-based role-aware authentication workflows.</li>
            <li><strong>Resume Pipeline:</strong> Uploaded resumes are queued through BullMQ and processed asynchronously for extraction, AI analysis, embeddings, and ATS scoring.</li>
            <li><strong>Job Analysis:</strong> Recruiter job descriptions are analyzed using AI-generated embeddings and semantic processing.</li>
            <li><strong>Matching Engine:</strong> Cosine similarity compares candidate vectors against job vectors to identify optimal matches and skill gaps.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Database Architecture</TypographyH3>
          <TypographyP className="font-mono mb-4">
            Core relational schema includes:
          </TypographyP>
          <ul className="list-disc ml-6 font-mono">
            <li>users</li>
            <li>resumes</li>
            <li>resume_analyses</li>
            <li>jobs</li>
            <li>job_analyses</li>
            <li>match_scores</li>
            <li>skill_gaps</li>
          </ul>
          <TypographyP className="font-mono mt-4">
            Designed for scalable AI-powered recruitment workflows and optimized query performance.
          </TypographyP>
        </div>
      );
    },
  },
  { // Atmospheric Water Generator (AWG)
    id: "awg",
    category: "IoT & Embedded Systems",
    title: "Atmospheric Water Generator (AWG)",
    description: "Designed IoT-enabled device to extract clean drinking water from humidity using Peltier cooling and AI-based quality monitoring.",
    date: "2024",
    src: "/personal/awg.webp",
    screenshots: [],
    live: "https://www.linkedin.com/feed/update/urn:li:activity:7401172181214416897/",
    github: "https://github.com/Ramjirv32/AWG-MAIN",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.esp32, PROJECT_SKILLS.python, PROJECT_SKILLS.iot, PROJECT_SKILLS.ml],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Designed IoT-enabled device to extract clean drinking water from atmospheric humidity using Peltier
            thermoelectric cooling. Integrated ESP32 microcontroller with DHT22, Ultrasonic, pH, TDS sensors
            for real-time monitoring and AI-based predictions. Built web/mobile dashboard for performance
            analytics, water quality tracking, and emergency alerts with UV purification.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Peltier thermoelectric cooling for water extraction</li>
            <li>ESP32 with multiple sensors (DHT22, Ultrasonic, pH, TDS)</li>
            <li>Real-time monitoring and AI predictions</li>
            <li>Web/mobile dashboard for analytics</li>
            <li>UV purification and water quality tracking</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
