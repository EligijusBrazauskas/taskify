import { ThemeConfig } from "@/types/tailwind.type";

export const animationTheme: ThemeConfig = {
  keyframes: {
    slideDown: {
      from: { height: "0", opacity: "0" },
      to: { height: "var(--radix-collapsible-content-height)", opacity: "1" },
    },
    slideUp: {
      from: { height: "var(--radix-collapsible-content-height)", opacity: "1" },
      to: { height: "0", opacity: "0" },
    },
  },
  animation: {
    slideDown: "slideDown 100ms ease-in",
    slideUp: "slideUp 100ms ease-in",
  },
};
