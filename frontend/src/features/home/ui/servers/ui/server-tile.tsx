import { Fragment } from "react/jsx-runtime";
import type { BoxProps } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import { Box, Flex, Button } from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import TileDecorFrame1 from "assets/images/home/server-tile-decor-frame-1.svg?react";
import TileDecorFrame2 from "assets/images/home/server-tile-decor-frame-2.svg?react";
import TileDecorFrame3 from "assets/images/home/server-tile-decor-frame-3.svg?react";
import TileDecorFrame4 from "assets/images/home/server-tile-decor-frame-4.svg?react";
import TileDecorFrame5 from "assets/images/home/server-tile-decor-frame-5.svg?react";
import TileDecorFrame6 from "assets/images/home/server-tile-decor-frame-6.svg?react";
import ServerIcon1 from "assets/images/home/server-icon-1.svg?react";
import ServerIcon2 from "assets/images/home/server-icon-2.svg?react";
import ServerIcon3 from "assets/images/home/server-icon-3.svg?react";
import ServerIcon4 from "assets/images/home/server-icon-4.svg?react";
import ServerIcon5 from "assets/images/home/server-icon-5.svg?react";
import ServerIcon6 from "assets/images/home/server-icon-6.svg?react";
import CopyIcon from "assets/icons/copy-icon.svg?react";
import CheckIcon from "assets/icons/check-icon.svg?react";

interface ServerTileProps {
  id: number;
  name: string;
  onlineCount: number;
  registeredCount: number;
  link: string;
  index?: number;
}

interface StatisticsItem {
  header: string;
  count: number;
}

interface CopyWrapperProps extends Omit<BoxProps, "position | overflow"> {
  hasCopied: boolean;
  onCopyClick: () => void;
}

const StatisticsItem = ({ header, count }: StatisticsItem) => (
  <Flex
    flexDirection={{ md: "column" }}
    alignItems={{ base: "center", md: "flex-start" }}
    justifyContent="space-between"
    rowGap="6px"
  >
    <Box
      color={colors.black}
      opacity={{ base: 0.7, md: 0.4 }}
      fontSize={{
        base: "8px",
        md: "10px",
        xl: "12px",
      }}
      fontWeight={500}
      lineHeight="100%"
      textTransform="uppercase"
    >
      {header}
    </Box>
    <Box
      fontSize={{
        base: "20px",
        md: "24px",
        xl: "32px",
      }}
      fontWeight={900}
      lineHeight="80%"
      textTransform="uppercase"
    >
      {count}
    </Box>
  </Flex>
);
const CopyWrapper = ({
  hasCopied,
  children,
  onCopyClick,
  ...otherCopyWrapperProps
}: CopyWrapperProps) => (
  <Box
    position="relative"
    overflow="hidden"
    cursor="pointer"
    {...otherCopyWrapperProps}
  >
    {children}

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
      onClick={onCopyClick}
      _hover={{
        opacity: 1,
        backgroundColor: hasCopied
          ? "rgba(0, 163, 255, 0.80)"
          : "rgba(12, 13, 17, 0.90)",
      }}
    >
      <Box as={hasCopied ? CheckIcon : CopyIcon} color={colors.white} />
    </Flex>
  </Box>
);

const icons = {
  0: ServerIcon1,
  1: ServerIcon2,
  2: ServerIcon3,
  3: ServerIcon4,
  4: ServerIcon5,
  5: ServerIcon6,
};
const frames = {
  0: TileDecorFrame1,
  1: TileDecorFrame2,
  2: TileDecorFrame3,
  3: TileDecorFrame4,
  4: TileDecorFrame5,
  5: TileDecorFrame6,
};

export const ServerTile = ({
  name,
  onlineCount,
  registeredCount,
  link,
  index = 0,
}: ServerTileProps) => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery();
  const { onCopy, hasCopied, setValue } = useClipboard("");

  const WrapperComponent = isMobile ? CopyWrapper : Fragment;

  const onCopyClick = () => {
    setValue(link);
    onCopy();
  };

  return (
    <WrapperComponent
      onCopyClick={onCopyClick}
      hasCopied={hasCopied}
      borderRadius="6px"
    >
      <Flex
        flexDirection="column"
        rowGap={{ base: "4px", md: "20px" }}
        backgroundColor={colors.white}
        borderRadius="md"
        position="relative"
        padding={{
          base: "12px",
          md: "24px 24px 24px 80px",
          xl: "27px 40px 27px 100px",
        }}
      >
        {(isDesktop || isTablet) && (
          <LazyLoad once>
            <Box
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              as={(frames as any)[index]}
              position="absolute"
              top="15px"
              left="-45px"
              loading="lazy"
            />

            <Box
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              as={(icons as any)[index]}
              position="absolute"
              top="39px"
              left="-80px"
              width={160}
              height={160}
              loading="lazy"
            />
          </LazyLoad>
        )}

        <Box
          fontSize={{
            base: "18px",
            md: "24px",
            xl: "40px",
          }}
          fontWeight={900}
          lineHeight="100%"
          textTransform="uppercase"
        >
          {name}
        </Box>

        <Flex
          justifyContent="space-between"
          rowGap={{ base: "2px", md: "20px" }}
          flexDirection={{
            base: "column",
            xl: "row",
          }}
        >
          <StatisticsItem header="онлайн игроков" count={onlineCount} />
          <StatisticsItem header="зарегистрировано" count={registeredCount} />
        </Flex>

        {(isDesktop || isTablet) && (
          <CopyWrapper
            hasCopied={hasCopied}
            onCopyClick={onCopyClick}
            borderRadius="6px"
          >
            <Button
              variant="mediumDark"
              size="md"
              fontSize="20px"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              width="100%"
            >
              {link}
            </Button>
          </CopyWrapper>
        )}
      </Flex>
    </WrapperComponent>
  );
};
