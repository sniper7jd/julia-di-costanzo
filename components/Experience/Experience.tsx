import { site } from "@/src/content/site";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import styles from "./Experience.module.css";

export function Experience() {
  const { title, tagline, roles } = site.experience;

  return (
    <section
      className={styles.section}
      id="experience"
      aria-labelledby="experience-title"
    >
      <div id="experience-title">
        <SectionTitle title={title} tagline={tagline} />
      </div>
      <ol className={styles.timeline}>
        {roles.map((role) => (
          <li key={`${role.company}-${role.title}`} className={styles.entry}>
            <span className={styles.dot} aria-hidden="true" />
            <h3 className={styles.jobTitle}>{role.title}</h3>
            <p className={styles.metaRow}>
              <span className={styles.company}>{role.company}</span>
              <span className={styles.meta}>
                {" "}
                {role.location
                  ? `${role.dates} · ${role.location}`
                  : role.dates}
              </span>
            </p>
            <ul className={styles.bullets}>
              {role.bullets.map((bullet) => (
                <li key={bullet.slice(0, 48)}>{bullet}</li>
              ))}
            </ul>
            <ul className={styles.chips}>
              {role.tech.map((tech) => (
                <li key={tech}>
                  <span className={styles.chip}>{tech}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
