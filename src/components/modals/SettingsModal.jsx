import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@context/ThemeContext";
import Table from "@shared/Table";
import Cookies from "js-cookie";

export default function SettingsModal({ isCogOpen, closeModal }) {
  const [removedCookieMsg, setRemovedCookieMsg] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const cookies = t("data.cookieInformation", { returnObjects: true });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set("language", lng, { expires: 365 });
  };

  const removeCookies = () => {
    Cookies.remove("language");
    Cookies.remove("theme");
    Cookies.remove("cookiePolicy");
    setRemovedCookieMsg(t("translation.settings.cookies.removedMessage"));
  };

  useEffect(() => {
    if (removedCookieMsg) {
      const timer = setTimeout(() => {
        setRemovedCookieMsg("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [removedCookieMsg]);

  return (
    <>
      {isCogOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-80"
            onClick={closeModal}
          ></div>
          <div className="flex items-center justify-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-neutral-300 text-black dark:bg-neutral-800 rounded-md shadow-md shadow-white/30 dark:text-white transition-colors duration-1000">
              <div className="mt-3">
                <div className="mt-2">
                  <h1 className="text-xl font-bold text-black dark:text-white text-center uppercase pb-2">
                    {t("translation.settings.title")}
                  </h1>
                  <div className="border-t-2 border-white"></div>
                  {/* options container - cookies*/}
                  <div className="my-4">
                    <div className="flex items-center">
                      <h1 className="text-lg font-semibold">
                        {t("translation.settings.cookies.title")}
                      </h1>
                      <div className="ml-2 border-t-2 border-white/30 shadow-white rounded w-20"></div>
                    </div>
                    <p className="text-sm">
                      {t("translation.settings.cookies.information")}
                    </p>
                    {/* Cookie table info  */}
                    <div className="overflow-x-auto w-full">
                      <Table cookies={cookies} />
                    </div>
                    <div className="pt-3">
                      <button
                        onClick={removeCookies}
                        className="px-2 py-1 text-sm border border-black dark:border-white bg-neutral-200  dark:bg-neutral-600 rounded"
                      >
                        {t("translation.settings.cookies.remove")}
                      </button>
                    </div>
                  </div>
                  {/* options container - language*/}
                  <div className="my-4">
                    <div className="flex items-center">
                      <h1 className="text-lg font-semibold">
                        {" "}
                        {t("translation.settings.language.title")}
                      </h1>
                      <div className="ml-2 border-t-2 border-white/30 shadow-white rounded w-20"></div>
                    </div>
                    <p className="text-sm">
                      {t("translation.settings.language.information")}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => changeLanguage("sv")}
                        className="px-2 py-1 mr-2 text-sm border border-black dark:border-white bg-neutral-200  dark:bg-neutral-600 rounded"
                      >
                        Svenska
                      </button>

                      <button
                        onClick={() => changeLanguage("en")}
                        className="px-2 py-1 ml-2 text-sm border border-black dark:border-white bg-neutral-200  dark:bg-neutral-600 rounded"
                      >
                        Engelska
                      </button>
                    </div>
                  </div>
                  {/* options container - theme*/}
                  <div className="my-4">
                    <div className="flex items-center">
                      <h1 className="text-lg font-semibold">
                        {t("translation.settings.theme.title")}
                      </h1>
                      <div className="ml-2 border-t-2 border-white/30 shadow-white rounded w-20"></div>
                    </div>
                    <p className="text-sm">
                      {t("translation.settings.theme.information")}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={toggleTheme}
                        className="px-2 py-1 text-sm border border-black dark:border-white bg-neutral-200  dark:bg-neutral-600 rounded"
                      >
                        {theme === "light" ? "Dark Mode" : "Light Mode"}
                      </button>
                    </div>
                  </div>
                  {/*end of options container - display dynamic msg & close btn*/}
                  <div className="border-t-2 border-white "></div>
                  <div className="max-w-xl min-h-12">
                    {removedCookieMsg && (
                      <p className="mt-2 text-white">{removedCookieMsg}</p>
                    )}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="p-2 text-sm font-semibold text-white bg-neutral-600 rounded"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
