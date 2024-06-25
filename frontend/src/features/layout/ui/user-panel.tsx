import type { ButtonProps } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";
import UserIcon from "assets/icons/user-icon.svg?react";

interface UserPanelProps extends ButtonProps {
  placeholder?: string;
}

export const UserPanel = ({
  placeholder,
  ...otherButtonProps
}: UserPanelProps) => (
  <Button
    variant="smallRoundedLight"
    size="sm"
    paddingTop="14px"
    paddingBottom="14px"
    {...otherButtonProps}
  >
    <Box
      as={UserIcon}
      width="20px"
      height="20px"
      marginRight={placeholder ? "12px" : 0}
    />
    {placeholder}
  </Button>
);
