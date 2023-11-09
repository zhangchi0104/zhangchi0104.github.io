import React from "react";
import HeroTopBar from "./components/HeroTopBar";
import AnimatedCavnas from "./components/AnimatedCanvas";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
const App: React.FC = () => (
  <>
    <NavBar />
    <AnimatedCavnas />
    <div className="max-w-screen-lg mx-auto">
      <HeroTopBar />
      <AboutMe />
    </div>
  </>
);
export default App;
