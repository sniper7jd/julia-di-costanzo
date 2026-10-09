import Image from "next/image";
import { site } from "@/src/content/site";
import styles from "./Hero.module.css";

export function Hero() {
  const { lines, portrait, socials } = site.hero;

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <h1 className={styles.wordmark}>
            {lines.map((line) => (
              <span key={line} className={styles.line}>
                {line}
              </span>
            ))}
          </h1>
          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={60}
                    height={60}
                    className={styles.icon}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.spacer} aria-hidden="true" />
        <div className={styles.photoCol}>
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={640}
            height={800}
            priority
            className={styles.portrait}
          />
        </div>
      </div>
    </section>
  );
}
