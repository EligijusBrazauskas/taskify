import { useEffect, useMemo, useState } from "react";

export const containerBreakpoints: Record<string, number> = {
  xs: 320,
  sm: 384,
  md: 448,
  lg: 512,
  xl: 576,
  "2xl": 672,
  "3xl": 768,
  "4xl": 896,
  "5xl": 1024,
  "6xl": 1152,
  "7xl": 1280,
};

export type ContainerBreakpoint = keyof typeof containerBreakpoints;

export const useContainerQuery = (
  breakpoints: ContainerBreakpoint[] = ["xl"],
  containerName = "main",
) => {
  const [matches, setMatches] = useState(() => breakpoints.map(() => false));
  const memoizedBreakpoints = useMemo(() => breakpoints, [breakpoints]);

  useEffect(() => {
    const container = document.querySelector(`.container-${containerName}`);

    if (!container) {
      return;
    }

    const observer = new ResizeObserver(() => {
      const width = container.clientWidth;
      const newMatches = memoizedBreakpoints.map(
        (breakpoint) => width >= containerBreakpoints[breakpoint],
      );

      if (newMatches.some((match, index) => match !== matches[index])) {
        setMatches(newMatches);
      }
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [memoizedBreakpoints, containerName, matches]);

  return matches;
};
