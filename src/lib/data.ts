export const profile = {
  name: "Seenivasan A",
  role: "Software Engineer",
  tagline: "Full-Stack Engineer building AI-assisted, production-grade systems",
  location: "Bangalore, India",
  email: "as17112001@gmail.com",
  github: "https://github.com/Seenivasan1711",
  linkedin: "https://www.linkedin.com/in/seenivasan-a-165a32193/",
  resumeUrl: "/resume/Seenivasan_A_Resume.pdf",
  summary:
    "Software engineer with 3+ years across enterprise SaaS platforms in healthcare-compliance and test-automation domains. Outside of work, I independently design and ship complete, deployed systems end to end — from a multi-tenant GDPR-compliance platform with an AI risk-analysis agent, to a fleet-dispatch SaaS with a multi-agent AI planning engine.",
};

export type Role = {
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    title: "Software Engineer",
    company: "Invictus Data (Client: Viome)",
    dates: "Jun 2025 — Present",
    location: "Bangalore, India",
    bullets: [
      "Own feature delivery across a provider-portal platform — bulk ordering, compliance/TOS versioning, pricing & feature flags — spanning gateway, service, and portal layers.",
      "Own a patient-facing PDF report generation pipeline end to end: dynamic pagination, score visualizations, and index calculations, through multiple rounds of production visual QA.",
      "Extended a shared event-publishing pipeline with new event types as features shipped, and unified user-creation logic across event processors.",
      "Migrated Slack alerting from webhooks to Bot Token auth and resolved a cluster of order-creation and shipping-address reliability issues.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Testsigma Technologies",
    dates: "Sep 2023 — May 2025",
    location: "Bangalore, India",
    bullets: [
      "Developed and optimized core platform features including AI-powered visual regression testing, Figma-based UI validation, and the Export Management module.",
      "Created and deployed a custom React Native Android app (SMS Forwarder) for enterprise automation use cases.",
      "Handled 200+ critical production issues and led multiple root cause analyses, improving product reliability and customer satisfaction.",
    ],
  },
  {
    title: "Developer Intern",
    company: "Testsigma Technologies",
    dates: "May 2022 — Aug 2023",
    location: "Bangalore, India",
    bullets: [
      "Built internal test platforms including a Flight Booking Application (ReactJS + Spring Boot) for validating automation workflows.",
      "Developed Simply Travel mobile apps (Android/iOS) in React Native, integrating APIs, local storage, and UI components.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "DataGuard",
    tagline: "Multi-tenant GDPR compliance & data transparency platform",
    description:
      "A 9-service platform (NestJS, Go, FastAPI, React, Postgres, MongoDB, Redis) that gives end users visibility into how their data is used. Built a SHA-256 tamper-evident audit log, an AI risk-analysis agent that flags anomalies against GDPR articles, and real-time SSE-streamed AI chat with structured response cards. Shipped 3 client SDKs (Go, Python, JS/TS) and deployed live.",
    stack: ["NestJS", "Go", "FastAPI", "React", "PostgreSQL", "MongoDB", "Redis", "AI Agents"],
    links: [{ label: "Source", href: "https://github.com/Seenivasan1711/privacy-auditing" }],
    featured: true,
  },
  {
    name: "FleetOpsX",
    tagline: "Multi-tenant fleet dispatch SaaS with AI route planning",
    description:
      "A fleet-dispatch platform with a 3-phase multi-agent AI planning pipeline: parallel data-collection agents, a LangGraph-orchestrated OR-Tools VRPTW route optimizer, and explain/risk/learning agents — over a Celery, Redis, Postgres, and MongoDB stack, with live WebSocket progress streaming and an in-app planning assistant.",
    stack: ["FastAPI", "LangGraph", "OR-Tools", "React", "Celery", "MongoDB"],
    featured: true,
  },
  {
    name: "AllBlue",
    tagline: "Cargo booking platform for a container-liner shipping client",
    description:
      "A freight operations system covering cargo booking, fleet & route administration, proforma P&L, and a billing module that parses and validates the client's own shipping documents and reproduces their invoice layout exactly.",
    stack: ["React", "FastAPI", "PostgreSQL", "Supabase"],
  },
  {
    name: "LogPose",
    tagline: "Vessel daily-report viewer for maritime operations",
    description:
      "Ingests ship masters' Noon/Departure/Arrival Excel reports via label-based parsing (source formats aren't positionally stable) and maps fields to the Smart Maritime Council's SVD v2.0 standard, replacing a manual spreadsheet-aggregation workflow.",
    stack: ["FastAPI", "SQLAlchemy", "React", "PostgreSQL"],
  },
  {
    name: "xillion",
    tagline: "Self-hosted algorithmic trading platform",
    description:
      "A plugin-architected trading platform — drop a Python file to add a strategy or a broker. Includes a backtest engine, live Zerodha broker integration, paper trading, and a risk manager with a kill switch.",
    stack: ["FastAPI", "SQLAlchemy", "React", "Zerodha API"],
    links: [{ label: "Source", href: "https://github.com/Seenivasan1711/xillion" }],
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"] },
  {
    category: "Backend & AI",
    items: ["FastAPI", "NestJS", "Spring-based Java services", "LangChain / LangGraph", "OR-Tools", "REST APIs", "JWT / OAuth2"],
  },
  { category: "Frontend & Mobile", items: ["React", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "React Native"] },
  { category: "Data & Infra", items: ["PostgreSQL", "MongoDB", "Redis", "Celery", "Docker", "GitHub Actions CI/CD"] },
];

export const achievements = [
  {
    title: "Customer Impact Award",
    meta: "Q2 2024 · Testsigma",
    description:
      "Recognized for resolving 100+ high-impact production and customer issues with timely, effective fixes.",
  },
  {
    title: "2nd Place, AI Hackathon 2024",
    meta: "Testsigma",
    description:
      "Built an AI-powered load-testing tool using OpenAI models for dynamic API test-data generation and criticality-based test prioritization.",
  },
];

export const education = {
  degree: "B.E., Electronics and Communication Engineering",
  school: "Sri Venkateswara College of Engineering",
  location: "Kancheepuram, Tamil Nadu",
  dates: "2019 — 2023",
  detail: "CGPA: 9.3 / 10",
};
