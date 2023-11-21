import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

import Section from "@/components/Section";
import UniversityCard from "./UniversityCard";

const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section title={t("aboutMe.education.title")}>
      {t("aboutMe.education.items", {
        returnObjects: true,
        fallbackLng: "en"
      }).map((props) => (
        <UniversityCard
          {...props}
          className="mb-4"
          key={`inner-${props.degree}-${props.university}`}
        />
      ))}
    </Section>
  );
};
export default Education;
