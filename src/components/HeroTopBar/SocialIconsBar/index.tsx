import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FaIcon from "./FaIcon";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const SocialIconsBar: React.FC = () => {
  return (
    <div>
      <a href="https://github.com/zhangchi0104" className="mr-8">
        <FaIcon icon={faGithub} />
      </a>

      <FaIcon icon={faEnvelope} />
      <a href="https://github.com/zhangchi0104" className="ml-8">
        <FaIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialIconsBar;
