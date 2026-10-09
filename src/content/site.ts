/**
 * Central content for the portfolio.
 * Edit this file (and swap images in /public) to personalize the site.
 *
 * Placeholders are marked with [Your …] or TODO comments.
 */

export const site = {
  name: "Julia Di Costanzo",
  firstName: "Julia",

  banner: {
    /* TODO: replace with your own witty line */
    text: "This website is under construction; Stalk at your own risk ;)",
  },

  hero: {
    lines: ["Hey,", "I'm", "Julia"] as const,
    portrait: {
      src: "/portrait.svg",
      alt: "[Your portrait photo — replace public/portrait.svg]",
    },
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/[your-username]", // TODO
        icon: "/icons/github.svg",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/[your-username]", // TODO
        icon: "/icons/linkedin.svg",
      },
      {
        label: "Email",
        href: "mailto:[your.email@example.com]", // TODO
        icon: "/icons/email.svg",
      },
      {
        label: "Twitter",
        href: "https://twitter.com/[your-username]", // TODO
        icon: "/icons/twitter.svg",
      },
    ],
  },

  about: {
    title: "About",
    tagline: "Want to know me?",
    paragraphs: [
      /* TODO: replace with your bio */
      "Hi, I'm [Your Full Name] — a [Your Role] who [one-line pitch]. I care about shipping thoughtful software, learning in public, and building things people actually enjoy using.",
      "Before [current chapter], I [prior chapter]. Outside of work you'll find me [hobbies / interests]. This site is a living placeholder — swap this copy when you're ready.",
    ],
  },

  experience: {
    title: "Experience",
    tagline: "My journey so far",
    roles: [
      {
        title: "[Job Title]", // TODO
        company: "[Company]",
        dates: "Jan 2024 — Present",
        location: "[City, Country]",
        bullets: [
          "[Impact bullet — what you owned and the outcome.]",
          "[Second bullet — collaboration, scale, or shipping detail.]",
          "[Third bullet — mentorship, tooling, or reliability win.]",
        ],
        tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      },
      {
        title: "[Previous Role]", // TODO
        company: "[Company]",
        dates: "Jun 2022 — Dec 2023",
        location: "[City, Country]",
        bullets: [
          "[Describe a product or feature you shipped end-to-end.]",
          "[Call out metrics, users, or performance if you have them.]",
        ],
        tech: ["Python", "FastAPI", "AWS"],
      },
      {
        title: "[Internship / Early Role]", // TODO
        company: "[Organization]",
        dates: "May 2021 — May 2022",
        location: "[City, Country]",
        bullets: [
          "[What you built and who it helped.]",
          "[Stack or process you learned deeply.]",
        ],
        tech: ["JavaScript", "Figma"],
      },
    ],
  },

  skills: {
    title: "Skills",
    tagline: "Technologies I work with",
    categories: [
      {
        name: "Languages",
        items: ["[Language]", "TypeScript", "Python", "SQL"], // TODO
      },
      {
        name: "Frontend & Mobile",
        items: ["React", "Next.js", "[Tool]", "CSS"], // TODO
      },
      {
        name: "Backend & Systems",
        items: ["Node.js", "[Framework]", "APIs", "Databases"], // TODO
      },
      {
        name: "Tools & Practices",
        items: ["Git", "Docker", "CI/CD", "[Other]"], // TODO
      },
    ],
  },

  clubs: {
    title: "Clubs",
    tagline: "Communities I've been part of",
    items: [
      {
        name: "[Club / Org 1]", // TODO
        logo: "/clubs/club-1.svg",
        href: "#",
      },
      {
        name: "[Club / Org 2]", // TODO
        logo: "/clubs/club-2.svg",
        href: "#",
      },
      {
        name: "[Club / Org 3]", // TODO
        logo: "/clubs/club-3.svg",
        href: "#",
      },
      {
        name: "[Club / Org 4]", // TODO
        logo: "/clubs/club-4.svg",
        href: "#",
      },
    ],
  },

  projects: {
    title: "Projects",
    tagline: "Checkout some cool stuffs I've built",
    items: [
      {
        title: "[Project One]", // TODO
        description:
          "[Short blurb — what it does and why it matters. Replace public/projects/project-1.svg.]",
        href: "https://github.com/[your-username]/[repo]", // TODO
        linkLabel: "GitHub",
        image: "/projects/project-1.svg",
        imageAlt: "[Project One screenshot placeholder]",
      },
      {
        title: "[Project Two]", // TODO
        description:
          "[Short blurb for your second project. Swap the placeholder art anytime.]",
        href: "https://github.com/[your-username]/[repo]", // TODO
        linkLabel: "GitHub",
        image: "/projects/project-2.svg",
        imageAlt: "[Project Two screenshot placeholder]",
      },
      {
        title: "[Project Three]", // TODO
        description:
          "[Short blurb for your third project — demo link or write-up welcome.]",
        href: "https://github.com/[your-username]/[repo]", // TODO
        linkLabel: "GitHub",
        image: "/projects/project-3.svg",
        imageAlt: "[Project Three screenshot placeholder]",
      },
    ],
  },

  contact: {
    title: "Let's talk!",
    prompt:
      "Wanna talk about work? opportunity? collaboration? or life?",
    ctaLabel: "Say hello!",
    email: "[your.email@example.com]", // TODO
    footer: "Made on earth with",
  },
} as const;

export type SiteContent = typeof site;
