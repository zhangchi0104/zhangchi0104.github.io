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
  const css = `overflow-hidden h-0 ${className ?? ""}`;
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.style.height = collapsed
      ? "0"
      : ref.current.scrollHeight + "px";
  });
  const animation = `transition-[height] origin-top ease-in-out duration-500`;
  return (
    <div ref={ref} className={`${css} ${animation}`}>
      {children}
    </div>
  );
};
export default Collapsable;
