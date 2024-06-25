import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import type { CharactersEntity, CharacterOptions } from "features/home/models";
import { colors } from "shared/config/colors";
import { CharactersHeader } from "../ui/characters-header";
import { CharactersListHeader } from "../ui/characters-list-header";
import { CharacterTile } from "../ui/character-tile";
import {
  smallTilesSliderBreakpoints,
  largeTilesSliderBreakpoints,
} from "../config/base";

interface CharactersBlockProps {
  government: Array<CharactersEntity>;
  groups: Array<CharactersEntity>;
  mafia: Array<CharactersEntity>;
}

interface CharactersBlockProps {
  onSelectCharacter: (
    character: CharactersEntity,
    options: CharacterOptions
  ) => void;
}

export const CharactersBlock = ({
  government = [],
  groups = [],
  mafia = [],
  onSelectCharacter,
}: CharactersBlockProps) => (
  <Box>
    <CharactersHeader
      marginBottom="24px"
      padding={{ base: "0 24px", md: "0 12px", xl: 0 }}
    />

    <Box
      marginBottom={{ base: "8px", xl: "40px" }}
      padding={{ base: "0 20px", md: 0 }}
    >
      <Swiper
        slidesPerView="auto"
        className="characters-slider-height overflow-visible"
        breakpoints={smallTilesSliderBreakpoints}
      >
        <SwiperSlide style={{ width: "auto" }}>
          <CharactersListHeader
            header="Государственные структуры"
            color={colors.blue.primary}
          />
        </SwiperSlide>

        {government.map((character) => (
          <SwiperSlide key={character.image.src} style={{ width: "auto" }}>
            <CharacterTile
              character={character}
              gradientVariant="blue"
              onSelectCharacter={onSelectCharacter}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>

    <Box
      marginBottom={{ base: "8px", xl: "40px" }}
      padding={{ base: "0 20px", md: 0 }}
    >
      <Swiper
        slidesPerView="auto"
        className="characters-slider-height overflow-visible"
        breakpoints={largeTilesSliderBreakpoints}
      >
        <SwiperSlide style={{ width: "auto" }}>
          <CharactersListHeader
            header="Государственные структуры"
            color={colors.violet.primary}
          />
        </SwiperSlide>

        {groups.map((character) => (
          <SwiperSlide key={character.image.src} style={{ width: "auto" }}>
            <CharacterTile
              character={character}
              gradientVariant="violet"
              size="medium"
              onSelectCharacter={onSelectCharacter}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>

    <Box padding={{ base: "0 20px", md: 0 }}>
      <Swiper
        slidesPerView="auto"
        className="characters-slider-height overflow-visible"
        breakpoints={largeTilesSliderBreakpoints}
      >
        <SwiperSlide style={{ width: "auto" }}>
          <CharactersListHeader
            header="Государственные структуры"
            color={colors.red.primary}
          />
        </SwiperSlide>

        {mafia.map((character) => (
          <SwiperSlide key={character.image.src} style={{ width: "auto" }}>
            <CharacterTile
              gradientVariant="red"
              size="medium"
              character={character}
              onSelectCharacter={onSelectCharacter}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  </Box>
);
