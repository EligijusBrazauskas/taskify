import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import {
  bordersTheme,
  colorsTheme,
  iconsTheme,
  spacingTheme,
  typographyTheme,
} from "./src/theme/custom/index";
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
      spacing: {
        ...spacingTheme,
      },
      borderWidth: {
        ...bordersTheme.borderWidth,
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
      fontSize: {
        ...typographyTheme.fontSize,
      },
    },
  },
  plugins: [animate],
} satisfies Config;
