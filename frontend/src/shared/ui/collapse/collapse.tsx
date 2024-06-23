import { useRef } from "react";
import type { CollapseProps as ChakraCollapseProps } from "@chakra-ui/react";
import {
  Collapse as ChakraCollapse,
  Button,
  Box,
  useDimensions,
} from "@chakra-ui/react";
import { CloseIcon } from "assets/icons/close-icon";
import { colors } from "shared/config/colors";

interface CollapseProps extends ChakraCollapseProps {
  onToggle: () => void;
  title: string;
}

export const Collapse = ({
  onToggle,
  title,
  ...otherCollapseProp
}: CollapseProps) => {
  const collapseButtonRef = useRef<HTMLButtonElement>(null);
  const btn = useDimensions(collapseButtonRef);

  const collapsePaddingLeft = btn?.padding.left || 0;
  const collapsePaddingRight = btn?.padding.right || 0;

  return (
    <Box backgroundColor={colors.gray.primary} borderRadius="8px">
      <Button
        ref={collapseButtonRef}
        onClick={onToggle}
        width="100%"
        variant="ghost"
        alignItems="center"
        justifyContent="space-between"
        height="60px"
        _hover={{
          backgroundColor: colors.transparent,
        }}
      >
        {title}

        <Box
          backgroundColor={colors.black}
          width="34px"
          height="34px"
          borderRadius="50%"
          padding="9px"
          transform={`rotate(135deg)`}
        >
          <CloseIcon color={colors.white} />
        </Box>
      </Button>

      <ChakraCollapse {...otherCollapseProp}>
        <Box
          paddingLeft={`${collapsePaddingLeft}px`}
          paddingRight={`${collapsePaddingRight}px`}
        >
          <div>sdsdsdsd</div>
          <div>sdsdsdsd</div>
          <div>sdsdsdsd</div>
          <div>sdsdsdsd</div>
        </Box>
      </ChakraCollapse>
    </Box>
  );
};
