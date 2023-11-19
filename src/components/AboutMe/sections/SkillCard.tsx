import React from "react";
import AboueMeCard from "../AboutMeCard";
import { useParentCollapsedState } from "@/hooks";

interface SkillCardProps {
  heading: string;
  subheading?: string;
  className?: string;
  skillset: { [key: string]: number };
}

interface SkillBarProps {
  name: string;
  level: number;
  className?: string;
}
const level2Width = (level: number) => {
  switch (level) {
    case 1:
      return "w-1/5";
    case 2:
      return "w-2/5";
    case 3:
      return "w-3/5";
    case 4:
      return "w-4/5";
    default:
      return "w-full";
  }
};
const SkillBar: React.FC<SkillBarProps> = ({ name, level, className }) => {
  const parentCollapsed = useParentCollapsedState();
  const w = level2Width(level);
  const animation = parentCollapsed
    ? ""
    : "scale-x-0 absolute animate-bounce-in-x";
  const levelNumber = `${20 * level}%`;
  console.log({ parentCollapsed });
  return (
    <div className={className}>
      <div className="flex justify-between text-sm font-bold text-gray-700 tracking-wide mx-1">
        <span>{name}</span>
        <span className="text-gray-500">{levelNumber}</span>
      </div>
      <div className="rounded-xl bg-gray-200 w-full h-2 mt-2 relative overflow-hidden">
        <div
          className={`bg-amber-500 ${w} absolute h-2 fill-mode-forwards rounded-xl origin-left ${animation}`}
        ></div>
      </div>
    </div>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({
  heading,
  subheading,
  className,
  skillset
}) => {
  return (
    <AboueMeCard
      heading={heading}
      subheading={subheading}
      className={`mb-4 ${className ?? ""}`}
    >
      <div className="mt-2 mb-2">
        {Object.entries(skillset).map(([name, level], i) => (
          <SkillBar
            name={name}
            level={level}
            key={`${heading}-${name}`}
            className={i === 0 ? "" : "mt-4"}
          />
        ))}
      </div>
    </AboueMeCard>
  );
};

export default SkillCard;
