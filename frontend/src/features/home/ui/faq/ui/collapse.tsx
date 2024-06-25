import type { ReactNode } from "react";
import {
  Collapse as ChakraCollapse,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import MinusIcon from "assets/icons/minus.svg?react";
import PlusIcon from "assets/icons/plus.svg?react";
import { colors } from "shared/config/colors";

interface CollapseProps {
  header: string;
  children: ReactNode;
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: {
    fontSize: "16px",
    buttonPadding: "12px 24px",
    collapsePadding: "0 24px 24px 24px",
    collapseMarginTop: "-4px",
  },
  md: {
    fontSize: "24px",
    buttonPadding: "32px 44px",
    collapsePadding: "0 44px 44px 44px",
    collapseMarginTop: "-8px",
  },
};

export const Collapse = ({ header, children, size = "md" }: CollapseProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const isMediumSize = size === "md";

  return (
    <Box
      color={colors.white}
      backgroundColor={
        isOpen ? "rgba(238, 244, 248, 0.08)" : "rgba(238, 244, 248, 0.03)"
      }
      transition="backgroundColor 0.3s ease-in-out"
      _hover={{ backgroundColor: "rgba(238, 244, 248, 0.08)" }}
      borderRadius="10px"
    >
      <Button
        display="flex"
        alignItems="center"
        columnGap="12px"
        variant="ghoste"
        position="relative"
        fontWeight={500}
        lineHeight="116%"
        letterSpacing="-1px"
        onClick={onToggle}
        width="100%"
        justifyContent="space-between"
        height="auto"
        whiteSpace={isMediumSize ? "nowrap" : "wrap"}
        textAlign="left"
        fontSize={sizeStyles[size].fontSize}
        padding={sizeStyles[size].buttonPadding}
      >
        <Box
          overflow={isMediumSize ? "hidden" : undefined}
          textOverflow={isMediumSize ? "ellipsis" : undefined}
          whiteSpace={isMediumSize ? "nowrap" : undefined}
          width={isMediumSize ? undefined : "100%"}
        >
          {header}
        </Box>

        <Box as={isOpen ? MinusIcon : PlusIcon} width="28px" height="28px" />
      </Button>

      <ChakraCollapse in={isOpen}>
        <Box padding={sizeStyles[size].collapsePadding}>{children}</Box>
      </ChakraCollapse>
    </Box>
  );
};
