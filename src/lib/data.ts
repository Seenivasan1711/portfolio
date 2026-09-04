export const profile = {
  name: "Seenivasan A",
  role: "Senior Software Engineer",
  tagline: "Full-Stack, Java & AI Systems Engineer",
  location: "Bangalore, India",
  email: "as17112001@gmail.com",
  github: "https://github.com/Seenivasan1711",
  linkedin: "https://www.linkedin.com/in/seenivasan-a-165a32193/",
  resumeUrl: "/resume/Seenivasan_A_Resume.pdf",
  capabilities: ["Full-Stack", "Backend", "AI / Agentic Systems", "DevOps"],
  summary:
    "Full-stack engineer with 4+ years building distributed, scalable, reliable systems in enterprise SaaS — Java and React day to day, Python for the AI work. Shipped GenAI features to production on Google Gemini, built multi-agent orchestration with LangGraph, an LLM risk-analysis agent, and streaming AI chat. Now running release management, cross-team coordination and mentoring alongside a full delivery load.",
  lookingFor:
    "Senior/Lead Software Engineer roles — full-stack, Java and AI systems. Open to good opportunities, wherever they come from.",
};

export const stats: { value: string; label: string }[] = [
  { value: "4+ yrs", label: "Professional software engineering" },
  { value: "4", label: "AI-powered systems built" },
  { value: "100+", label: "Provider organizations served (Viome)" },
  { value: "9", label: "Services in my largest solo build" },
];

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
    company: "Viome",
    dates: "Jun 2025 — Present",
    location: "Bangalore, India",
    bullets: [
      "Own release management for the team on a weekly sprint cadence — release notes and documentation on Confluence, cross-team task coordination via Jira — while mentoring and reviewing code for a developer intern, and carrying a full feature load.",
      "Deliver features across a provider-portal platform — bulk ordering, compliance/TOS versioning, pricing & feature flags — spanning gateway, service, and portal layers across 13 microservices serving 100+ provider organizations.",
      "Own a patient-facing PDF report generation pipeline end to end as an Azure Function. Identified a concurrency bottleneck — a cross-instance race condition causing lost writes under concurrent updates — and rebuilt it from a pessimistic lock into a lock-free atomic update.",
      "Diagnosed a protocol-version mismatch between environments in a message-queue consumer, silently misconfigured by a library default, and resolved it — the consumer stopped failing intermittently.",
      "Noticed from logs, not a reported incident, that a scheduled job was firing on every replica instead of once. Fixed it with ShedLock for single-run guarantees, adding retry-tracked dispatch metadata and a version-gated rollout flag.",
      "Extended a shared event-publishing pipeline as new features shipped — bulk orders, online agreements, sample reissue, result releases — and unified user-creation logic across multiple event processors.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Testsigma Technologies",
    dates: "Sep 2023 — May 2025",
    location: "Bangalore, India",
    bullets: [
      "Shipped a GenAI visual-regression-testing feature on Google Gemini 2.0 Flash — built the backend AI service and a Python suggestion engine using prompt chaining, gated to paid-tier organizations with per-org configuration, and integrated both into the product's AI Insights UI.",
      "Owned core parts of the Java and Spring Boot test-execution engine — GraphQL/REST API testing and cross-cloud device support through BrowserStack, SauceLabs and LambdaTest — and built infinite-scroll result views and TypeSense-backed search on the Redux-driven React/TypeScript frontend as ownership moved off a legacy Angular app.",
      "Cut recurring production defects by introducing Redis-backed distributed locking for visual-regression result writes, and ran Helm-based CI/CD release deployments across 5 platform services.",
    ],
  },
  {
    title: "Graduate Trainee",
    company: "Testsigma Technologies",
    dates: "May 2022 — Aug 2023",
    location: "Bangalore, India",
    bullets: [
      "Built a full-stack flight-booking demo app end to end: React Native with Spring Boot and MySQL, JWT auth, and dynamic multi-city search through JPA specifications. Testsigma adopted it as its reference app for product demos and tutorials.",
      "Developed the Simply Travel mobile apps for Android and iOS in React Native, integrating APIs, local storage and UI components.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights?: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
  status?: string;
  /** Path under /public, e.g. "/projects/dataguard.png". Leave undefined until a real screenshot is provided. */
  image?: string;
};

export const projects: Project[] = [
  {
    name: "DataGuard",
    tagline: "Multi-tenant GDPR compliance & data transparency platform",
    description:
      "A 9-service platform (NestJS, Go, FastAPI, React, Postgres, MongoDB, Redis) that gives end users visibility into how an app uses their data internally — something even large platforms rarely expose. Two demo tenant apps send data-access events to a central audit service via SDK; users see exactly how their data was used and can act on it.",
    highlights: [
      "SHA-256 hash-chained, tamper-evident audit log (GDPR Art. 30) — every event cryptographically linked to the last",
      "AI risk-analysis agent runs on a schedule, reads recent events, flags anomalies, and cites the specific GDPR article",
      "Real-time AI chat over SSE (not EventSource — needed POST + auth headers) with structured response cards: chain verification, week-over-week comparisons, drafted GDPR letters",
      "Self-service GDPR rights: async export (Art. 20), hard deletion with an evidence hash (Art. 17), granular consent management (Art. 7)",
      "HMAC-signed webhooks, a 72-hour breach-simulation countdown (Art. 33), and a composite privacy health score",
      "3 client SDKs (Go, Python, JS/TS) so any tenant app can integrate in a couple of lines",
    ],
    stack: ["NestJS", "Go", "FastAPI", "React", "PostgreSQL", "MongoDB", "Redis", "AI Agents"],
    links: [{ label: "Source", href: "https://github.com/Seenivasan1711/privacy-auditing" }],
    featured: true,
  },
  {
    name: "FleetOpsX",
    tagline: "Multi-tenant fleet dispatch SaaS with AI route planning",
    description:
      "A fleet-dispatch platform where route planning is handed to a 3-phase multi-agent pipeline instead of a human dispatcher working from intuition. Built the whole stack — auth, data model, planning engine, and UI — solo.",
    highlights: [
      "Phase 1: parallel Celery agents collect orders, drivers, vehicles, and demand forecasts",
      "Phase 2: LangGraph orchestrates constraint validation → an OR-Tools VRPTW solver → baseline computation, with a rule-based fallback if the optimizer fails",
      "Phase 3: parallel explain/risk-scoring/learning agents annotate the plan before it reaches a human",
      "Live WebSocket progress streaming during a planning run, plus an in-app assistant that can answer questions and move orders between drivers via tool-calling",
      "Multi-tenant JWT auth with a superadmin impersonation header, and per-tenant LLM API keys encrypted at rest",
    ],
    stack: ["FastAPI", "LangGraph", "OR-Tools", "React", "Celery", "MongoDB"],
    featured: true,
  },
  {
    name: "AllBlue",
    tagline: "Cargo booking platform for a container-liner shipping client",
    description:
      "A freight operations system built for a real container-liner shipping client, covering the full booking lifecycle: service → vessel → port rotation → loading sheet, plus fleet/route administration and proforma P&L.",
    highlights: [
      "JWT auth with 3 distinct roles (Liner Team, Booking Agent, Finance), each scoped to what they should see",
      "A billing module that parses and validates the client's own shipping documents and reproduces their invoice layout exactly",
      "Deliberately region-pinned the backend to Singapore to sit beside its Supabase database — an unpinned Oregon default would have added ~700–900ms of pure trans-Pacific latency per request",
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "Supabase"],
  },
  {
    name: "LogPose",
    tagline: "Vessel daily-report viewer",
    description:
      "Ships' masters file Noon/Departure/Arrival reports as Excel workbooks with a manual spreadsheet-aggregation step behind them. LogPose ingests those reports directly and replaces that process with a clean, auditable, read-only view.",
    highlights: [
      "Parser matches on cell labels, never fixed positions — the client's own source workbooks aren't row-stable between sheets",
      "Preserves contradictions between report templates rather than silently normalizing them, surfaced on a dedicated Data Quality screen",
      "Fields mapped to the Smart Maritime Council's Standardised Vessel Dataset (SVD) v2.0, so future regulatory export (MRV/IMO DCS/CII) is a standards export, not a bespoke one",
    ],
    stack: ["FastAPI", "SQLAlchemy", "React", "PostgreSQL"],
  },
  {
    name: "xillion",
    tagline: "Self-hosted algorithmic trading platform",
    description:
      "A plugin-architected trading platform for my own trading account — drop a Python file to add a strategy, drop a Python file to add a broker, and it appears in the dashboard on reload.",
    highlights: [
      "Backtest engine with a CLI, run against historical OHLCV data with configurable slippage and capital",
      "Live Zerodha broker integration with a mandatory paper-trading soak before anything goes live",
      "Risk manager with a hard kill switch, and an SEBI order-rate limiter",
    ],
    stack: ["FastAPI", "SQLAlchemy", "React", "Zerodha API"],
    links: [{ label: "Source", href: "https://github.com/Seenivasan1711/xillion" }],
  },
  {
    name: "Time2Crack",
    tagline: "AI-assisted e-commerce platform",
    description:
      "A full-stack e-commerce platform built end to end — product concept from a friend, engineering solo. Kafka-scheduled delivery, Redis caching, and an OpenAI-backed shopping assistant sit behind a production-shaped React frontend.",
    highlights: [
      "Node/Express backend with JWT auth, product catalog, and cart/order management on PostgreSQL + Sequelize",
      "Kafka-driven scheduled delivery system, decoupled from the request path",
      "OpenAI-backed FAQ and product-recommendation features",
      "Dockerized with CI/CD via GitHub Actions",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Kafka", "React", "TypeScript"],
    links: [{ label: "Source", href: "https://github.com/Seenivasan1711/Time2Crack" }],
  },
  {
    name: "Nebula",
    tagline: "Personal multi-agent AI system (in progress)",
    description:
      "A central FastAPI router that dispatches messages to independent per-domain agent services by intent, starting with a personal Forex-scalping assistant running a local LLM (Ollama + Qwen3:8b) via FastAPI + LangChain.",
    stack: ["FastAPI", "LangChain", "Ollama", "PostgreSQL"],
    status: "In progress",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "AI & Agentic Systems",
    items: ["LangChain / LangGraph", "OR-Tools", "Claude / Gemini / OpenAI", "LLM Risk Analysis", "SSE-Streamed AI Chat", "Qdrant"],
  },
  {
    category: "Backend",
    items: ["Java", "Python", "Node.js / TypeScript", "FastAPI", "NestJS", "Spring-based services", "REST APIs", "GraphQL", "JWT / OAuth2"],
  },
  { category: "Frontend & Mobile", items: ["React", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "React Native", "Appium"] },
  {
    category: "DevOps & Data",
    items: ["Docker", "Docker Compose", "AWS S3", "Azure Functions", "Render", "GitHub Actions CI/CD", "ShedLock", "Agile/Scrum", "TypeSense", "Kibana/Elastic (log analysis)", "PostgreSQL", "MongoDB", "Redis", "Celery"],
  },
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
  location: "Chennai, Tamil Nadu",
  dates: "2019 — 2023",
  detail: "CGPA: 9.3 / 10",
};

export const certifications: string[] = [
  "Introduction to Agent Skills",
  "Introduction to Model Context Protocol",
  "Claude Code in Action",
  "Building with the Claude API",
];
