import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { GitHub, LinkedIn } from "@helpers/importHelper";

export default function Social() {
  return (
    <>
      <div className="flex">
        <a
          href="https://github.com/hallstrom91"
          target="_blank"
          className="text-black dark:text-white md:hover:text-red-700  md:hover:animate-pulse "
        >
          <GitHub size={40} />
        </a>
        <a
          href="https://linkedin.com/in/simon-hällström-776b0728a"
          target="_blank"
          className="text-black dark:text-white md:hover:text-red-700 md:hover:animate-pulse"
        >
          <LinkedIn size={40} />
        </a>
      </div>
    </>
  );
}
