import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

export const Textarea = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
  },
  variants: {
    outline: defineStyle({
      border: `1px solid ${colors.gray.primary}`,

      _focus: {
        borderColor: colors.black,
        boxShadow: "none",
      },
    }),
  },
  sizes: {
    xs: {
      borderRadius: "6px",
    },
    sm: {
      borderRadius: "8px",
    },
    md: {
      borderRadius: "10px",
    },
    lg: {
      borderRadius: "10px",
    },
  },
});
