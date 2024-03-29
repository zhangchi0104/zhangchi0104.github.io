import React from "react";

import IntersectionDetector from "../IntersectionObserver";
import { useAppDispatch } from "@/hooks";
import { setActiveSectionName } from "@/store/actions";
import { useTranslation } from "react-i18next";
const ProjectCard = React.lazy(
  () => import(/* webpackChunkName: "project-card" */ "./ProjectCard")
);

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
        <h2 className="text-3xl text-gray-700 dark:text-slate-300 text-center font-semibold mb-4">
          {`<${t("aboutMe.projects.title")} />`}
        </h2>
      </div>
      <div className="grid grid-cols-1 mx-4 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-start mb-4">
        {items.map((props) => (
          <ProjectCard
            heading={props.heading}
            subheading={props.subheading}
            descriptions={props.descriptions}
            // image={props.background}
            url={props.url}
            className="w-full"
            key={props.heading + props.descriptions.join("")}
          />
        ))}
      </div>
    </IntersectionDetector>
  );
});

export default Projects;
