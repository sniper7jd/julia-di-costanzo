import { site } from "@/src/content/site";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import styles from "./About.module.css";

export function About() {
  const { title, tagline, paragraphs } = site.about;

  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.inner}>
        <div id="about-title">
          <SectionTitle title={title} tagline={tagline} />
        </div>
        <div className={styles.body}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
