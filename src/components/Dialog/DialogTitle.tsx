import React from "react";

interface DialogTitleProps {
  icon?: JSX.Element | string;
  title: string | JSX.Element;
}

const DialogTitle: React.FC<DialogTitleProps> = ({ icon, title }) => {
  const titleElem =
    typeof title === "string" ? (
      <div className="text-lg font-semibold">{title}</div>
    ) : (
      title
    );
  return (
    <div className="flex flex-row justify-start items-center px-4 pt-2 pb-1 text-gray-900">
      {icon && <div className="mr-2">{icon}</div>}
      {titleElem}
    </div>
  );
};
export default DialogTitle;
