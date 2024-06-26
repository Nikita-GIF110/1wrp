import type { ButtonProps } from "@chakra-ui/react";
import { Button, Tooltip, useClipboard, Box, Flex } from "@chakra-ui/react";
import CheckIcon from "assets/icons/check-icon.svg?react";
import { colors } from "shared/config/colors";

interface CopyButtonProps extends ButtonProps {
  tooltipLabel?: string;
  copyText: string;
}

export const CopyButton = ({
  children,
  tooltipLabel,
  copyText,
}: CopyButtonProps) => {
  const { hasCopied, setValue, onCopy } = useClipboard("");

  const onClick = () => {
    setValue(copyText);
    onCopy();
  };

  return (
    <Tooltip hasArrow label={tooltipLabel} placement="bottom-end">
      <Box position="relative">
        <Button
          variant="circleLight"
          backgroundColor="#BEC7CD"
          onClick={onClick}
        >
          {children}
        </Button>

        {hasCopied && (
          <Flex
            position="absolute"
            top={0}
            left={0}
            alignItems="center"
            justifyContent="center"
            backgroundColor={colors.acidic.primary}
            borderRadius="100%"
            width="100%"
            height="100%"
          >
            <Box as={CheckIcon} width="24px" height="24px" />
          </Flex>
        )}
      </Box>
    </Tooltip>
  );
};
