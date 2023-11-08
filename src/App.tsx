import React from "react";
import HeroTopBar from "./components/HeroTopBar";
import AnimatedCavnas from "./components/AnimatedCanvas";
const App: React.FC = () => (
  <>
    <AnimatedCavnas />
    <div className="max-w-screen-lg mx-auto">
      <HeroTopBar />
    </div>
  </>
);
export default App;
