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
    stack: [
      "React.js",
      "JavaScript",
      "Express.js",
      "MongoDb",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    image: "/projects/civicreport.png",
    liveUrl: "https://civicreport-ebf6d.web.app/",
    githubUrl: "https://github.com/AbuJubaeid/CivicReport-Client",
    year: "2025",
    role: "Full-Stack Developer",
  },
  {
    slug: "project-two",
    title: "ShopNest",
    description: "A E-commerce platform",
    longDescription:
      "A longer description of the project. Explain the problem it solves, who it's for, and the key features you built.A modern MERN-based e-commerce platform featuring secure authentication, Stripe payments, product management, and a responsive shopping experience.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    image: "/projects/shopnest.png",
    liveUrl: "https://shopnest-gamma-amber.vercel.app/",
    githubUrl: "https://github.com/AbuJubaeid/shopnest-frontend",
    year: "2025",
    role: "Full-Stack Developer",
  },
  {
    slug: "project-three",
    title: "Import Export Hub",
    description: "B2B Product Showcase Platform",
    longDescription:
      "Import Export Hub is a modern full-stack web platform where users can manage exports, browse global products, and import items into their personal My Imports section with one click. The system ensures real-time synchronization, secure user authentication, and a clean modern UI.",
    stack: ["Next.js", "Prisma", "Tailwind CSS", "Stripe"],
    image: "/projects/importexporthub.png",
    githubUrl: "https://github.com/yourusername/project-three",
    year: "2025",
    role: "Full-Stack Developer",
  },
];
