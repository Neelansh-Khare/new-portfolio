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

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    description: string;
  };
  about: string[];
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
    title: "Software Engineer & Machine Learning Enthusiast",
    description:
      "UC Irvine CS graduate with experience in software engineering, AI/ML research, and full-stack development. Passionate about creating innovative solutions using cutting-edge technologies.",
  },
  about: [
    "I'm a Computer Science graduate from UC Irvine with a passion for software engineering, machine learning, and data science. My journey in tech has equipped me with a diverse skill set spanning from backend development to AI research.",
    "I currently work as a Software Engineer at UC Irvine, where I develop automation systems and improve software infrastructure. I'm also an Undergraduate Researcher at the He Lab, focusing on deep learning models for nano-particle motion prediction.",
    "Beyond my technical skills, I'm an active leader in the community. I've served as the President for the Indian Subcontinental Club, a Software Developer for ICSSC, and I'm involved with the Google Developer Student Club.",
    "I'm particularly interested in the intersection of AI/ML and practical applications, from automated trading systems to computer vision. I enjoy tackling complex problems with innovative solutions that leverage cutting-edge technologies.",
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "University of California, Irvine",
      period: "June 2022 - Present",
      description: [
        "Developed and deployed a Java automation system for effort reporting, reducing processing time by 90% and eliminating manual data entry errors.",
        "Architected a documentation generator using Java and RESTful APIs, helping with quicker onboarding.",
        "Implemented and tested complex backend features for a financial aid portal using Java and JUnit, resulting in new features including faster data loading time by 30%.",
        "Resolved frontend visual bugs and created a frontend testing framework using React and Playwright, fixing UI inconsistencies.",
        "Designed and implemented a database anonymization application using Java and SQL, to ensure FERPA compliance.",
        "Engineered JavaScript data processing scripts that created SQL queries automatically from an Excel sheet, saving hours for developers weekly.",
      ],
    },
    {
      title: "Undergraduate Researcher",
      company: "He Lab, University of California, Irvine",
      period: "January 2024 - Present",
      description: [
        "Developed a deep-learning model using computer vision to predict nano-particle motion, enabling advancements in material science research (Pending paper publication).",
        "Engineered and optimized a Python based CNN for electron microscopy analysis, achieving 95% accuracy in particle identification as well as developed my own scripts for data inference and preprocessing.",
        "Created a synthetic data generation pipeline that can produce 10000+ realistic microscopy images, enabling robust model training and validation.",
      ],
    },
  ],
  projects: [
    {
      title: "AI Based Stock Trading",
      tech: "Python, REST APIs",
      description: [
        "Engineered an automated trading system utilizing Bard AI for market analysis and Schwab APIs for execution.",
        "Implemented risk management algorithms with stop-loss mechanisms.",
        "Developed real-time market monitoring system processing data from an exchange with sub-second latency.",
      ],
    },
    {
      title: "Object Recognition Script",
      tech: "Python, Matplotlib, OpenCV",
      description: [
        "Developed a real-time object detection system with 97% accuracy for household items using custom-trained CNN models.",
        "Built a user-friendly GUI for real-time visualization and result logging using Matplotlib.",
      ],
    },
    {
      title: "Python Based Discord Bots",
      tech: "Python, REST APIs",
      description: [
        "Implemented competitive gaming features with PostgreSQL leaderboard system, driving 70% increase in user engagement.",
        "Created automated moderation tools using natural language processing to maintain community guidelines.",
        "Designed asynchronous event handling system for optimal performance during high-traffic periods.",
      ],
    },
    {
      title: "Compiler and Interpreter",
      tech: "Python",
      description: [
        "Built a fully-functional compiler/interpreter from scratch in Python that processed the low level language Tiny.",
        "Implemented a lexer, parser, and the ability to add user defined functions and variables.",
      ],
    },
  ],
  skills: [
    {
      name: "Languages",
      skills: ["Python", "Java", "JavaScript", "C++", "C", "R", "Go"],
    },
    {
      name: "Frameworks & Technologies",
      skills: [
        "React",
        "AWS",
        "TensorFlow",
        "JUnit",
        "RESTful APIs",
        "OpenCV",
        "Matplotlib",
      ],
    },
    {
      name: "Developer Tools",
      skills: ["SQL", "Git", "Docker", "Playwright", "PostgreSQL"],
    },
    {
      name: "Areas of Expertise",
      skills: [
        "Machine Learning",
        "Computer Vision",
        "Software Engineering",
        "Full-Stack Development",
        "Data Processing",
        "Automation",
        "Testing & QA",
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
        name: "Portfolio",
        url: "https://neelanshkhare.notion.site",
        label: "neelanshkhare.notion.site",
      },
    ],
  },
};

