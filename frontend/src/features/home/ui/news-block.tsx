import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";
import ArrowUp from "assets/icons/arrow-up.svg?react";

import type { NewsEntity } from "entities/news";
import {
  NewsLargeTile,
  NewsSmallTile,
  newsTileDecorElements,
} from "entities/news";

import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { useTranslate } from "shared/lib/useTranslate";

interface NewsBlockProps {
  news: Array<NewsEntity>;
  title: string;
  subtitle: string;
  moreNewsHref: string;
}

const NewsBlock = ({ news, title, subtitle, moreNewsHref }: NewsBlockProps) => {
  const [mainNews, firstNews, secondNews, thirdNews] = news;
  const { isTablet, isDesktop, isMobile } = useMediaQuery();
  const translate = useTranslate();

  return (
    <>
      {/* Header start */}
      <Flex
        flexDirection="column"
        gap="16px"
        marginBottom={{ base: "20px", md: "32px", xl: "44px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Box
          color={colors.white}
          fontSize={{ base: "18px", md: "40px" }}
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
            display: { base: "none", md: "inline-block" },
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
        {/* First news */}
        {isDesktop && (
          <Box
            flex="1 1 772px"
            height="530px"
            position="relative"
            _before={newsTileDecorElements.mainNewsDecor}
          >
            <NewsLargeTile {...mainNews} height="100%" />
          </Box>
        )}

        <Flex
          gap={{ base: "8px", md: "12px", xl: "20px" }}
          flexWrap="wrap"
          // Gap + Large Tile width
          flex={{
            base: "flex 1 1 100%",
            xl: "1 1 calc(100% - (20px + 772px))",
          }}
        >
          {isMobile ||
            (isTablet && (
              <Box flex="1 0 calc(50% - 20px)">
                <NewsSmallTile
                  {...mainNews}
                  height={{ base: "auto", md: "260px", xl: "100%" }}
                />
              </Box>
            ))}

          <Box flex="1 0 calc(50% - 20px)">
            <NewsSmallTile
              {...firstNews}
              height={{ base: "auto", md: "260px", xl: "100%" }}
            />
          </Box>

          <Box
            flex="1 0 calc(50% - 20px)"
            position="relative"
            _before={{ xl: newsTileDecorElements.secondNewsDecorTop }}
            _after={{ xl: newsTileDecorElements.secondNewsDecorRight }}
          >
            <NewsSmallTile
              {...secondNews}
              height={{ base: "auto", md: "260px", xl: "100%" }}
            />
          </Box>

          <Box flex="1 0 calc(50% - 20px)">
            <NewsSmallTile
              {...thirdNews}
              height={{ base: "auto", md: "260px", xl: "100%" }}
            />
          </Box>

          <Box
            flex={{ base: "1 0 100%", xl: "1 0 calc(50% - 20px)" }}
            position="relative"
            marginTop={{ md: "8px", xl: 0 }}
            _before={{ xl: newsTileDecorElements.moreNewsDecorRight }}
          >
            <Link
              as={ReactRouterLink}
              to={moreNewsHref}
              variant="medium"
              gap="16px"
              size="md"
              width="100%"
              height="100%"
              display="flex"
              flexDirection={{ base: "row", xl: "column" }}
              justifyContent="space-between"
              alignItems="flex-start"
              fontSize="32px"
              fontWeight={700}
              padding={{ base: "20px 28px", xl: "22px" }}
            >
              <Box
                as={ArrowUp}
                width={{ base: "26px", xl: "72.32px" }}
                height={{ base: "26px", xl: "72.32px" }}
                marginLeft="auto"
                order={{ base: 2, xl: 1 }}
              />

              <Box order={{ base: 1, xl: 2 }}>
                {translate("lending.news_more_news_button_text")}
                {/* {isDesktop || isTablet ? "Больше новостей" : "все новости"} */}
              </Box>
            </Link>
          </Box>
        </Flex>
      </Flex>
      {/* List start */}
    </>
  );
};

export default NewsBlock;
