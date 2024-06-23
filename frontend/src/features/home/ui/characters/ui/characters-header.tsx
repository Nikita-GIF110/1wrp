import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";

interface CharactersHeaderProps extends BoxProps {}

export const CharactersHeader = (props: CharactersHeaderProps) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Box
      fontSize={isDesktop ? "80px" : "64px"}
      fontWeight={900}
      textTransform="uppercase"
      lineHeight="80%"
      color={colors.white}
      padding={isDesktop ? 0 : "0 12px"}
      {...props}
    >
      живи{" "}
      <Box color={colors.blue.primary} display="inline-block">
        уникальную жизнь
      </Box>
      <Box
        fontSize={isDesktop ? "64px" : "44px"}
        lineHeight="80%"
        textAlign={isDesktop ? "right" : "left"}
        marginTop="3px"
      >
        в мире{" "}
        <Box display="inline-block" color={colors.blue.primary}>
          1
        </Box>
        W
        <Box display="inline-block" color={colors.blue.primary}>
          RP
        </Box>
      </Box>
    </Box>
  );
};
