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
        href: "https://unsplash.com/photos/a-close-up-of-a-cat-on-a-bed-gz0rGe7mhL8",
        icon: withBasePath("/icons/github.svg"),
      },
      {
        label: "LinkedIn",
        href: "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk",
        icon: withBasePath("/icons/linkedin.svg"),
      },
      {
        label: "Email",
        href: "https://unsplash.com/photos/selective-focus-photography-of-orange-and-white-cat-on-brown-table-75715CVEJhI",
        icon: withBasePath("/icons/email.svg"),
      },
      {
        label: "Twitter",
        href: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
        dates: "September 1 — Present",
        location: "",
        bullets: [
          "Deal with him every day.",
          "Saying that's not very nice.",
        ],
        tech: ["morning", "afternoon", "night"],
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
        title: "Jojo's creation",
        description: "Photos from the summer",
        href: "https://juliadc.dev",
        linkLabel: "juliadc.dev",
        image: withBasePath("/projects/project1.jpg"),
        imageAlt: "Jojo's creation",
      },
    ],
  },

  contact: {
    title: "Let's talk!",
    linkLabel: "everyday till the end of time",
    linkHref: "https://juliadc.dev",
    footer: "made for jd by jd",
  },
} as const;

export type SiteContent = typeof site;
