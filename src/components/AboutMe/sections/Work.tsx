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
    <AboutMeCard heading={company} subheading={title} className="mb-4">
      {descriptions.map((item, i) => (
        <p key={`${title}-${company}-${item}`}>{item}</p>
      ))}
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
