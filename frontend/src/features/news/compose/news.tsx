import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Badge, Stack, List } from "@chakra-ui/react";
import { useNews } from "entities/news";
import { NewsPageSceleton } from "features/news/ui/news-page-sceleton";
import { pageBackground } from "features/news/ui/page-background";
import { ErrorText } from "features/news/ui/error-text";
import { ListItem } from "features/news/ui/list-item";
import { SharedLinks } from "features/news/ui/shared-links";
import { Breadcrumbs } from "shared/ui/breadcrumbs";
import { ROUTES } from "shared/config/routes";
import { Container } from "shared/ui/container";
import newsBg from "assets/images/news/news-bg.webp";
import langingBg from "assets/images/bg-body.webp";
import { colors } from "shared/config/colors";

const News = () => {
  const { newsId } = useParams();

  const getNews = useNews((state) => state.getNews);
  const newsItem = useNews((state) => state.news);
  const isLoading = useNews((state) => state.newsIsLoading);
  const hasError = useNews((state) => state.newsHasError);

  console.log(hasError);

  useEffect(() => {
    if (newsId) {
      getNews(newsId);
    }
  }, [getNews, newsId]);

  if (isLoading) {
    return (
      <Box marginTop={{ base: "72px", md: "114px", xl: "112px" }}>
        <Container maxWidth={{ base: "fill", xl: "930px" }}>
          <NewsPageSceleton />
        </Container>
      </Box>
    );
  }

  if (hasError) {
    return <ErrorText />;
  }

  return (
    <Box
      marginTop={{ base: "72px", md: "114px", xl: "112px" }}
      position="relative"
      backgroundImage={langingBg}
      _before={pageBackground(newsBg)}
    >
      <Breadcrumbs
        marginBottom={{ base: "24px", md: "48px", xl: "40px" }}
        breadcrumbs={[
          { label: "Главная", to: ROUTES.home.path },
          { label: "Новости", to: ROUTES.news.path },
          {
            label: `${newsItem?.header}`,
            to: `${ROUTES.news.path}/${newsItem?.id}`,
          },
        ]}
      />

      <Container
        maxWidth={{ base: "fill", xl: "930px" }}
        padding={{ base: "0 24px", md: "0 44px", xl: "0 5px" }}
      >
        <Box
          as="h1"
          fontSize={{ base: "34px", md: "44px" }}
          fontWeight={900}
          letterSpacing="-1px"
          marginBottom="16px"
          color={colors.white}
        >
          {newsItem?.header}
        </Box>

        {newsItem?.isNew && (
          <Stack
            direction="row"
            gap="6px"
            position="relative"
            marginBottom="24px"
          >
            <Badge variant="boxy">News</Badge>
            <Badge variant="boxyDark">04 марта</Badge>
          </Stack>
        )}

        <Box
          as="img"
          src={newsItem?.image.src}
          width="100%"
          height="340px"
          objectFit="cover"
          borderRadius="md"
          pointerEvents="none"
          marginBottom="36px"
        />

        <Box
          as="h2"
          fontSize="44px"
          fontWeight={900}
          letterSpacing="-1px"
          marginBottom="24px"
          color={colors.white}
        >
          Title h2
        </Box>

        <Box
          color="#C5CBE0"
          fontSize={{ base: "18px", md: "20px" }}
          lineHeight={{ base: "139%", md: "150%" }}
          marginBottom="44px"
        >
          <Box as="span" fontWeight={700}>
            Original text Investigation Bureau (FIB)
          </Box>{" "}
          - правительственная правоохранительная организация занимающаяся
          тяжкими и особо тяжкими преступлениями, а так же внутренней и внешней
          разведкой. На территории штата занимается, финансовыми преступлениями,
          преступлениями связанными с государственными служащими.
        </Box>

        <Box
          as="h3"
          fontSize="32px"
          fontWeight={900}
          marginBottom="32px"
          color={colors.white}
        >
          Title h3
        </Box>

        <Box
          as="h4"
          fontSize="24px"
          fontWeight={900}
          marginBottom={{ base: "30px", xl: "32px" }}
          color={colors.white}
        >
          Title h4
        </Box>

        <Box
          as="h4"
          fontSize={{ base: "16px", xl: "15px" }}
          fontWeight={900}
          letterSpacing="1.28px"
          textTransform="uppercase"
          marginBottom="24px"
          color={colors.white}
        >
          Title h4
        </Box>

        <Box
          fontSize={{ base: "18px", md: "20px" }}
          lineHeight={{ base: "139%", md: "150%" }}
          color="#C5CBE0"
          marginBottom="42px"
        >
          С другой стороны сложившаяся структура организации требуют определения
          и{" "}
          <Box as="span" fontWeight={700}>
            уточнения новых предложений
          </Box>
          . Разнообразный и богатый опыт сложившаяся структура организации
          представляет собой интересный эксперимент проверки системы обучения
          кадров, соответствует насущным потребностям.{" "}
          <Box as="span" fontWeight={700}>
            Повседневная практика
          </Box>{" "}
          показывает, что дальнейшее развитие различных форм деятельности
          требуют определения и уточнения системы обучения кадров, соответствует
          насущным потребностям. Задача организации, в{" "}
          <Box as="span" fontWeight={700}>
            особенности же новая
          </Box>{" "}
          модель организационной деятельности требуют определения и уточнения
          дальнейших направлений развития. Значимость этих проблем настолько
          очевидна, что постоянное информационно-пропагандистское обеспечение
          нашей деятельности требуют от нас анализа направлений прогрессивного
          развития.
        </Box>

        <Box
          as="h4"
          fontSize={{ base: "16px", xl: "15px" }}
          fontWeight={900}
          color={colors.white}
          letterSpacing="1.28px"
          textTransform="uppercase"
          marginBottom="24px"
        >
          Title h4
        </Box>

        <Box
          color="#575C73"
          fontSize="16px"
          lineHeight={{ base: "138%", md: "150%" }}
          marginBottom="44px"
        >
          <Box as="span" fontWeight={700}>
            Small text (FIB)
          </Box>{" "}
          - правительственная правоохранительная организация занимающаяся
          тяжкими и особо тяжкими преступлениями, а так же внутренней и внешней
          разведкой. На территории штата занимается, финансовыми преступлениями,
          преступлениями связанными с государственными служащими.
        </Box>

        <Box
          as="h4"
          fontSize="24px"
          fontWeight={900}
          marginBottom="24px"
          color={colors.white}
        >
          Title h4
        </Box>

        <List
          marginBottom={{ base: "24px", md: "36px" }}
          display="flex"
          flexDirection="column"
          rowGap="10px"
        >
          <ListItem>Пункт меню для настоящих</ListItem>
          <ListItem>Пункт меню</ListItem>
          <ListItem>Что-то здесь еще</ListItem>
        </List>

        <SharedLinks marginBottom={{ base: "24px", md: "44px" }} />
      </Container>
    </Box>
  );
};

export default News;
