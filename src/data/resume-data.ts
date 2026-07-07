import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ramdany Suhandi",
  initials: "RS",
  location: "Indonesia, WIB",
  locationLink: "https://www.google.com/maps/place/Indonesia",
  about:
    "Backend Engineer building enterprise applications, ecommerce platforms, and offline-first systems.",
  summary:
    "Fresh graduate with a Bachelor's degree in Information Systems and hands-on experience developing enterprise applications, ecommerce platforms, and offline-first POS systems. Skilled in backend development using Java, Spring Boot, Laravel, Express.js, PostgreSQL, and MySQL, with a strong foundation in REST API development, database design, authorization systems, and cloud-based solutions.",
  avatarUrl: "/avatar.jpg",
  personalWebsiteUrl: "https://github.com/ramdany05",
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
        url: "https://linkedin.com/in/suhandiramdany",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universitas Gunadarma",
      degree: "Bachelor's Degree in Information System (GPA: 3.65 / 4.00)",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "PT Agromina Biotech International",
      link: "",
      badges: ["On Site"],
      techBadges: ["Laravel", "Express.js", "PostgreSQL", "MySQL"],
      title: "Backend Intern",
      start: "2025",
      end: "2026",
      description:
        "Developed and maintained web-based solutions for multiple business clients.",
      highlights: [
        "Delivered 4 production-ready client solutions across e-commerce, corporate, educational, and POS domains using Laravel, Express.js, PostgreSQL, and MySQL",
        "Built backend systems including RBAC, analytics reporting, email automation, REST APIs, real-time synchronization, and automated testing infrastructure",
      ],
    },
    {
      company: "PT Integrity Indonesia",
      link: "",
      badges: ["On Site"],
      techBadges: ["Java", "Spring Boot", "React", "TypeScript"],
      title: "Software Engineer Intern",
      start: "2025",
      end: "2025",
      description:
        "Contributed to an enterprise background screening platform.",
      highlights: [
        "Developed enterprise features including authorization workflows, RBAC, organization management, and user/group administration using Java, Spring Boot, React, and TypeScript",
        "Designed and maintained data infrastructure with 102K+ geographic records, Liquibase migrations, and server-side search capabilities, improving scalability, data integrity, and operational efficiency",
      ],
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Remote"],
      techBadges: ["Node.js", "Express.js", "MongoDB", "AI/LLMs"],
      title: "Fullstack Developer",
      start: "2025",
      end: "2025",
      description:
        "Delivered web and AI solutions for businesses and end-users.",
      highlights: [
        "Delivered web and AI solutions, including SEO-optimized sites, content-based food recommendation system, and LLM-powered chat using open-access APIs",
        "Built frontend interfaces and integrated backend services using Node.js, Express.js, and MongoDB",
      ],
    },
    {
      company: "Computerization Development Center, Gunadarma University",
      link: "",
      badges: ["On Site"],
      techBadges: ["HTML", "CSS", "JavaScript"],
      title: "Workshop Instructor",
      start: "2023",
      end: "2025",
      description:
        "Assisted students in courses within the scope of web development.",
      highlights: [
        "Guided more than 20 students per workshop in understanding HTML, CSS, and JavaScript",
        "Successfully developed a 30-question programming exam to assess the skills of new assistants",
      ],
    },
    {
      company: "Bangkit Academy",
      link: "",
      badges: ["Remote"],
      techBadges: ["GCP", "Backend", "REST API"],
      title: "Cloud Computing Cohort",
      start: "2024",
      end: "2024",
      description:
        "Industry-led cloud computing training program by Google, GoTo, and Traveloka.",
      highlights: [
        "Completed 10+ cloud computing and backend engineering courses covering networking, system administration, cloud infrastructure, and Google Cloud Platform (GCP)",
        "Developed REST APIs and managed cloud infrastructure as Backend Engineer in a capstone project while collaborating with a cross-functional team",
        "Led Bangkit socialization event at Gunadarma University with 30+ participants",
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
  projects: [
    {
      title: "Serverless Computing on GCP",
      techStack: ["GCP", "Serverless", "Cloud"],
      description:
        "Thesis: Implementation of Serverless Computing on Google Cloud Platform to increase scalability and flexibility",
    },
    {
      title: "Bangkit Capstone",
      techStack: ["Node.js", "REST API", "GCP"],
      description:
        "Backend Engineer for a capstone project building REST APIs and managing cloud infrastructure with a cross-functional team",
    },
    {
      title: "Codefest 01",
      techStack: ["Java", "Algorithms"],
      description:
        "Finalist — 4th place among 10+ participants in a competitive programming contest by Gunadarma I/O",
    },
  ],
} as const;
