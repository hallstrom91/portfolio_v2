import { useTranslation } from "react-i18next";
import Social from "@shared/Social";
import LanguageBtn from "@utils/LanguageBtn";
import styles from "@css/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <footer className="bg-neutral-900 text-white border-t-2 border-white">
        <div
          className={`${styles.backgroundSplash} flex flex-col md:flex-row w-full justify-between items-center px-8 py-[3rem]`}
        >
          {/* social icons linkedin & github */}
          <div className="p-4">
            <Social />
          </div>
          {/* iam the creator of life*/}
          <div className="p-4">
            <p>2024 &copy; Simon Hällström Wänfelt</p>
          </div>
          {/* lng btn  */}
          <div className="p-4">
            <div className="top-full right-0 mt-1 pb-6">
              <LanguageBtn />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
