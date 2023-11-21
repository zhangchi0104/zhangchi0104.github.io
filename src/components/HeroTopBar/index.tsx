import React, { Suspense, useEffect } from "react";
const ProfilePhoto = React.lazy(
  () => import(/* webpackChunkName: "profile-photo" */ "./ProfilePhoto")
);
const IntroText = React.lazy(
  () => import(/* webpackChunkName: "intro-text" */ "./IntroText")
);
const SocialIconsBar = React.lazy(
  () => import(/* webpackChunkName: "social-icons" */ "./SocialIconsBar")
);

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
        <Suspense fallback={<Loading />}>
          <IntroText />
        </Suspense>
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
  useEffect(() => {
    const callback = () => {
      const scrolled = window.scrollY > 0;
      dispatch(setScrolled(scrolled));
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);
  return (
    <div ref={ref}>
      <HeroTopBarContent />
    </div>
  );
});

export default HeroTopBar;
