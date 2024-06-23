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
