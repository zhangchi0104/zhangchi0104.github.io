import React from "react";
interface ToggleSwitchProps {
  className?: string;
  checked?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  className = "",
  checked: enabled = false,
  onClick
}) => {
  const animation = enabled ? "translate-x-[200%]" : "";
  const bg = enabled ? "bg-green-400" : "bg-gray-400";
  return (
    <div
      className={`relative hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className={`transition rounded-full ${bg} duration-400 w-11 h-5`} />
      <div
        className={`rounded-full top-0 absolute transition ${animation} bg-white h-3 w-3 duration-300 m-1`}
      />
    </div>
  );
};

export default ToggleSwitch;
