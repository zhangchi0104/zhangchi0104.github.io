import resources from "@/@types/resources";
import { FieldType } from "@/utils";
import React from "react";
import AboutMeCard from "../AboutMeCard";

type WorkExperienceCardProps = FieldType<
  typeof resources,
  "translations.aboutMe.workExperience.items"
>[number] & {
  className?: string;
};
export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  title,
  className,
  company,
  descriptions
}) => {
  return (
    <AboutMeCard
      className={`mb-4 ${className ?? ""}`}
      heading={company}
      subheading={title}
    >
      <div className="mt-2">
        {descriptions.map((item) => (
          <p
            className="text-gray-700 text-sm mb-1 flex tracking-wide"
            key={`${title}-${company}-${item}`}
          >
            <span className="mr-4">-</span>
            {item}
          </p>
        ))}
      </div>
    </AboutMeCard>
  );
};
export default WorkExperienceCard;
