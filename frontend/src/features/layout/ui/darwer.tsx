import type { DrawerProps as ChakraDrawerProps } from "@chakra-ui/react";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { LANGUAGES } from "features/layout/config/base";
import type { SelectOption } from "entities/utils";
import CloseIcon from "assets/icons/close-icon.svg?react";
import { Logo } from "shared/ui/logo";
import { LanguageDropdown } from "shared/ui/language-dropdown";
import { useI18N } from "shared/lib/useI18n";
import { colors } from "shared/config/colors";
import type { ReactNode } from "react";

interface DrawerProps extends Omit<ChakraDrawerProps, "children"> {
  bottom: ReactNode;
  center: ReactNode;
}

export const Drawer = ({
  onClose,
  bottom,
  center,
  ...otherDrawerProps
}: DrawerProps) => {
  const { setLang } = useI18N();

  const setLanguage = (selectedLanguage: SelectOption) => {
    setLang(selectedLanguage.value as "ru" | "en");
  };

  return (
    <ChakraDrawer onClose={onClose} {...otherDrawerProps}>
      <DrawerOverlay />

      <DrawerContent
        backgroundColor={colors.black}
        borderLeftRadius="64px"
        minWidth="460px"
      >
        <DrawerBody
          display="flex"
          columnGap="32px"
          justifyContent="space-between"
          padding="64px 40px 64px 80px"
        >
          {/* Left */}
          <Flex flexDirection="column" justifyContent="space-between">
            <Logo padding="24px 0" />

            {center}

            {bottom}
          </Flex>

          {/* Right */}
          <Flex flexDirection="column" rowGap="32px">
            <Button onClick={onClose} variant="roundedLight">
              <Box as={CloseIcon} width="24px" height="24px" />
            </Button>

            <LanguageDropdown languages={LANGUAGES} onChage={setLanguage} />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
