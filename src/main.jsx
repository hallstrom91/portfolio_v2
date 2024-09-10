import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";
import App from "./App.jsx";
import { ThemeProvider } from "@contexts/ThemeContext";
import { I18nextProvider } from "react-i18next";
import Cookies from "js-cookie";
import i18n from "../i18n";
import "./index.css";
import Intro from "@pages/Intro";

const sentryDSN = import.meta.env.VITE_SENTRY_DSN;
const savedLanguage = Cookies.get("language");

Sentry.init({
  dsn: sentryDSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/], // change @ host
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            {!savedLanguage ? (
              <Route path="/" element={<Intro />} />
            ) : (
              <Route path="/*" element={<App />} />
            )}
            <Route path="*" element={<App />} />
          </Routes>
        </Router>
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>
);
