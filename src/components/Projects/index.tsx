import React from "react";

import IntersectionDetector from "../IntersectionObserver";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setActiveSectionName } from "@/store/actions";
import { selectLocale } from "@/store/selectors";
import { useTranslation } from "react-i18next";

const Projects = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const dispatch = useAppDispatch();

  return (
    <IntersectionDetector
      onEnter={() => dispatch(setActiveSectionName("projects"))}
      ref={ref}
      onLeaveFromBottom={() => dispatch(setActiveSectionName("about-me"))}
    >
      <div>
        <h2 className="text-3xl text-gray-700 text-center font-semibold mb-4">
          {"<Projects />"}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 place-items-stretch"></div>
    </IntersectionDetector>
  );
});

export default Projects;
