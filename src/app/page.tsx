// app/page.tsx

import AboutSection from "./components/section/AboutSection";
import Hero from "./components/section/Herosection";
import ProjectsSection from "./components/section/ProjectSection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <ProjectsSection/>
    </>
  );
}