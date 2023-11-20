import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

import Section from "@/components/Section";

const UniversityCard = React.lazy(
  () => import(/* webpackChunkName: "university-card" */ "./UniversityCard")
);
const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section title={t("aboutMe.education.title")}>
      {t("aboutMe.education.items", {
        returnObjects: true,
        fallbackLng: "en"
      }).map((props) => (
        <Suspense
          fallback={<div>Loading...</div>}
          key={`${props.degree}-${props.university}`}
        >
          <UniversityCard
            {...props}
            className="mb-4"
            key={`inner-${props.degree}-${props.university}`}
          />
        </Suspense>
      ))}
    </Section>
  );
};
export default Education;
