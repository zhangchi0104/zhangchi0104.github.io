import { useExtendStyle } from "@/hooks";
import React from "react";
import { createPortal } from "react-dom";

interface DropdownPropsBase {
  className?: string;
  anchor: HTMLElement | null;
  visible: boolean;
}

type DropdownProps = React.PropsWithChildren<DropdownPropsBase>;

const Dropdown: React.FC<DropdownProps> = ({
  className,
  anchor,
  visible,
  children
}) => {
  const style = useExtendStyle(
    "bg-white rounded-xl shadow-md absolute dark:bg-gray-700"
  );
  return (
    anchor &&
    visible &&
    createPortal(<div className={style`${className}`}>{children}</div>, anchor)
  );
};

export default Dropdown;
