import React from "react";
import { useTranslation } from "react-i18next";

const IntroText: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-5xl font-bold text-gray-600 mt-2">
          {t("topbar.heading")}
        </h2>
        <p className="text-xl text-gray-500 mt-1">{t("topbar.subheading1")}</p>
        <p className="text-xl text-gray-500">{t("topbar.subheading2")}</p>
      </div>
    </>
  );
};

export default IntroText;
