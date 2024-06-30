import { Box, Flex } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import DecorSvg from "assets/images/home/about-decor-svg.svg?react";
import type { SocialLinkEntity } from "features/home/models";
import { colors } from "shared/config/colors";
import bg from "assets/images/home/about-bg-placeholder.webp";
import { AboutHeader } from "../ui/about-header";
import { SocialLink } from "../ui/social-link";

interface AboutBlockProps {
  links: Array<SocialLinkEntity>;
  header: string
  description: string
}

export const AboutBlock = ({ links = [], header, description }: AboutBlockProps) => (
  <Box
    padding="44px"
    position="relative"
    borderRadius="md"
    overflow="hidden"
    _before={{
      content: "''",
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      background:
        "linear-gradient(97deg, rgba(12, 13, 17, 0.90) 45.38%, rgba(12, 13, 17, 0.00) 100%)",
      width: "100%",
      height: "100%",
      zIndex: 2,
    }}
  >
    <LazyLoad once offset={100}>
      <Box
        as="img"
        src={bg}
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        height="100%"
        objectFit="cover"
        pointerEvents="none"
      />
    </LazyLoad>

    <Flex alignItems="center" columnGap="100px" position="relative" zIndex={3}>
      <DecorSvg />

      <Box>
        <AboutHeader header={header} />

        <Box
          fontSize="20px"
          fontWeight={500}
          lineHeight="130%"
          letterSpacing="-1px"
          margin="32px 0"
          maxWidth="565px"
          color={colors.white}
        >
          {description}
          {/* 1WRP это виртуальная вселенная с разнообразными ролями, аналогичными
          реальной жизни. Вы можете стать кем угодно, создавая свою историю в
          этом мире вместе с другими игроками */}
        </Box>

        <Flex columnGap="16px">
          {links.map((link) => (
            <SocialLink key={link.id} {...link} />
          ))}
        </Flex>
      </Box>
    </Flex>
  </Box>
);
