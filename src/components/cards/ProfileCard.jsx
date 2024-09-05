import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  GeoLocation,
  GithubRounded,
  Globe,
  LinkedinRounded,
  Email,
  Profession,
} from "@helpers/importHelper";

export default function ProfileCard({ setActivePage }) {
  const { t } = useTranslation();
  return (
    <>
      {/* Sidebar Menu Container */}
      <section>
        <div className="flex mt-10 w-full max-w-xl md:mt-5">
          {/* Sidebar Menu Card */}
          <div className="border-2 border-black bg-neutral-300 text-black dark:bg-neutral-800 dark:text-white px-10 rounded-lg transition-colors duration-1000">
            {/* img here - below */}
            <div className="flex justify-center">
              <div className="w-48 h-48 overflow-hidden border-2 border-black bg-gradient-to-b from-neutral-800 to-neutral-100 rounded-lg shadow-xl shadow-black dark:shadow-white relative bottom-[5rem]">
                <img
                  src="/images/portfolio_profile.png"
                  className="object-scale-down"
                  alt="Picture of Myself"
                />
              </div>
            </div>
            {/* Content For Profile */}
            <div className="px-5 rounded-lg">
              <div className="flex gap-2 justify-center mt-2">
                <Globe
                  className="icon transition-colors duration-1000"
                  height={30}
                />
                <LinkedinRounded
                  className="icon transition-colors duration-1000"
                  height={30}
                />
                <GithubRounded
                  className="icon transition-colors duration-1000"
                  height={30}
                />
              </div>
              {/* Profile Links */}
              <div className="p-6 border-2 border-black dark:border-white rounded-lg mt-4 bg-gradient-to-r from-neutral-400 to-neutral-300 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-neutral-700">
                <ul className="text-center pt-3 gap-2">
                  <li className="flex items-center p-1  my-2 tracking-tighter font-light">
                    <Profession
                      className="icon transition-colors duration-1000"
                      height={22}
                    />
                    <span className="pl-2 text-sm">
                      {t("translation.hero.profilecard.title")}
                    </span>
                  </li>
                  <div className="border-black dark:border-white border-2 w-40 flex justify-center opacity-30 rounded-2xl shadow-md shadow-white"></div>
                  <li className="flex items-center p-1  my-2 tracking-tighter font-light">
                    <Email
                      className="icon transition-colors duration-1000"
                      height={22}
                    />
                    <span className="pl-2 text-sm">shallstrom91@gmail.se</span>
                  </li>
                  <div className="border-black dark:border-white border-2 w-40 flex justify-center opacity-30 rounded-2xl shadow-md shadow-white"></div>
                  <li className="flex items-center p-1  my-2 tracking-tighter font-light">
                    <GeoLocation
                      className="icon transition-colors duration-1000"
                      height={25}
                    />
                    <span className="pl-2 text-nowrap text-sm">
                      Stockholm, Sweden
                    </span>
                  </li>
                  <div className="border-black dark:border-white border-2 w-40 flex justify-center opacity-30 rounded-2xl shadow-md shadow-white"></div>
                </ul>
              </div>
              <div className="flex justify-center pt-5 pb-8">
                <Link
                  onClick={() => setActivePage("Resume")}
                  className="p-2 border-2 rounded-xl border-black dark:border-white bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black md:hover:bg-neutral-100 md:hover:text-black dark:md:hover:bg-neutral-800 dark:md:hover:text-white tracking-tight"
                >
                  {t("translation.hero.resumeBtn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
