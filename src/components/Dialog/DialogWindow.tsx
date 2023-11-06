import React from "react";
import { useExtendStyle } from "../../hooks";
import DialogTitle from "./DialogTitle";
type DialogWindowProps = React.PropsWithChildren<{
  className?: string;
  title: string | JSX.Element;
  icon?: JSX.Element;
  onClose?: () => void;
  showCloseButton?: boolean;
}>;

const DialogWindow: React.FC<DialogWindowProps> = ({
  children,
  icon,
  title,
  className,
  onClose,
  showCloseButton = false
}) => {
  const css = useExtendStyle(
    "fixed shadow-lg bg-white rounded-lg overflow-hidden opacity-0 relative"
  );
  const animation =
    "animate-[fade-in-down_0.3s_ease-in_0.3s] fill-mode-forwards";
  const userStyles = className ?? "";
  return (
    <div className={css`${userStyles} ${animation}`}>
      <DialogTitle icon={icon} title={title} />
      {/** Body */}
      <div>{children}</div>
      {/** Buttons Bar */}
      {showCloseButton && (
        <div className="bg-gray-50 flex flex-row justify-center md:justify-end">
          <button
            className="px-3 py-2 m-2 rounded-md bg-white ring-1 ring-inset text-gray-900"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DialogWindow;
