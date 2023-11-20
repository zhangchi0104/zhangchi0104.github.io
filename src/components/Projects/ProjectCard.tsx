import React, { useMemo, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/hooks";
import { selectFancyModeEnabled } from "@/store/selectors";
import Collapsable from "../Collapsable";
import { Card } from "../Card";
interface ProjectCardProps {
  className?: string;
  heading: string;
  subheading?: string;
  descriptions?: string[];
  image?: string;
  url?: string;
}

type ProjectCarHeaderProps = Omit<ProjectCardProps, "descriptions"> & {
  collapsed: boolean;
  onClick?: () => void;
};

const ProjectCardHeader: React.FC<ProjectCarHeaderProps> = ({
  heading,
  subheading,
  image,
  url,
  collapsed,
  onClick
}) => {
  const fancyModeEnabled = useAppSelector(selectFancyModeEnabled);
  const linkTransition = useMemo(
    () => (fancyModeEnabled ? "transition hover:text-gray-600" : ""),
    [fancyModeEnabled]
  );
  return (
    <div className="bg-white  transition-[rotate] rounded-lg overflow-hidden">
      {/** div for header image */}
      <div>
        {image && typeof image === "string" ? (
          <img className="h-20 w-full object-cover" src={image} />
        ) : (
          image
        )}
      </div>
      {/** div for Text */}
      <div className="px-6 py-4 font-bold text-sm tracking-wide text-gray-700">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="text-sm">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="xs"
                className={`transition ease-in-out text-xs text-gray-700 ${
                  !collapsed ? "rotate-90" : ""
                } mr-6 hover:cursor-pointer`}
                onClick={onClick}
              />
            </div>
            <div className="flex flex-col">
              <div>{heading}</div>
              <div className="text-gray-500 ">{subheading}</div>
            </div>
          </div>
          {url && (
            <a href={url} className={`text-gray-500  ${linkTransition}`}>
              <FontAwesomeIcon icon={faLink} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  heading,
  subheading,
  descriptions,
  image,
  url
}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Card className={`${className}`}>
      <ProjectCardHeader
        collapsed={collapsed}
        heading={heading}
        subheading={subheading}
        image={image}
        url={url}
        onClick={() => setCollapsed(!collapsed)}
      />
      <Collapsable collapsed={collapsed}>
        <div className="px-6 pb-4">
          {descriptions?.map((description) => (
            <p
              className="flex text-gray-700 text-sm mt-1"
              key={`${heading}-${description}`}
            >
              <span className="mr-4">-</span>
              {description}
            </p>
          ))}
        </div>
      </Collapsable>
    </Card>
  );
};

export default ProjectCard;
