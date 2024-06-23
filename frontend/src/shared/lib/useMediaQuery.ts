import { useMediaQuery as useChakraMediaQuery } from "@chakra-ui/react";

const mobileMediaQuery = "(max-width: 767px)";

const tabletMediaQuery = "(min-width: 768px) and (max-width: 1399px)";

const desktopMediaQuery = "(min-width: 1400px)";

const mediaQuerys = [mobileMediaQuery, tabletMediaQuery, desktopMediaQuery];

export const useMediaQuery = () => {
  const [isMobile, isTablet, isDesktop] = useChakraMediaQuery(mediaQuerys);

  return { isMobile, isTablet, isDesktop };
};
