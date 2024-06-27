import { Link } from "react-router-dom";
import type { BoxProps } from "@chakra-ui/react";
import { Badge, Box, Stack } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
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
    minHeight="230px"
    sx={{
      ".hover-traget-text": {
        transition: "transform 0.2s ease-in-out",
      },
    }}
    _after={{
      content: "''",
      display: { base: "block", md: "none" },
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: colors.black,
      opacity: 0.45,
      zIndex: 1,
    }}
    _hover={{
      ".hover-target-image": {
        transform: "scale(1.1)",
      },

      ".hover-traget-text": {
        transform: "translateY(-20px)",
      },
    }}
    {...boxProps}
  >
    {isNew && (
      <Stack
        direction="row"
        gap="6px"
        position="relative"
        marginBottom="25px"
        zIndex={2}
      >
        <Badge variant="boxy">News</Badge>
        <Badge variant="boxyDark">04 марта</Badge>
      </Stack>
    )}

    <LazyLoad once>
      <Box
        as="img"
        src={image.src}
        pointerEvents="none"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundSize="cover"
        transition="transform 0.3s ease-in-out"
        className="hover-target-image"
      />
    </LazyLoad>

    <Box
      color={colors.white}
      position="relative"
      className="hover-traget-text"
      zIndex={2}
    >
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
        marginTop={{ base: " 12px", md: "10px" }}
        marginRight={{ base: "5px", md: "10px" }}
        position="relative"
      >
        {subHeader}
      </Box>
    </Box>
  </Box>
);
