import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface SeparatorProps extends BoxProps {}

export const Separator = (props: SeparatorProps) => (
  <Box width="2px" backgroundColor={colors.white} opacity={0.2} {...props} />
);
