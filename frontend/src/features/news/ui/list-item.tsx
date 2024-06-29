import type { ListItemProps as ChakraListItemProps } from "@chakra-ui/react";
import { ListItem as ChakraListItem, ListIcon } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
import Icon from "assets/icons/list-item-icon.svg?react";

interface ListItemProps extends ChakraListItemProps {}

export const ListItem = ({ children, ...otherProps }: ListItemProps) => (
  <ChakraListItem
    display="flex"
    alignItems="center"
    fontSize="20px"
    lineHeight="150%"
    color={colors.white}
    {...otherProps}
  >
    <ListIcon as={Icon} marginRight="12px" />

    {children}
  </ChakraListItem>
);
