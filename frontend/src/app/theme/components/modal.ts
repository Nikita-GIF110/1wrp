import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { colors } from "shared/config/colors";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

export const Modal = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    dialog: {
      borderRadius: "20px",
      padding: "38px",
    },
    header: {
      marginBottom: "22px",
      padding: "0",
    },
    body: {
      padding: "0",
    },
    closeButton: {
      top: "20px",
      right: "20px",
      width: "10px",
      height: "10px",
      color: colors.black,
      backgroundColor: colors.transparent,
    },
  }),
});
