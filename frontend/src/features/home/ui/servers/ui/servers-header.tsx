import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";

interface ServersHeaderProps extends BoxProps {
  header: string;
}

export const ServersHeader = ({
  header,
  ...otherProps
}: ServersHeaderProps) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Box
      {...otherProps}
      fontSize={isDesktop ? "217.556px" : "80px"}
      fontWeight={900}
      lineHeight="80%"
      textTransform="uppercase"
      fontFamily="Halvar Breitschrift"
      color={colors.blue.primary}
      whiteSpace="nowrap"
      transform={isDesktop ? "translateX(-18px)" : "none"}
    >
      {header}
    </Box>
  );
};
