import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

export const Tooltip = defineStyleConfig({
  baseStyle: defineStyle({
    "--tooltip-bg": colors.black,

    padding: "6px 12px",
    background: colors.black,
    fontFamily: "Halvar Breitschrift",
    fontSize: "16px",
    lineHeight: "116%",
    fontWeight: 500,
    letterSpacing: "-1px",
    color: colors.white,
    maxWidth: "auto",
    borderRadius: "4px",
  }),
});
