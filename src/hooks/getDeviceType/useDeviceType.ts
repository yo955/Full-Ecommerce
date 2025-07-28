"use client";
import { useEffect, useState } from "react";

type DeviceFlags = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isXL: boolean;
};

const getDeviceFlags = (width: number): DeviceFlags => {
  return {
    isMobile: width <= 768,
    isTablet: width > 768 && width < 1024,
    isDesktop: width >= 1024 ,
    isXL: width > 1440,
  };
};

const useDeviceType = (): DeviceFlags => {
  const [device, setDevice] = useState<DeviceFlags>(() =>
    typeof window !== "undefined"
      ? getDeviceFlags(window.innerWidth)
      : { isMobile: false, isTablet: false, isDesktop: true, isXL: false }
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDevice(getDeviceFlags(width));
    };

    handleResize(); // Initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useDeviceType;
