import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/react";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { colors } from "shared/config/colors";

interface SupportProps {
  header: string;
  description: string;
  to: string;
  linkText: string;
}

export const Support = ({
  header,
  description,
  to,
  linkText,
}: SupportProps) => (
  <Box
    color={colors.white}
    padding={{ base: "0 19px 0 24px", md: "44px", xl: "80px" }}
    backgroundColor="rgba(238, 244, 248, 0.03)"
    borderRadius="10px"
  >
    <Box
      fontSize={{ base: "32px", md: "40px" }}
      fontWeight={900}
      textTransform="uppercase"
      marginBottom={{ base: "36px", md: "32px" }}
      marginRight={{ base: "20px", md: 0 }}
      lineHeight="80%"
    >
      {header}
    </Box>

    <Box
      fontSize={{ base: "16px", md: "20px" }}
      fontWeight={500}
      letterSpacing="-1px"
      lineHeight="130%"
      opacity={0.6}
      marginBottom={{ base: "8px", md: "44px" }}
      marginRight={{ base: "5px", md: 0 }}
    >
      {description}
    </Box>

    <Link
      as={ReactRouterLink}
      to={to}
      gap="19px"
      variant="medium"
      size="md"
      marginLeft="auto"
      position="relative"
    >
      {linkText}
      <Box
        as={ArrowUp}
        height={{ base: "26px", md: "28px" }}
        width={{ base: "26px", md: "28px" }}
      />
    </Link>
  </Box>
);
