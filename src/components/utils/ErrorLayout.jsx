export default function ErrorLayout({ title, message }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-black dark:text-white">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-2xl mt-4 font-semibold">{message}</p>
        <a
          href="/"
          className="mt-4 px-4 py-2 rounded border bg-btnColor-light dark:bg-btnColor-dark text-textColor-light dark:text-textColor-dark border-accentColor-light dark:border-accentColor-dark "
        >
          Back Home
        </a>
      </div>
    </>
  );
}
