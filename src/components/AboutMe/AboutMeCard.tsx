import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card } from "../Card";
import Collapsable from "../Collapsable";

interface AboutMeCardSelfProps {
  heading: string | JSX.Element;
  subheading?: string | JSX.Element;
  className?: string;
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
    <div className="flex flex-row justify-start items-center">
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={onClick}
        className={`transition ease-in-out ${
          expanded ? "rotate-90" : ""
        } mr-8 hover:cursor-pointer`}
      />
      <div className="flex flex-col">
        <div className="text-lg font-bold text-gray-700">{heading}</div>
        <div className="text-gray-500">{subheading}</div>
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
    <Card className={`px-8 py-2 ${className ?? ""}`}>
      <AboutMeCardHeader
        heading={heading}
        subheading={subheading}
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
      <Collapsable collapsed={!expanded}>{children}</Collapsable>
    </Card>
  );
};
export default AboueMeCard;
