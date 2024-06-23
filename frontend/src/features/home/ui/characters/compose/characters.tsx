import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import type { CharactersEntity } from "features/home/models";
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

export const CharactersBlock = ({
  government = [],
  groups = [],
  mafia = [],
}: CharactersBlockProps) => (
  <Box>
    <CharactersHeader
      marginBottom="24px"
      padding={{ base: "0 24px", md: "0 12px", xl: 0 }}
    />

    <Box paddingLeft="57px" marginBottom={{ base: "8px", xl: "40px" }}>
      <Swiper
        slidesPerView="auto"
        className="characters-slider-height overflow-visible"
        spaceBetween={20}
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
            <CharacterTile {...character} gradientVariant="blue" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>

    <Box paddingLeft="57px" marginBottom={{ base: "8px", xl: "40px" }}>
      <Swiper
        slidesPerView="auto"
        className="characters-slider-height overflow-visible"
        spaceBetween={20}
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
              {...character}
              gradientVariant="violet"
              size="medium"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>

    <Box paddingLeft="57px">
      <Swiper
        slidesPerView="auto"
        className="characters-slider-height overflow-visible"
        spaceBetween={20}
        breakpoints={largeTilesSliderBreakpoints}
      >
        <SwiperSlide style={{ width: "auto" }}>
          <CharactersListHeader
            header="Государственные структуры"
            color={colors.violet.primary}
          />
        </SwiperSlide>

        {mafia.map((character) => (
          <SwiperSlide key={character.image.src} style={{ width: "auto" }}>
            <CharacterTile
              {...character}
              gradientVariant="red"
              size="medium"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  </Box>
);
