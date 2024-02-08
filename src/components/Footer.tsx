import { Github, Linkedin, Twitter } from "lucide-react";

import { social_media } from "@/constants/constant";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center py-10 gap-5">
      <div onClick={() => window.open(social_media.twitter)}>
        <Twitter
          fill="white"
          className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
          size={32}
        />
      </div>
      <div onClick={() => window.open(social_media.github)}>
        <Github
          className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
          size={32}
        />
      </div>
      <div onClick={() => window.open(social_media.linkedin)}>
        <Linkedin
          className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
          size={32}
        />
      </div>
    </div>
  );
};

export default Footer;
