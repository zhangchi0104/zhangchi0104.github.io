import React, { Suspense } from "react";
const ProfilePhoto = React.lazy(
  () => import(/* webpackChunkName: "profile-photo" */ "./ProfilePhoto")
);
import IntroText from "./IntroText";
import SocialIconsBar from "./SocialIconsBar";
import IntersectionDetector from "../IntersectionObserver";
import { useAppDispatch } from "@/hooks";
import { setScrolled } from "@/store/actions";
import Loading from "../Loading";

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
      <div>
        <Suspense fallback={<Loading />}>
          <ProfilePhoto />
        </Suspense>
      </div>
    </div>
  );
});

const HeroTopBar = React.forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  return (
    <IntersectionDetector
      ref={ref}
      threshold={0.98}
      onEnter={() => dispatch(setScrolled(false))}
      onLeave={() => dispatch(setScrolled(true))}
    >
      <HeroTopBarContent />
    </IntersectionDetector>
  );
});

export default HeroTopBar;
