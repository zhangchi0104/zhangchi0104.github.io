import React, { useEffect, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
        <a href="https://github.com/zhangchi0104">
          <FaIcon icon={faGithub} />
        </a>
      </div>
    </>
  );
};

export default SocialIconsBar;
