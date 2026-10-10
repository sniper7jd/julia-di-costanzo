/**
 * Central content for the portfolio.
 * Edit this file (and swap images in /public) to personalize the site.
 *
 * Placeholders are marked with [Your …] or TODO comments.
 * Public asset paths go through withBasePath() for GitHub Pages.
 */

import { withBasePath } from "@/src/lib/basePath";

export const site = {
  name: "Julia Di Costanzo",
  firstName: "Jojo",

  hero: {
    lines: ["Hey,", "I'm", "Jojo"] as const,
    portrait: {
      src: withBasePath("/jojo.png"),
      alt: "Jojo",
    },
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/[your-username]", // TODO
        icon: withBasePath("/icons/github.svg"),
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/[your-username]", // TODO
        icon: withBasePath("/icons/linkedin.svg"),
      },
      {
        label: "Email",
        href: "mailto:[your.email@example.com]", // TODO
        icon: withBasePath("/icons/email.svg"),
      },
      {
        label: "Twitter",
        href: "https://twitter.com/[your-username]", // TODO
        icon: withBasePath("/icons/twitter.svg"),
      },
    ],
  },

  about: {
    title: "About",
    tagline: "Want to know me?",
    paragraphs: [
      "I'm Jojo, powered by cookies, candy and whatever else counts as sweet. Peanuts are a hard no. Jagrit I can tolerate.",
    ],
  },

  experience: {
    title: "Experience",
    tagline: "My journey so far",
    roles: [
      {
        title: "Handling Jagrit",
        company: "Personal",
        dates: "Jan 2024 — Present",
        location: "",
        bullets: [
          "Deal with him every day.",
          "Saying that's not very nice.",
        ],
        tech: ["TypeScript", "React", "Node.js"],
      },
    ],
  },

  clubs: {
    title: "Clubs",
    tagline: "Communities I've been part of",
    items: [
      {
        name: "[Club / Org 1]", // TODO
        logo: withBasePath("/clubs/club-1.svg"),
        href: "#",
      },
      {
        name: "[Club / Org 2]", // TODO
        logo: withBasePath("/clubs/club-2.svg"),
        href: "#",
      },
      {
        name: "[Club / Org 3]", // TODO
        logo: withBasePath("/clubs/club-3.svg"),
        href: "#",
      },
      {
        name: "[Club / Org 4]", // TODO
        logo: withBasePath("/clubs/club-4.svg"),
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
        image: withBasePath("/projects/project-1.svg"),
        imageAlt: "[Project One screenshot placeholder]",
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
