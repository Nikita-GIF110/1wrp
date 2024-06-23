import { Link } from "react-router-dom";
import type { BoxProps } from "@chakra-ui/react";
import { Badge, Box, Stack } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface NewsSmallTileProps extends BoxProps {
  isNew: boolean;
  header: string;
  subHeader: string;
  to: string;
  image: {
    src: string;
    alt: string;
    title: string;
  };
}

export const NewsSmallTile = ({
  isNew,
  header,
  subHeader,
  to,
  image,
  ...boxProps
}: NewsSmallTileProps) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    as={Link}
    to={to}
    borderRadius="md"
    overflow="hidden"
    padding="22px"
    title={image.title}
    backgroundColor={colors.blue.primary}
    position="relative"
    sx={{
      ".hover-traget-text": {
        transition: "transform 0.2s ease-in-out",
      },
    }}
    _before={{
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom right",
      backgroundSize: "cover",
      backgroundImage: image.src,
      pointerEvents: "none",
      transition: "transform 0.2s ease-in-out",
    }}
    _hover={{
      _before: {
        transform: "scale(1.1)",
      },

      ".hover-traget-text": {
        transform: "translateY(-20px)",
      },
    }}
    {...boxProps}
  >
    {isNew && (
      <Stack direction="row" gap="6px" position="relative">
        <Badge variant="boxy">News</Badge>
        <Badge variant="boxyDark">04 марта</Badge>
      </Stack>
    )}

    <Box color={colors.white} position="relative" className="hover-traget-text">
      <Box
        fontSize="32px"
        fontWeight={900}
        lineHeight="80%"
        letterSpacing="-1px"
        color={colors.white}
      >
        {header}
      </Box>

      <Box
        fontSize="16px"
        fontWeight={500}
        lineHeight="130%"
        letterSpacing="-0.5px"
        marginTop="10px"
        marginRight="10px"
        position="relative"
      >
        {subHeader}
      </Box>
    </Box>
  </Box>
);
