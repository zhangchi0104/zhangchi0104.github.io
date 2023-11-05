import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FaIcon from "./FaIcon";
const SocialIconsBar: React.FC = () => {
  return (
    <div>
      <a href="https://github.com/zhangchi0104" className="mr-8">
        <FaIcon icon={faGithub} />
      </a>
      <a href="https://github.com/zhangchi0104" className="mx-8">
        <FaIcon icon={faGithub} />
      </a>
      <a href="https://github.com/zhangchi0104" className="ml-8">
        <FaIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialIconsBar;
