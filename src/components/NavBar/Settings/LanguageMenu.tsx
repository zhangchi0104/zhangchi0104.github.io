import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageMemu: React.FC = () => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  const setLanguage = (lang: string) => {
    const newLocale = lang === "aris" ? "aris_" + locale : lang;
    if (lang === locale) {
      return;
    }
    i18n.changeLanguage(newLocale).then(() => setLocale(newLocale));
  };
  const onLangListClick = (lang: "zh" | "en" | "aris") => {
    if (lang !== locale) {
      if (lang === "aris") {
        setLanguage("aris");
      } else {
        setLanguage(lang);
      }
    }
  };
  return (
    <ul className="text-gray-900 text-sm ">
      <li
        className={`${
          locale === "zh" ? "font-bold text-sky-900" : ""
        } hover:cursor-pointer hover:bg-gray-100 px-4 py-2`}
        data-value={"zh"}
        onClick={() => onLangListClick("zh")}
      >
        简体中文
      </li>
      <li
        data-value="en"
        className={`${
          locale.startsWith("en-") || locale === "en"
            ? "font-bold text-sky-900"
            : ""
        } hover:cursor-pointer hover:bg-gray-100 px-4 py-2`}
        onClick={() => onLangListClick("en")}
      >
        English
      </li>
      <li
        data-value="arisu"
        className={`${
          locale.includes("aris") ? "font-bold text-sky-900" : ""
        } hover:cursor-pointer hover:bg-gray-100 px-4 py-2`}
        onClick={() => onLangListClick("aris")}
      >
        {locale.includes("zh") ? "邦邦咔邦" : "Ban-Ban-Ka-Ban"}
      </li>
    </ul>
  );
};

export default LanguageMemu;
