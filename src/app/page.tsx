// app/page.tsx

import AboutSection from "./components/section/AboutSection";
import Hero from "./components/section/Herosection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection/>
    </>
  );
}