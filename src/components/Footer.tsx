import { Github, Linkedin, Twitter } from "lucide-react";

import { social_media } from "@/constants/constant";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center py-10 gap-5">
      <Twitter
        fill="white"
        className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
        size={32}
        onClick={() => window.open(social_media.twitter)}
      />
      <Github
        className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
        size={32}
        onClick={() => window.open(social_media.github)}
      />
      <Linkedin
        className="hover:cursor-pointer hover:transition-opacity hover:opacity-30"
        size={32}
        onClick={() => window.open(social_media.linkedin)}
      />
    </div>
  );
};

export default Footer;
