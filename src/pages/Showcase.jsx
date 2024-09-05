import React from "react";
import { useTranslation } from "react-i18next";

export default function Showcase() {
  const { t } = useTranslation();
  return (
    <>
      <section className="min-h-screen max-w-5xl p-4">
        <div className="border-2 border-black bg-neutral-300 dark:bg-neutral-800 text-black dark:text-white px-10 rounded-lg transition-colors duration-1000">
          {/* Showcase Header and Line */}
          <div className="flex justify-start p-5 items-center">
            <h1 className="text-xl font-semibold uppercase mr-4">
              {t("translation.showcase.title")}
            </h1>
            <div className="border-black dark:border-white w-40 opacity-30 border-2 rounded-2xl bg-white shadow-md shadow-white my-4 items-center"></div>
          </div>
          {/* Showcase Page Text */}
          <div className="flex justify-start items-center">
            <p className="tracking-tight pr-10 pb-10 text-sm md:text-base">
              {t("translation.showcase.description")}
            </p>
          </div>
          {/* ShowcasePage Header 2  */}
          <div className="flex justify-start p-5 items-center">
            <h1 className="text-lg font-semibold  uppercase mr-4">
              {t("translation.showcase.subtitle")}
            </h1>
          </div>
          <div className="grid grid-cols 1 gap-4 mb-10 h-full">
            <h1 className="text-center">
              {t("translation.showcase.comingsoon.title")}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
