import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import DialogWindow from "./DialogWindow";

type DialogProps = React.PropsWithChildren<{
  visibility: boolean;
  className?: string;
  title: string | JSX.Element;
  icon?: JSX.Element;
  onClose?: () => void;
}>;

const Dialog: React.FC<DialogProps> = ({
  visibility,
  className,
  children,
  onClose,
  title,
  icon
}) => {
  const modalStyle =
    "fixed h-screen w-screen flex justify-center items-center z-100 top-0 left-0 bg-gray-700/80";
  const styleWithTransition = `${modalStyle} animate-fade-in`;
  return (
    <>
      {visibility &&
        createPortal(
          <div
            className={styleWithTransition}
            onClick={(e) => {
              if (onClose && e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <DialogWindow
              title={title}
              icon={icon}
              onClose={onClose}
              className={className}
            >
              {children}
            </DialogWindow>
          </div>,
          document.body
        )}
    </>
  );
};

export default Dialog;
