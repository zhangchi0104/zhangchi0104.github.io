import { useExtendStyle } from "@/hooks";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  const baseStyle = "relative font-bold";
  const css = useExtendStyle(baseStyle);
  const inactiveStyle = "text-gray-700 text-sm";
  const activeStyle = "text-xl text-sky-900";
  const makeStyle = (name: string) => {
    return css`${name === locale ? activeStyle : inactiveStyle}`;
  };
  const setLanguage = (lang: string) => {
    if (lang === locale) {
      return;
    }
    i18n.changeLanguage(lang).then(() => setLocale(lang));
  };
  const onClick = () => {
    if (locale === "zh") {
      setLanguage("en");
    } else {
      setLanguage("zh");
    }
  };
  return (
    <div onClick={onClick} className="hover:cursor-pointer">
      <span className={makeStyle("zh")}>中</span>/
      <span className={makeStyle("en")}>Eng</span>
    </div>
  );
};

export default LanguageSelector;
