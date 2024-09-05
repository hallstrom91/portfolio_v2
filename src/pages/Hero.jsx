import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Clipboard,
  Computer,
  TreeOfLife,
  TechChip,
  Books,
} from "@helpers/importHelper";

export default function Hero() {
  const { t } = useTranslation();

  // Error tester
  const [count, setCount] = useState(0);

  const forceError = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count === 2) {
      throw new Error("I crashed!");
    }
  });

  return (
    <>
      <section className={`min-h-screen max-w-5xl p-4`}>
        <div className="border-2 border-black bg-neutral-300 text-black dark:bg-neutral-800 dark:text-white px-10 rounded-lg transition-colors duration-1000">
          {/* Page Header and Line */}
          <div className="flex justify-start p-5 items-center">
            <h1 className="text-xl font-semibold uppercase mr-4">
              {t("translation.hero.title")}
            </h1>
            <div className="border-black dark:border-white w-40 opacity-30 border-2 rounded-2xl bg-white shadow-md shadow-white my-4 items-center"></div>
          </div>
          {/* Page Text */}
          <div className="flex justify-start items-center">
            <p className="tracking-tight pr-10 pb-10 text-sm md:text-base">
              {t("translation.hero.description")}
            </p>
          </div>
          {/* Page Header 2  */}
          <div className="flex justify-start p-5 items-center">
            <h1 className="text-lg font-semibold uppercase mr-4">
              {t("translation.hero.subtitle")}
            </h1>
          </div>
          {/* Page Grids 2*/}
          <div className="grid grid-cols 1 gap-4 lg:grid-cols-2 mb-10 h-full">
            <div className="border-2 border-black dark:border-white border-opacity-30 p-2 rounded-lg shadow-md shadow-white/10">
              <div className="flex items-center text-xl font-bold tracking-tight">
                <Books
                  className="icon transition-colors duration-1000"
                  height={50}
                />
                <h3>{t("translation.hero.personalTitles.education1")}</h3>
              </div>
              <p className="tracking-tight text-xs md:text-sm">
                {t("translation.hero.personal.education1")}
              </p>
            </div>
            <div className="border-2 border-black dark:border-white border-opacity-30 p-2 rounded-lg shadow-md shadow-white/10">
              <div className="flex items-center text-xl font-bold tracking-tight">
                <TechChip
                  className="icon transition-colors duration-1000"
                  height={50}
                />
                <h3>{t("translation.hero.personalTitles.education2")}</h3>
              </div>
              <p className="tracking-tight text-xs md:text-sm">
                {t("translation.hero.personal.education2")}
              </p>
            </div>
            <div className="border-2 border-black dark:border-white border-opacity-30 p-2 rounded-lg shadow-md shadow-white/10">
              <div className="flex items-center text-xl font-bold tracking-tight">
                <Computer
                  className="icon transition-colors duration-1000"
                  height={50}
                />
                <h3>{t("translation.hero.personalTitles.freetime")}</h3>
              </div>
              <p className="tracking-tight text-xs md:text-sm">
                {t("translation.hero.personal.freetime")}
              </p>
            </div>

            <div className="border-2 border-black dark:border-white border-opacity-30 p-2 rounded-lg shadow-md shadow-white/10">
              <div className="flex items-center text-xl font-bold tracking-tight">
                <TreeOfLife
                  className="icon transition-colors duration-1000"
                  height={50}
                />
                <h3>{t("translation.hero.personalTitles.mylove")}</h3>
              </div>
              <p className="tracking-tight text-xs md:text-sm">
                {t("translation.hero.personal.mylove")}
              </p>
            </div>
          </div>
          {/* error test */}
          <div>
            <button onClick={forceError}>Trigger Error</button>
          </div>
        </div>
      </section>
    </>
  );
}
