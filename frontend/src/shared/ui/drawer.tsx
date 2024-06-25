import type {
  DrawerProps as ChakraDrawerProps,
  DrawerContentProps,
} from "@chakra-ui/react";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface DrawerProps extends ChakraDrawerProps {
  backgroundColor?: string;
  minWidth?: DrawerContentProps["minWidth"];
  padding?: DrawerContentProps["padding"];
  borderLeftRadius?: DrawerContentProps["borderLeftRadius"];
}

const defaultDrawerContentMinWidth = {
  base: "300px",
  md: "460px",
};

const defaultDrawerContentPadding = {
  base: "36px 16px",
  md: "60px 36px 60px 76px",
};

export const Drawer = ({
  onClose,
  children,
  backgroundColor = colors.black,
  minWidth = defaultDrawerContentMinWidth,
  padding = defaultDrawerContentPadding,
  borderLeftRadius,
  ...otherDrawerProps
}: DrawerProps) => (
  <ChakraDrawer onClose={onClose} {...otherDrawerProps}>
    <DrawerOverlay />

    <DrawerContent
      backgroundColor={backgroundColor}
      borderLeftRadius={borderLeftRadius}
      minWidth={minWidth}
      padding={padding}
      overflow="hidden"
    >
      <DrawerBody
        padding="4px"
        sx={{
          "::-webkit-scrollbar": { width: 0 },
          "-ms-overflow-style": "none",
        }}
      >
        {children}
      </DrawerBody>
    </DrawerContent>
  </ChakraDrawer>
);
