import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { selectFancyModeEnabled } from "../../../store/selectors";

type FaIconProps = Pick<FontAwesomeIconProps, "icon">;

const useFaIcon = () => {
  const fancyModeEnabled = useSelector(selectFancyModeEnabled);
  const basicStyle = "text-neutral-500 hover:text-neutral-700";
  const transitionCss =
    "transition ease-in-out hover:scale-125 hover:-translate-y-1 duration-200";
  const finalStyle = fancyModeEnabled
    ? `${basicStyle} ${transitionCss}`
    : basicStyle;

  return {
    style: finalStyle
  };
};

const FaIcon: React.FC<FaIconProps> = ({ icon }) => {
  const { style } = useFaIcon();
  return <FontAwesomeIcon icon={icon} size="2xl" className={style} />;
};

export default FaIcon;
