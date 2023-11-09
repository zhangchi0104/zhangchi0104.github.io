import React from "react";
import { useExtendStyle } from "@/hooks";
type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

export const Card: React.FC<CardProps> = ({ children, className }) => {
  const rootCss = useExtendStyle("shadow-lg rounded-lg bg-white");
  return <div className={rootCss`${className}`}>{children}</div>;
};
