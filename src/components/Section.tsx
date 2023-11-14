import React, { useState } from "react";
import Collapsable from "./Collapsable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

type SectionProps = React.PropsWithChildren<{
  className?: string;
  title: string;
}>;

const Section: React.FC<SectionProps> = ({ className, children, title }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`mx-4 mb-4 ${className ?? ""}`}>
      <div className="flex flex-row items-center justify-center mb-2">
        <span
          className={`transition ${
            collapsed ? "" : "rotate-90"
          } hover:cursor-pointer`}
          onClick={() => setCollapsed(!collapsed)}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
        <h3 className="text-2xl text-center text-gray-700 font-semibold ml-4">
          {title}
        </h3>
      </div>
      <Collapsable collapsed={collapsed}>{children}</Collapsable>
    </div>
  );
};

export default Section;
