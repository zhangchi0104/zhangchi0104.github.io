import { useAppSelector, useExtendStyle } from "@/hooks";
import { selectActiveSectionName } from "@/store/selectors";
import { SectionName } from "@/store/slices/root";
import React from "react";
type NavBarItemProps = React.PropsWithChildren<{
  name: SectionName;
  className?: string;
  onClick?: (name: SectionName) => void;
}>;
const NavBarItem: React.FC<NavBarItemProps> = ({
  name,
  children,
  onClick,
  className
}) => {
  const css = useExtendStyle("text-xl relative cursor-default");
  const underlineCss =
    "after:content-[''] after:absolute after:w-full after:h-[4px] after:bg-sky-900 dark:after:bg-sky-600 " +
    "after:bottom-0 after:left-0 after:-mb-[0.5rem]";
  const inactiveStyle =
    "font-semi-bold text-gray-700 dark:text-slate-300 hover:cursor-pointer";
  const activeStyle =
    "font-bold text-sky-900 dark:text-sky-600 after:animate-bounce-emphasis " +
    underlineCss;
  const activeSection = useAppSelector(selectActiveSectionName);
  const styleByActiveSection = (targetSection: string) =>
    activeSection === targetSection ? activeStyle : inactiveStyle;
  return (
    <p
      onClick={() => onClick && onClick(name)}
      className={css`${styleByActiveSection(name)} ${className || ""}`}
    >
      {children}
    </p>
  );
};

export default NavBarItem;
