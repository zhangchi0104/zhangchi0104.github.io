import React from "react";
import { useTranslation } from "react-i18next";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const IntroText: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col justify-center h-full text-gray-500 dark:text-slate-400">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-slate-300 mt-2 mb-3 md:text-5xl">
          {t("home.heading")}
        </h2>
        <p className="text-md md:text-xl  mt-1">{t("home.subheading1")}</p>
        <p className="text-md md:text-xl">{t("home.subheading2")}</p>
        <p className="text-xs md:text-sm flex items-center mt-1 justify-center md:justify-start">
          <span className="mr-1">
            <EnvelopeIcon className="h-6 w-6" />
          </span>
          {t("home.email")}
        </p>
      </div>
    </>
  );
};

export default IntroText;
