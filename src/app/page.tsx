// app/page.tsx

import AboutSection from "./components/section/AboutSection";
import ExperienceSection from "./components/section/ExperienceSection";
import Hero from "./components/section/Herosection";
import ProjectsSection from "./components/section/ProjectSection";
import SkillsSection from "./components/section/SkillSection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <ProjectsSection/>
      <ExperienceSection/>
      <SkillsSection/>
    </>
  );
}