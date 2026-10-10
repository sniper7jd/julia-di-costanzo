import Image from "next/image";
import { site } from "@/src/content/site";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import styles from "./Contact.module.css";

export function Contact() {
  const { title, linkLabel, linkHref, footer } = site.contact;
  const socials = site.hero.socials;

  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div id="contact-title">
        <SectionTitle title={title} as="h2" />
      </div>
      <a
        className={styles.cta}
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkLabel}
      </a>
      <footer className={styles.footer}>
        <p className={styles.footerLine}>{footer}</p>
        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={styles.socialLink}
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.icon}
                />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
}
