"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/src/content/site";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import styles from "./Clubs.module.css";

export function Clubs() {
  const { title, tagline, items } = site.clubs;
  const [index, setIndex] = useState(0);
  const visible = Math.min(3, items.length);

  useEffect(() => {
    if (items.length <= visible) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [items.length, visible]);

  const slides = Array.from({ length: visible }, (_, offset) => {
    return items[(index + offset) % items.length];
  });

  return (
    <section className={styles.section} id="clubs" aria-labelledby="clubs-title">
      <div id="clubs-title">
        <SectionTitle title={title} tagline={tagline} />
      </div>
      <div className={styles.carousel} aria-roledescription="carousel">
        <div className={styles.track}>
          {slides.map((club, i) => (
            <a
              key={`${club.name}-${i}`}
              href={club.href}
              className={styles.slide}
              aria-label={club.name}
            >
              <Image
                src={club.logo}
                alt={club.name}
                width={200}
                height={120}
                className={styles.logo}
              />
            </a>
          ))}
        </div>
        {/* Controls hidden to match swaaz.dev */}
        <div className={styles.controls} aria-hidden="true">
          <button type="button" className="slider-control-prev" tabIndex={-1} />
          <button type="button" className="slider-control-next" tabIndex={-1} />
        </div>
      </div>
    </section>
  );
}
