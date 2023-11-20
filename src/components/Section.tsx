import React, { useRef, useState } from "react";
import Collapsable, { CollapsableHandle } from "./Collapsable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { UpdateContextProvider, useAppSelector } from "@/hooks";
import { selectFancyModeEnabled } from "@/store/selectors";

type SectionProps = React.PropsWithChildren<{
  className?: string;
  title: string;
}>;

const Section: React.FC<SectionProps> = ({ className, children, title }) => {
  const [collapsed, setCollapsed] = useState(false);
  const ref = useRef<CollapsableHandle>(null);
  const animation = `transition ${collapsed ? "" : "rotate-90"}`;
  return (
    <div className={`mx-4 mb-4 ${className ?? ""}`}>
      <div className="flex flex-row items-center justify-center mb-2 ">
        <p
          className={`${animation} hover:cursor-pointer`}
          onClick={() => setCollapsed(!collapsed)}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </p>
        <h3 className="text-2xl text-center text-gray-700 font-semibold ml-4">
          {title}
        </h3>
      </div>
      <UpdateContextProvider
        value={(deltaHeight) => {
          ref.current?.resize(deltaHeight);
        }}
      >
        <Collapsable ref={ref} collapsed={collapsed}>
          {children}
        </Collapsable>
      </UpdateContextProvider>
    </div>
  );
};

export default Section;
