import AboutSection from "./components/section/AboutSection";
import ContactSection from "./components/section/ContactSection";
import ExperienceSection from "./components/section/ExperienceSection";
import HeroSection from "./components/section/HeroSection";
import ProjectsSection from "./components/section/ProjectSection";
import RecommendationSection from "./components/section/RecommendationSection";
import SkillsSection from "./components/section/SkillSection";


export default function HomePage() {
  return (
    <>
      {/* <HeroSection/> */}
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ExperienceSection/>
      <RecommendationSection/>
      <SkillsSection/>
      <ContactSection/>

    </>
  );
}