import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
// import CheckIcon from "assets/icons/check-icon.svg?react";
// import CloseIcon from "assets/icons/close-icon.svg?react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

export const Checkbox = defineMultiStyleConfig({
  variants: {
    landingMedium: definePartsStyle({
      control: {
        border: "none",
        background: "#677176",
        borderRadius: "4px",
        padding: "4px",
        width: "30px",
        height: "30px",
        transition: "background 0.2s ease-in",

        _hover: {
          background: "#829199",
        },

        _checked: {
          background: colors.blue.primary,
        },
        // _active: {
        //   background:
        //     "linear-gradient(0deg, rgba(12, 13, 17, 0.20) 0%, rgba(12, 13, 17, 0.20) 100%), var(--Blue, #00A3FF)",
        // },
      },

      icon: {
        width: "18px",
        height: "18px",
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
});
