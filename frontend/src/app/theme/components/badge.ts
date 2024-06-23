import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

export const Badge = defineStyleConfig({
  variants: {
    boxy: defineStyle({
      padding: "10px 16px",
      borderRadius: "6px",
      color: colors.black,
      backgroundColor: colors.white,
      fontSize: "16px",
      textTransform: "uppercase",
      lineHeight: "82%",
      fontFamily: "Halvar Engschrift",
      fontWeight: 700,
    }),
    boxyDark: defineStyle({
      padding: "10px 16px",
      borderRadius: "6px",
      color: colors.white,
      backgroundColor: colors.black,
      fontSize: "16px",
      textTransform: "uppercase",
      lineHeight: "82%",
      fontFamily: "Halvar Engschrift",
      fontWeight: 700,
    }),
  },
});
