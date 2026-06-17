export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Civic-report",
    description: "A Community Issue Reporting Platform",
    longDescription:
      "CivicReport is a citizen-centric platform designed to report, track, and resolve civic issues efficiently. It empowers citizens, staff, and administrators to ensure transparency, accountability, and faster resolution of community problems.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    image: "https://i.postimg.cc/P5tpcGkL/civic-report.png",
    liveUrl: "https://civicreport-ebf6d.web.app/",
    githubUrl: "https://github.com/AbuJubaeid/CivicReport-Client",
    year: "2025",
    role: "Full-Stack Developer",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "A short one-line summary of what this project does.",
    longDescription:
      "A longer description of the project. Explain the problem it solves, who it's for, and the key features you built.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    image: "/projects/project-two.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-two",
    year: "2025",
    role: "Frontend Developer",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "A short one-line summary of what this project does.",
    longDescription:
      "A longer description of the project. Explain the problem it solves, who it's for, and the key features you built.",
    stack: ["Next.js", "Prisma", "Tailwind CSS", "Stripe"],
    image: "/projects/project-three.jpg",
    githubUrl: "https://github.com/yourusername/project-three",
    year: "2025",
    role: "Full-Stack Developer",
  },
];
