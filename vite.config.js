import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import dotenv from "dotenv";

dotenv.config();

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
      "@svg": "/src/assets/svg",
      "@contexts": "/src/contexts",
      "@css": "/src/css",
      "@helpers": "/src/helpers",
      "@hooks": "/src/hooks",
      "@locales": "/src/locales",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@components": "/src/components",
      "@utils": "/src/components/utils",
      "@shared": "/src/components/shared",
      "@cards": "/src/components/cards",
      "@modals": "/src/components/modals",
    },
  },
});
