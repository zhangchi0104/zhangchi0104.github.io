import React from "react";
import { useExtendStyle } from "@/hooks";
type CardProps = React.PropsWithChildren<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}>;

export const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  const css = useExtendStyle("text-lg font-semibold text-gray-700");
  return <div className={css`${className ?? ""}`}>{children}</div>;
};

export const CardBody: React.FC<CardProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  const rootCss = useExtendStyle("shadow-lg rounded-lg bg-white");
  return (
    <div className={rootCss`${className ?? ""}`} onClick={onClick}>
      {children}
    </div>
  );
};
