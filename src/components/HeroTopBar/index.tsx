import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import IntroText from "./IntroText";

const HeroTopBar: React.FC = () => (
  <div className="mx-4 grid grid-cols-3 gap-4 p-4">
    <div className="col-span-2">
      <IntroText />
    </div>
    <div>
      <ProfilePhoto />
    </div>
  </div>
);

export default HeroTopBar;
