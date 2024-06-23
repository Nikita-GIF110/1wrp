import { Box, Button } from "@chakra-ui/react";
import UserIcon from "assets/icons/user-icon.svg?react";

interface UserPanelProps {
  placeholder?: string;
}

export const UserPanel = ({ placeholder }: UserPanelProps) => (
  <Button
    variant="smallRoundedLight"
    size="sm"
    paddingTop="14px"
    paddingBottom="14px"
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
