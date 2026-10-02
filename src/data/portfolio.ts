export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  links?: { label: string; url: string }[];
  /** Path under /public, e.g. "/images/projects/foo.webp". */
  image?: string;
}

export interface Project {
  title: string;
  tech: string;
  description: string[];
  link?: string;
  /** Path under /public, e.g. "/images/projects/foo.webp". */
  image?: string;
}

export interface ResearchProject {
  title: string;
  tech: string;
  summary: string;
  link: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export interface Leadership {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    description: string;
  };
  about: string[];
  education: Education[];
  leadership: Leadership[];
  experience: Experience[];
  projects: Project[];
  research: ResearchProject[];
  skills: SkillCategory[];
  contact: {
    email: string;
    phone: string;
    socials: SocialLink[];
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Neelansh Khare",
    title: "Software Engineer & Backend Specialist",
    description:
      "Software Engineer specializing in backend systems, distributed infrastructure, and product engineering. Experienced in building production-grade automation systems, scalable APIs, and data pipelines.",
  },
  about: [
    "I am a Software Engineer at Campfire (YC S23), where I work as a fullstack engineer on the core application team, specializing in product and distributed systems engineering. Previously, I built backend systems and distributed infrastructure at Polaris Wireless, and worked as a Software Engineer Co-op at the University of California, Irvine, where I developed automation systems and full-stack applications.",
    "My technical expertise spans Python, Java, and C++, with a strong focus on building scalable APIs, data pipelines, and orchestration tooling. I have experience with technologies like Hadoop, Spark, Kafka, and Kubernetes in enterprise environments.",
    "I am also passionate about AI and Machine Learning. As an Undergraduate Researcher at the He Lab, I architected deep learning pipelines for scientific applications. I continue that work through independent research on retrieval-augmented generation, studying retrieval saturation at scale and reproducing the \"Lost in the Middle\" long-context effect. I enjoy working on projects that bridge the gap between complex infrastructure and intelligent systems.",
    "Outside of work, I am an open source contributor, most notably to Letta, the open source framework for building stateful LLM agents.",
    "Beyond coding, I am an active community leader, having served as President of the Indian Subcontinental Club and contributed to organizations like ICSSC and Legacy Robotics.",
  ],
  education: [
    {
      school: "University of California, Irvine",
      degree: "B.S. Computer Science",
      period: "2021 - 2025",
      location: "Irvine, CA",
    },
  ],
  leadership: [
    {
      role: "President",
      organization: "Indian Subcontinental Club",
      period: "2023 - 2024",
      description: "Led the largest cultural organization on campus, managing a board of 30 members and organizing events for 500+ attendees.",
    },
    {
      role: "Software Developer",
      organization: "ICSSC",
      period: "2022 - 2024",
      description: "Contributed to the development of student-focused applications and tools.",
    },
    {
      role: "Software Developer",
      organization: "Legacy Robotics",
      period: "2021 - 2023",
      description: "Computer Vision developer on a competitive robotics team",
    },
    {
      role: "Data & Analytics",
      organization: "Sigma Pi",
      period: "2023 - 2025",
      description: "Analyzed fraternity data to optimize recruitment, event planning, and finances.",
    },
    {
      role: "Volunteer",
      organization: "SF Civic Tech",
      period: "2025 - Present",
      description: "Helped with the SF Safehome project website and backend.",
    }
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Campfire (YC S23)",
      period: "June 2026 - Present",
      description: [
        "Fullstack Engineer on the core application team.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Polaris Wireless",
      period: "Sept 2025 - June 2026",
      description: [
        "Built Python/Bash CLI orchestration tooling to deploy Hadoop, HBase, Spark, ZK, and ClickHouse across multi-VM RHEL clusters, reducing setup time by 97% from 7 days to 4 hours.",
        "Designed topology-aware configuration generation and automated bootstrap/validation pipelines enabling reproducible cluster bring-up across client environments.",
        "Implemented fault-tolerant, role-aware health checks and SSH-based orchestration to detect and recover from partial cluster failures.",
      ],
    },
    {
      title: "Founding Engineer",
      company: "Neuracities",
      period: "Aug 2025 - Nov 2025",
      description: [
        "Took ownership of infrastructure in a 2-person engineering team, driving core product development.",
        "Constructed Python-based scraping pipeline, collecting data from 100+ government sources daily.",
        "Integrated data into an LLM-powered RAG system, with ranking logic to surface high-relevance RFPs.",
        "Developed FastAPI + React fullstack dashboard, enabling real-time visualization of municipal datasets.",
      ],
      links: [
        { label: "RFP Discovery (live demo)", url: "https://neelansh-khare.github.io/rfp-discovery-demo/" },
        { label: "RFP Ranking System", url: "https://github.com/Neelansh-Khare/rfp-fullstack-project" },
        { label: "Multimodal RFP RAG", url: "https://github.com/Neelansh-Khare/rfp-rag-system" },
      ],
      image: "/images/projects/rfp-discovery-demo.webp",
    },
    {
      title: "Software Engineer Co-op",
      company: "University of California, Irvine",
      period: "Jun 2022 - Jun 2025",
      description: [
        "Implemented Java/Gradle automation system; Reduced manual reporting workload by 90% across 4 teams.",
        "Designed RESTful API endpoints in Java, enabling fullstack integration, supporting 500+ weekly users.",
        "Built a web scraping pipeline that centralized 10000+ documents, cutting developer onboarding time by 30%.",
        "Integrated React/Playwright test framework in CI/CD, lowering regression defects by 15%.",
        "Created SQL/Java data anonymization tool for FERPA compliance, securing 30,000+ student records.",
      ],
    },
    {
      title: "Undergraduate Researcher",
      company: "He Lab, UC Irvine",
      period: "Jan 2024 - Dec 2024",
      description: [
        "Architected an end-to-end deep learning pipeline for nanoparticle motion prediction, including dataset preparation and release.",
        "Trained CNN model for microscopic image analysis, achieving 91% accuracy (a 4% increase) on 9000+ samples.",
        "Developed synthetic data generation pipeline to create 10,000+ labeled images, enabling robust training.",
      ],
      links: [
        { label: "Nanoparticle image analysis pipeline", url: "https://github.com/Neelansh-Khare/research-scripts-particle-prediction" },
      ],
      image: "/images/projects/research-scripts-particle-prediction.webp",
    },
  ],
  projects: [
    {
      title: "Harbor",
      tech: "Next.js, React, TypeScript, PostgreSQL, Prisma, Plaid, LLMs",
      description: [
        "Personal finance app that syncs bank transactions via Plaid and imports CSVs, statement PDFs, and Google Sheets through a column-mapping wizard.",
        "Categorizes spending with user rules or an optional LLM (OpenRouter, Gemini, or local Ollama), which also extracts transactions from uploaded statements.",
        "Envelope budgeting with rollover, safe-to-spend and overspending alerts, plus subscriptions, net worth, debt payoff, goals, and an income-to-spending Sankey view.",
      ],
      link: "https://github.com/Neelansh-Khare/auto-budget",
      image: "/images/projects/auto-budget.webp",
    },
    {
      title: "Prism",
      tech: "FastAPI, Next.js, TypeScript, PostgreSQL, Ollama, LaTeX",
      description: [
        "Full-stack job search workspace: discover roles across JSearch, Greenhouse, and Lever, then track applications on a drag-and-drop Kanban board with funnel analytics.",
        "Local-LLM resume tailoring, ATS scoring, job match scores, and outreach email generation, with LaTeX-rendered PDF resumes.",
        "JWT auth with per-user data isolation, Gmail sync for inbox status updates, a LinkedIn browser extension for saving jobs, and Docker + Postgres deployment.",
      ],
      link: "https://github.com/Neelansh-Khare/JobSearchAI",
      image: "/images/projects/jobsearchai.webp",
    },
    {
      title: "Quorum",
      tech: "Next.js, TypeScript, FastAPI, SQLite, Ollama, Docker",
      description: [
        "Personal control plane where a multi-agent AI council (Skeptic, Optimizer, Privacy) deliberates over candidate plans and the user casts the deciding vote.",
        "Unifies 8 connectors (Gmail, Calendar, Notion, Obsidian, Slack, Linear, GitHub, Todoist) into a SQLite-backed knowledge graph used for graph-augmented retrieval.",
        "Every write is approval-gated, provenance-tracked, audited, and reversible where possible; runs fully local on Ollama with schema-constrained output.",
      ],
      link: "https://github.com/Neelansh-Khare/life-os",
      image: "/images/projects/life-os.webp",
    },
    {
      title: "Lattice",
      tech: "React, TypeScript, Supabase, Edge Functions, OpenAI, Ollama",
      description: [
        "Research collaboration network connecting students, labs, and departments through RA and collaboration posts, researcher search, applications, messaging, and a ranked grant feed.",
        "AI lab assistant and explainable match scoring (methods, fields, LLM re-rank, timeline fit) on Supabase Edge Functions, plus cold-email drafting and paper chat.",
        "Production-minded backend with row-level security, notification and email outbox jobs, department roles, interview scheduling, and CI covering typecheck, lint, and RLS tests.",
      ],
      link: "https://github.com/Neelansh-Khare/academia-hub",
      image: "/images/projects/academia-hub.webp",
    },
    {
      title: "Moltbot",
      tech: "Python, FastAPI, Kalshi API, Ollama, SQLite",
      description: [
        "Always-on agent running a deterministic trading engine for Kalshi prediction markets, with OpenClaw as its messaging gateway.",
        "Tiered market-monitoring loops and local-LLM news scoring, with hard risk gates: exposure and daily-loss budgets, a kill switch, and explicit live-trading acknowledgement.",
        "Paper (shadow) mode with fill simulation and fee-accurate PnL, a snapshot-replay backtester, and a FastAPI operator console for positions, orders, decisions, and alerts.",
      ],
      link: "https://github.com/Neelansh-Khare/openclawtrading",
      image: "/images/projects/openclawtrading.webp",
    },
    {
      title: "Health",
      tech: "React Native, Expo, TypeScript, SQLite, Vitest",
      description: [
        "Local-first iOS/Android app combining a training log and nutrition diary to surface insights that need both, like strength on a cut or the energy cost of training.",
        "Framework-free TypeScript domain core with SQLite as the source of truth, versioned migrations, and a USDA food-ingestion pipeline producing an FTS5 search database.",
        "Kalman-filter energy model that turns intake and weigh-ins into trend weight, adaptive expenditure with uncertainty, and guarded calorie and macro targets.",
      ],
      link: "https://github.com/Neelansh-Khare/personal-health-app",
      image: "/images/projects/personal-health-app.webp",
    },
    {
      title: "content-gen",
      tech: "Python, Ollama, SQLite, FFmpeg, YouTube Data API",
      description: [
        "Local autonomous agent that turns trending topics into YouTube Shorts, discovering and deduplicating stories from RSS and Hacker News and researching sources.",
        "Local-LLM pipeline with JSON-schema outputs and repair prompts for ranking, script writing, fact-check revisions, scene planning, and quality gates.",
        "Built to run unattended: resumable SQLite-backed jobs, retry with backoff, disk guards, rotating logs, and failure notifications.",
      ],
      link: "https://github.com/Neelansh-Khare/content-gen",
      image: "/images/projects/content-gen.webp",
    },
    {
      title: "Agentic DGG Conversion",
      tech: "Python, Pydantic, ChromaDB, LLM agents",
      description: [
        "Proof-of-concept multi-agent pipeline converting Dynamical Graph Grammar models between research math (LaTeX + graph diagrams) and the FoxFlow simulation DSL.",
        "Agents are grounded with per-agent RAG over research papers; a typed Pydantic model is the hub representation, with deterministic FoxFlow emission and validation.",
      ],
      link: "https://github.com/Neelansh-Khare/agentic-dgg-conversion",
      image: "/images/projects/agentic-dgg-conversion.webp",
    },
    {
      title: "Concept-Guided RAG",
      tech: "Python, sentence-transformers, BM25, BEIR",
      description: [
        "Reproducible retrieval-evaluation framework testing whether LLM-extracted concepts add ranking signal beyond content similarity.",
        "Compares 10 retrieval methods (BM25, dense, HyDE, fused, oracle and shuffled-concept controls) across lexical-overlap subsets with bootstrap CIs and significance testing.",
      ],
      link: "https://github.com/Neelansh-Khare/concept-rag",
      image: "/images/projects/concept-rag.webp",
    },
    {
      title: "Career OS",
      tech: "React, TypeScript, FastAPI, SpoonOS, ElevenLabs",
      description: [
        "Hackathon-built AI career discovery platform where six specialized agents analyze a user's onboarding in parallel to match them to careers.",
        "Voice onboarding and gamified roadmaps with XP, levels, streaks, and phase unlocking across learning, project, networking, and simulator tracks.",
      ],
      link: "https://github.com/Neelansh-Khare/career-compass-hackathon",
      image: "/images/projects/career-compass-hackathon.webp",
    },
    {
      title: "FabFlix",
      tech: "Java, Servlets, PostgreSQL, Redis, Kubernetes",
      description: [
        "Full-stack movie e-commerce site with title and genre browsing, full-text search with autocomplete, and a session-backed cart and checkout.",
        "Hardened with BCrypt, reCAPTCHA, CSRF tokens, and rate limiting; scaled with connection pooling, a primary/replica read-write split, Redis caching, and Kubernetes manifests.",
      ],
      link: "https://github.com/Neelansh-Khare/Fablix",
      image: "/images/projects/fablix.webp",
    },
    {
      title: "Tiny Compiler",
      tech: "Python, SSA IR, Graphviz",
      description: [
        "Compiler for the Tiny language with a hand-written lexer, recursive-descent parser, and SSA IR generation with phi nodes over basic blocks.",
        "Optimization passes for constant folding, copy propagation, and common-subexpression elimination, with Graphviz control-flow graph output.",
      ],
      link: "https://github.com/Neelansh-Khare/compiler-tiny",
      image: "/images/projects/compiler-tiny.webp",
    },
    {
      title: "Search Engine",
      tech: "Python, NLTK, Inverted Index, TF-IDF",
      description: [
        "Disk-backed inverted-index search engine with stemming, weighting for title and heading terms, partial-index merging, and byte-offset term lookup.",
        "Ranks results with TF-IDF cosine similarity plus positional and proximity boosts, with term and query caching for sub-second retrieval.",
      ],
      link: "https://github.com/Neelansh-Khare/SearchEngine",
      image: "/images/projects/searchengine.webp",
    },
    {
      title: "Schwab-AI Portfolio Manager",
      tech: "Python, REST APIs, LLMs",
      description: [
        "Automated equities trading system using LLMs for market analysis and the Charles Schwab API for execution.",
        "Implemented risk management with stop-loss mechanisms and real-time market monitoring.",
      ],
      link: "https://github.com/Neelansh-Khare/tradingScriptBardSchwab",
    },
  ],
  research: [
    {
      title: "Retrieval Saturation in Retrieval-Augmented Generation",
      tech: "Python, sentence-transformers, FAISS, SciQ, MS MARCO",
      summary:
        "Studies how a RAG retriever quietly loses its ability to separate the right document from near-neighbors as the corpus grows, and proposes score margin, score entropy, and rank-overlap metrics as early warnings. On unique SciQ + MS MARCO corpora from 11.7k to 94k documents, Recall@5 and top-1 score margin both decline with scale, while redundant toy corpora show misleading \"false stability.\"",
      link: "https://github.com/Neelansh-Khare/rag-research",
      image: "/images/projects/rag-research.webp",
    },
    {
      title: "Lost in the Middle: Reproduction and Redundancy Analysis",
      tech: "Python, Ollama, Llama 3.2, OpenAI / Hugging Face adapters",
      summary:
        "A lightweight, reproducible harness for the \"Lost in the Middle\" finding (Liu et al., TACL 2024) that long-context models underuse evidence placed mid-context. Includes pluggable model backends, a position-bucketed synthetic dataset, and extensions for distractor noise, context-length sweeps, and redundancy rescue, which restores accuracy across all evidence positions.",
      link: "https://github.com/Neelansh-Khare/reproduction-research",
      image: "/images/projects/reproduction-research.webp",
    },
  ],
  skills: [
    {
      name: "Languages",
      skills: ["Python", "Java", "C++", "SQL", "JavaScript", "Scala", "Go", "TypeScript", "Shell", "C"],
    },
    {
      name: "Frameworks & Systems",
      skills: [
        "FastAPI",
        "Node.js",
        "Spring",
        "React",
        "Spark",
        "Hadoop",
        "HBase",
        "Kafka",
        "PyTorch",
        "TensorFlow",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      name: "Infra & Tools",
      skills: ["Git", "GitHub Actions", "Jenkins", "AWS", "GCP", "Azure", "PostgreSQL", "MySQL", "MongoDB", "Linux"],
    },
    {
      name: "Areas of Expertise",
      skills: [
        "Backend Systems",
        "Distributed Infrastructure",
        "Machine Learning",
        "Data Pipelines",
        "API Design",
        "Automation",
      ],
    },
    {
      name: "Certifications",
      skills: [
        "AWS Certified Cloud Practitioner",
        "CodePath Technical Interview Prep Program (TIP)",
      ],
    },
    {
      name: "Interests",
      skills: [
        "HackNation Top 10",
        "MLH Hack Week x3",
        "Google Developer Student Club",
        "ACM",
        "Letta Open Source Contributor",
        "MLCollective",
        "Nvidia Developer Program",
        "Guitarist",
      ],
    },
  ],
  contact: {
    email: "kharen@uci.edu",
    phone: "949-992-6803",
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/neelansh-khare",
        label: "linkedin.com/in/neelansh-khare",
      },
      {
        name: "GitHub",
        url: "https://github.com/Neelansh-Khare",
        label: "github.com/Neelansh-Khare",
      },
      {
        name: "X",
        url: "https://x.com/neelansh_khare",
        label: "x.com/neelansh_khare",
      },
    ],
  },
};
