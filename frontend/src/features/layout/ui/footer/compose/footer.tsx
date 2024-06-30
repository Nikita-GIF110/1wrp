import { Box, Flex } from "@chakra-ui/react";
import { LANGUAGES } from "features/layout/config/base";
import { Container } from "shared/ui/container";
import { colors } from "shared/config/colors";
import { useI18N } from "shared/lib/useI18n";
import { Logo } from "shared/ui/logo";
import { LanguageDropdown } from "shared/ui/language-dropdown";
import { useTranslate } from "shared/lib/useTranslate";

import payments from "assets/images/payments.webp";
import DiscordSmall from "assets/icons/discord-small.svg?react";
import VkSmall from "assets/icons/vk-small.svg?react";
import YouTubeSmall from "assets/icons/youtube-small.svg?react";
import TelegramSmall from "assets/icons/telegram-small.svg?react";
import WinSmall from "assets/icons/1win-small.svg?react";

import { NavLink } from "../ui/nav-link";

export const Footer = () => {
  const { setLang } = useI18N();
  const translate = useTranslate();

  const setLanguage = (selectedLanguage: "ru" | "en") => {
    setLang(selectedLanguage);
  };

  return (
    <Box
      as="footer"
      marginTop="auto"
      padding={{ base: "118px 34px", md: "120px 44px", xl: "119px 0" }}
    >
      <Container>
        {/* Top */}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          rowGap={{ base: "22px", md: "24px" }}
          flexWrap="wrap"
        >
          <Flex maxWidth="240px" flexGrow={1} alignItems="center">
            <Logo marginRight="auto" width="160px" height="39px" />

            <LanguageDropdown languages={LANGUAGES} onChage={setLanguage} />
          </Flex>

          <Box
            as="img"
            src={payments}
            alt="Оплата"
            width="225px"
            height="30px"
          />
        </Flex>

        <Box
          backgroundColor={colors.blue.primary}
          margin="37px 0 40px 0"
          width="100%"
          height="1px"
        />

        {/* Middle */}
        <Flex
          justifyContent="space-between"
          fontSize="16px"
          color={colors.white}
          flexWrap={{ base: "wrap", xl: "nowrap" }}
          gap={{ base: "12px", md: "24px" }}
        >
          <Box
            maxWidth={{ md: "50%", xl: "297px" }}
            lineHeight="148%"
            opacity={0.5}
          >
            {translate("footer.info")}
          </Box>

          <Box lineHeight={{ base: "152%", md: "146%" }}>
            <NavLink to="/">{translate("footer.link_privacy_policy")}</NavLink>
            <NavLink to="/">{translate("footer.link_user_agreement")}</NavLink>
            <NavLink to="/">{translate("footer.link_public_offer")}</NavLink>
            <NavLink to="/">{translate("footer.link_cookie_policy")}</NavLink>
            <NavLink to="/">{translate("footer.link_server_rules")}</NavLink>
          </Box>

          <Box
            opacity={0.5}
            maxWidth="293px"
            marginTop={{ base: "18px", md: 0 }}
          >
            <Box marginRight="28px" lineHeight="148%">
              {translate("footer.support_channel")}
            </Box>

            <Flex marginTop="24px" columnGap="28px">
              <NavLink to="/">
                <Box as={VkSmall} color={colors.white} />
              </NavLink>
              <NavLink to="/">
                <Box as={TelegramSmall} color={colors.white} />
              </NavLink>
              <NavLink to="/">
                <Box as={DiscordSmall} color={colors.white} />
              </NavLink>
              <NavLink to="/">
                <Box as={YouTubeSmall} color={colors.white} />
              </NavLink>
              <NavLink to="/">
                <Box as={WinSmall} color={colors.white} />
              </NavLink>
            </Flex>
          </Box>
        </Flex>

        <Box
          backgroundColor={colors.white}
          margin="40px 0"
          width="100%"
          height="1px"
          opacity={0.1}
        />

        {/* Bottom */}
        <Box
          fontSize="16px"
          lineHeight="152%"
          letterSpacing="16px"
          textTransform="uppercase"
          opacity={0.5}
          color={colors.white}
        >
          One Role Play © {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
};
