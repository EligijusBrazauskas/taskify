import * as React from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useBreakpoint(breakpoint: Breakpoint = "md") {
  const breakpointSize = breakpoints[breakpoint];
  const [isBreakpoint, setIsBreakpoint] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpointSize - 1}px)`);
    const onChange = () => {
      setIsBreakpoint(window.innerWidth < breakpointSize);
    };
    mql.addEventListener("change", onChange);
    setIsBreakpoint(window.innerWidth < breakpointSize);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isBreakpoint;
}
