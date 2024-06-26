import { Box, Flex, Button } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";

import { AboutBlock } from "features/home/ui/about";
import { Intro } from "features/home/ui/intro";
import { NewsBlock } from "features/home/ui/news";
import { NewInStore } from "features/home/ui/new-in-store";
import { StartPlay } from "features/home/ui/start-play";
import { ServersBlock, ServersHeader } from "features/home/ui/servers";
import { CharactersBlock } from "features/home/ui/characters";
import { CharacterInfo } from "features/home/ui/character-info";
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
import { useHome } from "features/home/models";

import { useMediaQuery } from "shared/lib/useMediaQuery";
import { Container } from "shared/ui/container";
import { Drawer } from "shared/ui/drawer";
import { colors } from "shared/config/colors";
import { CopyButton } from "shared/ui/copy-button";

import newInStoreImage from "assets/images/home/new-in-store-image.png";
import langingBg from "assets/images/home/bg-body.webp";
import CloseIcon from "assets/icons/close-icon.svg?react";
import LinkChain from "assets/images/home/link-chain-icon.svg?react";

import "swiper/css";
import "swiper/css/grid";
import "yet-another-react-lightbox/styles.css";

const Home = () => {
  const { isDesktop } = useMediaQuery();

  // Character actions
  const viewCharacters = useHome((state) => state.viewCharacters);
  const selectedCharacter = useHome((state) => state.selectedCharacter);
  const selectedCharacterOptions = useHome((state) => state.options);
  const characterDrawerIsOpen = useHome((state) => state.characterDrawerIsOpen);
  const closeCharactersDrawer = useHome((state) => state.closeCharactersDrawer);

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

        <Box
          id="servers"
          marginBottom={{ base: "12px", md: "44px" }}
          textAlign="center"
        >
          <ServersHeader header="Сервера 1wrp" />
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

        {isDesktop && (
          <Container marginBottom="151px" id="start-play">
            <StartPlay
              header="Как начать играть в"
              steamHref="https://store.steampowered.com/"
              epicGamesHref="https://store.epicgames.com"
              downloadLauncherHref="/"
              chooseServerHref="#servers"
            />
          </Container>
        )}

        <Container marginBottom="52px" overflow="hidden">
          <CharactersBlock
            government={CHARACTERS_GOVERNMENT_AGENCIES_LIST}
            groups={CHARACTERS_STREER_GROUPS_AGENCIES_LIST}
            mafia={CHARACTERS_MAFIA_AGENCIES_LIST}
            onSelectCharacter={viewCharacters}
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
      </Box>

      <Drawer
        isOpen={characterDrawerIsOpen}
        onClose={closeCharactersDrawer}
        backgroundColor={colors.white}
        minWidth={{ base: "100%", md: "650px", xl: "950px" }}
        padding={{ base: "24px 32px", md: "64px 128px 64px 80px" }}
        borderLeftRadius={{ base: "44px", md: "64px" }}
        autoFocus={false}
      >
        <LazyLoad>
          {selectedCharacter && selectedCharacterOptions && (
            <CharacterInfo
              characterpreviewImage={selectedCharacter.image}
              images={selectedCharacter.images}
              gradientBg={selectedCharacterOptions.gradientBg}
            />
          )}
        </LazyLoad>

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
            tooltipLabel="Скопировать ссылку на профессию"
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
