export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  tech: string;
  description: string[];
  link?: string;
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
    "I am a Software Engineer at Polaris Wireless, specializing in backend systems and distributed infrastructure. I previously worked as a Software Engineer Co-op at the University of California, Irvine, where I developed automation systems and full-stack applications.",
    "My technical expertise spans Python, Java, and C++, with a strong focus on building scalable APIs, data pipelines, and orchestration tooling. I have experience with technologies like Hadoop, Spark, Kafka, and Kubernetes in enterprise environments.",
    "I am also passionate about AI and Machine Learning. As an Undergraduate Researcher at the He Lab, I architected deep learning pipelines for scientific applications. I enjoy working on projects that bridge the gap between complex infrastructure and intelligent systems.",
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
      company: "Polaris Wireless",
      period: "Sept 2025 - Present",
      description: [
        "Built Python/Bash CLI orchestration tooling to deploy Hadoop, HBase, Spark, ZK, and ClickHouse across multi-VM RHEL clusters, reducing setup time by 97% from 3 days to 2 hours.",
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
    },
  ],
  projects: [
    {
      title: "Auto Budget",
      tech: "TypeScript, React, Node.js, LLMs",
      description: [
        "Automated personal finance tool that syncs transactions and categorizes them using LLMs.",
        "Implemented secure integration with banking APIs and Google Sheets for real-time tracking.",
        "Built a responsive dashboard to visualize spending habits and budget goals.",
      ],
      link: "https://github.com/Neelansh-Khare/auto-budget",
    },
    {
      title: "JobSearchAI",
      tech: "Python, AI Agents",
      description: [
        "AI-powered job search assistant that automates job discovery and application processes.",
        "Utilizes advanced scraping and filtering to find relevant job postings based on user criteria.",
      ],
      link: "https://github.com/Neelansh-Khare/JobSearchAI",
    },
    {
      title: "Academia Hub",
      tech: "React, Supabase, AI Services",
      description: [
        "Comprehensive academic networking platform connecting students, researchers, and institutions.",
        "Features include project collaboration tools, profile management, and AI-driven match recommendations.",
      ],
      link: "https://github.com/Neelansh-Khare/academia-hub",
    },
    {
      title: "Trading Script (Bard & Schwab)",
      tech: "Python, REST APIs",
      description: [
        "Engineered an automated trading system utilizing Bard AI for market analysis and Schwab APIs for execution.",
        "Implemented risk management algorithms with stop-loss mechanisms and real-time market monitoring.",
      ],
      link: "https://github.com/Neelansh-Khare/tradingScriptBardSchwab",
    },
    {
      title: "Compiler and Interpreter",
      tech: "Python",
      description: [
        "Created full compiler/interpreter for Tiny language including lexer, parser, and semantic analyzer.",
        "Implemented raw source processing to executable code with error handling.",
      ],
      link: "https://github.com/Neelansh-Khare",
    },
    {
      title: "Search Engine",
      tech: "Python",
      description: [
        "Implemented indexing, ranking, and query processing for large text corpora with sub-second response.",
        "Optimized for high performance retrieval on custom datasets.",
      ],
      link: "https://github.com/Neelansh-Khare",
    },
    {
      title: "Fablix",
      tech: "Java, Servlets, MySQL, AWS",
      description: [
        "Full-stack e-commerce web application for browsing and purchasing movies.",
        "Features robust search functionality, user authentication, and shopping cart management.",
      ],
      link: "https://github.com/Neelansh-Khare/Fablix",
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
        name: "Blog",
        url: "https://neelanshkhare.github.io/new-portfolio/blog",
        label: "neelanshkhare.github.io/new-portfolio/blog",
      },
      {
        name: "X",
        url: "https://x.com/neelansh_khare",
        label: "x.com/neelansh_khare",
      },
    ],
  },
};
