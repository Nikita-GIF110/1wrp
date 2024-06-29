import type { BoxProps } from "@chakra-ui/react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
import { CopyButton } from "shared/ui/copy-button";
import LinkChain from "assets/images/home/link-chain-icon.svg?react";
import DiscordSmall from "assets/icons/discord-small.svg?react";
import VkSmall from "assets/icons/vk-small.svg?react";
import YouTubeSmall from "assets/icons/youtube-small.svg?react";

interface SharedLinksProps extends Omit<BoxProps, "children"> {}

export const SharedLinks = (boxProps: SharedLinksProps) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    flexWrap="wrap"
    padding={{ base: "24px 0", md: "12px 0" }}
    gap="24px"
    {...boxProps}
  >
    <Box color={colors.acidic.primary} fontSize="20px" lineHeight="150%">
      Поделиться
    </Box>

    <Box
      as="span"
      flexGrow={1}
      backgroundColor={colors.acidic.primary}
      height="2px"
      display={{ base: "none", md: "inline-block" }}
    />

    <Flex gap="12px">
      <CopyButton tooltipLabel="какой-то текст" copyText="some copy text">
        <Box as={LinkChain} width="24px" height="24px" />
      </CopyButton>

      <Button variant="circleLight" backgroundColor="#BEC7CD">
        <Box as={VkSmall} width="24px" height="24px" />
      </Button>
      <Button variant="circleLight" backgroundColor="#BEC7CD">
        <Box as={DiscordSmall} width="24px" height="24px" />
      </Button>
      <Button variant="circleLight" backgroundColor="#BEC7CD">
        <Box as={YouTubeSmall} width="24px" height="24px" />
      </Button>
    </Flex>
  </Box>
);
