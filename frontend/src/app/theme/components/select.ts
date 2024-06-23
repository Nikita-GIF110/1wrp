import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

export const Select = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: {
      padding: "0 20px 0 0",
      height: "auto",
      outline: "none",
    },
    icon: {
      right: 0,
    },
  }),
});
