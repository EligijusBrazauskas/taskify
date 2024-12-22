import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { colorsTheme, iconsTheme } from "./src/theme/custom/index";
import { typographyTheme } from "./src/theme/custom/typography.theme";
import { baseTheme, sidebarTheme } from "./src/theme/shadcn/default";
import { sidebarThemeOverride } from "./src/theme/shadcn/overrides";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ...baseTheme.colors,
        ...sidebarTheme.colors,
        ...sidebarThemeOverride.colors,
        ...colorsTheme,
      },
      borderRadius: {
        ...baseTheme.borderRadius,
      },
      strokeWidth: {
        ...iconsTheme.strokeWidth,
      },
      fontFamily: {
        ...typographyTheme.fontFamily,
      },
    },
  },
  plugins: [animate],
} satisfies Config;
