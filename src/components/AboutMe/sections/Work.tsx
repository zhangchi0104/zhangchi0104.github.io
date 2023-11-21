import Section from "@/components/Section";
import React from "react";
import { useTranslation } from "react-i18next";
import WorkExperienceCard from "./WorkExperienceCard";

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
