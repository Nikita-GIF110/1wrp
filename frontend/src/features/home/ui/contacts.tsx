import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import GraffitiLogo1Win from "assets/images/home/graffiti-logo-1Win.svg?react";
import GraffitiLogoYouTube from "assets/images/home/graffiti-logo-YouTube.svg?react";
import GraffitiLogoTelegram from "assets/images/home/graffiti-logo-Telegram.svg?react";
import GraffitiLogoDiscord from "assets/images/home/graffiti-logo-Discord.svg?react";
import GraffitiLogoVK from "assets/images/home/graffiti-logo-VK.svg?react";
import { colors } from "shared/config/colors";
import bg from "assets/images/home/contacts-bg.png";

interface LinkItemProps {
  icon: FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const LinkItem = ({ icon }: LinkItemProps) => (
  <Link to="/">
    <Box
      as={icon}
      width={{ base: "80px", md: "190px" }}
      height={{ base: "80px", md: "190px" }}
    />
  </Link>
);

export const Contacts = () => (
  <Box
    padding={{
      base: "35px 35px 60px 35px",
      md: "80px 80px 95px 80px",
      xl: "80px 80px 143px 80px",
    }}
    position="relative"
    overflow="hidden"
    _before={{
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "500px",
      backgroundImage: bg,
      backgroundPosition: "center",
      backgroundSize: "cover",
      mixBlendMode: "overlay",
    }}
    _after={{
      content: "''",
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      height: "500px",
      opacity: 0.56,
      background:
        "radial-gradient(51.6% 143.73% at 50% 156.46%, #00A3FF 0%, rgba(12, 13, 17, 0.00) 100%)",
      pointerEvents: "none",
      zIndex: -1,
    }}
  >
    <Flex
      position="relative"
      columnGap={{ base: 0, xl: "80px" }}
      flexWrap="wrap"
      justifyContent="center"
    >
      <Link to="/">
        <Box
          as={GraffitiLogoYouTube}
          width={{ base: "80px", md: "190px" }}
          height={{ base: "80px", md: "190px" }}
        />
      </Link>

      <LinkItem icon={GraffitiLogoDiscord} />
      <LinkItem icon={GraffitiLogoVK} />
      <LinkItem icon={GraffitiLogoTelegram} />
      <LinkItem icon={GraffitiLogo1Win} />
    </Flex>

    <Box
      fontSize={{ base:" 44px", md: "80px" }}
      fontWeight={900}
      lineHeight={{ base: "100%", md: "130%" }}
      textTransform="uppercase"
      textAlign="center"
      color={colors.black}
      position="absolute"
      bottom={{ base: "-10px", md: "-35px" }}
      left="50%"
      transform="translate(-50%, 0)"
    >
      контакты
    </Box>
  </Box>
);
