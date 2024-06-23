import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { LANGUAGES } from "features/layout/config/base";
import type { SelectOption } from "entities/utils";
import { Container } from "shared/ui/container";
import { colors } from "shared/config/colors";
import { useI18N } from "shared/lib/useI18n";
import { Logo } from "shared/ui/logo";
import { LanguageDropdown } from "shared/ui/language-dropdown";
import payments from "assets/images/payments.png";
import { SocialLinkSmall } from "../ui/social-links-small";

export const Footer = () => {
  const { setLang } = useI18N();

  const setLanguage = (selectedLanguage: SelectOption) => {
    setLang(selectedLanguage.value as "ru" | "en");
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

          <Box as="img" src={payments} />
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
            ООО “Один Гейм Девелопмент” ИНН 9703149875 ОГРН 1237700457862 26,
            Vyronos Street. 3105. Limassol. LB. CY120009.
          </Box>

          <Box lineHeight={{ base: "152%", md: "146%" }} opacity={0.5}>
            <Box as={Link} to="/" display="block">
              Политика конфиденциальности
            </Box>
            <Box as={Link} to="/" display="block">
              Пользовательское соглашение
            </Box>
            <Box as={Link} to="/" display="block">
              Публичная оферта
            </Box>
            <Box as={Link} to="/" display="block">
              Политика Cookie файлов
            </Box>
            <Box as={Link} to="/" display="block">
              Правила сервера
            </Box>
          </Box>

          <Box opacity={0.5} maxWidth="293px" marginTop={{ base: "18px", md: 0 }}>
            <Box marginRight="28px" lineHeight="148%">
              Канал поддержки в Discord
              <br />
              Поддержка в ВК
            </Box>

            <SocialLinkSmall marginTop="24px" />
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
