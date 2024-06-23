import { Box, Flex } from "@chakra-ui/react";
import BurgerIcon from "assets/icons/burger-menu.svg?react";
import { colors } from "shared/config/colors";

interface BurgerButtonProps {
  onClick: () => void;
}

export const BurgerButton = ({ onClick }: BurgerButtonProps) => (
  <Flex
    as="button"
    justifyContent="center"
    alignItems="center"
    backgroundColor={colors.blue.primary}
    color={colors.white}
    width="114px"
    height="114px"
    borderBottomLeftRadius="44px"
    onClick={onClick}
    type="button"
  >
    <Box as={BurgerIcon} width="50px" height="50px" />
  </Flex>
);
