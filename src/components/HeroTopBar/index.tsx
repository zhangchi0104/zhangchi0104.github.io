import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import IntroText from "./IntroText";
import SocialIconsBar from "./SocialIconsBar";

const HeroTopBar: React.FC = () => (
  <div className="mx-4 flex flex-col-reverse md:grid md:grid-cols-3 md:gap-4 h-screen items-center p-4 justify-center">
    <div className="col-span-2">
      <IntroText />
      <div className="mt-2 flex mx-auto md:mt-12">
        <SocialIconsBar />
      </div>
    </div>
    <div className="">
      <ProfilePhoto />
    </div>
  </div>
);

export default HeroTopBar;
