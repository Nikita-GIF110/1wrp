import { Box, Flex } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import InfoIcon from "assets/images/home/info-icon.svg?react";
import type { CharactersEntity, CharacterOptions } from "features/home/models";
import { colors } from "shared/config/colors";
import { useTranslate } from "shared/lib/useTranslate";

type GradientsType = "blue" | "violet" | "red";
type SizesType = "small" | "medium";

interface CharacterTileProps {
  character: CharactersEntity;
  gradientVariant?: GradientsType;
  size?: SizesType;
  onSelectCharacter: (
    character: CharactersEntity,
    options: CharacterOptions
  ) => void;
}

const gradients: Record<
  GradientsType,
  { bg: string; hover: string; active: string }
> = {
  blue: {
    bg: "linear-gradient(0deg, rgba(0, 163, 255, 0.50) 0%, rgba(0, 163, 255, 0.00) 100%)",
    hover: "linear-gradient(0deg, #00A3FF 0%, rgba(0, 163, 255, 0.00) 100%)",
    active: "",
  },
  violet: {
    bg: "linear-gradient(0deg, rgba(171, 34, 255, 0.50) 0%, rgba(171, 34, 255, 0.00) 100%)",
    hover: "linear-gradient(0deg, #AB22FF 0%, rgba(171, 34, 255, 0.00) 100%)",
    active: "",
  },
  red: {
    bg: "linear-gradient(0deg, rgba(243, 47, 47, 0.50) 0%, rgba(243, 47, 47, 0.00) 100%)",
    hover: "linear-gradient(0deg, #F32F2F 0%, rgba(243, 47, 47, 0.00) 100%)",
    active: "",
  },
};
const sizes: Record<SizesType, { width: string; height: string }> = {
  small: {
    width: "160px",
    height: "300px",
  },
  medium: {
    width: "460px",
    height: "300px",
  },
};

export const CharacterTile = ({
  character,
  gradientVariant = "blue",
  size = "small",
  onSelectCharacter,
}: CharacterTileProps) => {
  const onClick = () => {
    onSelectCharacter(character, {
      gradientBg: gradients[gradientVariant].bg,
    });
  };

  const translate = useTranslate();

  return (
    <Flex
      onClick={onClick}
      position="relative"
      height={sizes[size].height}
      width={sizes[size].width}
      background={gradients[gradientVariant].bg}
      borderRadius="8px"
      overflow="hidden"
      justifyContent="flex-end"
      cursor="pointer"
      _hover={{
        ".hover-target-info": {
          transform: "translateY(0)",
          opacity: 1,
        },
        ".hover-target-img": {
          transform: "scale(1.03)",
        },
      }}
      _active={{
        _after: {
          opacity: 0.3,
        },
      }}
      _after={{
        content: "''",
        display: "block",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transition: "all 0.2s ease-in-out",
        opacity: 0,
        backgroundColor: colors[gradientVariant].primary,
      }}
    >
      <LazyLoad height={sizes[size].height} offset={100}>
        <Box
          as="img"
          {...character.image}
          height={sizes[size].height}
          width={sizes[size].width}
          objectFit="cover"
          transition="all 0.3s ease-in-out"
          className={size === "small" ? "" : "hover-target-img"}
        />
      </LazyLoad>

      <Flex
        className="hover-target-info"
        color={colors.white}
        background={gradients[gradientVariant].hover}
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        opacity={0}
        transform="translateY(100%)"
        transition="all 0.3s ease-in-out"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        fontSize="12px"
        fontWeight={800}
        lineHeight="54px"
        textTransform="uppercase"
        paddingTop="50px"
        // borderBottomRadius="8px"
      >
        <InfoIcon />

        {translate("lending.character_government_agencies_info")}
      </Flex>
    </Flex>
  );
};
