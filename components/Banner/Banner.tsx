import { site } from "@/src/content/site";
import styles from "./Banner.module.css";

export function Banner() {
  return (
    <aside className={styles.banner} role="note">
      <p className={styles.text}>{site.banner.text}</p>
    </aside>
  );
}
