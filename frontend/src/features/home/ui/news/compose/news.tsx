import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";
import type { NewsEntity } from "features/home/models";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { NewsLargeTile } from "../ui/news-large-tile";
import { NewsSmallTile } from "../ui/news-small-tile";
import { newsTileDecorElements } from "../ui/news-tile-decor-elements";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";

interface NewsBlockProps {
  news: Array<NewsEntity>;
  title: string;
  subtitle: string;
}

export const NewsBlock = ({ news, title, subtitle }: NewsBlockProps) => {
  const [mainNews, firstNews, secondNews, thirdNews] = news;
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  return (
    <>
      {/* Header start */}
      <Flex
        flexDirection="column"
        gap="16px"
        marginBottom={isDesktop ? "44px" : "32px"}
        textAlign={isDesktop ? "left" : "center"}
      >
        <Box
          color={colors.white}
          fontSize="40px"
          fontWeight={900}
          lineHeight="80%"
          textTransform="uppercase"
        >
          {title}
        </Box>

        <Box
          color={colors.white}
          fontSize="16px"
          fontWeight={500}
          lineHeight="80%"
          textTransform="uppercase"
          opacity={0.4}
          position="relative"
          display="inline-block"
          _before={{
            content: "''",
            display: "inline-block",
            width: "64px",
            height: "2px",
            opacity: 0.4,
            margin: "3px 8px 3px 0",
            backgroundColor: colors.white,
          }}
        >
          {subtitle}
        </Box>
      </Flex>
      {/* Header start */}

      {/* List start */}
      <Flex gap="20px">
        {isDesktop && (
          <Box
            flex="0 1 772px"
            height="530px"
            position="relative"
            _before={newsTileDecorElements.mainNewsDecor}
          >
            <NewsLargeTile {...mainNews} height="100%" />
          </Box>
        )}

        <Flex
          gap={isDesktop ? "20px" : "12px"}
          flexWrap="wrap"
          // Gap + Large Tile width
          flex={isDesktop ? "1 1 calc(100% - (20px + 772px))" : "flex 1 1 100%"}
        >
          {isMobile ||
            (isTablet && (
              <Box flex="1 0 calc(50% - 20px)">
                <NewsSmallTile {...mainNews} height="260px" />
              </Box>
            ))}

          <Box flex="1 0 calc(50% - 20px)">
            <NewsSmallTile {...firstNews} height={isDesktop ? "100%" : "260px"} />
          </Box>

          <Box
            flex="1 0 calc(50% - 20px)"
            position="relative"
            _before={
              isDesktop ? newsTileDecorElements.secondNewsDecorTop : undefined
            }
            _after={
              isDesktop ? newsTileDecorElements.secondNewsDecorRight : undefined
            }
          >
            <NewsSmallTile {...secondNews} height={isDesktop ? "100%" : "260px"} />
          </Box>

          <Box flex="1 0 calc(50% - 20px)">
            <NewsSmallTile {...thirdNews} height={isDesktop ? "100%" : "260px"} />
          </Box>

          <Box
            flex={isDesktop ? "1 0 calc(50% - 20px)" : "1 0 100%"}
            position="relative"
            marginTop={isDesktop ? 0 : "8px"}
            _before={
              isDesktop ? newsTileDecorElements.moreNewsDecorRight : undefined
            }
          >
            <Link
              as={ReactRouterLink}
              to="/"
              variant="medium"
              gap="16px"
              size="md"
              width="100%"
              height="100%"
              display="flex"
              flexDirection={isDesktop ? "column" : "row"}
              justifyContent="space-between"
              alignItems="flex-start"
              fontSize="32px"
              fontWeight={700}
              padding={isDesktop ? "22px" : "20px 28px"}
            >
              <Box
                as={ArrowUp}
                width={isDesktop ? "72.32px" : "26px"}
                height={isDesktop ? "72.32px" : "26px"}
                marginLeft="auto"
                order={isDesktop ? 1 : 2}
              />

              <Box order={isDesktop ? 2 : 1}>
                Больше новостей
              </Box>
            </Link>
          </Box>
        </Flex>
      </Flex>
      {/* List start */}
    </>
  );
};
