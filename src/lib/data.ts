import { Github, Linkedin, Code, Briefcase } from 'lucide-react';

export const portfolioData = {
  name: "Nitesh Kumar Singh",
  initials: "NKS",
  profile: "Full stack software developer with 3+ years of experience in designing and implementing scalable, high performance applications in Agile environments.",
  contact: {
    phone: "9974188220",
    email: "niteshk6720@gmail.com",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nitesh-singh-a241981ba/",
        icon: Linkedin,
      },
      {
        name: "Github",
        url: "https://github.com/niteshh-s?tab=repositories",
        icon: Github,
      },
      {
        name: "Leetcode",
        url: "https://leetcode.com/u/Nitesh_Singh/",
        icon: Code,
      },
    ],
  },
  skills: {
    'Frontend': ["HTML", "CSS", "JavaScript", "Angular", "TypeScript"],
    'Backend': [".Net", "C#", "Microservices", "REST APIs", "SignalR", "WebSocket", "Concurrency", "Multithreading"],
    'DevOps': ["Azure DevOps", "CI/CD"],
    'Database': ["SQL", "PostgreSQL", "NoSQL", "MongoDB"],
    'Others': ["SDLC", "Agile", "OOPS", "SOLID Principles", "Distributed Systems", "Data Structures", "Algorithms", "Design Patterns", "Event-Driven Architecture", "AI Agents", "Azure"],
  },
  experience: [
    {
      role: "Software Engineer 1",
      company: "Precisely | Automate Evolve",
      period: "SEP 2024 - PRESENT",
      details: [
        "Implemented an Intelligent Autocomplete feature in Precisely’s Automate Evolve platform by integrating custom LLM training on user-uploaded data, enabling context-aware field predictions with confidence scoring for enhanced form automation improving form completion speed by ~40% and accuracy by over 85%.",
        "Integrated GraphQL support into Precisely’s Automate Evolve forms, improving data query efficiency by over 50% and boosting enterprise adoption, including major clients such as Shopify.",
        "Successfully closed over 100 escalation issues in a single cycle resulting in being recognized as Performer of the Month and getting Precisely Spot Award for July 2025.",
      ],
      icon: Briefcase,
    },
    {
      role: "Software Engineer 1",
      company: "SLB | Maintenance Window Management (MWM)",
      period: "SEP 2022 - SEP 2024",
      details: [
        "Architected and developed a microservices-based solution to manage patching and maintenance for over 20,000 Windows and Linux servers, significantly improving downtime coordination and patching efficiency.",
        "Implemented user sign-in functionality using OAuth 2.0 with Microsoft Azure.",
        "Engineered scalable APIs for MWM patch synchronization, achieving 88% patch and 92% reboot success.",
        "Created an automated alert system using SendGrid to notify users of patching activity outcomes, achieving a 50% reduction in troubleshooting time for the operations team.",
        "Designed and developed a user-friendly maintenance page with a 'Notify Me' feature, providing real-time updates to 55,000+ users and managing 12,000 daily visits.",
        "Designed an Angular Single Page Application (SPA) to monitor application’s cloud modernization journey, resulting in a 40% increase in productivity for the cloud teams.",
        "Resolved bugs, code smells, and security vulnerabilities, enhancing overall code quality by 95%",
      ],
      icon: Briefcase,
    },
  ],
  projects: [
    {
      title: "Real Time Chat Application",
      techStack: ["Angular", ".Net", "WebSocket (SignalR)", "TypeScript", "SQL"],
      description: "A full-stack chat application enabling real-time communication with features like direct messaging, group chats, and typing indicators.",
      details: [
        "Built a dynamic and responsive frontend for real time chat application using Angular.",
        "Developed the backend using .Net to manage core application functionality.",
        "Enabled real-time messaging, typing indicators, and group chat features through WebSocket communication (SignalR).",
      ],
      links: {
        live: "https://niteshchatappclient-cbbdach6cnegf7aq.southindia-01.azurewebsites.net",
        github: "https://github.com/niteshh-s?tab=repositories",
        demo: "https://drive.google.com/file/d/13Hld1B7oAR-BvOzkqiPArKbi8wK3DoNF/view?usp=sharing",
      },
    },
    {
      title: "Ecommerce Website",
      techStack: ["javascript", "jquery", "bootstrap"],
      description: "Fully functional E-commerce website front-end and back-end built from scratch",
      details: [
        "javascript, jquery, bootstrap and css for the front-end",
        "Intelligent searching mechanism for products.",
        "Awesome Cart package that uses session.",
        "Categories, tags and price filtering for easier search for products."
      ],
      links: {
        github: "https://github.com/niteshh-s?tab=repositories",
      },
    },
  ],
  education: [
    {
      degree: "Bachelors of Engineering – Computer Science & Engineering",
      university: "Chandigarh University, Chandigarh",
      graduation: "May 2022",
      cgpa: "8.38",
    },
    {
        degree: "12th Grade",
        university: "Narayana PU College, Bangalore",
        graduation: "2017",
        percentage: "89.3%"
    }
  ],
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ],
};
