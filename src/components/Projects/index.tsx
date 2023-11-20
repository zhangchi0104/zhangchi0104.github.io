import React from "react";

import IntersectionDetector from "../IntersectionObserver";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setActiveSectionName } from "@/store/actions";
import { selectLocale } from "@/store/selectors";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

const Projects = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const items = t("aboutMe.projects.items", { returnObjects: true });
  return (
    <IntersectionDetector
      onEnter={() => dispatch(setActiveSectionName("projects"))}
      ref={ref}
      onLeaveFromBottom={() => dispatch(setActiveSectionName("about-me"))}
      threshold={0.1}
    >
      <div>
        <h2 className="text-3xl text-gray-700 text-center font-semibold mb-4">
          {`<${t("aboutMe.projects.title")} />`}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start">
        {items.map((props) => (
          <ProjectCard
            heading={props.heading}
            subheading={props.subheading}
            descriptions={props.descriptions}
            image={props.background}
            url={props.url}
            className="mx-4 my-2"
            key={props.heading + props.descriptions.join("")}
          />
        ))}
      </div>
    </IntersectionDetector>
  );
});

export default Projects;
