import { Github, Linkedin, Mail, Phone, Code, Link as LinkIcon, Briefcase } from 'lucide-react';

export const portfolioData = {
  name: "Nitesh Kumar Singh",
  initials: "NKS",
  profile: "Full stack software developer with 3+ years of experience in designing and implementing scalable, high-performance applications in Agile environments.",
  contact: {
    phone: "9974188220",
    email: "niteshk6720@gmail.com",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nitesh-kumar-singh-6720",
        icon: Linkedin,
      },
      {
        name: "Github",
        url: "https://github.com/niteshk6720",
        icon: Github,
      },
      {
        name: "Leetcode",
        url: "https://leetcode.com/u/niteshk6720/",
        icon: Code,
      },
    ],
  },
  skills: {
    'Frontend': ["HTML", "CSS", "JavaScript", "Angular", "TypeScript"],
    'Backend': [".Net", "C#", "Microservices", "REST APIs", "SignalR", "WebSocket", "Concurrency", "Multithreading"],
    'DevOps': ["Azure DevOps", "CI/CD"],
    'Database': ["SQL", "PostgreSQL", "NoSQL", "MongoDB"],
    'Cloud Technologies': ["Azure"],
    'Others': ["SDLC", "Agile", "OOPS", "SOLID Principles", "Distributed Systems", "Data Structures", "Algorithms", "Design Patterns", "Event-Driven Architecture", "AI Agents"],
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Precisely | Automate Evolve",
      period: "September 2024 - Present",
      details: [
        "Implemented an Intelligent Autocomplete feature in Precisely’s Automate Evolve platform by integrating custom LLM training on user-uploaded data, enabling context-aware field predictions with confidence scoring for enhanced form automation improving form completion speed by ~40% and accuracy by over 85%.",
        "Integrated GraphQL support into Precisely’s Automate Evolve forms, improving data query efficiency by over 50% and boosting enterprise adoption, including major clients such as Shopify.",
        "Successfully closed over 100 escalation issues in a single cycle resulting in being recognized as Performer of the Month and getting Precisely Spot Award for July 2025.",
      ],
      icon: Briefcase,
    },
    {
      role: "Software Engineer",
      company: "SLB | Maintenance Window Management (MWM)",
      period: "September 2022 - September 2024",
      details: [
        "Architected and developed a microservices-based solution to manage patching and maintenance for over 20,000 Windows and Linux servers.",
        "Implemented user sign-in functionality using OAuth 2.0 with Microsoft Azure.",
        "Engineered scalable APIs for MWM patch synchronization, achieving 88% patch and 92% reboot success.",
        "Created an automated alert system using SendGrid to notify users of patching activity outcomes, reducing troubleshooting time by 50%.",
        "Designed a user-friendly maintenance page with a 'Notify Me' feature, handling 12,000 daily visits and providing real-time updates to 55,000+ users.",
        "Designed an Angular SPA to monitor application’s cloud modernization journey, increasing productivity by 40%.",
        "Resolved bugs and vulnerabilities, enhancing overall code quality by 95%.",
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
        "Built a dynamic and responsive frontend using Angular.",
        "Developed the backend using .Net to manage core application functionality.",
        "Enabled real-time messaging, typing indicators, and group chat features through WebSocket communication (SignalR).",
      ],
      links: {
        live: "#",
        github: "#",
        demo: "#",
      },
    },
  ],
  education: {
    degree: "Bachelors of Engineering – Computer Science & Engineering",
    university: "Chandigarh University, Chandigarh",
    graduation: "May 2022",
    cgpa: "8.38",
  },
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ],
};
