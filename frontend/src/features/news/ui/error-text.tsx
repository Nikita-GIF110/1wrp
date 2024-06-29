import { Center, Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

export const ErrorText = () => (
  <Center
    marginTop={{ base: "72px", md: "114px", xl: "112px" }}
    flexGrow={1}
    flexDirection="column"
    color={colors.white}
  >
    <Box
      fontSize={{ xl: "44px" }}
      fontWeight={900}
      letterSpacing="-1px"
      marginBottom="16px"
    >
      Произошла ошибка при загрузке новости
    </Box>

    <Box fontSize={{ xl: "20px" }} fontWeight={700} lineHeight="150%">
      Потробуйте зайти позже
    </Box>
  </Center>
);
