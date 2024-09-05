export default function GithubCards({ project }) {
  return (
    <>
      <div className="group relative hover:shadow-xl rounded-lg overflow-hidden border-2 border-black dark:border-white border-opacity-10 shadow-md shadow-black/10 dark:shadow-white/10 w-56">
        <a href={project.link}>
          <img
            className="object-fit"
            src={project.image}
            alt="projects-gallery"
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-neutral-500 to-neutral-900 opacity-0 transition duration-700 ease-in-out group-hover:opacity-80"></div>
          <div className="p-4 flex flex-col items-center justify-between relative z-10 bg-gradient-to-tl from-neutral-400 to-neutral-300 dark:bg-gradient-to-tl dark:from-neutral-800 dark:to-neutral-700 h-[12rem]">
            <h2 className="text-lg font-medium text-black dark:text-white group-hover:text-red-900">
              {project.title}
            </h2>
            <h3 className="text-xs italic text-black dark:text-white md:text-sm">
              {project.subtitle}
            </h3>
            <p className="tracking-tight text-xs md:text-sm pt-4">
              {project.description}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
