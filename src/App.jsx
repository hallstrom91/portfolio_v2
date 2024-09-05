import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "@utils/ErrorBoundary";
import CookiePolicyHOC from "@utils/CookiePolicyHOC";
import NotFound from "@utils/NotFound";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import useTheme from "@hooks/useTheme";

export default function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const userHasDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const savedTheme = Cookies.get("theme");

    if (!savedTheme) {
      const initialTheme = userHasDarkMode ? "dark" : "light";
      Cookies.set("theme", initialTheme, {
        expires: 365,
        path: "/",
        sameSite: "Lax",
      });
      setTheme(initialTheme);
    } else {
      setTheme(savedTheme);
    }

    const currentTheme = savedTheme || (userHasDarkMode ? "dark" : "light");
    // elements class
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    //body class
    document.body.classList.remove("bg-light", "bg-dark");
    document.body.classList.add(theme === "light" ? "bg-light" : "bg-dark");
  }, [theme]);

  return (
    <ErrorBoundary>
      <CookiePolicyHOC>
        <Routes>
          <Route index path="/*" element={<AnimatedRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CookiePolicyHOC>
    </ErrorBoundary>
  );
}
