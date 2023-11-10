import React, { useRef } from "react";
import HeroTopBar from "./components/HeroTopBar";
import AnimatedCavnas from "./components/AnimatedCanvas";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import { SectionName } from "./store/slices/root";
const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const onNavBarClick = (name: SectionName) => {
    switch (name) {
      case "home": {
        if (homeRef.current) {
          homeRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
      case "about-me": {
        if (aboutMeRef.current) {
          aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
      case "projects": {
        if (projectsRef.current) {
          projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
    }
  };
  return (
    <>
      <NavBar onClick={onNavBarClick}></NavBar>
      <AnimatedCavnas />
      <div className="max-w-screen-lg mx-auto">
        <HeroTopBar ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        <div ref={projectsRef}></div>
      </div>
    </>
  );
};
export default App;
