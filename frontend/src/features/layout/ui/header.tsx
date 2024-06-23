import type { ReactNode } from "react";
import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

interface HeaderProps extends BoxProps {
  rightNode?: ReactNode;
  leftNode?: ReactNode;
  centerNode?: ReactNode;
}

export const HeaderDesktop = ({
  rightNode,
  centerNode,
  leftNode,
  ...headerProps
}: HeaderProps) => (
  <Box
    as="header"
    padding="32px 40px"
    display="flex"
    alignItems="center"
    {...headerProps}
  >
    {leftNode}
    {centerNode}
    {rightNode}
  </Box>
);

export const HeaderMobile = ({
  rightNode,
  centerNode,
  leftNode,
  ...headerProps
}: HeaderProps) => (
  <Box
    as="header"
    paddingLeft="40px"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    {...headerProps}
  >
    {leftNode}
    {centerNode}
    {rightNode}
  </Box>
);
