import React from "react";
import IntersectionDetector from "../IntersectionObserver";
import { useAppDispatch } from "@/hooks";
import { setActiveSectionName } from "@/store/actions";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

const AboutMe = React.forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  return (
    <IntersectionDetector
      onEnter={() => dispatch(setActiveSectionName("about-me"))}
      onLeaveFromBottom={() => dispatch(setActiveSectionName("home"))}
      ref={ref}
    >
      <h2 className="text-3xl text-gray-700 text-center font-semibold mb-4">
        {"<About Me />"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 items-start">
        <Work />
        <Education />
        <Skills />
      </div>
    </IntersectionDetector>
  );
});

export default AboutMe;
