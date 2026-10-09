import { site } from "@/src/content/site";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import styles from "./Skills.module.css";

export function Skills() {
  const { title, tagline, categories } = site.skills;

  return (
    <section className={styles.section} id="skills" aria-labelledby="skills-title">
      <div id="skills-title">
        <SectionTitle title={title} tagline={tagline} />
      </div>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.name} className={styles.column}>
            <h3 className={styles.category}>{category.name}</h3>
            <ul className={styles.list}>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
