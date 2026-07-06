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
    institution: "American International University-Bangladesh",
    duration: "2020 — 2023",
    description:
      "Focused on web development, data structures, and software engineering. Relevant coursework: Database Systems, Algorithms, Software Architecture.",
    type: "education",
  },
  {
    title: "Higher Secondary Certificate",
    institution: "M.S. School & College",
    duration: "2018 — 2019",
    description: "Science group, with a focus on mathematics and physics.",
    type: "education",
  },
];

export const experience: TimelineItem[] = [
  // {
  //   title: "Frontend Developer",
  //   institution: "Company Name",
  //   duration: "2025 — Present",
  //   description:
  //     "Building and maintaining customer-facing web applications using React and Next.js, collaborating with designers to ship pixel-perfect UI.",
  //   type: "experience",
  // },
  {
    title: "Web Development Intern",
    institution: "Unisoft Business Solution",
    duration: "2023 — 2024",
    description:
      "Worked on internal tools, fixed bugs, and contributed to the company's design system.",
    type: "experience",
  },
];
