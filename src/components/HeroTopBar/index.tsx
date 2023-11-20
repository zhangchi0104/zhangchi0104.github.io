import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import IntroText from "./IntroText";
import SocialIconsBar from "./SocialIconsBar";

const HeroTopBarContent = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="mx-4 flex flex-col-reverse md:grid md:grid-cols-3 md:gap-4 h-screen items-center p-4 justify-center"
      ref={ref}
    >
      <div className="col-span-2 text-center md:text-left">
        <IntroText />
        <div className="mt-2 flex mx-auto md:mt-12 flex-row justify-center md:justify-normal">
          <SocialIconsBar />
        </div>
      </div>
      <div className="">
        <ProfilePhoto />
      </div>
    </div>
  );
});

const HeroTopBar = React.forwardRef<HTMLDivElement>((_, ref) => {
  // useSubscribeToIntersectionObserver(ref);
  return (
    <div ref={ref} data-section="home">
      <HeroTopBarContent />
    </div>
  );
});

export default HeroTopBar;
