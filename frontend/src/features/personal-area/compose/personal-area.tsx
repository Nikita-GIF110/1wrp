import { Flex } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

const PersonalArea = () => (
  <Flex
    flexGrow={1}
    justifyContent="center"
    alignItems="center"
    marginTop="112px"
    color={colors.white}
  >
    Личный кабинет
  </Flex>
);

export default PersonalArea;
