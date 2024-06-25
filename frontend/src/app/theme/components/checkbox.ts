import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
// import CheckIcon from "assets/icons/check-icon.svg?react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

export const Checkbox = defineMultiStyleConfig({
  variants: {
    landingMedium: definePartsStyle({
      control: {
        backgroundColor: colors.blue.primary,
        borderRadius: "4px",
        padding: "6px",
        width: "30px",
        height: "30px",
      },
      icon: {
        width: "12px",
        height: "12px",
      },
      label: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "100%",
        color: colors.black,
        marginLeft: "12px",
      },
    }),
  },
  //   variants: defineMultiStyleConfig({

  //   }),
});
