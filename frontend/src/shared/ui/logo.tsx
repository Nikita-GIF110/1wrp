import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/react";
import type { LinkProps } from "@chakra-ui/react";
import LogoIcon from "assets/icons/logo.svg?react";

interface LogoProps extends Omit<LinkProps, "to"> {
  width?: string;
  height?: string;
}

export const Logo = ({
  width = "146px",
  height = "38px",
  ...otherProps
}: LogoProps) => (
  <Link as={ReactRouterLink} to="/" {...otherProps}>
    <Box as={LogoIcon} width={width} height={height} />
  </Link>
);
