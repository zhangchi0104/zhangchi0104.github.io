import React, { Suspense, useLayoutEffect, useRef } from "react";
import Home from "./components/Home";
const AnimatedCavnas = React.lazy(() => import("./components/AnimatedCanvas"));
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import { SectionName } from "./store/slices/root";
import Projects from "./components/Projects";
import { useDarkMode } from "./hooks";
import { useTranslation } from "react-i18next";

const useI18nTitle = () => {
  const { t, i18n } = useTranslation();
  useLayoutEffect(() => {
    document.title = t("title");
  }, [t, i18n.language]);
};

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const darkModeEabled = useDarkMode();
  useI18nTitle();
  useLayoutEffect(() => {
    const root = document.getElementsByTagName("html")[0];
    const style = `${darkModeEabled ? "dark" : "light"}`;
    root.setAttribute("class", style);
  }, [darkModeEabled]);

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
          aboutMeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
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
    <div>
      <Suspense fallback={<div className="hidden"></div>}>
        <AnimatedCavnas />
      </Suspense>
      <div className="max-w-screen-lg lg:mx-auto mx-8">
        <Home ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        <Projects ref={projectsRef}></Projects>
        <NavBar onClick={onNavBarClick}></NavBar>
      </div>
    </div>
  );
};
export default App;
