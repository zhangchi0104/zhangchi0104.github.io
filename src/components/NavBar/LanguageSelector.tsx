import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "../Dropdown";
import GearsIcon from "../icons/GearIcon";
import ToggleSwitch from "../ToggleSwtich";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const [dropdownVisibility, setDropdownVisibility] = useState(true);
  const anchorRef = useRef<HTMLDivElement>(null);
  const setLanguage = (lang: string) => {
    if (lang === locale) {
      return;
    }
    i18n.changeLanguage(lang);
  };
  const toggleDropdown = () => {
    setDropdownVisibility(!dropdownVisibility);
  };
  const onLangListClick = (ev: React.MouseEvent<HTMLUListElement>) => {
    const target = ev.target as HTMLLIElement;
    if (target.dataset.value && target.dataset.value !== locale) {
      setLanguage(target.dataset.value);
    }
  };

  const iconAnimation = "animate-spin-bounce duration-300";
  return (
    <>
      <div onClick={toggleDropdown} ref={anchorRef}>
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
          <div>
            <ul
              className="text-gray-900 text-sm px-4"
              onClick={onLangListClick}
            >
              <li
                className={`${locale === "zh" ? "font-bold text-sky-900" : ""}`}
                data-value={"zh"}
              >
                简体中文
              </li>
              <li
                data-value="en"
                className={`${
                  locale === "en" ? "font-bold text-sky-900" : ""
                } mt-3`}
              >
                English
              </li>
              <li
                data-value="arisu"
                className={`${
                  locale.includes("arisu") ? "font-bold text-sky-900" : ""
                } mt-3`}
              >
                {locale.includes("zh") ? "邦邦咔邦" : "Ban-Ban-Ka-Ban"}
              </li>
            </ul>
            <hr className="mt-3" />
            <div className="text-gray-900 text-sm px-4">
              <div className="flex justify-between items-center mt-3">
                <p>Fancy Mode</p>
                <ToggleSwitch></ToggleSwitch>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
        </Dropdown>
      )}
    </>
  );
};

export default LanguageSelector;
