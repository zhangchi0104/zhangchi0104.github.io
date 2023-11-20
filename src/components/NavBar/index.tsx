import React from "react";
import NavBarItem from "./NavBarItem";
import { SectionName } from "@/store/slices/root";
import LanguageSelector from "./LanguageSelector";
import { useMediaQuery } from "@/hooks";
import { useTranslation } from "react-i18next";
import Settings from "./Settings";
type ItemSelectCallback = (name: SectionName) => void;
const MobileNavBar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between w-screen py-2 px-4 bg-amber-50 fixed items-center">
      <div className="text-2xl font-semibold text-gray-700 text-center">
        {t("navbar.name")}
      </div>
      <Settings />
    </div>
  );
};
const DesktopNavBar: React.FC<{ onClick: ItemSelectCallback }> = ({
  onClick
}) => {
  const { t } = useTranslation();
  return (
    <nav className="fixed w-full max-w-screen-lg py-2 pl-4 pr-4 bg-amber-50 justify-center z-50">
      <div className="flex flex-row md:justify-end items-center">
        <NavBarItem
          className="mr-8 md:mr-12 lg:mr-20"
          name="home"
          onClick={onClick}
        >
          {t("navbar.home")}
        </NavBarItem>
        <NavBarItem
          className="mr-8 md:mr-12 lg:mr-20"
          name="about-me"
          onClick={onClick}
        >
          {t("navbar.aboutMe")}
        </NavBarItem>
        <NavBarItem
          className="mr-8 md:mr-12 lg:mr-20"
          name="projects"
          onClick={onClick}
        >
          {t("navbar.projects")}
        </NavBarItem>
        <Settings />
      </div>
    </nav>
  );
};
const NavBar: React.FC<{ onClick: ItemSelectCallback }> = ({ onClick }) => {
  const match = useMediaQuery("(min-width: 640px)");
  console.log("match", match);
  return !match ? <MobileNavBar /> : <DesktopNavBar onClick={onClick} />;
};

export default NavBar;
