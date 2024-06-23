import { Box, Flex } from "@chakra-ui/react";
import BurgerIcon from "assets/icons/burger-menu.svg?react";
import { colors } from "shared/config/colors";

interface BurgerButtonProps {
  onClick: () => void;
  buttonSize: string;
  iconSize: string;
}

export const BurgerButton = ({
  onClick,
  buttonSize,
  iconSize,
}: BurgerButtonProps) => (
  <Flex
    as="button"
    justifyContent="center"
    alignItems="center"
    backgroundColor={colors.blue.primary}
    color={colors.white}
    width={buttonSize}
    height={buttonSize}
    borderBottomLeftRadius="44px"
    onClick={onClick}
    type="button"
  >
    <Box as={BurgerIcon} width={iconSize} height={iconSize} />
  </Flex>
);
