import { Suspense, lazy, useEffect } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

import { Intro } from "features/home/ui/intro";
import { ServersHeader } from "features/home/ui/servers";
import {
  SOCIAL_LINK_LIST,
  SERVERS_LIST,
  CHARACTERS_GOVERNMENT_AGENCIES_LIST,
  CHARACTERS_STREER_GROUPS_AGENCIES_LIST,
  CHARACTERS_MAFIA_AGENCIES_LIST,
  QUESTIONS,
} from "features/home/config/base";
import { useHome } from "features/home/models";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { Container } from "shared/ui/container";
import { Drawer } from "shared/ui/drawer";
import { colors } from "shared/config/colors";
import { CopyButton } from "shared/ui/copy-button";
import { ContentPlaceholder } from "shared/ui/content-placeholder";
import { ROUTES } from "shared/config/routes";
import { useTranslate } from "shared/lib/useTranslate";

import { useNews } from "entities/news";
const NewInStore = lazy(() => import("../../../entities/news"));

import langingBg from "assets/images/bg-body.webp";
import CloseIcon from "assets/icons/close-icon.svg?react";
import LinkChain from "assets/images/home/link-chain-icon.svg?react";

import "swiper/css";
import "swiper/css/grid";
import "yet-another-react-lightbox/styles.css";

const AboutBlock = lazy(() => import("../ui/about"));
const CharactersBlock = lazy(() => import("../ui/characters"));
const Faq = lazy(() => import("../ui/faq"));
const NewsBlock = lazy(() => import("../ui/news-block"));
const ServersBlock = lazy(() => import("../ui/servers"));
const StartPlay = lazy(() => import("../ui/start-play"));
const Contacts = lazy(() => import("../ui/contacts"));
const CharacterInfo = lazy(() => import("../ui/character-info"));

const Home = () => {
  const { isDesktop } = useMediaQuery();
  const translate = useTranslate();

  // Character actions
  const viewCharacters = useHome((state) => state.viewCharacters);
  const selectedCharacter = useHome((state) => state.selectedCharacter);
  const selectedCharacterOptions = useHome((state) => state.options);
  const characterDrawerIsOpen = useHome((state) => state.characterDrawerIsOpen);
  const closeCharactersDrawer = useHome((state) => state.closeCharactersDrawer);

  // News
  const getNews = useNews((state) => state.getNewsList);
  const news = useNews((state) => state.items);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <>
      <Box backgroundImage={langingBg}>
        <Intro linkHref="#start-play" />

        <Container marginBottom="52px" marginTop={{ base: "32px", xl: "44px" }}>
          <Flex
            flexDirection="column"
            gap={{ base: "20px", md: "52px 20px", xl: "20px" }}
          >
            <Box order={{ xl: 1, base: 2 }}>
              {news.length > 0 && (
                <Suspense fallback={<ContentPlaceholder height="550px" />}>
                  <NewsBlock
                    news={news}
                    title={translate("lending.news_title")}
                    subtitle={translate("lending.news_subtitle")}
                    moreNewsHref={ROUTES.news.path}
                  />
                </Suspense>
              )}
            </Box>

            <Box order={{ xl: 2, base: 1 }}>
              <Suspense fallback={<ContentPlaceholder height="300px" />}>
                <NewInStore
                  header={translate("lending.new_in_store_title")}
                  subHeader={translate("lending.new_in_store_subtitle")}
                  linkText={translate("lending.new_in_store_button_text")}
                  linkHref={ROUTES.news.path}
                />
              </Suspense>
            </Box>
          </Flex>
        </Container>

        {isDesktop && (
          <Container marginBottom="52px">
            <Suspense fallback={<ContentPlaceholder height="300px" />}>
              <AboutBlock
                header={translate("lending.about_title")}
                description={translate("lending.about_description")}
                links={SOCIAL_LINK_LIST}
              />
            </Suspense>
          </Container>
        )}

        <Suspense fallback={<ContentPlaceholder height="300px" />}>
          <Box
            id="servers"
            marginBottom={{ base: "12px", md: "44px" }}
            textAlign="center"
          >
            <ServersHeader header={translate("lending.servers_title")} />
          </Box>

          <Box overflowX="hidden">
            <Container
              maxWidth={{ md: "100%", xl: "container.xl" }}
              marginBottom={{ base: "52px", xl: "138px" }}
              padding={{ base: "0 20px", md: 0, xl: "0 20px" }}
            >
              <ServersBlock servers={SERVERS_LIST} />
            </Container>
          </Box>
        </Suspense>

        {isDesktop && (
          <Container marginBottom="151px" id="start-play">
            <Suspense fallback={<ContentPlaceholder height="300px" />}>
              <StartPlay
                header={translate("lending.start_play_title")}
                steamHref="https://store.steampowered.com/"
                epicGamesHref="https://store.epicgames.com"
                downloadLauncherHref="/"
                chooseServerHref="#servers"
              />
            </Suspense>
          </Container>
        )}

        <Container marginBottom="52px" overflow="hidden">
          <Suspense fallback={<ContentPlaceholder height="300px" />}>
            <CharactersBlock
              government={CHARACTERS_GOVERNMENT_AGENCIES_LIST}
              groups={CHARACTERS_STREER_GROUPS_AGENCIES_LIST}
              mafia={CHARACTERS_MAFIA_AGENCIES_LIST}
              onSelectCharacter={viewCharacters}
            />
          </Suspense>
        </Container>

        <Container marginBottom={{ base: "45px", xl: "72px" }}>
          <Suspense fallback={<ContentPlaceholder height="300px" />}>
            <Faq
              questions={QUESTIONS}
              header={translate("lending.faq_title")}
              description={translate("lending.faq_description")}
              linkText={translate("lending.faq_button_texy")}
              to="/questions"
            />
          </Suspense>
        </Container>

        <Suspense fallback={<ContentPlaceholder height="300px" />}>
          <Contacts header={translate("lending.contacts_title")} />
        </Suspense>
      </Box>

      <Drawer
        isOpen={characterDrawerIsOpen}
        onClose={closeCharactersDrawer}
        backgroundColor={colors.white}
        minWidth={{ base: "100%", md: "650px", xl: "950px" }}
        padding={{ base: "24px 32px", md: "64px 128px 64px 80px" }}
        borderLeftRadius={{ base: "44px", md: "64px" }}
        autoFocus={!isDesktop}
      >
        <Suspense
          fallback={
            <>
              <ContentPlaceholder height="400px" marginBottom="20px" />
              <ContentPlaceholder height="200px" marginBottom="20px" />
              <ContentPlaceholder height="80px" width="160px" />
            </>
          }
        >
          {selectedCharacter && selectedCharacterOptions && (
            <CharacterInfo
              characterpreviewImage={selectedCharacter.image}
              images={selectedCharacter.images}
              gradientBg={selectedCharacterOptions.gradientBg}
            />
          )}
        </Suspense>

        <Flex
          flexDirection="column"
          rowGap="12px"
          position="absolute"
          top={{ base: "15px", md: "64px" }}
          right={{ base: "15px", md: "40px" }}
        >
          <Button
            onClick={closeCharactersDrawer}
            variant="circleLight"
            backgroundColor="#BEC7CD"
          >
            <Box as={CloseIcon} width="24px" height="24px" />
          </Button>

          <CopyButton
            tooltipLabel={translate("copy_button.home_character_info_tooltip_text")}
            // tooltipLabel="Скопировать ссылку на профессию"
            copyText="some copy text"
          >
            <Box as={LinkChain} width="24px" height="24px" />
          </CopyButton>
        </Flex>
      </Drawer>
    </>
  );
};

export default Home;
