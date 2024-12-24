import { ThemeConfig } from "@/types/tailwind.type";

export const animationTheme: ThemeConfig = {
  keyframes: {
    slideDown: {
      from: { height: "0", color: "blue" },
      to: { height: "var(--radix-collapsible-content-height)", color: "red" },
    },
    slideUp: {
      from: {
        height: "var(--radix-collapsible-content-height)",
        color: "blue",
      },
      to: { height: "0", color: "red" },
    },
  },
  animation: {
    slideDown: "slideDown 100ms ease-in-out",
    slideUp: "slideUp 100ms ease-in-out",
  },
};
