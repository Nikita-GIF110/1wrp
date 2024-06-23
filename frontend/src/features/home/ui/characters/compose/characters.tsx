import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Flex } from "@chakra-ui/react";
import type { CharactersEntity } from "features/home/models";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { CharactersHeader } from "../ui/characters-header";
import { CharactersListHeader } from "../ui/characters-list-header";
import { CharacterTile } from "../ui/character-tile";

interface CharactersBlockProps {
  government: Array<CharactersEntity>;
  groups: Array<CharactersEntity>;
  mafia: Array<CharactersEntity>;
}

export const CharactersBlock = ({
  government = [],
  groups = [],
  mafia = [],
}: CharactersBlockProps) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Box>
      <CharactersHeader marginBottom="24px" />

      <Flex rowGap={isDesktop ? "40px" : "8px"} flexDirection="column">
        {/* Government start */}
        <Flex
          columnGap={isDesktop ? "20px" : "8px"}
          maxHeight="300px"
          paddingLeft={isDesktop ? "57px" : "28px"}
        >
          <CharactersListHeader
            header="Государственные структуры"
            color={colors.blue.primary}
          />

          <Box
            as={Swiper}
            minWidth="0%"
            flexGrow={1}
            height="300px"
            slidesPerView={isDesktop ? 8 : 3.8}
            spaceBetween={isDesktop ? 20 : 8}
            // className="overflow-visible"
          >
            {government.map((character) => (
              <SwiperSlide key={character.image.src}>
                <CharacterTile {...character} gradientVariant="blue" />
              </SwiperSlide>
            ))}
          </Box>
        </Flex>
        {/* Government end */}

        {/* Groups start */}
        <Flex
          columnGap={isDesktop ? "20px" : "8px"}
          maxHeight="300px"
          paddingLeft={isDesktop ? "57px" : "28px"}
        >
          <CharactersListHeader
            header="Уличные группировки"
            color={colors.violet.primary}
          />

          <Box
            as={Swiper}
            minWidth="0%"
            flexGrow={1}
            height="300px"
            slidesPerView={isDesktop ? 3 : 1.35}
            spaceBetween={isDesktop ? 20 : 8}
          >
            {groups.map((character) => (
              <SwiperSlide key={character.image.src}>
                <CharacterTile
                  {...character}
                  gradientVariant="violet"
                  size="medium"
                />
              </SwiperSlide>
            ))}
          </Box>
        </Flex>
        {/* Groups end */}

        {/* Mafia start */}
        <Flex
          columnGap={isDesktop ? "20px" : "8px"}
          maxHeight="300px"
          paddingLeft={isDesktop ? "57px" : "28px"}
        >
          <CharactersListHeader
            header="Уличные группировки"
            color={colors.violet.primary}
          />

          <Box
            as={Swiper}
            minWidth="0%"
            flexGrow={1}
            height="300px"
            slidesPerView={isDesktop ? 3 : 1.35}
            spaceBetween={isDesktop ? 20 : 8}
          >
            {mafia.map((character) => (
              <SwiperSlide key={character.image.src}>
                <CharacterTile
                  {...character}
                  gradientVariant="red"
                  size="medium"
                />
              </SwiperSlide>
            ))}
          </Box>
        </Flex>
        {/* Mafia end */}
      </Flex>
    </Box>
  );
};
