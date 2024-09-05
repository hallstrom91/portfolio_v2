import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SettingsModal from "@modals/SettingsModal";
import { Open, Close, Cog } from "@helpers/importHelper";
import styles from "@css/Navbar.module.css";

export default function Navbar({ setActivePage }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToolTip(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = () => {
    setShowToolTip(false);
    toggleMenu();
  };

  const tooltipClick = () => {
    setShowToolTip(false);
  };

  const handleLinkClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  const openSettings = () => {
    setDisplaySettings(true);
  };

  const closeSettings = () => {
    setDisplaySettings(false);
  };

  return (
    <>
      {/* Open Menu Button */}

      <div className="fixed bottom-[6rem] right-5 z-50">
        <div className="relative">
          <button
            onClick={handleMenuClick}
            className="w-16 h-16 bg-neutral-300 dark:bg-neutral-600 border border-black dark:border-white rounded-full flex items-center justify-center shadow-lg shadow-black  focus:outline-none transition-colors duration-1000"
          >
            {isOpen ? (
              <Close
                className="icon transition-colors duration-1000"
                height={40}
              />
            ) : (
              <Open
                className="icon transition-colors duration-1000"
                height={40}
              />
            )}
          </button>
          {showToolTip && (
            <div
              onClick={tooltipClick}
              className={`${styles.tooltip} ${styles.show} ${styles.tooltippulse} font-semibold tracking-tight text-sm md:text-base`}
            >
              {t("translation.navbar.tooltiphelper")}
            </div>
          )}
        </div>
      </div>

      {/* nav menu container */}
      <div
        className={`fixed top-0 left-0 w-full flex justify-center transition-transform duration-700 ease-in-out z-50  ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex justify-center my-5 z-50">
          <div className="max-w-2xl border-2 border-white dark:border-black bg-gradient-to-r from-neutral-200 to-neutral-300 dark:bg-gradient-to-r dark:from-neutral-700 dark:to-neutral-950 p-4 rounded-xl transition-colors duration-1000">
            {/* nav container icons / buttons */}
            <div className="flex justify-center">
              <ul className="flex gap-6 md:gap-8 text-black dark:text-white uppercase">
                <span className="">
                  <span className="flex justify-center">{/* ICONS? */}</span>
                  <li className="text-base font-semibold cursor-pointer md:hover:text-red-800 md:text-lg">
                    <Link onClick={() => handleLinkClick("Hero")}>
                      {t("translation.navbar.profile")}
                    </Link>
                  </li>
                </span>
                <span>
                  <span className="flex justify-center">{/* ICONS? */}</span>
                  <li className="text-base font-semibold cursor-pointer md:hover:text-red-800 md:text-lg">
                    <Link onClick={() => handleLinkClick("Skills")}>
                      {t("translation.navbar.projects")}
                    </Link>
                  </li>
                </span>
                <span>
                  <span className="flex justify-center">{/* ICONS? */}</span>

                  <li className="text-base font-semibold cursor-pointer md:hover:text-red-800 md:text-lg">
                    <Link onClick={() => handleLinkClick("Showcase")}>
                      {t("translation.navbar.showcase")}
                    </Link>
                  </li>
                </span>
                <span>
                  <span className="flex justify-center">{/* ICONS? */}</span>
                  <li className="text-base font-semibold cursor-pointer md:hover:text-red-800 md:text-lg">
                    <Link onClick={() => handleLinkClick("Contact")}>
                      {t("translation.navbar.contact")}
                    </Link>
                  </li>
                </span>
              </ul>
            </div>
            {/* Settings Icons */}
            <div className="absolute top-[5rem] right-5 transform -translate-y-1/3 lg:top-1/2 lg:right-5 lg:transform lg:-translate-y-1/2">
              {isOpen && (
                <button
                  className="p-2 rounded-full border-2 border-black bg-gradient-to-r from-white to-neutral-600 shadow-lg shadow-black"
                  onClick={openSettings}
                >
                  <Cog height={40} className="lg:hover:animate-spin" />
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
      <SettingsModal isCogOpen={displaySettings} closeModal={closeSettings} />
    </>
  );
}
