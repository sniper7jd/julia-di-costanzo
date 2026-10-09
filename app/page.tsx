import { Banner } from "@/components/Banner/Banner";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Skills } from "@/components/Skills/Skills";
import { Clubs } from "@/components/Clubs/Clubs";
import { Projects } from "@/components/Projects/Projects";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Clubs />
      <Projects />
      <Contact />
    </main>
  );
}
