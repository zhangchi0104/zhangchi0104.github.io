import React from "react";
import NavBarItem from "./NavBarItem";
import { SectionName } from "@/store/slices/root";
import LanguageSelector from "./LanguageSelector";
import { useMediaQuery } from "@/hooks";
type ItemSelectCallback = (name: SectionName) => void;
const MobileNavBar = () => {
  return (
    <div className="flex justify-between w-screen py-2 px-4 bg-amber-50 fixed items-center">
      <div className="text-2xl font-semibold text-gray-700 text-center">
        Alex Zhang
      </div>
      <LanguageSelector />
    </div>
  );
};
const DesktopNavBar: React.FC<{ onClick: ItemSelectCallback }> = ({
  onClick
}) => {
  return (
    <nav className="fixed w-screen py-2 pl-4 pr-4 flex flex-row md:justify-end items-center bg-amber-50 justify-center md:pr-20">
      <NavBarItem
        className="mr-8 md:mr-12 lg:mr-20"
        name="home"
        onClick={onClick}
      >
        Home
      </NavBarItem>
      <NavBarItem
        className="mr-8 md:mr-12 lg:mr-20"
        name="about-me"
        onClick={onClick}
      >
        About Me
      </NavBarItem>
      <NavBarItem
        className="mr-8 md:mr-12 lg:mr-20"
        name="projects"
        onClick={onClick}
      >
        Projects
      </NavBarItem>
      <LanguageSelector />
    </nav>
  );
};
const NavBar: React.FC<{ onClick: ItemSelectCallback }> = ({ onClick }) => {
  const match = useMediaQuery("(min-width: 640px)");
  console.log("match", match);
  return !match ? <MobileNavBar /> : <DesktopNavBar onClick={onClick} />;
};

export default NavBar;
