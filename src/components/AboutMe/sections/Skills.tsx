import Loading from "@/components/Loading";
import Section from "@/components/Section";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
const SkillCard = React.lazy(
  () => import(/* webpackChunkName: "skill-card" */ "./SkillCard")
);
const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skillsSection = t("aboutMe.skills.items", { returnObjects: true });
  return (
    <Section title={t("aboutMe.skills.title")}>
      {skillsSection.map((props) => (
        <Suspense fallback={<Loading />}>
          <SkillCard {...props} key={`${props.heading}`} />
        </Suspense>
      ))}
    </Section>
  );
};

export default Skills;
