import { Box, Flex } from "@chakra-ui/react";
import type { NewsEntity } from "entities/news";
import {
  NewsLargeTile,
  NewsSmallTile,
  newsTileDecorElements,
} from "entities/news";
import { useMediaQuery } from "shared/lib/useMediaQuery";

interface NewsBlockProps {
  news: Array<NewsEntity>;
}

const NewsBlock = ({ news = [] }: NewsBlockProps) => {
  const [mainNews, firstNews, secondNews, thirdNews, fourthNews] = news;
  const { isTablet, isDesktop, isMobile } = useMediaQuery();

  return (
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
        gap={{ base: "8px", md: "20px" }}
        flexWrap="wrap"
        // Gap + Large Tile width
        flex={{
          base: "flex 1 1 100%",
          xl: "1 1 calc(100% - (20px + 772px))",
        }}
      >
        {isMobile ||
          (isTablet && (
            <Box flex={{ base: "1 1 100%", xl: "1 0 calc(50% - 20px)" }}>
              <NewsSmallTile
                {...mainNews}
                height={{ base: "340px", md: "320px", xl: "100%" }}
              />
            </Box>
          ))}

        <Box flex={{ base: "1 1 100%", xl: "1 0 calc(50% - 20px)" }}>
          <NewsSmallTile
            {...firstNews}
            height={{ base: "340px", md: "320px", xl: "100%" }}
          />
        </Box>

        <Box
          flex={{ base: "1 1 100%", xl: "1 0 calc(50% - 20px)" }}
          position="relative"
          _after={{ xl: newsTileDecorElements.secondNewsDecorRight }}
        >
          <NewsSmallTile
            {...secondNews}
            height={{ base: "340px", md: "320px", xl: "100%" }}
          />
        </Box>

        <Box flex={{ base: "1 1 100%", xl: "1 0 calc(50% - 20px)" }}>
          <NewsSmallTile
            {...thirdNews}
            height={{ base: "340px", md: "320px", xl: "100%" }}
          />
        </Box>

        <Box
          flex={{ base: "1 1 100%", xl: "1 0 calc(50% - 20px)" }}
          position="relative"
          marginTop={{ md: "8px", xl: 0 }}
          _before={{ xl: newsTileDecorElements.moreNewsDecorRight }}
        >
          <NewsSmallTile
            {...fourthNews}
            height={{ base: "340px", md: "320px", xl: "100%" }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default NewsBlock;
