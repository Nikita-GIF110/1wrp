import { Box, Flex } from "@chakra-ui/react";
import InfoIcon from "assets/images/home/info-icon.svg?react";
import { colors } from "shared/config/colors";

type GradientsType = "blue" | "violet" | "red";
type SizesType = "small" | "medium";

interface CharacterTileProps {
  name: string;
  image: {
    src: string;
    alt: string;
    title: string;
  };
  gradientVariant?: GradientsType;
  size?: SizesType;
  onSelectCharacter: (character: {
    name: string;
    image: {
      src: string;
      alt: string;
      title: string;
    };
    gradientBg: string;
    gradientHover: string;
  }) => void;
}

const gradients: Record<GradientsType, { bg: string; hover: string }> = {
  blue: {
    bg: "linear-gradient(0deg, rgba(0, 163, 255, 0.50) 0%, rgba(0, 163, 255, 0.00) 100%)",
    hover: "linear-gradient(0deg, #00A3FF 0%, rgba(0, 163, 255, 0.00) 100%)",
  },
  violet: {
    bg: "linear-gradient(0deg, rgba(171, 34, 255, 0.50) 0%, rgba(171, 34, 255, 0.00) 100%)",
    hover: "linear-gradient(0deg, #AB22FF 0%, rgba(171, 34, 255, 0.00) 100%)",
  },
  red: {
    bg: "linear-gradient(0deg, rgba(243, 47, 47, 0.50) 0%, rgba(243, 47, 47, 0.00) 100%)",
    hover: "linear-gradient(0deg, #F32F2F 0%, rgba(243, 47, 47, 0.00) 100%)",
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
  name,
  image,
  gradientVariant = "blue",
  size = "small",
  onSelectCharacter
}: CharacterTileProps) => {
  const onClick = () => {
    onSelectCharacter({
      name,
      image,
      gradientBg: gradients[gradientVariant].bg,
      gradientHover: gradients[gradientVariant].hover,
    });
  };

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
    >
      <Box
        as="img"
        {...image}
        maxWidth="100%"
        height="auto"
        objectFit="cover"
        transition="all 0.3s ease-in-out"
        className={size === "small" ? "" : "hover-target-img"}
      />

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
        fontSize="12px"
        fontWeight={800}
        lineHeight="54px"
        textTransform="uppercase"
        paddingTop="50px"
        // borderBottomRadius="8px"
      >
        <InfoIcon />

        {name}
      </Flex>
    </Flex>
  );
};
