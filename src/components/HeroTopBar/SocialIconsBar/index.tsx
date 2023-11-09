import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FaIcon from "./FaIcon";
import MailIcon from "./MailIcon";
const SocialIconsBar: React.FC = () => {
  return (
    <>
      <div>
        <a href="https://github.com/zhangchi0104" className="mr-16">
          <FaIcon icon={faGithub} />
        </a>
        <div className="mr-16 inline">
          <MailIcon />
        </div>
        <a href="https://www.linkedin.com/in/chi-zhang-88606616a/">
          <FaIcon icon={faLinkedin} />
        </a>
      </div>
    </>
  );
};

export default SocialIconsBar;
