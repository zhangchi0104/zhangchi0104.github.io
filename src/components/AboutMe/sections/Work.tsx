import Section from "@/components/Section";
import React from "react";
import { useTranslation } from "react-i18next";

const Work: React.FC = () => {
  const { t } = useTranslation();

  return <Section title={t("aboutMe.workExperience.title")} />;
};
export default Work;
