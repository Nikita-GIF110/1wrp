import { Box, Flex } from "@chakra-ui/react";
import { AboutBlock } from "features/home/ui/about";
import { Intro } from "features/home/ui/intro";
import { NewsBlock } from "features/home/ui/news";
import { NewInStore } from "features/home/ui/new-in-store";
import { StartPlay } from "features/home/ui/start-play";
import { ServersBlock, ServersHeader } from "features/home/ui/servers";
import { CharactersBlock } from "features/home/ui/characters";
import { Faq } from "features/home/ui/faq";
import { Contacts } from "features/home/ui/contacts";
import {
  NEWS_LIST,
  SOCIAL_LINK_LIST,
  SERVERS_LIST,
  CHARACTERS_GOVERNMENT_AGENCIES_LIST,
  CHARACTERS_STREER_GROUPS_AGENCIES_LIST,
  CHARACTERS_MAFIA_AGENCIES_LIST,
  QUESTIONS,
} from "features/home/config/base";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { Container } from "shared/ui/container";
import newInStoreImage from "assets/images/home/new-in-store-image.png";
import "swiper/css";
import "swiper/css/grid";

const Home = () => {
  const { isDesktop } = useMediaQuery();

  return (
    <>
      <Intro />

      <Container marginBottom="52px" marginTop={{ base: "32px", xl: "44px" }}>
        <Flex
          flexDirection="column"
          gap={{ base: "20px", md: "52px 20px", xl: "20px" }}
        >
          <Box order={{ xl: 1, base: 2 }}>
            <NewsBlock
              news={NEWS_LIST}
              title="Последние новости"
              subtitle="Следите за последними новостями мира 1WRP"
            />
          </Box>

          <Box order={{ xl: 2, base: 1 }}>
            <NewInStore
              header="Новинки в магазине"
              subHeader="Заходите в магазин что бы увидеть новые предметы"
              image={newInStoreImage}
            />
          </Box>
        </Flex>
      </Container>

      {isDesktop && (
        <Container marginBottom="52px">
          <AboutBlock links={SOCIAL_LINK_LIST} />
        </Container>
      )}

      <Box marginBottom={{ base: "12px", md: "44px" }} textAlign="center">
        <ServersHeader header="Сервера 1wrp" />
      </Box>

      <Container
        maxWidth={{ md: "100%", xl: "container.xl" }}
        marginBottom={{ base: "52px", xl: "138px" }}
        padding={{ base: "0 20px", md: 0, xl: "0 20px" }}
      >
        <ServersBlock servers={SERVERS_LIST} />
      </Container>

      {isDesktop && (
        <Container marginBottom="151px">
          <StartPlay header="Как начать играть в" />
        </Container>
      )}

      <Container marginBottom="52px" overflow="hidden">
        <CharactersBlock
          government={CHARACTERS_GOVERNMENT_AGENCIES_LIST}
          groups={CHARACTERS_STREER_GROUPS_AGENCIES_LIST}
          mafia={CHARACTERS_MAFIA_AGENCIES_LIST}
        />
      </Container>

      <Container marginBottom={{ base: "45px", xl: "72px" }}>
        <Faq
          questions={QUESTIONS}
          header="появились вопросы или возникли проблемы?"
          description="Если вы не смогли найти ответ на свой вопрос из списка, то можете обратиться в нашу службу поддержки. Мы стараемся всегда улучшать нам проект что бы подарить вам как можно больше эмоций."
          linkText="чат поддержки"
          to="/questions"
        />
      </Container>

      <Contacts />
    </>
  );
};

export default Home;
