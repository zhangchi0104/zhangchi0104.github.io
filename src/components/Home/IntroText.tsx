import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const IntroText: React.FC = () => {
  const { t } = useTranslation();
  const copyEmail = () => {
    navigator.clipboard.writeText(t("home.email")).then(() => {
      setCopied(true);
    });
  };

  const [copied, setCopied] = React.useState(false);
  const animation = useMemo(
    () => (copied ? "animate-fade-bounce-in" : "scale-0 opacity-0"),
    [copied]
  );
  useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [copied]);

  return (
    <>
      <div className="flex flex-col justify-center h-full text-gray-500 dark:text-slate-400">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-slate-300 mt-2 mb-3 md:text-5xl">
          {t("home.heading")}
        </h2>
        <p className="text-md md:text-xl  mt-1">{t("home.subheading1")}</p>
        <p className="text-md md:text-xl">{t("home.subheading2")}</p>
        <div  className="text-xs md:text-sm mt-2 flex flex-col md:flex-row items-center">
          <div onClick={copyEmail} className="">
            <span className="mr-1">
              <EnvelopeIcon className="h-6 w-6 inline" />
            </span>
            {t("home.email")}
          </div>

          <p
            className={`${animation} md:ml-2 mt-2 md:mt-0 rounded-full bg-teal-700 text-gray-50 dark:text-slate-300 dark:bg-slate-600 px-4 py-0.5`}
          >
            {t("home.copied")}
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroText;
