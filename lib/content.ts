export const personalInfo = {
  name: "Jaiman Sharma",
  email: "jaiman1352@gmail.com",
  github: "jaimansharma",
  linkedin: "jaiman-sharma-627125246",
  location: "Toronto (ET)",
  currentYear: new Date().getFullYear(),
  lastUpdated: "2025-10",
};

export const heroContent = {
  headline: "Jaiman Sharma - Security-minded software engineer who automates everything possible",
  subtitle:
    "Bachelor of Computing (Honours) @ Queen's with focuses in (Cybersecurity + AI). Cloud Security Intern at Sectra AB (Jun–Aug 2025, Mississauga, ON). I build reliable, automated systems and I like breaking them (responsibly) to understand risk.",
  tags: [
    "Cloud Security",
    "Python / Linux",
    "Docker / Kubernetes",
    "AppSec + Testing",
    "CTF / Reverse Engineering",
    "Binary Exploitation",
  ],
};

export const highlights = [
  {
    title: "Cloud Security",
    description: "Assessing deployment workflows and platform compatibility through automation",
  },
  {
    title: "Systems + Dev",
    description: "Building testable, containerized applications with automated CI/CD pipelines",
  },
  {
    title: "Security Research/CTF",
    description: "Practical web security, reverse engineering, binary exploitation, threat modeling",
  },
  {
    title: "Automation",
    description: "Finding repetitive tasks and writing scripts/apps to streamline workflows and processes",
  },
];

export const experience = [
  {
    company: "Sectra AB",
    role: "Cloud Security Intern",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Assessed software compatibility with Kubernetes, Falco, and Kyverno to identify integration and deployment risks.",
      "Researched and evaluated security and deployment tools for potential in-house adoption, analyzing feasibility, security impact, and alignment with existing systems.",
      "Delivered technical presentations to Technology and Cloud Security teams, strengthening cross-team knowledge sharing and backend change preparedness.",
    ],
    tech: [
      "Kubernetes",
      "Falco",
      "Kyverno",
      "Cloud security",
      "Linux",
    ],
  },
  {
    company: "QMIND x Technical Management Group Ltd",
    role: "Design Team Member",
    period: "Sept 2025 – Present",
    bullets: [
      "Contributed to a 5-person team building an automation system to standardize contractor CVs for a mining/energy consulting firm, reducing manual formatting time from 40 minutes to 2 minutes per CV.",
      "Implemented components of a processing pipeline integrating PDF and LinkedIn data extraction with GPT-4 and LangChain to produce structured JSON outputs.",
      "Collaborated using GitHub workflows, code reviews, and issue tracking to deliver a client-ready automation solution aligned with stakeholder requirements.",
    ],
    tech: [
      "Python",
      "LangChain",
      "GPT-4",
      "PDF/LinkedIn data extraction",
      "GitHub workflows",
    ],
  },
  {
    company: "Queen's Cryptography and Cyber Security Club (Q3C)",
    role: "Executive & CTF Specialist",
    period: "Sept 2024 – Present",
    bullets: [
      "Compete in national and international Capture-the-Flag competitions with a focus on cryptography, web exploitation, and binary exploitation.",
      "Achieved top-50 finishes out of ~1,000 teams by developing and deploying custom exploit scripts.",
      "Collaborate with an 8-person team to analyze vulnerabilities, share tactics, and mentor new members on reverse engineering tools.",
    ],
    tech: [],
  },
];

export const projects = [
  {
    name: "Don AI Assistant",
    type: "Browser Extension",
    description:
      "A lightweight browser extension that supports day-to-day residence-don workflows (drafting responses, generating consistent messaging, summarizing content) using the OpenAI API.",
    why: "Designed for speed and consistency - turn common repetitive writing tasks into a reliable flow while keeping tone professional and context-aware.",
    tech: [
      "JavaScript",
      "browser extension APIs",
      "OpenAI API",
      "prompt design",
      "basic privacy-minded handling",
    ],
    links: {
      github: "https://github.com/jaimansharma",
    },
  },
  {
    name: "Library Management System",
    type: "Full-Stack + DevOps/Quality Focus",
    description:
      "A library catalog/management system with an emphasis on correctness, testing, and deployment hygiene.",
    why: "Building features alongside automated testing, containerization, and CI/CD so changes are easy to validate and ship.",
    tech: ["Flask (Python)", "SQL", "Docker", "CI/CD", "automated tests"],
    engineeringAngle:
      "Reproducible environments, predictable releases, test coverage, and clear separation of concerns.",
    links: {
      github: "https://github.com/jaimansharma",
    },
  },
];

export const skills = {
  languages: [
    "Python",
    "Java",
    "C++",
    "C",
    "JavaScript",
    "SQL",
    "Bash",
    "Haskell",
  ],
  security: ["Ghidra", "Burp Suite", "Wireshark", "Binary Exploitation"],
  infra: ["Docker", "Kubernetes", "CI/CD", "Linux", "Azure"],
  practices: [
    "Testing",
    "Automation",
    "Clean APIs",
    "Reproducible Builds",
    "Documentation",
  ],
};

export const about = `I'm a Bachelor of Computing (Honours) student at Queen's University (2023-2027) focused on cybersecurity and AI, and I've been on the Dean's List from 2023-2025. One of my primary draws to programming was the efficiency of automation - building software that fully encapsulates a task and its related data can make a real impact on systems today. I like work that sits at the intersection of secure engineering and systems thinking, building software that's testable, deployable, and resilient by design.

In practice, that means I'm comfortable moving between development and security: writing Python services, containerizing apps, setting up automated CI/CD pipelines, and using security tooling to find and explain risk. I support automating whatever I can, believing that well-designed automation reduces human error and frees up time for higher-level problem-solving.

Beyond coding, I enjoy playing strategy and long-term games, as well as repairing and tinkering with technologies to refurbish and repurpose them for sale or my own use. I'm currently looking for internships, research roles, and early-career opportunities where I can contribute quickly while learning from strong engineering and security teams.`;

export interface CTFWriteup {
  title: string;
  category: string;
  link: string;
}

export interface CTF {
  name: string;
  date: string;
  status: string;
  writeups?: CTFWriteup[];
}

export const ctfs: CTF[] = [
  // Placeholder - user will provide content later
  // {
  //   name: "CTF Name",
  //   date: "2024",
  //   status: "In Progress",
  //   writeups: [
  //     {
  //       title: "Writeup Title",
  //       category: "Binary Exploitation",
  //       link: "https://...",
  //     },
  //   ],
  // },
];

