import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
// Clubs section hidden for now — restore with: import { Clubs } from "@/components/Clubs/Clubs";
import { Projects } from "@/components/Projects/Projects";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      {/* <Clubs /> */}
      <Projects />
      <Contact />
    </main>
  );
}
