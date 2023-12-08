import React, { Suspense } from "react";
import IntersectionDetector from "../IntersectionObserver";
import { useAppDispatch } from "@/hooks";
import { setActiveSectionName } from "@/store/actions";
const Education = React.lazy(() => import("./sections/Education"));
const Work = React.lazy(() => import("./sections/Work"));
const Skills = React.lazy(() => import("./sections/Skills"));

import { useTranslation } from "react-i18next";

const AboutMe = React.forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <IntersectionDetector
      ref={ref}
      threshold={0.1}
      onEnter={() => dispatch(setActiveSectionName("about-me"))}
      onLeaveFromBottom={() => dispatch(setActiveSectionName("home"))}
    >
      <div ref={ref}>
        <h2 className="text-3xl text-gray-700 dark:text-slate-300 text-center font-semibold mb-4">
          {`<${t("navbar.aboutMe")} />`}
        </h2>
        <div className="grid grid-cols-1 mx-4 md:mx-0 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-4">
          <Suspense fallback={<div className="hidden" />}>
            <Work />
          </Suspense>
          <Suspense fallback={<div className="hidden" />}>
            <Education />
          </Suspense>
          <Suspense fallback={<div className="hidden" />}>
            <Skills />
          </Suspense>
        </div>
      </div>
    </IntersectionDetector>
  );
});

export default AboutMe;
