import { Suspense, lazy, useEffect } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { NewsSmallTile } from "entities/news";
import { useNewsPage } from "../models";
import { Pagination } from "../ui/pagination";
import { NewsFilter } from "../ui/news-filter";
import { pageBackground } from "../ui/page-background";
import { Breadcrumbs } from "shared/ui/breadcrumbs";
import { Container } from "shared/ui/container";
import { ROUTES } from "shared/config/routes";
import { ContentPlaceholder } from "shared/ui/content-placeholder";
import newsBg from "assets/images/news/news-bg.webp";
import langingBg from "assets/images/bg-body.webp";
import "swiper/css";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";

const NewInStore = lazy(() => import("../../../entities/news"));
const NewsBlock = lazy(() => import("../ui/news-block"));

const News = () => {
  const { isDesktop } = useMediaQuery();

  const {
    tags,
    onSelectFilter,
    getNews,
    onChangePage,
    params,
    newsBlockItems,
    newsList,
  } = useNewsPage();

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <Box
      marginTop={{ base: "72px", md: "114px", xl: "112px" }}
      position="relative"
      backgroundImage={langingBg}
      _before={pageBackground(newsBg)}
    >
      <Breadcrumbs
        marginBottom={{ base: "24px", md: "32px", xl: "44px" }}
        breadcrumbs={[
          { label: "Главная", to: ROUTES.home.path },
          { label: "Новости", to: ROUTES.news.path },
        ]}
      />

      <Container
        maxWidth={{ md: "100%", xl: "576px" }}
        marginBottom={{ base: "26px", md: "32px", xl: "20px" }}
        padding={{ base: "0 32px", md: "0 20px" }}
        overflow="hidden"
      >
        <Heading
          as="h1"
          fontSize={{ md: "40px" }}
          fontWeight={900}
          textTransform="uppercase"
          color={colors.white}
          marginBottom="16px"
        >
          Последние новости
        </Heading>

        <NewsFilter
          activeTag={params.activeTag}
          tagFiltersList={tags}
          onSelectFilter={onSelectFilter}
        />
      </Container>

      <Container
        maxWidth={{ md: "560px", xl: "container.xl" }}
        marginBottom="20px"
        padding={{ base: "0 32px", md: "0 20px" }}
      >
        <Flex
          flexDirection="column"
          gap={{ base: "20px", md: "52px 20px", xl: "20px" }}
        >
          {newsBlockItems.length > 0 && (
            <Suspense fallback={<ContentPlaceholder height="550px" />}>
              <NewsBlock news={newsBlockItems} />
            </Suspense>
          )}

          {isDesktop && (
            <Suspense fallback={<ContentPlaceholder height="300px" />}>
              <NewInStore
                header="Новинки в магазине"
                subHeader="Заходите в магазин что бы увидеть новые предметы"
                linkHref={ROUTES.news.path}
              />
            </Suspense>
          )}
        </Flex>
      </Container>

      <Box
        as={Container}
        maxWidth={{ base: "full", md: "560px", xl: "1200px" }}
        padding={{ base: "0 32px", xl: "0 30px" }}
        display="flex"
        flexWrap="wrap"
        gap={{ base: "8px", md: "20px" }}
      >
        {newsList.map((news) => (
          <Box
            key={news.id}
            flexBasis={{ md: "100%", xl: "calc(50% - 20px)" }}
            flexGrow={1}
            height="320px"
          >
            <NewsSmallTile {...news} height="100%" />
          </Box>
        ))}

        <Flex
          justifyContent="center"
          width="100%"
          marginTop={{ base: "24px", md: "54px" }}
          marginBottom={{ base: "24px", md: "44px" }}
        >
          <Pagination
            onChangePage={onChangePage}
            currentPage={params.page}
            totalPageCount={24}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default News;
