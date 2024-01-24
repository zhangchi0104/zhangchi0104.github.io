import ToggleSwitch from "@/components/ToggleSwtich";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleFancyMode } from "@/store/actions";
import { selectFancyModeEnabled } from "@/store/selectors";
import { useTranslation } from "react-i18next";

const FancyModeToggle = () => {
  const fancyModeEnabled = useAppSelector(selectFancyModeEnabled);
  const dispatch = useAppDispatch();
  const switchFancyMode = () => {
    dispatch(toggleFancyMode());
  };
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <p>{t("navbar.settings.fancyMode")}</p>
      <ToggleSwitch
        checked={fancyModeEnabled}
        onClick={() => switchFancyMode()}
      ></ToggleSwitch>
    </div>
  );
};
export default FancyModeToggle;
