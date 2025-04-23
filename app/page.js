"use client";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Main() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
