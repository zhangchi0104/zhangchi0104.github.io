import Loading from "@/components/Loading";
import Section from "@/components/Section";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

const WorkExperienceCard = React.lazy(
  () =>
    import(
      /* webpackChunkName: "work-experience-card" */ "./WorkExperienceCard"
    )
);
const Work: React.FC = () => {
  const { t } = useTranslation();
  const items = t("aboutMe.workExperience.items", { returnObjects: true });
  return (
    <Section title={t("aboutMe.workExperience.title")}>
      {items.map((props) => (
        <Suspense fallback={<Loading />}>
          <WorkExperienceCard
            {...props}
            key={`${props.title}-${props.company}`}
          />
        </Suspense>
      ))}
    </Section>
  );
};
export default Work;
