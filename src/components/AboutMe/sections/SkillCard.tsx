import React from "react";
import AboueMeCard from "../AboutMeCard";
import { useParentCollapsedState } from "@/hooks";
import { capitalize } from "lodash";
type SkillLevelValues = "proficient" | "intermediate" | "beginner";
export interface SkillCardProps {
  heading: string;
  subheading?: string;
  className?: string;
  skillset: { [key: string]: SkillLevelValues };
}

interface SkillBarProps {
  name: string;
  level: SkillLevelValues;
  className?: string;
}
const level2Width = (level: SkillBarProps["level"]) => {
  switch (level) {
    case "beginner":
      return "w-1/3";
    case "intermediate":
      return "w-2/3";
    case "proficient":
      return "w-full";
    default:
      const _exhaustiveCheck: never = level;
  }
};
const SkillBar: React.FC<SkillBarProps> = ({ name, level, className }) => {
  const parentCollapsed = useParentCollapsedState();
  const w = level2Width(level);
  const animation = parentCollapsed
    ? ""
    : "scale-x-0 absolute animate-bounce-in-x";
  // const levelNumber = `${20 * level}%`;
  const skillSeparatorLeft =
    "before:content-[''] before:h-2 before:w-1 before:bg-white before:absolute before:left-1/3 before:z-50 before:bg-white before:dark:bg-slate-600";
  const skillSeparatorRight =
    "after:content-[''] after:h-2 after:w-1 after:bg-white after:absolute after:left-2/3 after:z-50 after:bg-white after:dark:bg-slate-600";
  return (
    <div className={className}>
      <div className="flex justify-between text-sm font-bold text-gray-700 dark:text-slate-300 tracking-wide mx-1">
        <span>{name}</span>
        <span className={"text-gray-600 dark:text-slate-400"}>
          {capitalize(level)}
        </span>
      </div>
      <div
        className={`rounded-xl bg-gray-200 dark:bg-slate-400 w-full h-2 mt-2 relative overflow-hidden ${skillSeparatorLeft} ${skillSeparatorRight}`}
      >
        <div
          className={`bg-amber-500 ${w} absolute h-2 fill-mode-forwards  origin-left ${animation}`}
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
      initExpanded={true}
    >
      <div className="mt-2 mb-2">
        {Object.entries(skillset).map(([name, level], i) => (
          <SkillBar
            name={name}
            level={level}
            key={`${heading}-${name}-${level}`}
            className={i === 0 ? "" : "mt-4"}
          />
        ))}
      </div>
    </AboueMeCard>
  );
};

export default SkillCard;
