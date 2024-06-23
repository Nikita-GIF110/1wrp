import type { DrawerProps as ChakraDrawerProps } from "@chakra-ui/react";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface DrawerProps extends ChakraDrawerProps {}

export const Drawer = ({
  onClose,
  children,
  ...otherDrawerProps
}: DrawerProps) => (
  <ChakraDrawer onClose={onClose} {...otherDrawerProps}>
    <DrawerOverlay />

    <DrawerContent
      backgroundColor={colors.black}
      borderLeftRadius="64px"
      minWidth={{
        base: "300px",
        md: "460px",
      }}
      padding={{
        base: "40px 20px",
        md: "64px 40px 64px 80px",
      }}
    >
      <DrawerBody
        display="flex"
        columnGap="32px"
        justifyContent="space-between"
        padding={0}
      >
        {children}
      </DrawerBody>
    </DrawerContent>
  </ChakraDrawer>
);
