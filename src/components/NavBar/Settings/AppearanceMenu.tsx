import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectAppearance } from "@/store/selectors";

import React from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon
} from "@heroicons/react/24/outline";
import { setAppearance } from "@/store/actions";
import { useTranslation } from "react-i18next";
const AppearanceMenu: React.FC = () => {
  const appearance = useAppSelector(selectAppearance);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const onListItemClick = (newAppearance: "light" | "dark" | "system") => {
    dispatch(setAppearance(newAppearance));
  };
  return (
    <ul>
      <li
        className={`${
          appearance === "light"
            ? "font-bold text-sky-900 dark:text-slate-300"
            : ""
        } flex items-center hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2`}
        onClick={() => onListItemClick("light")}
      >
        <span className="mr-2 text-sm">
          <SunIcon className="h-5 w-5" />
        </span>
        {t("navbar.settings.lightMode")}
      </li>
      <li
        className={`${
          appearance === "dark"
            ? "font-bold text-sky-900 dark:text-slate-300"
            : ""
        } flex items-center hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2`}
        onClick={() => onListItemClick("dark")}
      >
        <span className="mr-2 text-sm">
          <MoonIcon className="h-5 w-5" />
        </span>
        {t("navbar.settings.darkMode")}
      </li>
      <li
        className={`${
          appearance === "system"
            ? "font-bold text-sky-900 dark:text-slate-300"
            : ""
        } flex items-center hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2`}
        onClick={() => onListItemClick("system")}
      >
        <span className="mr-2 text-sm">
          <ComputerDesktopIcon className="h-5 w-5" />
        </span>
        {t("navbar.settings.followSystem")}
      </li>
    </ul>
  );
};

export default AppearanceMenu;
