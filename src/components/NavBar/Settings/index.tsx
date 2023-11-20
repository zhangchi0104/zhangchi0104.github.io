import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "../../Dropdown";
import GearsIcon from "../../icons/GearIcon";
import LanguageMemu from "./LanguageMenu";
import FancyModeToggle from "./FancyModeToggle";

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
          className={`hover:cursor-pointer relative ${
            dropdownVisibility ? iconAnimation : ""
          }`}
        />
      </div>
      {anchorRef.current && (
        <Dropdown
          anchor={anchorRef.current}
          visible={dropdownVisibility}
          className="w-52 right-0 py-4 mr-1"
        >
          <div className="text-gray-900 text-sm">
            <LanguageMemu />
            <hr className="mt-3" />
            <div className=" px-4">
              <FancyModeToggle />
            </div>
            <hr className="mt-3" />
          </div>
        </Dropdown>
      )}
    </>
  );
};

export default Settings;
