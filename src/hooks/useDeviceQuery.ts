import * as React from "react";

export interface DeviceQueryParams {
  minTabletWidth?: number;
  minDesktopWidth?: number;
}

export interface DeviceQueryResult {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

export const useDeviceQuery = (props: DeviceQueryParams = {}) => {
  const checkScreenSize = React.useCallback((): DeviceQueryResult => {
    const MINIMUM_DESKTOP_WIDTH = props.minDesktopWidth || 1280;
    const MINIMUM_TABLET_WIDTH = props.minTabletWidth || 768;
    if (typeof window !== "undefined") {
      return {
        isDesktop: window?.innerWidth >= MINIMUM_DESKTOP_WIDTH,
        isTablet:
          window?.innerWidth >= MINIMUM_TABLET_WIDTH &&
          window?.innerWidth < MINIMUM_DESKTOP_WIDTH,
        isMobile: window?.innerWidth < MINIMUM_TABLET_WIDTH,
      };
    } else {
      return {
        isDesktop: true,
        isTablet: false,
        isMobile: false,
      };
    }
  }, [props.minTabletWidth, props.minDesktopWidth]);

  const [state, setState] = React.useState<DeviceQueryResult>(checkScreenSize);

  const onResize = React.useCallback(
    () => setState(checkScreenSize),
    [checkScreenSize]
  );

  React.useEffect(() => {
    if (typeof window == undefined) return;
    window?.addEventListener("resize", onResize);
    return () => window?.removeEventListener("resize", onResize);
  }, [onResize]);

  return state;
};
