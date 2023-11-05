import React, { useState } from "react";

type TooltipProps = React.PropsWithChildren<{
  position?: "left" | "right" | "top" | "bottom";
  tooltip: string | JSX.Element;
  className?: string;
}>;

const Tooltip: React.FC<TooltipProps> = ({
  position,
  children,
  tooltip,
  className
}) => {
  const [shouldShowTooltip, setShouldShowTooltip] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setShouldShowTooltip(true)}
      onMouseOut={() => setShouldShowTooltip(false)}
    >
      {shouldShowTooltip && <div>{tooltip}</div>}
      <div>{children}</div>
    </div>
  );
};

export default Tooltip;
