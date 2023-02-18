import { useState, useEffect } from "react";

type Size = {
  wWidth: number;
  wHeight: number;
  headerHeight: number;
  footerHeight: number;
};

export const useAppSizeConfig = (): Size => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    wWidth: 601,
    wHeight: 601,
    headerHeight: 100,
    footerHeight: 100,
  });
  useEffect(() => {
    const handleResize = (): void => {
      const footer = document.getElementsByTagName("footer");
      const header = document.getElementsByTagName("header");
      setWindowSize({
        wWidth: window.innerWidth,
        wHeight: window.innerHeight,
        headerHeight: header[0]?.clientHeight ?? 100,
        footerHeight: footer[0]?.clientHeight ?? 100,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
