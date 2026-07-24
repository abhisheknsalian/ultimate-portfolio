import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import Experience from "@/components/home/experience";
import Education from "@/components/home/education";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}