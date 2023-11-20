import React, { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dialog from "../../Dialog";
import FaIcon from "./FaIcon";
import { useTranslation } from "react-i18next";
const EMAIL = "alex@otakuma.dev";
interface MailIconInterface {
  className?: string;
}
const MailIcon: React.FC<MailIconInterface> = ({}) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text: string) => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(text);
    }
  };
  const onEmailClick = () => {
    copyToClipboard(EMAIL);
    setShowToast(true);
  };
  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false);
        clearTimeout(timeout);
      }, 1200);
    }
  }, [showToast]);
  let toastContainerCss = "flex pb-2 opacity-0";
  let toastCssBase =
    "mx-auto text-xs font-semibold text-gray-50 bg-sky-600 rounded-xl py-1 px-6";
  let toastCssAnimation = "animate-fade-bounce-in fill-mode-forwards";
  if (showToast) {
    toastContainerCss += ` ${toastCssAnimation}`;
  }
  const titleElem = (
    <div className="text-lg font-semibold">
      {t("home.mail.dialog.title")}{" "}
      <span className="text-xs text-gray-500 font-normal">
        (*{t("home.mail.dialog.hint")})
      </span>
    </div>
  );
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <FaIcon icon={faEnvelope} />
      </button>
      <Dialog
        visibility={showModal}
        onClose={() => setShowModal(false)}
        icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />}
        title={titleElem}
      >
        <p
          className="px-16 pt-5 pb-2 hover:cursor-pointer"
          onClick={() => onEmailClick()}
        >
          {EMAIL}
        </p>
        <div className={toastContainerCss}>
          <span className={`${toastCssBase}`}>
            {t("home.mail.dialog.toast")}
          </span>
        </div>
      </Dialog>
    </>
  );
};

export default MailIcon;
