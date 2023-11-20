import resources from "@/@types/resources";
import Section from "@/components/Section";
import { FieldType } from "@/utils";
import React from "react";
import { useTranslation } from "react-i18next";
import AboutMeCard from "../AboutMeCard";

type WorkExperienceCardProps = FieldType<
  typeof resources,
  "translations.aboutMe.workExperience.items"
>[number] & {
  className?: string;
};

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
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
        {descriptions.map((item, i) => (
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

const Work: React.FC = () => {
  const { t } = useTranslation();
  const items = t("aboutMe.workExperience.items", { returnObjects: true });
  return (
    <Section title={t("aboutMe.workExperience.title")}>
      {items.map((props) => (
        <WorkExperienceCard
          {...props}
          key={`${props.title}-${props.company}`}
        />
      ))}
    </Section>
  );
};
export default Work;
