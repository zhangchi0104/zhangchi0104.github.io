import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card } from "../Card";
import Collapsable from "../Collapsable";

interface AboutMeCardSelfProps {
  heading: string | JSX.Element;
  subheading?: string | JSX.Element;
  className?: string;
  image?: string | JSX.Element;
}
type AboutMeCardProps = React.PropsWithChildren<AboutMeCardSelfProps>;

type AboutMeCardHeaderProps = React.PropsWithChildren<
  AboutMeCardSelfProps & { expanded: boolean; onClick: () => void }
>;

const AboutMeCardHeader: React.FC<AboutMeCardHeaderProps> = ({
  heading,
  subheading,
  expanded,
  onClick
}) => {
  return (
    <div className="flex flex-row justify-start items-start">
      <p className="text-sm">
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={onClick}
          size="xs"
          className={`transition ease-in-out text-xs text-gray-700 ${
            expanded ? "rotate-90" : ""
          } mr-6 hover:cursor-pointer`}
        />
      </p>
      <div className="flex flex-col">
        <div className="text-sm font-bold text-gray-700 tracking-wide">
          {heading}
        </div>
        <div className="text-sm font-bold text-gray-500 tracking-wide">
          {subheading}
        </div>
      </div>
    </div>
  );
};

const AboueMeCard: React.FC<AboutMeCardProps> = ({
  heading,
  subheading,
  children,
  className
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={`px-8 py-6 ${className ?? ""}`}>
      <AboutMeCardHeader
        heading={heading}
        subheading={subheading}
        expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      />
      <Collapsable observable collapsed={!expanded}>
        {children}
      </Collapsable>
    </Card>
  );
};
export default AboueMeCard;
