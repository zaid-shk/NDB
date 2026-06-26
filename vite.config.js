import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["/Aimim-logo.png", "robots.txt"],
      manifest: {
        name: "AIMIM Nandurbar",
        short_name: "AIMIM",
        description: "Majlis Nandurbar",
        theme_color: "#000",
        background_color: "#000",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/Aimim-logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/Aimim-logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
