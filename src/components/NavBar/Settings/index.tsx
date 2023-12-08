import React, { useRef, useState } from "react";
import Dropdown from "../../Dropdown";
import GearsIcon from "../../icons/GearIcon";
import LanguageMemu from "./LanguageMenu";
import FancyModeToggle from "./FancyModeToggle";
import AppearanceMenu from "./AppearanceMenu";

const Settings: React.FC = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisibility(!dropdownVisibility);
  };

  const iconAnimation = "animate-spin-bounce duration-300";
  return (
    <>
      <div onClick={toggleDropdown} ref={anchorRef} className="relative">
        <GearsIcon
          className={`hover:cursor-pointer relative dark:text-slate-300 ${
            dropdownVisibility ? iconAnimation : ""
          }`}
        />
      </div>
      {anchorRef.current && (
        <Dropdown
          anchor={anchorRef.current}
          visible={dropdownVisibility}
          className="w-52 right-0 py-2 mr-1 mt-2 text-gray-900 dark:text-slate-400"
        >
          <div className="text-sm">
            <LanguageMemu />
            <hr className="my-2 opacity-20" />
            <FancyModeToggle />
            <hr className="my-2 opacity-20" />
            <AppearanceMenu />
          </div>
        </Dropdown>
      )}
    </>
  );
};

export default Settings;
