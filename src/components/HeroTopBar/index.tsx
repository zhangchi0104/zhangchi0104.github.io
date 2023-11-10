import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import IntroText from "./IntroText";
import SocialIconsBar from "./SocialIconsBar";
import IntersectionDetector from "../IntersectionObserver";
import { useAppDispatch } from "@/hooks";
import { setActiveSectionName } from "@/store/actions";

const HeroTopBarContent = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="mx-4 flex flex-col-reverse md:grid md:grid-cols-3 md:gap-4 h-screen items-center p-4 justify-center"
      ref={ref}
    >
      <div className="col-span-2">
        <IntroText />
        <div className="mt-2 flex mx-auto md:mt-12 flex-row">
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
  const dispatch = useAppDispatch();
  return (
    <IntersectionDetector
      ref={ref}
      onEnter={() => dispatch(setActiveSectionName("home"))}
    >
      <HeroTopBarContent />
    </IntersectionDetector>
  );
});

export default HeroTopBar;
