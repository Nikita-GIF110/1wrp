import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import DiscordSmall from "assets/icons/discord-small.svg?react";
import VkSmall from "assets/icons/vk-small.svg?react";
import YouTubeSmall from "assets/icons/youtube-small.svg?react";
import TelegramSmall from "assets/icons/telegram-small.svg?react";
import WinSmall from "assets/icons/1win-small.svg?react";
import { colors } from "shared/config/colors";

interface SocialLinkSmallProps extends BoxProps {}

export const SocialLinkSmall = (props: SocialLinkSmallProps) => (
  <Box display="flex" columnGap="28px" {...props}>
    <Box as="a" href="//google.com" target="_blank">
      <Box
        as={VkSmall}
        // width="25.85px"
        // height="25.85px"
        color={colors.white}
        opacity={0.5}
      />
    </Box>

    <Box as="a" href="//google.com" target="_blank">
      <Box
        as={TelegramSmall}
        // width="25.85px"
        // height="25.85px"
        color={colors.white}
        opacity={0.5}
      />
    </Box>

    <Box as="a" href="//google.com" target="_blank">
      <Box
        as={DiscordSmall}
        // width="25.85px"
        // height="25.85px"
        color={colors.white}
        opacity={0.5}
      />
    </Box>

    <Box as="a" href="//google.com" target="_blank">
      <Box
        as={YouTubeSmall}
        // width="25.85px"
        // height="25.85px"
        color={colors.white}
        opacity={0.5}
      />
    </Box>

    <Box as="a" href="//google.com" target="_blank">
      <Box
        as={WinSmall}
        // width="25.85px"
        // height="25.85px"
        color={colors.white}
        opacity={0.5}
      />
    </Box>
  </Box>
);
