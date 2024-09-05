import React from "react";
import { useTranslation } from "react-i18next";
import GithubCard from "@cards/GithubCard";
/* import ProjectCards from "@showcase/ProjectCards"; */

export default function Skills() {
  const { t } = useTranslation();
  const projects = t("data.projects", { returnObjects: true });

  return (
    <>
      <section className="min-h-screen max-w-5xl p-4">
        <div className="border-2 border-black bg-neutral-300 dark:bg-neutral-800 text-black dark:text-white px-10 rounded-lg transition-colors duration-1000">
          {/* Projects Header and Line */}
          <div className="flex justify-start p-5 items-center">
            <h1 className="text-xl font-semibold  uppercase mr-4">
              {t("translation.project.title")}
            </h1>
            <div className="border-black dark:border-white w-40 opacity-30 border-2 rounded-2xl bg-white shadow-md shadow-white my-4 items-center"></div>
          </div>
          {/* Projects Text */}
          <div className="flex justify-start items-center">
            <p className="tracking-tight pr-10 pb-10 text-sm md:text-base">
              {t("translation.project.description")}
            </p>
          </div>
          {/* Projects Header 2  */}
          <div className="flex justify-start p-5 items-center">
            <h1 className="text-lg font-semibold  uppercase mr-4">
              {t("translation.project.github")}
            </h1>
          </div>
          {/* Projects Grids Github  2*/}
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {projects.map((project, idx) => (
              <div className="flex items-center justify-center my-1" key={idx}>
                <GithubCard project={project} />
              </div>
            ))}
          </div>
          {/* Projects Hosted Display */}
          <div className="my-10 justify-start p-5 items-center">
            <div className="my-5">
              <h1 className="text-lg font-semibold  uppercase mr-4">
                {t("translation.project.hosted")}
              </h1>
            </div>
            <div className="hidden mb-12 pb-12 xl:flex">
              <ProjectCards />
            </div>
            <div className="block xl:hidden">
              <div className="flex justify-between p-2 mb-3 border border-black dark:border-white bg-gradient-to-r from-neutral-400 to-neutral-200 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-neutral-600 shadow-md shadow-black dark:shadow-white/50 rounded">
                <span className="flex justify-start">
                  <p className="flex items-center font-semibold pr-2 text-sm">
                    {t("translation.project.animatedCards.card1Title")}
                  </p>
                  <p className="text-sm hidden md:flex md:items-center">
                    {t("translation.project.animatedCards.card1Subtitle")}
                  </p>
                </span>
                <span className="flex gap-2">
                  <a
                    href="#github"
                    className="p-1 flex items-center border border-white bg-neutral-200 text-xs text-black rounded"
                  >
                    Github
                  </a>
                  <a
                    href="#domain"
                    className="p-1 flex items-center border border-white bg-neutral-200 text-xs text-black rounded"
                  >
                    Hosted
                  </a>
                </span>
              </div>

              <div className="flex justify-between p-2 mb-3 border border-black dark:border-white bg-gradient-to-r from-neutral-400 to-neutral-200 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-neutral-600 shadow-md shadow-black dark:shadow-white/50 rounded">
                <span className="flex justify-start">
                  <p className="flex items-center font-semibold pr-2 text-sm">
                    {t("translation.project.animatedCards.card2Title")}
                  </p>
                  <p className="text-sm hidden md:flex md:items-center">
                    {t("translation.project.animatedCards.card2Subtitle")}
                  </p>
                </span>
                <span className="flex gap-2">
                  <a
                    href="#github"
                    className="p-1 flex items-center border border-white bg-neutral-200 text-xs text-black rounded"
                  >
                    Github
                  </a>
                  <a
                    href="#domain"
                    className="p-1 flex items-center border border-white bg-neutral-200 text-xs text-black rounded"
                  >
                    Hosted
                  </a>
                </span>
              </div>
              <div className="flex justify-between p-2 mb-3 border border-black dark:border-white bg-gradient-to-r from-neutral-400 to-neutral-200 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-neutral-600 shadow-md shadow-black dark:shadow-white/50 rounded">
                <span className="flex justify-start">
                  <p className="flex items-center font-semibold pr-2 text-sm">
                    {t("translation.project.animatedCards.card3Title")}
                  </p>
                  <p className="text-sm hidden md:flex md:items-center">
                    {t("translation.project.animatedCards.card3Subtitle")}
                  </p>
                </span>
                <span className="flex gap-2">
                  <a
                    href="#domain"
                    className="p-1 flex items-center border border-white bg-neutral-200 text-xs text-black rounded "
                  >
                    Hosted
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
