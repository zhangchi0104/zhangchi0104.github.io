import React from "react";
import { useTranslation } from "react-i18next";

const IntroText: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-3xl font-bold text-gray-600 mt-2 mb-3 md:text-5xl">
          {t("home.heading")}
        </h2>
        <p className="text-md md:text-xl text-gray-500 mt-1">
          {t("home.subheading1")}
        </p>
        <p className="text-md md:text-xl text-gray-500">
          {t("home.subheading2")}
        </p>
      </div>
    </>
  );
};

export default IntroText;
