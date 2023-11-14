import Section from "@/components/Section";
import React from "react";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  return <Section title={t("aboutMe.skills.title")} />;
};

export default Skills;
