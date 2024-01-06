import { Card, CardBody } from "@/components/Card";
import { useExtendStyle } from "@/hooks";
import React from "react";
import resources from "@/@types/resources";
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
  backgroundAlt,
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
          alt={backgroundAlt}
        />
      )}
      <CardBody className="text-center relative">
        <p
          className={font`text-gray-700 dark:text-slate-300 mb-1 font-bold text-sm`}
        >
          {university}
        </p>
        <p
          className={font`text-gray-500 dark:text-slate-400 font-bold text-xs`}
        >
          {degree}
        </p>
        {duration && (
          <p
            className={font`text-gray-600 dark:text-slate-400 tracking-wide mt-1 text-xs`}
          >
            {duration}
          </p>
        )}
      </CardBody>
    </Card>
  );
};
export default UniversityCard;
