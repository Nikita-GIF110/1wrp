import { Suspense, lazy, useEffect } from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Box, Button, Flex, useDisclosure, Link } from "@chakra-ui/react";
import { UserPanel } from "features/layout/ui/user-panel";
import { MenuListDesktop, MenuListMobile } from "features/layout/ui/menu-list";
import { Header } from "features/layout/ui/header";
import { Footer } from "features/layout/ui/footer";
import { PageLoader } from "features/layout/ui/page-loader";
import { HEADER_NAVIGATION, LANGUAGES } from "features/layout/config/base";
import { BurgerButton } from "features/layout/ui/burger-button";
import { useAuthLayout, SIGN_IN_SCHEMA } from "features/layout/models";
import { AuthWithSocialNetwork } from "features/layout/ui/auth-with-social-network";

import { useI18N } from "shared/lib/useI18n";
import { Logo } from "shared/ui/logo";
import { LanguageDropdown } from "shared/ui/language-dropdown";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { useValidationSchema } from "shared/lib/useValidationSchema";
import { Drawer } from "shared/ui/drawer";
import { CopyButton } from "shared/ui/copy-button";
import { ContentPlaceholder } from "shared/ui/content-placeholder";
import { colors } from "shared/config/colors";
import { useTranslate } from "shared/lib/useTranslate";

import LinkChain from "assets/images/home/link-chain-icon.svg?react";
import CloseIcon from "assets/icons/close-icon.svg?react";
import UserIcon from "assets/icons/user-icon.svg?react";

const SignInForm = lazy(() => import("../ui/sign-in-form"));

export const Layout = () => {
  const location = useLocation();
  const { setLang } = useI18N();
  const translate = useTranslate();
  const mobileMenuDrawer = useDisclosure();

  const { onSubmit, signInFormState, initialValues, onAuth } = useAuthLayout();
  const validate = useValidationSchema(SIGN_IN_SCHEMA);

  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  const setLanguage = (selectedLanguage: "ru" | "en") => {
    setLang(selectedLanguage);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <Box overflowX="hidden">
      {/* Mobile Menu */}
      {(isMobile || isTablet) && (
        <Drawer
          isOpen={mobileMenuDrawer.isOpen}
          onClose={mobileMenuDrawer.onClose}
          padding={{ base: "24px 32px", md: "64px 120px 64px 80px" }}
          minWidth={{ base: "100%", md: "460px" }}
          borderLeftRadius={{ base: "44px", md: "64px" }}
        >
          <Flex
            flexDirection="column"
            height="100%"
            justifyContent="space-between"
          >
            <Logo padding="24px 0" />
            <MenuListMobile list={HEADER_NAVIGATION} />
            <UserPanel
              placeholder={translate("header.mobile_menu_sign_in_button_text")}
              onClick={signInFormState.onOpen}
              width="100%"
            />
          </Flex>

          <Flex
            flexDirection="column"
            rowGap="32px"
            position="absolute"
            top={{ base: "24px", md: "64px" }}
            right={{ base: "32px", md: "40px" }}
          >
            <Button onClick={mobileMenuDrawer.onClose} variant="circleLight">
              <Box as={CloseIcon} width="24px" height="24px" />
            </Button>
            <LanguageDropdown languages={LANGUAGES} onChage={setLanguage} />
          </Flex>
        </Drawer>
      )}

      {/* Sign in form */}
      <Drawer
        isOpen={signInFormState.isOpen}
        onClose={signInFormState.onClose}
        backgroundColor={colors.white}
        minWidth={{ base: "100%", md: "515px", xl: "630px" }}
        borderLeftRadius={{ base: "44px", md: "64px" }}
        padding={{ base: "24px 32px", md: "64px 128px 64px 80px" }}
      >
        <Flex flexDirection="column" height="100%">
          <Box marginTop="auto">
            <Suspense
              fallback={
                <>
                  <ContentPlaceholder height="40px" marginBottom="20px" />
                  <ContentPlaceholder height="100px" marginBottom="20px" />
                  <ContentPlaceholder height="100px" marginBottom="20px" />
                  <ContentPlaceholder height="60px" marginBottom="20px" />
                  <Flex gap="4px">
                    <ContentPlaceholder height="75px" flex="1 1 auto" />
                    <ContentPlaceholder height="75px" flex="1 1 auto" />
                    <ContentPlaceholder height="75px" flex="1 1 auto" />
                    <ContentPlaceholder height="75px" flex="1 1 auto" />
                    <ContentPlaceholder height="75px" flex="1 1 auto" />
                  </Flex>
                </>
              }
            >
              <SignInForm
                onSubmit={onSubmit}
                validate={validate}
                initialValues={initialValues}
              />

              <Link
                as={ReactRouterLink}
                variant="smallRoundedLight"
                size="sm"
                backgroundColor={colors.blue.primary}
                color={colors.white}
                marginTop="12px"
                justifyContent="center"
                width="100%"
              >
                <Box
                  as={UserIcon}
                  width="20px"
                  height="20px"
                  marginRight="19px"
                />
                {translate("lending.auth_form_registration_button_text")}
              </Link>

              <Box
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                fontSize="16px"
                fontWeight={500}
                lineHeight="100%"
                letterSpacing="0.64px"
                textTransform="uppercase"
                opacity={0.5}
                marginTop="32px"
                marginBottom="6px"
              >
                {translate("lending.auth_via_social_media_networks_title")}
              </Box>

              <AuthWithSocialNetwork onAuth={onAuth} />
            </Suspense>
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          rowGap="12px"
          position="absolute"
          top={{ base: "24px", md: "64px" }}
          right={{ base: "32px", md: "40px" }}
        >
          <Button
            onClick={signInFormState.onClose}
            variant="circleLight"
            backgroundColor="#BEC7CD"
          >
            <Box as={CloseIcon} width="24px" height="24px" />
          </Button>

          <CopyButton
            tooltipLabel={translate("copy_button.auth_form_tooltip_text")}
            copyText="some copy text"
          >
            <Box as={LinkChain} width="24px" height="24px" />
          </CopyButton>
        </Flex>
      </Drawer>

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
                placeholder={translate("header.personal_account_button_text")}
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
                placeholder={translate(
                  "header.mobile_menu_sign_in_button_text"
                )}
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
    </Box>
  );
};
