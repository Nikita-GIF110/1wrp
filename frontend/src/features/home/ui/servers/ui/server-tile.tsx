import { Box, Flex, Button } from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import TileDecorFrame from "assets/images/home/server-tile-decor-frame-1.svg?react";
import ServerIcon from "assets/images/home/server-icon-1.svg?react";
import CopyIcon from "assets/icons/copy-icon.svg?react";
import CheckIcon from "assets/icons/check-icon.svg?react";

interface ServerTileProps {
  id: number;
  name: string;
  onlineCount: number;
  registeredCount: number;
  link: string;
}

interface StatisticsItem {
  header: string;
  count: number;
}

const StatisticsItem = ({ header, count }: StatisticsItem) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Flex flexDirection="column" rowGap="6px">
      <Box
        color={colors.black}
        opacity={0.4}
        fontSize={isDesktop ? "12px" : "10px"}
        fontWeight={500}
        lineHeight="100%"
        textTransform="uppercase"
      >
        {header}
      </Box>
      <Box
        fontSize={isDesktop ? "32px" : "24px"}
        fontWeight={900}
        lineHeight="80%"
        textTransform="uppercase"
      >
        {count}
      </Box>
    </Flex>
  );
};
const CopyButton = ({ text }: { text: string }) => {
  const { onCopy, hasCopied, setValue } = useClipboard("");

  return (
    <Box
      position="relative"
      borderRadius="6px"
      overflow="hidden"
      cursor="pointer"
    >
      <Button
        variant="mediumDark"
        size="md"
        fontSize="20px"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {text}
      </Button>

      <Flex
        opacity={0}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        justify="center"
        alignItems="center"
        transition="opacity 0.2s ease-in"
        _hover={{
          opacity: 1,
          backgroundColor: hasCopied
            ? "rgba(0, 163, 255, 0.80)"
            : "rgba(12, 13, 17, 0.90)",
        }}
        onClick={() => {
          setValue(text);
          onCopy();
        }}
      >
        <Box as={hasCopied ? CheckIcon : CopyIcon} color={colors.white} />
      </Flex>
    </Box>
  );
};

export const ServerTile = ({
  name,
  onlineCount,
  registeredCount,
  link,
}: ServerTileProps) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Flex
      flexDirection="column"
      rowGap="20px"
      backgroundColor={colors.white}
      borderRadius="md"
      position="relative"
      padding={isDesktop ? "27px 40px 27px 100px" : "24px 24px 24px 80px"}
    >
      <Box as={TileDecorFrame} position="absolute" top="-4px" left="-69px" />

      <Box
        as={ServerIcon}
        position="absolute"
        top="39px"
        left="-80px"
        width={160}
        height={160}
      />

      <Box
        fontSize={isDesktop ? "40px" : "24px"}
        fontWeight={900}
        lineHeight="100%"
        textTransform="uppercase"
      >
        {name}
      </Box>

      <Flex
        justifyContent="space-between"
        rowGap="20px"
        flexDirection={isDesktop ? "row" : "column"}
      >
        <StatisticsItem header="онлайн игроков" count={onlineCount} />
        <StatisticsItem header="зарегистрировано" count={registeredCount} />
      </Flex>

      <CopyButton text={link} />
    </Flex>
  );
};
