import React from "react";
import IntersectionDetector from "../IntersectionObserver";
import { useAppDispatch } from "@/hooks";
import { setActiveSectionName } from "@/store/actions";

const AboutMe = React.forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  return (
    <IntersectionDetector
      onEnter={() => dispatch(setActiveSectionName("about-me"))}
      onLeaveFromBottom={() => dispatch(setActiveSectionName("home"))}
      ref={ref}
    >
      <h2 className="text-3xl text-gray-700 text-center font-semi-bold mb-4">
        {"<About Me />"}
      </h2>
    </IntersectionDetector>
  );
});

export default AboutMe;
