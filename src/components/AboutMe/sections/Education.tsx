import { Card, CardBody } from "@/components/Card";
import { useExtendStyle } from "@/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

import resources from "@/@types/resources";
import Section from "@/components/Section";
import { FieldType } from "@/utils";

type UniversityCardProps = FieldType<
  typeof resources,
  "translations.aboutMe.education.items"
>[number] & {
  className?: string;
};

const UniversityCard: React.FC<UniversityCardProps> = ({
  degree,
  backgroundUrl,
  university,
  duration,
  className
}) => {
  const font = useExtendStyle("tracking-wide");
  const css = useExtendStyle("px-8 py-6 relative");
  return (
    <Card className={css`${className}`}>
      {backgroundUrl && (
        <img
          src={backgroundUrl}
          className="absolute py-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 max-h-full"
        />
      )}
      <CardBody className="text-center relative">
        <p className={font`text-gray-700 mb-1 font-bold text-sm`}>
          {university}
        </p>
        <p className={font`text-gray-500 font-bold text-xs`}>{degree}</p>
        {duration && (
          <p className={font`text-gray-600 tracking-wide mt-1 text-xs`}>
            {duration}
          </p>
        )}
      </CardBody>
    </Card>
  );
};
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
          key={`${props.degree}-${props.university}`}
        />
      ))}
    </Section>
  );
};
export default Education;
