import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

export const Input = defineMultiStyleConfig({
  baseStyle: {
    field: {
      fontWeight: 400,
    },
  },
  variants: {
    landingMedium: definePartsStyle({
      field: {
        padding: "20px 28px",
        borderRadius: "4px",
        backgroundColor: "#D1DAE0",
        textOverflow: "ellipsis",
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: "100%",
        height: "auto",

        _focus: {
          color: colors.black,
          outline: `2px solid ${colors.blue.primary}`,
        },
      },
    }),

    outline: definePartsStyle({
      field: {
        border: `1px solid ${colors.gray.primary}`,

        _focus: {
          borderColor: colors.black,
          boxShadow: "none",
        },
      },
    }),
  },
  sizes: {
    xs: {
      field: {
        borderRadius: "6px",
      },
    },
    sm: {
      field: {
        borderRadius: "8px",
      },
    },
    md: {
      field: {
        borderRadius: "10px",
      },
    },
    lg: {
      field: {
        borderRadius: "10px",
      },
    },
  },
});
