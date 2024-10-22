"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`);
    const handleChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINT);
    };
    mediaQueryList.addEventListener("change", handleChange);
    setIsMobile(window.innerWidth < BREAKPOINT);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}
