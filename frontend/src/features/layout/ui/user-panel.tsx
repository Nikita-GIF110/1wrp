import { Box, Button } from "@chakra-ui/react";
import UserIcon from "assets/icons/user-icon.svg?react";

interface UserPanelProps {
  placeholder?: string;
  onClick: () => void;
}

export const UserPanel = ({ placeholder, onClick }: UserPanelProps) => (
  <Button
    variant="smallRoundedLight"
    size="sm"
    paddingTop="14px"
    paddingBottom="14px"
    onClick={onClick}
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
