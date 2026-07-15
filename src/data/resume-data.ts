import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ramdany Suhandi",
  initials: "RS",
  location: "Indonesia, WIB",
  locationLink: "https://www.google.com/maps/place/Indonesia",
  about:
    "Backend Engineer building products that solve real-world problems through software.",
  summary:
    "Fresh graduate with a Bachelor's degree in Information Systems and hands-on experience developing enterprise applications, e-commerce platforms, and offline-first POS systems. Skilled in backend development using Java, Spring Boot, Express.js, PostgreSQL, and MySQL, with a strong foundation in REST API development, database design, authorization systems, and cloud-based solutions.",
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "",
  contact: {
    email: "suhandiramdany@gmail.com",
    tel: "+6281211335765",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ramdany05",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/suhandi-ramdany",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universitas Gunadarma",
      degree:
        "Bachelor's Degree in Information Systems (GPA: 3.65 / 4.00) — Thesis: Implementation of Serverless Computing on Google Cloud Platform to Increase Scalability and Flexibility",
      start: "Sep 2021",
      end: "Sep 2025",
    },
  ],
  leadership: [
    {
      title: "Workshop Instructor",
      organization: "Computerization Development Center — Gunadarma University",
      start: "Jan 2023",
      end: "Apr 2025",
      description:
        "Taught HTML, CSS, and JavaScript to students in web development courses.",
      highlights: [
        "Taught 20+ students per workshop in HTML, CSS, and JavaScript fundamentals",
        "Built a 30-question assessment exam to evaluate new teaching assistants",
      ],
    },
    {
      title: "Cloud Computing Cohort",
      organization: "Bangkit Academy (Google, GoTo, Traveloka program)",
      start: "Feb 2024",
      end: "Jun 2024",
      description:
        "Industry-led cloud computing training program by Google, GoTo, and Traveloka.",
      highlights: [
        "Completed 965-hour Google-led program with Grade A (Full Graduate)",
        "Led a campus socialization event with 30+ participants at Gunadarma University",
      ],
    },
    {
      title: "Finalist — Competitive Programming",
      organization: "Codefest 01, Gunadarma I/O",
      start: "Jan 2023",
      end: "Jan 2023",
      description:
        "Participated in an algorithm and problem-solving competition.",
      highlights: [
        "Placed 4th of 10+ participants in a Java-based competitive programming contest",
      ],
    },
  ],
  work: [
    {
      company: "PT Agromina Biotech International",
      link: "https://www.agrominabiotech.com/",
      badges: ["On Site"],
      techBadges: ["Laravel", "Express.js", "PostgreSQL", "MySQL"],
      title: "Backend Intern",
      start: "Dec 2025",
      end: "Jun 2026",
      description:
        "Developed and maintained web-based solutions for multiple business clients.",
      highlights: [
        "Delivered 3 production-ready client solutions across e-commerce, corporate, and educational domains, and a POS platform (in development) using Laravel, Express.js, PostgreSQL, and MySQL",
        "Built backend systems including RBAC, analytics reporting, email automation, REST APIs, real-time synchronization, and automated testing infrastructure",
      ],
    },
    {
      company: "PT Integrity Indonesia",
      link: "https://www.linkedin.com/company/integrity-indonesia/",
      badges: ["On Site"],
      techBadges: ["Java", "Spring Boot", "React", "TypeScript"],
      title: "Software Engineer Intern",
      start: "Oct 2025",
      end: "Dec 2025",
      description:
        "Contributed to an enterprise background screening platform.",
      highlights: [
        "Developed enterprise features including authorization workflows, RBAC, organization management, and user/group administration using Java, Spring Boot, React, and TypeScript",
        "Designed and maintained data infrastructure with 102K+ geographic records, Liquibase migrations, and server-side search capabilities, improving scalability, data integrity, and operational efficiency",
      ],
    },
    {
      company: "Freelance",
      link: "https://www.easyinaja.com/",
      badges: ["Remote"],
      techBadges: ["Node.js", "Express.js", "MongoDB", "AI/LLMs"],
      title: "Fullstack Developer",
      start: "Mar 2025",
      end: "Aug 2025",
      description:
        "Delivered web and AI solutions for businesses and end-users.",
      highlights: [
        "Shipped SEO-optimized sites, a content-based food recommendation system, and an LLM-powered chat feature using open-access APIs",
        "Built frontend interfaces and integrated backend services using Node.js, Express.js, and MongoDB",
      ],
    },
  ],
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "Spring Boot",
    "Express.js",
    "Laravel",
    "REST API",
    "Socket.IO",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "RBAC",
    "System Design",
    "Docker",
    "CI/CD",
    "Git",
    "OpenAPI/Swagger",
    "GCP",
    "React.js",
    "Inertia.js",
    "OpenAI API",
    "LLM Integration",
  ],
  certifications: [
    {
      name: "Specializing in Cloud Computing",
      issuer: "Bangkit Academy",
      year: "2024",
      url: "https://drive.google.com/file/d/15rL0F5FACBlUEsFWNy-9TmVjod7c_L0b/view?usp=sharing",
    },
    {
      name: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Stanford University via Coursera",
      year: "2024",
      url: "https://www.coursera.org/account/accomplishments/verify/XWGV9MT9FTG8",
    },
    {
      name: "System Administration and IT Infrastructure Services",
      issuer: "Google via Coursera",
      year: "2024",
      url: "https://www.coursera.org/account/accomplishments/verify/JH7ARVZMHSBE",
    },
    {
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Google via Coursera",
      year: "2024",
      url: "https://www.coursera.org/account/accomplishments/verify/VS34BQH6PTCY",
    },
  ],
  projects: [
    {
      title: "JobMatch",
      techStack: [
        "TypeScript",
        "Java",
        "React.js",
        "Spring Boot",
        "PostgreSQL",
      ],
      description:
        "Full-stack job-aggregation platform serving 1,677+ live Indonesian tech jobs from 5 sources. Engineered a multi-strategy scraping pipeline (public APIs, Playwright headless browsers with anti-bot bypass) refreshing every 5 minutes, plus a per-user match scoring engine with automated Telegram alerts.",
      link: {
        label: "job-m.netlify.app",
        href: "https://job-m.netlify.app",
      },
    },
    {
      title: "Sistem Kompensasi",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "Context API"],
      description:
        "Solo-built compensation management web app with multi-module dashboard covering position management, job evaluation, compensation calculation, approval workflows, and reporting. Academic HRIS project (case study: PT Linkar Aneka Konstruksi Indonesia).",
    },
    {
      title: "Kulineran Pakansari",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "Google Maps"],
      description:
        "Solo-built restaurant discovery and recommendation web app for the Pakansari area, featuring category-based search, recommendations, and interactive mapping via Google Maps Embed. Academic GIS project.",
    },
  ],
} as const;
