import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  title: string;
  tagline?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({
  title,
  tagline,
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <header className={styles.header}>
      <Tag className={styles.title}>{title}</Tag>
      {tagline ? <p className={styles.tagline}>{tagline}</p> : null}
    </header>
  );
}
