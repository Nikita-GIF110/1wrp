import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface ServersHeaderProps extends BoxProps {
  header: string;
}

export const ServersHeader = ({
  header,
  ...otherProps
}: ServersHeaderProps) => (
  <Box
    {...otherProps}
    fontSize={{ base: "24px", md: "80px", "2xl": "217.556px" }}
    fontWeight={900}
    lineHeight="80%"
    textTransform="uppercase"
    fontFamily="Halvar Breitschrift"
    color={colors.blue.primary}
    whiteSpace="nowrap"
    transform={{ xl: "translateX(-18px)" }}
  >
    {header}
  </Box>
);
