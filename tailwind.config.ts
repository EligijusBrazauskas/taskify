import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

import { shadcnDefaultTheme } from "./src/theme/external/shadcn.default";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      ...shadcnDefaultTheme,
    },
  },
  plugins: [animate],
} satisfies Config;
