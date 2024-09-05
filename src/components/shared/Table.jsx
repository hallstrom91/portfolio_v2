import { useTranslation } from "react-i18next";

export default function Table({ cookies }) {
  const { t } = useTranslation();

  return (
    <>
      <table className="min-w-full border border-black text-black dark:border-white dark:text-white mt-5 transition-colors duration-1000 mx-auto">
        <thead>
          <tr className="bg-gradient-to-r from-neutral-400 to-neutral-300 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-neutral-700 text-xs lg:text-sm transition-colors duration-1000">
            <th className="py-2 px-4 text-left">
              {t("translation.cookieTable.host")}
            </th>
            <th className="py-2 px-4 text-left">
              {t("translation.cookieTable.cookieName")}
            </th>
            <th className="py-2 px-4 text-left">
              {t("translation.cookieTable.lifespan")}
            </th>
            <th className="py-2 px-4 text-left">
              {t("translation.cookieTable.usage")}
            </th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((cookie) => (
            <tr className="bg-white border-b border-black  text-black">
              <td className="py-2 px-4 text-xs">{cookie.host}</td>
              <td className="py-2 px-4 text-xs">{cookie.name}</td>
              <td className="py-2 px-4 text-xs">{cookie.lifespan}</td>
              <td className="py-2 px-4 text-xs">{cookie.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
