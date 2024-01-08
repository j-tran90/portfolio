import Hero from "../components/Hero";
import ProjectCards from "../components/Projectcards";
import Skills from "./Skills";
import About from "./About";

function Home() {
  return (
    <>
      <Hero />
      <div id="projects">
        <ProjectCards />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  );
}

export default Home;
