import Section from "@/components/Section";
import React from "react";
import { useTranslation } from "react-i18next";
import SkillCard, { SkillCardProps } from "./SkillCard";
const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skillsSection = t("aboutMe.skills.items", {
    returnObjects: true
  }) as SkillCardProps[];
  return (
    <Section title={t("aboutMe.skills.title")}>
      {skillsSection.map((props) => (
        <SkillCard {...props} key={`${props.heading}`} />
      ))}
    </Section>
  );
};

export default Skills;
