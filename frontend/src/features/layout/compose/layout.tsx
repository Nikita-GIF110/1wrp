import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Button, Flex, useDisclosure, Tooltip } from "@chakra-ui/react";
import { UserPanel } from "features/layout/ui/user-panel";
import { MenuListDesktop, MenuListMobile } from "features/layout/ui/menu-list";
import { Header } from "features/layout/ui/header";
import { Footer } from "features/layout/ui/footer";
import { PageLoader } from "features/layout/ui/page-loader";
import { HEADER_NAVIGATION, LANGUAGES } from "features/layout/config/base";
import { BurgerButton } from "features/layout/ui/burger-button";
import { SignInForm } from "features/layout/ui/sign-in-form";
import { useAuthLayout, SIGN_IN_SCHEMA } from "features/layout/models";
import type { SelectOption } from "entities/utils";

import { useI18N } from "shared/lib/useI18n";
import { Logo } from "shared/ui/logo";
import { LanguageDropdown } from "shared/ui/language-dropdown";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { useValidationSchema } from "shared/lib/useValidationSchema";
import { Drawer } from "shared/ui/drawer";
import { colors } from "shared/config/colors";

import LinkChain from "assets/images/home/link-chain-icon.svg?react";
import CloseIcon from "assets/icons/close-icon.svg?react";

export const Layout = () => {
  const { setLang } = useI18N();
  const mobileMenuDrawer = useDisclosure();

  const { onSubmit, signInFormState, initialValues } = useAuthLayout();
  const validate = useValidationSchema(SIGN_IN_SCHEMA);

  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  const setLanguage = (selectedLanguage: SelectOption) => {
    setLang(selectedLanguage.value as "ru" | "en");
  };

  return (
    <>
      {/* Drawer */}
      {(isMobile || isTablet) && (
        <Drawer
          isOpen={mobileMenuDrawer.isOpen}
          onClose={mobileMenuDrawer.onClose}
        >
          <Flex justifyContent="space-between" columnGap="32px" height="100%">
            {/* Left */}
            <Flex flexDirection="column" justifyContent="space-between">
              <Logo padding="24px 0" />
              <MenuListMobile list={HEADER_NAVIGATION} />
              <UserPanel placeholder="Войти" onClick={signInFormState.onOpen} />
            </Flex>

            {/* Right */}
            <Flex flexDirection="column" rowGap="32px">
              <Button onClick={mobileMenuDrawer.onClose} variant="circleLight">
                <Box as={CloseIcon} width="24px" height="24px" />
              </Button>
              <LanguageDropdown languages={LANGUAGES} onChage={setLanguage} />
            </Flex>
          </Flex>
        </Drawer>
      )}

      {/* Sign in form */}
      <Drawer
        isOpen={signInFormState.isOpen}
        onClose={signInFormState.onClose}
        backgroundColor={colors.white}
        minWidth={{ xl: "630px" }}
      >
        <Flex justifyContent="space-between" columnGap="32px" height="100%">
          <SignInForm
            onSubmit={onSubmit}
            validate={validate}
            initialValues={initialValues}
          />

          {/* Right */}
          <Flex flexDirection="column" rowGap="12px">
            <Button
              onClick={signInFormState.onClose}
              variant="circleLight"
              backgroundColor="#BEC7CD"
            >
              <Box as={CloseIcon} width="24px" height="24px" />
            </Button>

            <Tooltip hasArrow label="какой-то текст" placement="bottom-end">
              <Button
                onClick={signInFormState.onClose}
                variant="circleLight"
                backgroundColor="#BEC7CD"
              >
                <Box as={LinkChain} width="24px" height="24px" />
              </Button>
            </Tooltip>
          </Flex>
        </Flex>
      </Drawer>

      {/* Header */}
      <Box position="absolute" top={0} left={0} width="100%">
        {isDesktop && (
          <Header
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
            rightNode={
              <UserPanel
                placeholder="Личный кабинет"
                onClick={signInFormState.onOpen}
              />
            }
          />
        )}
        {isTablet && (
          <Header
            padding={0}
            paddingLeft="40px"
            position="relative"
            zIndex={100}
            leftNode={
              <Flex maxWidth="240px" flexGrow={1} alignItems="center">
                <Logo marginRight="auto" />
                <LanguageDropdown languages={LANGUAGES} onChage={setLanguage} />
              </Flex>
            }
            centerNode={
              <UserPanel
                placeholder="Личный кабинет"
                onClick={signInFormState.onOpen}
              />
            }
            rightNode={
              <BurgerButton
                onClick={mobileMenuDrawer.onOpen}
                buttonSize="114px"
                iconSize="50px"
              />
            }
          />
        )}
        {isMobile && (
          <Header
            padding={0}
            paddingLeft="12px"
            position="relative"
            zIndex={100}
            leftNode={<Logo />}
            centerNode={<UserPanel onClick={signInFormState.onOpen} />}
            rightNode={
              <BurgerButton
                buttonSize="72px"
                iconSize="24px"
                onClick={mobileMenuDrawer.onOpen}
              />
            }
          />
        )}
      </Box>

      <Suspense
        fallback={
          <Box height="100vh">
            <PageLoader />
          </Box>
        }
      >
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};
