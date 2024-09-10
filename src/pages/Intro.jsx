import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Intro() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const selectLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set("language", lng, { expires: 365 });
    navigate("/*");
  };
  return (
    <>
      <section className="flex justify-center items-center min-h-screen">
        <div className="text-black p-4">
          <div className="flex justify-center items-center gap-4">
            <div>
              <button
                onClick={() => selectLanguage("en")}
                className="relative h-[3.125rem] w-40 overflow-hidden border border-neutral-800 bg-white text-black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-1000 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-1000 hover:text-white hover:shadow-neutral-800 hover:before:w-2/4 hover:before:bg-neutral-800 hover:after:w-2/4 hover:after:bg-neutral-800"
              >
                <span className="relative z-10">
                  {t("translation.intropage.english")}
                </span>
              </button>
            </div>

            <div>
              <button
                onClick={() => selectLanguage("sv")}
                className="relative h-[3.125rem] w-40 overflow-hidden border border-neutral-800 bg-white text-black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-1000 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-1000 hover:text-white hover:shadow-neutral-800 hover:before:w-2/4 hover:before:bg-neutral-800 hover:after:w-2/4 hover:after:bg-neutral-800"
              >
                <span className="relative z-10">
                  {t("translation.intropage.swedish")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
