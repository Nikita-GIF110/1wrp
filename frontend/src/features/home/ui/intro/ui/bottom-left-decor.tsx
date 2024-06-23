import { Flex, Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

export const BottomLeftDecor = () => (
  <Flex alignItems="flex-end">
    <Box
      width="63px"
      height="63px"
      borderBottom="8px"
      borderLeft="8px"
      borderColor={colors.white}
    />

    <Box
      fontSize="38px"
      fontWeight={700}
      textTransform="uppercase"
      lineHeight="80%"
      color={colors.white}
      marginLeft="35px"
      fontFamily="Halvar Engschrift"
    >
      GTA V Project
    </Box>
  </Flex>
);
