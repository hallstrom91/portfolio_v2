import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Globe } from "@helpers/importHelper";

export default function LanguageBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set("language", lng, { expires: 365 });
  };

  // change to ref
  const language_selector_id = "language-selector";
  useEffect(() => {
    const handleWindowClick = (event) => {
      const target = event.target.closest("button");
      if (target && target.id === language_selector_id) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <div className="relative inline-block text-center bg-neutral-200 text-black rounded-md items-center justify-center py-1 px-2 md:hover:shadow-lg md:hover:shadow-red-800">
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center items-center rounded-full focus:outline-none border:rounded-xl"
            id={language_selector_id}
            aria-haspopup="true"
            aria-expanded="true"
          >
            {/* LANGUAGE SELECTOR GLOBE ICON */}
            <Globe height={20} />
            <span className="pl-2 py-1">
              {t("translation.languageBtn.selector")}
            </span>
          </button>
        </div>
        {isOpen && (
          <div className="origin-top-left absolute left-1 mt-2 rounded-md shadow-xl drop-shadow-lg bg-white ring-1 ring-black ring-opacity-5 justify-start align-middle">
            <div
              className=""
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-menu"
            >
              {/* LANGUAGE BUTTON SELECTOR - SWEDISH */}
              <div className="w-[6em] hover:font-bold">
                <button
                  onClick={() => changeLanguage("sv")}
                  className="flex px-1 py-2 text-sm text-black"
                  role="language"
                >
                  {t("translation.languageBtn.swedish")}
                </button>
              </div>
              {/* LANGUAGE BUTTON SELECTOR - ENGLISH */}
              <div className="w-[6em] hover:font-bold">
                <button
                  onClick={() => changeLanguage("en")}
                  className="flex px-1 py-2 text-sm text-black"
                  role="language"
                >
                  {t("translation.languageBtn.english")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
