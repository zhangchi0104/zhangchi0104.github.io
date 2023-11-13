import { Card, CardBody } from "@/components/Card";
import Collapsable from "@/components/Collapsable";
import { useExtendStyle } from "@/hooks";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface UniversityCardProps {
  degree: string;
  backgroundUrl?: string;
  name: string;
  duration?: string;
  className?: string;
}
const UniversityCard: React.FC<UniversityCardProps> = ({
  degree,
  backgroundUrl,
  name,
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
        <p className={font`text-gray-800 mb-1 font-bold text-sm`}>{name}</p>
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
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="mx-4">
      <div className="flex flex-row items-center justify-center mb-2">
        <span
          className={`transition ${
            collapsed ? "" : "rotate-90"
          } hover:cursor-pointer`}
          onClick={() => setCollapsed(!collapsed)}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
        <h3 className="text-2xl text-center text-gray-700 font-semibold ml-4">
          Education
        </h3>
      </div>
      <Collapsable collapsed={collapsed}>
        <UniversityCard
          degree={t("aboutMe.education.master.degree")}
          name={t("aboutMe.education.master.university")}
          duration={t("aboutMe.education.master.duration")}
          backgroundUrl="/static/imgs/unimelb.svg"
          className="mb-4"
        />
        <UniversityCard
          degree={t("aboutMe.education.bCs.degree")}
          name={t("aboutMe.education.bCs.university")}
          duration={t("aboutMe.education.bCs.duration")}
          backgroundUrl="/static/imgs/unsw.svg"
        />
      </Collapsable>
    </div>
  );
};
export default Education;
