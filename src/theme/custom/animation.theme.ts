import { ThemeConfig } from "@/types/tailwind.type";

export const animationTheme: ThemeConfig = {
  keyframes: {
    slideDown: {
      from: { height: "0" },
      to: { height: "var(--radix-collapsible-content-height)" },
    },
    slideUp: {
      from: { height: "var(--radix-collapsible-content-height)" },
      to: { height: "0" },
    },
  },
  animation: {
    slideDown: "slideDown 250ms ease-in",
    slideUp: "slideUp 250ms ease-in",
  },
};
