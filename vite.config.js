import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import dotenv from "dotenv";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
        dimensions: false,
      },
      plugins: [
        sentryVitePlugin({
          org: process.env.VITE_SENTRY_ORG,
          project: process.env.VITE_SENTRY_PROJECT,
          authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@context": "/src/context",
      "@personal": "/src/components/personal",
      "@showcase": "/src/components/showcase",
      "@shared": "/src/components/shared",
      "@utils": "/src/components/utils",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@locales": "/src/locales",
      "@helper": "/src/helper",
      "@css": "/src/css",
      "@heroicons": "/src/assets/heroicons",
      "@profilecardicons": "/src/assets/profilecardicons",
      "@resumeicons": "/src/assets/resumeicons",
      "@navbaricons": "/src/assets/navbaricons",
      "@sharedicons": "/src/assets/sharedicons",
    },
  },
});
