import { Card, CardBody } from "@/components/Card";
import { useExtendStyle } from "@/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

interface UniversityCardProps {
  degree: string;
  backgroundUrl?: string;
  name: string;
  duration?: string;
}
const UniversityCard: React.FC<UniversityCardProps> = ({
  degree,
  backgroundUrl,
  name,
  duration
}) => {
  const font = useExtendStyle("font-bold tracking-wide");
  return (
    <Card className="px-8 py-6 relative">
      {backgroundUrl && (
        <img
          src={backgroundUrl}
          className="absolute py-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 max-h-full"
        />
      )}
      <CardBody className="text-center relative">
        <p className={font`text-gray-800 mb-1 tracking-wide`}>{name}</p>
        <p className={font`text-gray-600`}>{degree}</p>
        {duration && (
          <p className={font`text-gray-600 tracking-wide mt-1`}>{duration}</p>
        )}
      </CardBody>
    </Card>
  );
};
const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-4">
      <h3 className="text-2xl text-center text-gray-700 font-semibold mb-2">
        Education
      </h3>
      <UniversityCard
        degree={t("aboutMe.education.master.degree")}
        name={t("aboutMe.education.master.university")}
        duration={t("aboutMe.education.master.duration")}
        backgroundUrl="/static/imgs/unimelb.svg"
      />
    </div>
  );
};
export default Education;
