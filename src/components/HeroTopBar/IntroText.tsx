import React from "react";
import { useTranslation } from "react-i18next";
import SocialIconsBar from "./SocialIconsBar";

const IntroText: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col justify-end h-full">
        <h2 className="text-5xl font-bold text-gray-600">
          {t("topbar.heading")}
        </h2>
        <p className="text-2xl text-gray-500">{t("topbar.subheading1")}</p>
        <p className="text-2xl text-gray-500">{t("topbar.subheading2")}</p>
      </div>
      <div>
        <SocialIconsBar />
      </div>
    </>
  );
};

export default IntroText;
