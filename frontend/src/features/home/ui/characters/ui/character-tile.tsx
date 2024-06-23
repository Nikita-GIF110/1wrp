import { Link as ReactRouterDom } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import InfoIcon from "assets/images/home/info-icon.svg?react";
import { colors } from "shared/config/colors";

type GradientsType = "blue" | "violet" | "red";
type SizesType = "small" | "medium";

interface CharacterTileProps {
  name: string;
  link: string;
  image: {
    src: string;
    alt: string;
    title: string;
  };

  gradientVariant?: GradientsType;
  size?: SizesType;
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
    hover:
      "linear-gradient(0deg, rgba(243, 47, 47, 0.50) 0%, rgba(243, 47, 47, 0.00) 100%)",
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
  link,
  image,
  gradientVariant = "blue",
  size = "small",
}: CharacterTileProps) => (
  <Flex
    as={ReactRouterDom}
    to={link}
    height={sizes[size].height}
    width={sizes[size].width}
    background={gradients[gradientVariant].bg}
    borderRadius="8px"
    overflow="hidden"
    justifyContent="flex-end"
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
      transform="translateY(100%)"
      transition="all 0.3s ease-in-out"
      flexDirection="column"
      alignItems="center"
      fontSize="12px"
      fontWeight={800}
      lineHeight="54px"
      textTransform="uppercase"
      paddingTop="50px"
      opacity={0}
      borderBottomRadius="8px"
    >
      <InfoIcon />

      {name}
    </Flex>
  </Flex>
);
