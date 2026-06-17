export interface TimelineItem {
  title: string;
  institution: string;
  duration: string;
  description: string;
  type: "education" | "experience";
}

export const education: TimelineItem[] = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    institution: "Your University Name",
    duration: "2021 — 2025",
    description:
      "Focused on web development, data structures, and software engineering. Relevant coursework: Database Systems, Algorithms, Software Architecture.",
    type: "education",
  },
  {
    title: "Higher Secondary Certificate",
    institution: "Your College Name",
    duration: "2019 — 2021",
    description: "Science group, with a focus on mathematics and physics.",
    type: "education",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Frontend Developer",
    institution: "Company Name",
    duration: "2025 — Present",
    description:
      "Building and maintaining customer-facing web applications using React and Next.js, collaborating with designers to ship pixel-perfect UI.",
    type: "experience",
  },
  {
    title: "Web Development Intern",
    institution: "Company Name",
    duration: "2024 — 2025",
    description:
      "Worked on internal tools, fixed bugs, and contributed to the company's design system.",
    type: "experience",
  },
];
