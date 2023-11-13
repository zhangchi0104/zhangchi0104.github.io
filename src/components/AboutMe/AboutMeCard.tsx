import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "../Card";
import { useExtendStyle } from "@/hooks";

interface AboutMeCardSelfProps {
  heading: string | JSX.Element;
  subheading?: string | JSX.Element;
  className?: string;
}
type AboutMeCardProps = React.PropsWithChildren<AboutMeCardSelfProps>;

type AboutMeCardHeaderProps = React.PropsWithChildren<
  AboutMeCardSelfProps & { expanded: boolean; onClick: () => void }
>;

type AboutMeCardBodyProps = React.PropsWithChildren;

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

const AboutMeCardBody = React.forwardRef<HTMLDivElement, AboutMeCardBodyProps>(
  ({ children }, ref) => {
    const css = useExtendStyle(
      "transition-[height] origin-top pt-1 ease-in-out overflow-hidden h-0"
    );
    return (
      <div className={css``} ref={ref}>
        {children}
      </div>
    );
  }
);

const AboueMeCard: React.FC<AboutMeCardProps> = ({
  heading,
  subheading,
  children,
  className
}) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const height = expanded ? ref.current.scrollHeight : 0;
    ref.current.style.height = height + "px";
  });
  return (
    <Card className={className}>
      <AboutMeCardHeader
        heading={heading}
        subheading={subheading}
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
      <AboutMeCardBody ref={ref}>{children}</AboutMeCardBody>
    </Card>
  );
};
export default AboueMeCard;
