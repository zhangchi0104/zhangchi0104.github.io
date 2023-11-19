import React from "react";
import IntersectionDetector from "../IntersectionObserver";
import { useAppDispatch } from "@/hooks";
import { setActiveSectionName } from "@/store/actions";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import { useTranslation } from "react-i18next";

const AboutMe = React.forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <IntersectionDetector
      onEnter={() => dispatch(setActiveSectionName("about-me"))}
      onLeaveFromBottom={() => dispatch(setActiveSectionName("home"))}
      ref={ref}
    >
      <h2 className="text-3xl text-gray-700 text-center font-semibold mb-4">
        {`<${t("navbar.aboutMe")} />`}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 place-items-stretch">
        <Work />
        <Education />
        <Skills />
      </div>
    </IntersectionDetector>
  );
});

export default AboutMe;
