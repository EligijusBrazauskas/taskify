import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { iconsTheme } from "./src/theme/custom/index";
import { baseTheme, sidebarTheme } from "./src/theme/shadcn/default";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ...baseTheme.colors,
        ...sidebarTheme.colors,
      },
      borderRadius: {
        ...baseTheme.borderRadius,
      },
      strokeWidth: {
        ...iconsTheme.strokeWidth,
      },
    },
  },
  plugins: [animate],
} satisfies Config;
