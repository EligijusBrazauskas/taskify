import { useCallback, useEffect, useMemo, useState } from "react";

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export type Breakpoint = keyof typeof breakpoints;

export const useBreakpoint = (breakpointsArray: Breakpoint[] = ["md"]) => {
  const [matches, setMatches] = useState(() =>
    breakpointsArray.map(() => false),
  );

  const memoizedBreakpoints = useMemo(
    () => breakpointsArray,
    [breakpointsArray],
  );

  const updateMatches = useCallback(() => {
    const width = window.innerWidth;
    const newMatches = memoizedBreakpoints.map(
      (breakpoint) => width <= breakpoints[breakpoint],
    );

    setMatches((prevMatches) => {
      if (prevMatches.every((match, index) => match === newMatches[index])) {
        return prevMatches;
      }

      return newMatches;
    });
  }, [memoizedBreakpoints]);

  useEffect(() => {
    const observer = new ResizeObserver(updateMatches);
    observer.observe(document.documentElement);
    updateMatches();

    return () => {
      observer.disconnect();
    };
  }, [updateMatches]);

  return matches;
};
