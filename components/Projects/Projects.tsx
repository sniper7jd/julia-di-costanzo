import Image from "next/image";
import { site } from "@/src/content/site";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import styles from "./Projects.module.css";

export function Projects() {
  const { title, tagline, items } = site.projects;

  return (
    <section
      className={styles.section}
      id="projects"
      aria-labelledby="projects-title"
    >
      <div id="projects-title">
        <SectionTitle title={title} tagline={tagline} />
      </div>
      <div className={styles.list}>
        {items.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className={styles.row}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.media}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={960}
                height={540}
                className={styles.image}
              />
            </div>
            <div className={styles.copy}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.blurb}>{project.description}</p>
              <span className={styles.link}>{project.linkLabel}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
