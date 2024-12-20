import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { baseTheme, sidebarTheme } from "./src/theme/shadcn/default";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        sidebar: {
          ...sidebarTheme,
        },
      },
    },
  },
  plugins: [animate, require("@mertasan/tailwindcss-variables")],
} satisfies Config;
