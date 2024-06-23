import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { UserPanel } from "features/layout/ui/user-panel";
import { MenuListDesktop, MenuListMobile } from "features/layout/ui/menu-list";
import { HeaderDesktop, HeaderMobile } from "features/layout/ui/header";
import { Footer } from "features/layout/ui/footer";
import { PageLoader } from "features/layout/ui/page-loader";
import { HEADER_NAVIGATION, LANGUAGES } from "features/layout/config/base";
import { Drawer } from "features/layout/ui/darwer";
import { BurgerButton } from "features/layout/ui/burger-button";
import type { SelectOption } from "entities/utils";

import { useI18N } from "shared/lib/useI18n";
import { Logo } from "shared/ui/logo";
import { LanguageDropdown } from "shared/ui/language-dropdown";
import { useMediaQuery } from "shared/lib/useMediaQuery";

export const Layout = () => {
  const { setLang } = useI18N();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // breakpoints
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  const setLanguage = (selectedLanguage: SelectOption) => {
    setLang(selectedLanguage.value as "ru" | "en");
  };

  return (
    <>
      {/* Header */}
      <Box position="absolute" top={0} left={0} width="100%">
        {isDesktop && (
          <HeaderDesktop
            position="relative"
            zIndex={100}
            leftNode={
              <Flex maxWidth="240px" flexGrow={1} alignItems="center">
                <Logo marginRight="auto" />
                <LanguageDropdown languages={LANGUAGES} onChage={setLanguage} />
              </Flex>
            }
            centerNode={
              <MenuListDesktop list={HEADER_NAVIGATION} margin="0 auto" />
            }
            rightNode={<UserPanel />}
          />
        )}
        {isMobile ||
          (isTablet && (
            <>
              <HeaderMobile
                position="relative"
                zIndex={100}
                leftNode={
                  <Flex maxWidth="240px" flexGrow={1} alignItems="center">
                    <Logo marginRight="auto" />
                    <LanguageDropdown
                      languages={LANGUAGES}
                      onChage={setLanguage}
                    />
                  </Flex>
                }
                centerNode={<UserPanel />}
                rightNode={<BurgerButton onClick={onOpen} />}
              />

              <Drawer
                isOpen={isOpen}
                onClose={onClose}
                bottom={<UserPanel placeholder="Войти" />}
                center={<MenuListMobile list={HEADER_NAVIGATION} />}
              />
            </>
          ))}
      </Box>

      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};
