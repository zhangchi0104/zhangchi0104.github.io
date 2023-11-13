import React, { useEffect, useRef } from "react";
type CollapableProps = React.PropsWithChildren<{
  className?: string;
  collapsed: boolean;
}>;
const Collapsable: React.FC<CollapableProps> = ({
  className,
  children,
  collapsed
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const height = collapsed
    ? "0px"
    : ref.current?.scrollHeight.toString() + "px" ?? "0px";
  const css = `overflow-hidden ${collapsed ? "h-0" : ""} h-[${height}] ${
    className ?? ""
  }`;
  return (
    <div ref={ref} className={css}>
      {children}
    </div>
  );
};
export default Collapsable;
