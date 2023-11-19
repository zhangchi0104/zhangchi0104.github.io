import ToggleSwitch from "@/components/ToggleSwtich";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleFancyMode } from "@/store/actions";
import { selectFancyModeEnabled } from "@/store/selectors";

const FancyModeToggle = () => {
  const fancyModeEnabled = useAppSelector(selectFancyModeEnabled);
  const dispatch = useAppDispatch();
  const switchFancyMode = () => {
    dispatch(toggleFancyMode());
  };
  return (
    <div className="flex justify-between items-center mt-3">
      <p>Fancy Mode</p>
      <ToggleSwitch
        checked={fancyModeEnabled}
        onClick={() => switchFancyMode()}
      ></ToggleSwitch>
    </div>
  );
};
export default FancyModeToggle;
