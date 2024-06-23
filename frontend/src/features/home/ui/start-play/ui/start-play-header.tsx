import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Logo from "assets/icons/logo.svg?react";
import { colors } from "shared/config/colors";

interface StartPlayHeaderProps extends BoxProps {
  header: string;
}

export const StartPlayHeader = ({
  header,
  ...otherProps
}: StartPlayHeaderProps) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    columnGap="24px"
    fontSize="40px"
    fontWeight={900}
    textTransform="uppercase"
    color={colors.white}
    {...otherProps}
  >
    {header}

    <Box as={Logo} width="140px" height="32px" />
  </Box>
);
