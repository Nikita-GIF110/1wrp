import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
import { useTranslate } from "shared/lib/useTranslate";

interface CharactersHeaderProps extends BoxProps {}

export const CharactersHeader = (props: CharactersHeaderProps) => {
  const translate = useTranslate();

  return (
    <Box
      fontSize={{ base: "32px", md: "64px", xl: "80px" }}
      fontWeight={900}
      textTransform="uppercase"
      lineHeight="80%"
      color={colors.white}
      {...props}
    >
      {translate("lending.character_title_first_word")}{" "}
      <Box color={colors.blue.primary} display="inline-block">
        {translate("lending.character_title_other_words")}
      </Box>
      <Box
        fontSize={{ base: "24px", md: "44px", xl: "64px" }}
        lineHeight="80%"
        textAlign={{ base: "left", xl: "right" }}
        marginTop="3px"
      >
        {translate("lending.character_subtitle")}{" "}
        <Box display="inline-block" color={colors.blue.primary}>
          1
        </Box>
        W
        <Box display="inline-block" color={colors.blue.primary}>
          RP
        </Box>
      </Box>
    </Box>
  );
};
