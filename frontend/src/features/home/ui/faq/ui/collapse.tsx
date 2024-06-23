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
}

export const Collapse = ({ header, children }: CollapseProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      color={colors.white}
      fontSize="24px"
      padding="32px 44px"
      backgroundColor={
        isOpen ? "rgba(238, 244, 248, 0.08)" : "rgba(238, 244, 248, 0.03)"
      }
      transition="backgroundColor 0.3s ease-in-out"
      _hover={{
        backgroundColor: "rgba(238, 244, 248, 0.08)",
      }}
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
        padding={0}
        width="100%"
        justifyContent="space-between"
        fontSize="24px"
        height="auto"
      >
        <Box overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
          {header}
        </Box>

        <Box as={isOpen ? MinusIcon : PlusIcon} width="28px" height="28px" />
      </Button>

      <ChakraCollapse in={isOpen}>
        <Box marginTop="24px">{children}</Box>
      </ChakraCollapse>
    </Box>
  );
};
