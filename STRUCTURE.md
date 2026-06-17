src/
├── app/
│ ├── layout.tsx
│ ├── globals.css
│ ├── page.tsx # Home / Hero
│ ├── about/
│ │ └── page.tsx
│ ├── work/
│ │ ├── page.tsx
│ │ └── [slug]/
│ │ └── page.tsx
│ ├── contact/
│ │ └── page.tsx
│ └── not-found.tsx
├── components/
│ ├── layout/
│ │ ├── navbar.tsx
│ │ ├── footer.tsx
│ │ └── smooth-scroll-provider.tsx
│ ├── home/
│ │ ├── hero.tsx
│ │ └── featured-work.tsx
│ ├── about/
│ │ ├── bio.tsx
│ │ ├── tech-stack.tsx
│ │ └── education.tsx
│ ├── work/
│ │ ├── project-card.tsx
│ │ └── project-grid.tsx
│ ├── contact/
│ │ └── contact-form.tsx
│ ├── shared/
│ │ ├── page-transition.tsx
│ │ ├── section-heading.tsx
│ │ ├── magnetic-link.tsx
│ │ └── reveal.tsx
│ └── ui/ # shadcn components live here
├── data/
│ ├── projects.ts
│ ├── tech-stack.ts
│ ├── education.ts
│ └── site-config.ts
├── lib/
│ └── utils.ts # shadcn cn() helper
└── hooks/
└── use-gsap-fade-in.ts
